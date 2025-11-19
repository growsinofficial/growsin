"use client";

import { useMemo, useState } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------------- Theme ---------------- */
const BRAND_A = "#175ee2";
const BRAND_B = "#7d2ae8";
const ACCENT = "rgb(31 154 50)";
const ACCENT_DARK = "rgb(31 154 50)";
const INVESTED_COLOR = "#eaf1ff";
const RETURNS_COLOR = "#4169ff";

const inr = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

/* ---------------- Helpers / Models ---------------- */
function projectBalance({ currentSavings, monthlyContribution, annualReturnPct, years }) {
  const monthlyRate = Math.pow(1 + annualReturnPct / 100, 1 / 12) - 1;
  const months = Math.max(0, Math.floor(years * 12));
  const out = [];
  let balance = currentSavings || 0;
  let invested = currentSavings || 0;
  for (let m = 1; m <= months; m++) {
    invested += monthlyContribution;
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    if (m % 12 === 0) {
      const y = m / 12;
      out.push({ year: y, invested, balance, returns: Math.max(0, balance - invested) });
    }
  }
  if (months === 0) out.push({ year: 0, invested, balance, returns: Math.max(0, balance - invested) });
  return out;
}

function incomeToCorpus(monthlyIncome, safeWithdrawPct = 4) {
  const yearly = monthlyIncome * 12;
  const corpus = yearly / (safeWithdrawPct / 100);
  return corpus;
}

