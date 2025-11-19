"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";

/* ---------------- Research Pricing Page (Option A UI)
   - Featured card: Model Portfolios (middle)
   - Green ticks for list items
   - Growsin green gradient CTAs
   - Ribbon, spacing, and styling matched to your IA/RA pages
*/

const ResearchPricing = () => {
  const [time] = useState("month"); // reserved if you want toggles later

  return (
    <div className="row justify-content-center">
      <div className="row mil-price-row">
        {/* Swing Trading Ideas */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-up mil-mb-30 w-100">
            <div className="mil-card-body">
              <h6 className="mil-mb-15">Swing Trading Ideas</h6>
              <p className="mil-text-s mil-soft mil-mb-10">
                For active traders seeking short-term opportunities.
              </p>
              <p className="mil-text-s mil-soft mil-mb-10">Billed quarterly</p>

              <h4 className="mil-mb-30">
                ₹{" "}
                <span className="mil-pricing-table-price">2,999</span>
                <span className="mil-sup-text mil-soft"> / mo</span>
              </h4>

              <Link href="/register" className="mil-btn mil-m mil-fw mil-mb-20 mil-outline-cta">
                Subscribe Now
              </Link>

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-30">
                <li>Exclusive Swing Trade Ideas</li>
                <li>Pro-Level Research</li>
                <li>Clear Action Plan</li>
                <li>Built-in Risk Management</li>
              </ul>

              <a href="#." className="mil-cta-bottom mil-cta-outline">
                View all features
              </a>
            </div>
          </div>
        </div>

        {/* Model Portfolios (FEATURED - middle) */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-featured mil-up mil-mb-30 w-100">
            <div className="mil-ribbon">Recommended</div>

            <div className="mil-card-body featured-body">
              <h6 className="mil-light mil-mb-8">Model Portfolios</h6>
              <p className="mil-text-s mil-light mil-mb-8">Most Popular</p>
              <p className="mil-text-s mil-light mil-mb-20">
                Long-term, diversified portfolios for wealth building.
              </p>

              <h3 className="featured-title">Model Portfolios</h3>
              <p className="featured-sub">Designed for sustainable wealth creation</p>

              <Link href="/register" className="btn-featured-cta">
                Get Model Access
              </Link>

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-light mil-mb-30 featured-list">
                <li>Ready-to-Invest Portfolios</li>
                <li>Scientific Asset Allocation</li>
                <li>Dynamic Rebalancing Alerts</li>
                <li>Transparent Performance Reporting</li>
              </ul>

              <a href="#." className="mil-cta-bottom mil-cta-outline featured-cta-small">
                View all features
              </a>
            </div>
          </div>
        </div>

        {/* Custom Portfolio Research Reports */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-up mil-mb-30 w-100">
            <div className="mil-card-body">
              <h6 className="mil-mb-15">Custom Portfolio Research Reports</h6>
              <p className="mil-text-s mil-soft mil-mb-10">
                Personalized research and reports for your portfolio.
              </p>

              <p className="mil-text-s mil-soft mil-mb-6">
                ₹4,999/mo <span className="mil-soft">• Up to ₹50L (Billed quarterly)</span>
              </p>
              <p className="mil-text-s mil-soft mil-mb-10">
                ₹9,999/mo <span className="mil-soft">• Above ₹50L (Billed quarterly)</span>
              </p>

              <h4 className="mil-mb-30">
                ₹{" "}
                <span className="mil-pricing-table-price">4,999</span>
                <span className="mil-sup-text mil-soft"> / mo</span>
              </h4>

              <Link href="/contact" className="mil-btn mil-m mil-fw mil-mb-20 mil-outline-cta">
                Talk to Research Team
              </Link>

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-30">
                <li>Unified Portfolio Dashboard</li>
                <li>True Performance Metrics</li>
                <li>Strategic Allocation Insights</li>
                <li>Portfolio Health Check-Up</li>
              </ul>

              <a href="#." className="mil-cta-bottom mil-cta-outline">
                View all features
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles (page scoped) */}
      <style jsx>{`
        /* Layout helpers */
        .mil-price-row { align-items: stretch; }
        .price-col { display: flex; }

        /* Card base */
        .mil-price-card {
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .mil-card-body {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px;
        }

        /* Buttons / CTAs */
        .mil-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          border-radius: 10px;
          padding: 0 18px;
          font-weight: 700;
          text-decoration: none;
        }
        /* Green gradient filled CTA (used on featured previously) */
        .btn-featured-cta {
          display: inline-block;
          background: linear-gradient(90deg,#2db34a,#12a64a);
          color: #fff;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(18,166,74,0.08);
          text-decoration: none;
        }
        .btn-featured-cta:hover { transform: translateY(-3px); }

        /* Outline style CTAs in Growsin green — used for action-like links */
        .mil-outline-cta {
          border: 1.5px solid #12a64a;
          color: #12a64a;
          background: transparent;
          padding: 10px 14px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
        }
        .mil-outline-cta:hover { background: rgba(18,166,74,0.06); }

        /* "View all features" small CTAs (outline) */
        .mil-cta-bottom { margin-top: auto; display:inline-block; text-decoration:none; padding:10px 14px; border-radius:10px; font-weight:700; font-size:14px; }
        .mil-cta-outline { border: 1px solid rgba(0,0,0,0.06); color: inherit; background: transparent; }
        .mil-cta-outline:hover { border-color: #12a64a; color: #12a64a; }

        /* Featured card (dark-blue) */
        .mil-featured {
          border: 2px solid rgba(125,42,232,0.12);
          border-radius: 24px;
          background: linear-gradient(180deg, #002f6d 0%, #013a84 30%, #023b6f 100%);
          color: #fff;
          box-shadow: 0 18px 50px rgba(0,41,142,0.12);
        }
        .featured-body { color: #fff; text-align: center; align-items: center; }
        .featured-title { font-size: 26px; font-weight:800; margin: 12px 0 6px 0; color: #fff; }
        .featured-sub { color: rgba(255,255,255,0.9); margin-bottom:14px; }

        /* ribbon */
        .mil-ribbon {
          position: absolute;
          right: -42px;
          top: 10px;
          transform: rotate(45deg);
          background: linear-gradient(90deg, #7d2ae8, #175ee2);
          color: #fff;
          padding: 6px 64px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.6px;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        /* list + green ticks */
        .mil-type-2 { margin: 0; padding: 0; list-style: none; text-align: left; }
        .mil-type-2 li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
          line-height: 1.35;
          display: block;
          color: inherit;
        }
        /* green tick using unicode — consistent across light & dark cards */
        .mil-type-2 li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          transform: translateY(0);
          color: #12a64a; /* Growsin green */
          font-weight: 800;
          font-size: 14px;
          line-height: 1;
        }
        /* adjust tick color inside featured card for contrast */
        .mil-featured .mil-type-2 li::before { color: #A6F7BF; }

        /* smaller featured list alignment */
        .featured-list { text-align:left; margin: 12px auto 0 auto; max-width: 360px; color: rgba(255,255,255,0.95); }

        /* spacing helpers */
        .mil-mb-30 { margin-bottom: 18px !important; }
        .mil-mb-20 { margin-bottom: 12px !important; }
        .mil-mb-15 { margin-bottom: 10px !important; }

        /* responsive */
        @media (max-width: 991.98px) { .price-col { flex: 1 1 50%; } }
        @media (max-width: 575.98px) {
          .price-col { flex: 1 1 100%; }
          .mil-card-body { padding: 18px; }
          .mil-ribbon { right: -36px; padding: 6px 44px; }
          .featured-title { font-size: 20px; }
        }
      `}</style>
    </div>
  );
};

/* ---------- Page shell (Option A banner + ResearchPricing) ---------- */
const Page = () => {
  return (
    <PlaxLayout bg={false}>
      {/* Banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-1">Research Analysis</div>

                <h1 className="mil-mb-20">
                  Your Edge in the Market Starts with Smarter Research.
                </h1>

                <p className="mil-text-m mil-soft mil-mb-30">
                  At <strong>Growsin</strong>, we cut through the noise with SEBI-registered, unbiased analysis.
                  Actionable strategies—short-term to long-term—designed to help you make smarter decisions.
                </p>

                <div className="mil-badge mil-up">
                  SEBI Registered • Actionable Insights • Data-Driven Strategies
                </div>

                <ul className="mil-breadcrumbs mil-pub-info mil-center mil-mt-40">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/research">Research</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="mil-blog-list mil-p-0-130">
        <div className="container">
          <ResearchPricing />
        </div>
      </div>

      <CallToAction2 />

      {/* page-level minimal tweaks to match your IA/RA pages */}
      <style jsx>{`
        .mil-banner { padding: 42px 0 36px; background: linear-gradient(180deg, rgba(2,27,63,0.02), transparent); }
        .mil-text-m { font-size: 16px; color: #334155; }
        .mil-badge { display:inline-block; padding:8px 12px; border-radius:999px; background: linear-gradient(90deg,#175ee2,#7d2ae8); color:#fff; font-weight:700; }
        .mil-mb-20 { margin-bottom: 20px; }
      `}</style>
    </PlaxLayout>
  );
};

export default Page;
