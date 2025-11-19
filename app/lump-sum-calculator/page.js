"use client";

import { useMemo, useState } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";

/* ---------------- Helper Functions ---------------- */
const clamp = (n, min = 0, max = 1e15) => Math.min(max, Math.max(min, n ?? 0));
const inr = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

/* ---------------- Deterministic Lump-Sum Model ---------------- */
function buildSchedule({ principal, ratePct, years, compPerYear }) {
  const n = compPerYear; // compounding periods per year
  const r = ratePct / 100; // nominal annual rate
  const rows = [];
  for (let y = 1; y <= Math.max(1, Math.floor(years)); y++) {
    const end = principal * Math.pow(1 + r / n, n * y);
    const prevEnd = principal * Math.pow(1 + r / n, n * (y - 1));
    const interest = end - prevEnd;
    const returnPct = prevEnd > 0 ? ((end - prevEnd) / prevEnd) * 100 : 0;
    rows.push({
      year: y,
      invested: y === 1 ? principal : 0,
      returnPct,
      interest,
      balance: end,
    });
  }
  return rows;
}

function effectiveAnnualRate(ratePct, compPerYear) {
  const r = ratePct / 100;
  const n = compPerYear;
  return Math.pow(1 + r / n, n) - 1;
}

/* ---------------- Inline SVG Chart ---------------- */
function MiniChart({ values, width = 960, height = 240, padding = 24 }) {
  const min = 0;
  const max = Math.max(1, ...values);
  const P = padding,
    W = width,
    H = height,
    innerW = W - P * 2,
    innerH = H - P * 2;

  const d = values
    .map((v, i) => {
      const x = P + (innerW * i) / (values.length - 1 || 1);
      const y = P + innerH - ((v - min) / (max - min)) * innerH;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ---------------- Main Component ---------------- */
export default function LumpSumCalculatorPage() {
  // Core inputs
  const [initial, setInitial] = useState(100000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12); // % p.a.
  const [compound, setCompound] = useState("monthly"); // annually | semiannually | quarterly | monthly | daily

  // Expert settings
  const [inflation, setInflation] = useState(5); // % p.a.
  const [tax, setTax] = useState(10); // % on gains at the end (simple model)

  // ✅ Pure JS (no "as const")
  const compMap = { annually: 1, semiannually: 2, quarterly: 4, monthly: 12, daily: 365 };
  const n = compMap[compound];

  const schedule = useMemo(
    () => buildSchedule({ principal: initial, ratePct: rate, years, compPerYear: n }),
    [initial, rate, years, n]
  );

  const results = useMemo(() => {
    const fv = schedule.length ? schedule[schedule.length - 1].balance : initial;
    const gains = Math.max(0, fv - initial);
    const postTax = fv - gains * (tax / 100);
    const realFV = fv / Math.pow(1 + inflation / 100, years);
    const ear = effectiveAnnualRate(rate, n);
    return { fv, gains, postTax, realFV, ear };
  }, [schedule, initial, tax, inflation, years, rate, n]);

  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Lump Sum Calculator"
        title="Plan a one-time investment with compounding, tax and inflation adjustments."
      />

      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          {/* ---------------- Core Inputs ---------------- */}
          <div className="row">
            <div className="col-xl-12 mil-mb-20">
              <h5 className="mil-up">Core Inputs</h5>
            </div>

            <div className="col-md-3 mil-mb-30">
              <label className="mil-text-s mil-soft mil-mb-10">Initial Amount (₹)</label>
              <input
                className="mil-input"
                type="number"
                value={initial}
                onChange={(e) => setInitial(clamp(Number(e.target.value)))}
              />
            </div>

            <div className="col-md-3 mil-mb-30">
              <label className="mil-text-s mil-soft mil-mb-10">Annual Return (% p.a.)</label>
              <input
                className="mil-input"
                type="number"
                value={rate}
                step={0.1}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>

            <div className="col-md-3 mil-mb-30">
              <label className="mil-text-s mil-soft mil-mb-10">Time Period (Years)</label>
              <input
                className="mil-input"
                type="number"
                value={years}
                onChange={(e) => setYears(clamp(Number(e.target.value), 1, 60))}
              />
            </div>

            <div className="col-md-3 mil-mb-30">
              <label className="mil-text-s mil-soft mil-mb-10">Compounding</label>
              <select
                className="mil-input"
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
              >
                <option value="annually">Annually</option>
                <option value="semiannually">Semi-Annually</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
              </select>
            </div>
          </div>

          {/* ---------------- Expert Settings ---------------- */}
          <div className="row mil-mt-10">
            <div className="col-xl-12 mil-mb-10">
              <h5>Expert Settings</h5>
            </div>

            <div className="col-md-3 mil-mb-20">
              <label className="mil-text-s mil-soft mil-mb-10">Inflation (% p.a.)</label>
              <input
                className="mil-input"
                type="number"
                value={inflation}
                step={0.1}
                onChange={(e) => setInflation(Number(e.target.value))}
              />
            </div>

            <div className="col-md-3 mil-mb-20">
              <label className="mil-text-s mil-soft mil-mb-10">Tax on Gains (%)</label>
              <input
                className="mil-input"
                type="number"
                value={tax}
                step={0.5}
                onChange={(e) => setTax(Number(e.target.value))}
              />
            </div>

            <div className="col-md-3 mil-mb-20">
              <label className="mil-text-s mil-soft mil-mb-10">Effective Annual Rate</label>
              <input
                className="mil-input"
                type="text"
                value={`${(results.ear * 100).toFixed(2)}%`}
                readOnly
              />
            </div>

            <div className="col-md-3 mil-mb-20">
              <label className="mil-text-s mil-soft mil-mb-10">Inflation-Adjusted Value</label>
              <input className="mil-input" type="text" value={inr(results.realFV)} readOnly />
            </div>
          </div>

          {/* ---------------- Summary Cards ---------------- */}
          <div className="row mil-mt-10">
            <div className="col-xl-12 mil-mb-10">
              <h5>Results</h5>
            </div>

            <div className="col-md-3 mil-mb-30">
              <div className="mil-icon-box">
                <h6>Future Value</h6>
                <p className="mil-text-l">{inr(results.fv)}</p>
              </div>
            </div>
            <div className="col-md-3 mil-mb-30">
              <div className="mil-icon-box">
                <h6>Total Gains</h6>
                <p className="mil-text-l">{inr(results.gains)}</p>
              </div>
            </div>
            <div className="col-md-3 mil-mb-30">
              <div className="mil-icon-box">
                <h6>Post-Tax Amount</h6>
                <p className="mil-text-l">{inr(results.postTax)}</p>
              </div>
            </div>
            <div className="col-md-3 mil-mb-30">
              <div className="mil-icon-box">
                <h6>Effective Annual Rate</h6>
                <p className="mil-text-l">{(results.ear * 100).toFixed(2)}%</p>
              </div>
            </div>

            <div className="col-xl-12 mil-mb-10">
              <p className="mil-text-m mil-soft">
                Inflation-Adjusted Value: <strong>{inr(results.realFV)}</strong>
              </p>
            </div>
          </div>

          {/* ---------------- Chart ---------------- */}
          <div className="row mil-mt-10">
            <div className="col-xl-12 mil-mb-20">
              <div className="mil-image-frame mil-visible-overflow">
                <MiniChart values={schedule.map((r) => r.balance)} />
              </div>
              <p className="mil-text-xs mil-soft">Chart shows year-end balance with chosen compounding.</p>
            </div>
          </div>

          {/* ---------------- Yearly Breakdown ---------------- */}
          <div className="row mil-mt-20">
            <div className="col-xl-12">
              <h5 className="mil-mb-20">Yearly Breakdown</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Invested</th>
                      <th>Return</th>
                      <th>Interest</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i}>
                        <td>{row.year}</td>
                        <td>{i === 0 ? inr(initial) : inr(0)}</td>
                        <td>{row.returnPct.toFixed(2)}%</td>
                        <td>{inr(row.interest)}</td>
                        <td>{inr(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mil-text-xs mil-soft mil-mt-10">
                Disclaimer: This calculator is for illustration only and not investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Your exact theme styling */
        .mil-blog-list {
          background: transparent;
        }

        .mil-p-0-160 {
          padding: 0 160px;
        }

        @media (max-width: 1200px) {
          .mil-p-0-160 {
            padding: 0 60px;
          }
        }

        @media (max-width: 992px) {
          .mil-p-0-160 {
            padding: 0 30px;
          }
        }

        .mil-mb-10 { margin-bottom: 10px; }
        .mil-mb-20 { margin-bottom: 20px; }
        .mil-mb-30 { margin-bottom: 30px; }
        .mil-mt-10 { margin-top: 10px; }
        .mil-mt-20 { margin-top: 20px; }

        .mil-up {
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mil-text-s {
          font-size: 14px;
          line-height: 1.6;
        }

        .mil-text-xs {
          font-size: 12px;
          line-height: 1.5;
        }

        .mil-text-m {
          font-size: 16px;
          line-height: 1.6;
        }

        .mil-text-l {
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
        }

        .mil-soft {
          color: #666;
          opacity: 0.8;
        }

        h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #111;
        }

        h6 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #111;
        }

        /* Input Styles */
        .mil-input {
          width: 100%;
          padding: 12px 20px;
          border: 1px solid #e5e5e5;
          background: #fff;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .mil-input:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
        }

        /* Icon Box */
        .mil-icon-box {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          height: 100%;
          transition: all 0.3s ease;
        }

        .mil-icon-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        /* Image Frame */
        .mil-image-frame {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 30px;
          border: 1px solid #e9ecef;
        }

        .mil-visible-overflow {
          overflow: visible;
        }

        /* Table Styles */
        .table-responsive {
          overflow-x: auto;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .table th {
          background: #f8f9fa;
          padding: 15px 20px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 1px solid #dee2e6;
        }

        .table td {
          padding: 15px 20px;
          border-bottom: 1px solid #dee2e6;
        }

        .table tr:last-child td {
          border-bottom: none;
        }

        .table tr:hover {
          background: #f8f9fa;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .mil-text-l {
            font-size: 20px;
          }

          .mil-icon-box {
            padding: 20px;
          }

          .table th,
          .table td {
            padding: 10px 15px;
          }
        }
      `}</style>
    </PlaxLayout>
  );
}