/* ---------------- Page ---------------- */
export default function RetirementCalculatorPage() {
  // UI state
  const [tab, setTab] = useState("goal"); // 'goal' or 'income'
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [monthlyContribution, setMonthlyContribution] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [inflation, setInflation] = useState(6);

  // goal-based
  const [targetCorpus, setTargetCorpus] = useState(20000000); // ₹2 Cr
  // income-based
  const [desiredMonthlyIncome, setDesiredMonthlyIncome] = useState(50000);
  const [safeWithdraw, setSafeWithdraw] = useState(4); // %

  // presets (kept external for re-use)
  const presets = {
    conservative: { monthlyContribution: 5000, expectedReturn: 6 },
    balanced: { monthlyContribution: 15000, expectedReturn: 9 },
    aggressive: { monthlyContribution: 30000, expectedReturn: 12 },
  };

  // which preset is active
  const [selectedPreset, setSelectedPreset] = useState("aggressive");

  const applyPreset = (key) => {
    const p = presets[key] || {};
    setSelectedPreset(key);
    if (p.monthlyContribution !== undefined) setMonthlyContribution(p.monthlyContribution);
    if (p.expectedReturn !== undefined) setExpectedReturn(p.expectedReturn);
  };

  // Clear preset when user edits manually
  const userEdited = () => {
    if (selectedPreset !== null) setSelectedPreset(null);
  };

  const yearsToRetire = Math.max(0, retireAge - currentAge);

  const projection = useMemo(
    () =>
      projectBalance({
        currentSavings,
        monthlyContribution,
        annualReturnPct: expectedReturn,
        years: yearsToRetire,
      }),
    [currentSavings, monthlyContribution, expectedReturn, yearsToRetire]
  );

  const finalBalance = projection.length ? projection[projection.length - 1].balance : currentSavings;
  const investedTotal = projection.length ? projection[projection.length - 1].invested : currentSavings;
  const estReturns = Math.max(0, finalBalance - investedTotal);

  const requiredCorpusFromIncome = useMemo(() => incomeToCorpus(desiredMonthlyIncome, safeWithdraw), [
    desiredMonthlyIncome,
    safeWithdraw,
  ]);

  const remainingToGoal = Math.max(0, targetCorpus - finalBalance);
  const remainingToIncomeGoal = Math.max(0, requiredCorpusFromIncome - finalBalance);

  const donutDataGoal = [
    { name: "Invested", value: investedTotal },
    { name: "Est. returns", value: estReturns },
  ];

  const chartData = projection.map((p) => ({ name: `Y${p.year}`, invested: Math.round(p.invested), value: Math.round(p.balance) }));

  const goalMet = tab === "goal" ? finalBalance >= targetCorpus : finalBalance >= requiredCorpusFromIncome;

  return (
    <PlaxLayout bg={false}>
      {/* Keep the shortened banner text you prefer */}
      <PageBanner pageName="Retirement Calculator" title="Estimate your retirement savings goal or income based." />

      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row">
            {/* tabs */}
            <div className="col-xl-12 mil-mb-20">
              <div className="tab-row">
                <button className={`tab ${tab === "goal" ? "active" : ""}`} onClick={() => setTab("goal")}>Goal-based</button>
                <button className={`tab ${tab === "income" ? "active" : ""}`} onClick={() => setTab("income")}>Income-based</button>
              </div>
            </div>

            {/* left column: inputs */}
            <div className="col-md-7">
              <div className="card-form">
                <div className="form-row">
                  <label className="label">Current age</label>
                  <div className="row-inline">
                    <input
                      className="number-input badge-like"
                      type="number"
                      min={18}
                      max={70}
                      step={1}
                      value={currentAge}
                      onChange={(e) => { setCurrentAge(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={18} max={70} step={1} value={currentAge} onChange={(e) => { setCurrentAge(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                <div className="form-row">
                  <label className="label">Planned retirement age</label>
                  <div className="row-inline">
                    <input
                      className="number-input badge-like"
                      type="number"
                      min={35}
                      max={75}
                      step={1}
                      value={retireAge}
                      onChange={(e) => { setRetireAge(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={35} max={75} step={1} value={retireAge} onChange={(e) => { setRetireAge(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                <div className="form-row">
                  <label className="label">Current savings (₹)</label>
                  <div className="row-inline">
                    <input
                      className="pill-input badge-like"
                      type="number"
                      min={0}
                      step={1000}
                      value={currentSavings}
                      onChange={(e) => { setCurrentSavings(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={0} max={20000000} step={10000} value={currentSavings} onChange={(e) => { setCurrentSavings(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                <div className="form-row">
                  <label className="label">Monthly contribution (₹)</label>
                  <div className="row-inline">
                    <input
                      className="pill-input badge-like"
                      type="number"
                      min={0}
                      step={500}
                      value={monthlyContribution}
                      onChange={(e) => { setMonthlyContribution(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={0} max={200000} step={500} value={monthlyContribution} onChange={(e) => { setMonthlyContribution(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                <div className="form-row">
                  <label className="label">Expected return (p.a.)</label>
                  <div className="row-inline">
                    <input
                      className="number-input badge-like"
                      type="number"
                      min={0}
                      max={20}
                      step={0.1}
                      value={expectedReturn}
                      onChange={(e) => { setExpectedReturn(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={0} max={20} step={0.1} value={expectedReturn} onChange={(e) => { setExpectedReturn(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                <div className="form-row">
                  <label className="label">Inflation (p.a.)</label>
                  <div className="row-inline">
                    <input
                      className="number-input badge-like"
                      type="number"
                      min={0}
                      max={12}
                      step={0.1}
                      value={inflation}
                      onChange={(e) => { setInflation(Number(e.target.value || 0)); userEdited(); }}
                    />
                    <input className="mil-input range-input" type="range" min={0} max={12} step={0.1} value={inflation} onChange={(e) => { setInflation(Number(e.target.value)); userEdited(); }} />
                  </div>
                </div>

                {/* Tab-specific inputs */}
                {tab === "goal" ? (
                  <div className="form-row">
                    <label className="label">Target retirement corpus</label>
                    <div className="row-inline">
                      <input
                        className="pill-input badge-like"
                        type="number"
                        min={0}
                        step={50000}
                        value={targetCorpus}
                        onChange={(e) => { setTargetCorpus(Number(e.target.value || 0)); userEdited(); }}
                      />
                      <input className="mil-input range-input" type="range" min={0} max={200000000} step={50000} value={targetCorpus} onChange={(e) => { setTargetCorpus(Number(e.target.value)); userEdited(); }} />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="form-row">
                      <label className="label">Desired monthly retirement income</label>
                      <div className="row-inline">
                        <input
                          className="pill-input badge-like"
                          type="number"
                          min={0}
                          step={1000}
                          value={desiredMonthlyIncome}
                          onChange={(e) => { setDesiredMonthlyIncome(Number(e.target.value || 0)); userEdited(); }}
                        />
                        <input className="mil-input range-input" type="range" min={0} max={500000} step={1000} value={desiredMonthlyIncome} onChange={(e) => { setDesiredMonthlyIncome(Number(e.target.value)); userEdited(); }} />
                      </div>
                    </div>

                    <div className="form-row">
                      <label className="label">Safe withdrawal rate (%)</label>
                      <div className="row-inline">
                        <input
                          className="number-input badge-like"
                          type="number"
                          min={1}
                          max={10}
                          step={0.1}
                          value={safeWithdraw}
                          onChange={(e) => { setSafeWithdraw(Number(e.target.value || 0)); userEdited(); }}
                        />
                        <input className="mil-input range-input" type="range" min={1} max={10} step={0.1} value={safeWithdraw} onChange={(e) => { setSafeWithdraw(Number(e.target.value)); userEdited(); }} />
                      </div>
                    </div>
                  </>
                )}

                <div className="presets">
                  <button
                    className={`preset ${selectedPreset === "conservative" ? "active" : ""}`}
                    onClick={() => applyPreset("conservative")}
                  >
                    Conservative
                  </button>
                  <button
                    className={`preset ${selectedPreset === "balanced" ? "active" : ""}`}
                    onClick={() => applyPreset("balanced")}
                  >
                    Balanced
                  </button>
                  <button
                    className={`preset ${selectedPreset === "aggressive" ? "active" : ""}`}
                    onClick={() => applyPreset("aggressive")}
                  >
                    Aggressive
                  </button>
                </div>

                <div className="summary-small">
                  <div>
                    <div className="small-label">Projected corpus</div>
                    <div className="small-val">{inr(finalBalance)}</div>
                  </div>
                  <div>
                    <div className="small-label">Total invested</div>
                    <div className="small-val">{inr(investedTotal)}</div>
                  </div>
                  <div>
                    <div className="small-label">Est. returns</div>
                    <div className="small-val">{inr(estReturns)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* right: donut + mini area */}
            <div className="col-md-5">
              <div className="card-chart">
                <div className="donut-wrap" style={{ width: "100%", height: 260 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={donutDataGoal} innerRadius={70} outerRadius={100} dataKey="value" startAngle={90} endAngle={-270} paddingAngle={2}>
                        {donutDataGoal.map((entry, idx) => (
                          <Cell key={`c-${idx}`} fill={[INVESTED_COLOR, RETURNS_COLOR][idx % 2]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="donut-legend">
                  <div className="legend-row">
                    <span className="legend-swatch" style={{ background: INVESTED_COLOR }} />
                    <span className="legend-label">Invested amount</span>
                  </div>
                  <div className="legend-row">
                    <span className="legend-swatch" style={{ background: RETURNS_COLOR }} />
                    <span className="legend-label">Est. returns</span>
                  </div>
                </div>

                <div className="mini-area">
                  <ResponsiveContainer width="100%" height={140}>
                    <AreaChart data={chartData} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor={BRAND_A} stopOpacity={0.85} />
                          <stop offset="100%" stopColor={BRAND_B} stopOpacity={0.08} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <Tooltip formatter={(v) => inr(v)} />
                      <Area type="monotone" dataKey="value" stroke={BRAND_A} fill="url(#g1)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="goal-block" style={{ marginTop: 12 }}>
                {tab === "goal" ? (
                  <div>
                    <div className="small-label">Remaining to reach target</div>
                    <div style={{ fontWeight: 700, fontSize: 18, marginTop: 6 }}>{inr(remainingToGoal)}</div>
                  </div>
                ) : (
                  <div>
                    <div className="small-label">Required corpus (SW %{safeWithdraw})</div>
                    <div style={{ fontWeight: 700, fontSize: 18, marginTop: 6 }}>{inr(requiredCorpusFromIncome)}</div>
                    <div className="small-label" style={{ marginTop: 8 }}>Remaining to reach that corpus</div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginTop: 6 }}>{inr(remainingToIncomeGoal)}</div>
                  </div>
                )}
              </div>
            </div>

            {/* yearly table */}
            <div className="col-xl-12 mil-mt-20">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Invested</th>
                      <th>Est. returns</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projection.map((r) => (
                      <tr key={r.year}>
                        <td>{r.year}</td>
                        <td>{inr(r.invested)}</td>
                        <td>{inr(r.returns)}</td>
                        <td>{inr(r.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* styles (kept same visual language as your SIP/Lumpsum page) */}
      <style jsx>{`
        .tab-row { display:flex; gap:12px; align-items:center; margin-bottom:14px; }
        .tab { background:#f6faf8; border:0; padding:8px 14px; border-radius:999px; color:#7a8b86; font-weight:600; cursor:pointer; }
        .tab.active { background:#e9fff5; color:${ACCENT}; box-shadow: inset 0 0 0 1px rgba(6,167,119,0.08); }

        .card-form { background:#fff; padding:22px; border-radius:12px; border:1px solid #eef2f3; }
        .card-chart { background:#fff; padding:18px; border-radius:12px; border:1px solid #eef2f3; display:flex; flex-direction:column; align-items:center; gap:8px; }

        .form-row { margin-bottom:18px; }
        .label { font-size:14px; color:#2f3a45; margin-bottom:8px; display:block; }

        .row-inline { display:flex; align-items:center; gap:12px; width:100%; }

        .val-badge { background:#ecfff6; color:${ACCENT}; font-weight:700; padding:8px 12px; border-radius:6px; min-width:140px; flex:0 0 140px; text-align:center; box-shadow: 0 2px 6px rgba(6,167,119,0.06); overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
        .val-badge.percent { min-width:90px; flex:0 0 90px; }
        .val-badge.years { min-width:70px; flex:0 0 70px; }

        /* unified badge-like small boxes (pill, small number, badges) */
        .badge-like {
          background: #ecfff6;
          color: ${ACCENT_DARK};
          font-weight: 700;
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(6,167,119,0.07);
          border: 1px solid rgba(6,167,119,0.06);
        }

        /* pill numeric input for currency fields */
        .pill-input {
          min-width: 160px;
          padding: 12px 18px;
          border-radius: 14px;
          background: #ecfff6;
          color: ${ACCENT};
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          box-sizing: border-box;
          margin-right: 16px;
          -moz-appearance: textfield;
          appearance: textfield;
          border: none;
        }
        .pill-input:focus {
          outline: none;
          box-shadow: 0 6px 20px rgba(6,167,119,0.16);
        }

        /* small numeric boxes */
        .number-input {
          width:110px;
          padding:8px 10px;
          border-radius:10px;
          border:1px solid rgba(6,167,119,0.06);
          text-align:center;
          font-weight:700;
          background:#ecfff6;
          color:${ACCENT_DARK};
        }

        input[type="range"].range-input {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          width: 100%;
          background: #e9e9e9;
          border-radius: 999px;
          outline: none;
          flex: 1 1 auto; /* input fills remaining space */
        }
        input[type="range"].range-input::-webkit-slider-thumb {
          -webkit-appearance: none; appearance:none;
          width:18px; height:18px; border-radius:50%; background:${ACCENT}; box-shadow:0 2px 6px rgba(7,181,137,0.25); margin-top:-6px;
        }
        input[type="range"].range-input::-moz-range-thumb { width:18px; height:18px; border-radius:50%; background:${ACCENT}; border:none; }

        .presets { display:flex; gap:10px; margin-top:6px; margin-bottom:12px; }
        .preset { background:#f5fbf8; border-radius:8px; border:1px solid #e6f5ef; padding:8px 12px; color:${ACCENT}; cursor:pointer; font-weight:600; }
        .preset.active { background:${ACCENT}; color:white; box-shadow: 0 6px 20px rgba(6,167,119,0.12); }

        .summary-small { display:grid; grid-template-columns: 1fr 1fr 1fr auto; gap:12px; align-items:center; margin-top:10px; }
        .small-label { font-size:12px; color:#7b8790; }
        .small-val { font-weight:700; font-size:16px; margin-top:6px; }
        .cta-wrap { display:flex; align-items:center; }
        .invest-btn { background: ${ACCENT}; color: white; border: none; padding:10px 16px; border-radius:8px; font-weight:700; cursor:pointer; box-shadow: 0 8px 30px rgba(6,167,119,0.12); }

        .donut-legend { display:flex; flex-direction:column; gap:8px; width:100%; padding-left:14px; }
        .legend-row { display:flex; gap:8px; align-items:center; }
        .legend-swatch { width:18px; height:18px; border-radius:6px; display:inline-block; box-shadow: 0 2px 6px rgba(0,0,0,0.04); }
        .legend-label { font-size:13px; color:#515b63; }

        .mini-area { width:100%; margin-top:4px; }

        .table { width:100%; border-collapse:collapse; background:white; border-radius:8px; overflow:hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
        .table th { background:#fafbfc; padding:12px 16px; text-align:left; color:#333; font-weight:700; border-bottom:1px solid #eef2f3; }
        .table td { padding:12px 16px; border-bottom:1px solid #f1f4f6; color:#333; }

        @media (max-width: 992px) {
          .summary-small { grid-template-columns: 1fr 1fr; }
          .card-chart { margin-top:14px; }
          .val-badge { min-width:110px; flex:0 0 110px; }
          .number-input { width:86px; }
          .pill-input { min-width: 140px; padding: 10px 14px; font-size: 14px; margin-right: 10px; }
        }
      `}</style>
    </PlaxLayout>
  );
}
