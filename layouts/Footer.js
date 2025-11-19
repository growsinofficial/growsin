import Link from "next/link";

const Footer = ({ bg = true, margin = 160 }) => {
  return <Footer1 bg={bg} margin={margin} />;
};
export default Footer;

/* ========== FOOTER 1 (light) ========== */
const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        <div className="row align-items-start">
          {/* Column 1: Logo + Regulatory (aligned) + Contact + Core Principles */}
          <div className="col-lg-3 col-md-6 mil-mb-60">
            <h6 className="mil-mb-20">Growsin</h6>

            {/* Regulatory Information */}
            <div className="mil-mb-30">
              <ul className="mil-footer-list">
                <li className="mil-mb-15">
                  <p className="mil-text-m mil-soft mil-mb-5">
                    <strong>SEBI Registered Investment Adviser (IA)</strong>
                  </p>
                  <p className="mil-text-m mil-soft">Reg. No: INA000021261</p>
                </li>

                <li className="mil-mb-15">
                  <p className="mil-text-m mil-soft mil-mb-5">
                    <strong>IA Validity</strong>
                  </p>
                  <p className="mil-text-m mil-soft">Nov 03, 2025 - Perpetual</p>
                </li>

                <li className="mil-mb-15">
                  <p className="mil-text-m mil-soft mil-mb-5">
                    <strong>SEBI Registered Research Analyst (RA)</strong>
                  </p>
                  <p className="mil-text-m mil-soft">Reg. No: INH000023667</p>
                </li>

                <li className="mil-mb-15">
                  <p className="mil-text-m mil-soft mil-mb-5">
                    <strong>RA Validity</strong>
                  </p>
                  <p className="mil-text-m mil-soft">Oct 27, 2025 - Perpetual</p>
                </li>

                <li className="mil-mb-15">
                  <p className="mil-text-m mil-soft mil-mb-5">
                    <strong>BASL Membership No</strong>
                  </p>
                  <p className="mil-text-m mil-soft">28698</p>
                </li>
              </ul>
            </div>

            {/* Contact & Compliance */}
            <h6 className="mil-mb-15">Contact &amp; Compliance</h6>
            <div className="mil-mb-30">
              <ul className="mil-footer-list">
                <li className="mil-mb-10 mil-text-m mil-soft">
                  <strong>Principal Officer:</strong><br />
                  Murali Krishna Sivvala
                </li>
                <li className="mil-mb-10 mil-text-m mil-soft">
                  <strong>Compliance:</strong><br />
                  compliance@growsin.com
                </li>
                <li className="mil-mb-10 mil-text-m mil-soft">
                  <strong>Phone Number:</strong><br />
                  +91 8500660421
                </li>
                <li className="mil-text-m mil-soft">
                  <strong>Address:</strong><br />
                  Door No. 14-1-3/5, 2nd Floor, Donkada Colony, Aganam, Gajuwaka Mandal,
                  Visakhapatnam District., VISAKHAPATNAM, ANDHRA PRADESH, 530046
                </li>
              </ul>
            </div>
          </div>

{/* Column 2: Footer Navigation */}
<div className="col-lg-3 col-md-6 mil-mb-60">
  <h6 className="mil-mb-30">Our Services</h6>

  <ul className="mil-footer-list">

    {/* ABOUT US */}
    <li className="mil-mb-15">
      <Link href="/about" className="mil-text-m mil-soft mil-hover">
        About Us
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/Philosophy" className="mil-text-m mil-soft mil-hover">
        Our Philosophy
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/founder" className="mil-text-m mil-soft mil-hover">
        Founder’s Profile
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/vision-mission" className="mil-text-m mil-soft mil-hover">
        Vision & Mission
      </Link>
    </li>

    {/* SERVICES */}
    <li className="mil-mb-15">
      <Link href="/services" className="mil-text-m mil-soft mil-hover">
        Services
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/investment-advisory" className="mil-text-m mil-soft mil-hover">
        Investment Advisory
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/research-analysis" className="mil-text-m mil-soft mil-hover">
        Research Analysis
      </Link>
    </li>

    {/* GROW TOOLS */}
    <li className="mil-mb-15">
      <Link href="/grow-tools" className="mil-text-m mil-soft mil-hover">
        Grow Tools
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/sip-calculator" className="mil-text-m mil-soft mil-hover">
        SIP Calculator
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/retirement-calculator" className="mil-text-m mil-soft mil-hover">
        Retirement Calculator
      </Link>
    </li>

    {/* REGULATORY */}
    <li className="mil-mb-15">
      <Link href="/regulatory" className="mil-text-m mil-soft mil-hover">
        Regulatory
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/investor-ia" className="mil-text-m mil-soft mil-hover">
        Investor – IA
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/investor-ra" className="mil-text-m mil-soft mil-hover">
        Investor – RA
      </Link>
    </li>

    <li className="mil-mb-15">
      <Link href="/disclosure" className="mil-text-m mil-soft mil-hover">
        Disclosure
      </Link>
    </li>

    {/* CONTACT */}
    <li>
      <Link href="/contact" className="mil-text-m mil-soft mil-hover">
        Contact
      </Link>
    </li>

  </ul>
</div>

          {/* Column 3: Resources */}
          <div className="col-lg-3 col-md-6 mil-mb-60">
            <h6 className="mil-mb-30">Resources</h6>
            <ul className="mil-footer-list">
              <li className="mil-mb-15">
                <Link href="/regulatory/investor-ia" className="mil-text-m mil-soft mil-hover">
                  Investor Charter
                </Link>
              </li>
              <li className="mil-mb-15">
                <Link href="/regulatory/investor-ra" className="mil-text-m mil-soft mil-hover">
                  Complaints Data
                </Link>
              </li>
              <li className="mil-mb-15">
                <Link href="/regulatory/disclosure" className="mil-text-m mil-soft mil-hover">
                  Disclosure Document
                </Link>
              </li>
              <li className="mil-mb-15">
                <Link href="/privacy-policy" className="mil-text-m mil-soft mil-hover">
                  Privacy Policy
                </Link>
              </li>
              <li className="mil-mb-15">
                <Link href="/terms-conditions" className="mil-text-m mil-soft mil-hover">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="mil-text-m mil-soft mil-hover">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch + WhatsApp */}
          <div className="col-lg-3 col-md-6 mil-mb-60">
            <h6 className="mil-mb-30">Get in Touch</h6>
            <ul className="mil-footer-list mil-mb-30">
              <li className="mil-mb-15">
                <p className="mil-text-m mil-soft">
                  <strong>Principal Officer:</strong><br />
                  Murali Krishna Sivvala
                </p>
              </li>
              <li className="mil-mb-15">
                <p className="mil-text-m mil-soft">
                  <strong>Compliance:</strong><br />
                  <a href="mailto:compliance@growsin.com" className="mil-soft mil-hover">compliance@growsin.com</a>
                </p>
              </li>
              <li className="mil-mb-15">
                <p className="mil-text-m mil-soft">
                  <strong>Phone:</strong><br />
                  <a href="tel:+918500660421" className="mil-soft mil-hover">+91-8500660421</a>
                </p>
              </li>
              <li>
                <p className="mil-text-m mil-soft">
                  <strong>Address:</strong><br />
                  Door No. 14-1-3/5, 2nd Floor, Donkada Colony, Aganam, Gajuwaka Mandal,
                  Visakhapatnam District., VISAKHAPATNAM, ANDHRA PRADESH, 530046
                </p>
              </li>
            </ul>

            {/* WhatsApp Section */}
            <div className="mil-whatsapp-section mil-mb-30">
              <div className="mil-whatsapp-box text-center">
                <div className="mil-whatsapp-icon mil-mb-15" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .002 5.373.002 12c0 2.108.548 4.083 1.588 5.84L0 24l6.425-1.65A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.212-3.48-8.52z" fill="#25D366" />
                    <path d="M17.49 14.06c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.18.28-.7.9-.86 1.08-.16.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.92-.16-.28-.02-.43.12-.56.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.18.04-.34-.02-.48-.07-.13-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.17 0-.45.06-.69.33-.24.28-.91.88-.91 2.15 0 1.27.93 2.5 1.06 2.67.12.18 1.82 2.9 4.42 3.95 2.6 1.05 2.6.7 3.07.66.47-.05 1.52-.62 1.74-1.22.22-.61.22-1.13.15-1.23-.07-.1-.26-.16-.54-.3z" fill="#fff" />
                  </svg>
                </div>
                <h6 className="mil-mb-15">Talk to us on WhatsApp</h6>
                <a
                  href="https://wa.me/918500660421?text=Hi%20Growsin,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-button mil-button-sm mil-scale-img mil-mb-15"
                  style={{
                    backgroundColor: "#25D366",
                    borderColor: "#25D366",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Start Chat
                </a>
                <p className="mil-text-s mil-soft">Quick responses • Expert advice • Secure communication</p>
              </div>
            </div>

            {/* Social */}
            <div className="mil-social-icons">
              <h6 className="mil-mb-20">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="https://x.com/growsin" target="_blank" rel="noopener noreferrer" className="mil-social-btn mil-soft">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3c-2.5 0-4.5 2.28-4 4.78A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-8 2c12 7 27 0 27-16.5a4.5 4.5 0 00-.08-.83A6.72 6.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/growsin" target="_blank" rel="noopener noreferrer" className="mil-social-btn mil-soft">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7C22.6 7.5 24 10 24 14.1V24h-5v-8.2c0-2-1.4-2.8-2.1-2.8-.8 0-1.8.5-1.8 2.8V24H7V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* NEW: OUR CORE PRINCIPLES     */}
        {/* ============================= */}

        <div className="row mil-mt-10">
          <div className="col-12">
            <div className="core-principles-wrap">
              <h6 className="core-title">Our Core Principles</h6>

              <div className="core-grid">

                {/* Item 1 - NEW ICON */}
                <div className="core-col">
                  <div className="core-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="core-text">
                    <strong>Regulatory Compliance</strong>
                    <div className="core-sub">Adhering to SEBI guidelines</div>
                  </div>
                </div>

                {/* Item 2 - NEW ICON */}
                <div className="core-col">
                  <div className="core-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s-6-4.35-9-8.5C-1.25 8 2 3 6.5 3c2.04 0 3.57 1.08 4.5 2.09C12.93 4.08 14.46 3 16.5 3 21 3 24.25 8 21 12.5c-3 4.15-9 8.5-9 8.5z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="9" r="2.4" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="core-text">
                    <strong>Client-First Philosophy</strong>
                    <div className="core-sub">Your interests come first</div>
                  </div>
                </div>

                {/* Item 3 - NEW ICON */}
                <div className="core-col">
                  <div className="core-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3v14"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 10h6l-3 7-3-7z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 10h6l-3 7-3-7z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="core-text">
                    <strong>Unwavering Ethics</strong>
                    <div className="core-sub">Transparent &amp; Unbiased Advice</div>
                  </div>
                </div>

                {/* Item 4 - NEW ICON */}
                <div className="core-col">
                  <div className="core-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4 20V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M10 20V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M16 20v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M2 20h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="core-text">
                    <strong>Data-Driven Insights</strong>
                    <div className="core-sub">Decisions backed by research</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="row mil-mt-40">
          <div className="col-12">
            <div className="mil-disclaimer-box">
              <ul className="mil-footer-list">
                <li className="mil-text-xs mil-soft mil-mb-10">
                  <strong>General Disclaimer:</strong> Registration granted by SEBI...
                </li>
                <li className="mil-text-xs mil-soft mil-mb-10">
                  <strong>Segregation of Activities &amp; Annual Audit:</strong> Our Investment Advisory...
                </li>
                <li className="mil-text-xs mil-soft mil-mb-10">
                  <strong>No Guaranteed Returns:</strong> We do not offer any services...
                </li>
                <li className="mil-text-xs mil-soft">
                  <strong>Grievance Redressal:</strong> For any grievances, contact{" "}
                  <a href="mailto:compliance@growsin.com" className="mil-soft">
                    compliance@growsin.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mil-footer-bottom mil-mt-40">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mil-text-s mil-soft">© 2025 Growsin. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ STYLES ============ */}
      <style jsx>{`
        .mil-hover:hover { opacity: 0.8; transition: opacity 0.25s ease; }
        .mil-social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(0,0,0,0.06);
          text-decoration: none; transition: transform 0.2s ease, opacity 0.2s;
          color: inherit;
        }
        .mil-social-btn:hover { transform: translateY(-3px); opacity: 0.9; }

        .mil-disclaimer-box {
          padding: 18px; border-radius: 8px; background: rgba(0,0,0,0.03);
        }

        .mil-whatsapp-box {
          padding: 16px; border-radius: 12px; background: rgba(37,211,102,0.08);
          border: 1px solid rgba(37,211,102,0.16);
        }

        .mil-scale-img { transition: transform 0.2s ease; }
        .mil-scale-img:hover { transform: scale(1.04); }

        .mil-mb-30 { margin-bottom: 18px !important; }
        .mil-mb-15 { margin-bottom: 10px !important; }
        .mil-mt-40 { margin-top: 20px !important; }

        /* Core principles layout */
        .core-principles-wrap { padding: 12px 0 0 0; }
        .core-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: rgba(0,0,0,0.85);
        }
        .core-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px 40px;
          align-items: start;
          padding-top: 6px;
        }
        .core-col {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .core-icon {
          color: rgba(0,0,0,0.55);
          min-width: 28px;
          display: flex;
          align-items: center;
        }
        .core-text strong { display: block; font-weight: 700; color: rgba(0,0,0,0.8); }
        .core-sub { color: rgba(0,0,0,0.5); margin-top: 6px; font-size: 0.95rem; line-height:1.45; }

        @media (max-width: 991.98px) {
          .core-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 575.98px) {
          .core-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .core-sub { font-size: 0.95rem; }
        }
      `}</style>
    </footer>
  );
};
