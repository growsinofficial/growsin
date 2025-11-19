"use client";

import { useEffect } from "react";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    // Scroll reveal animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // Hero section cursor spotlight
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroSection.style.setProperty('--x', `${x}px`);
        heroSection.style.setProperty('--y', `${y}px`);
      });
    }

    // Staggered text animation
    const headline = document.getElementById('headline');
    if (headline && headline.children.length === 0) {
      const text = headline.textContent.trim();
      headline.innerHTML = '';

      text.split('').forEach((char) => {
        const span = document.createElement('span');
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = char;
        }
        headline.appendChild(span);
      });

      const spans = headline.querySelectorAll('span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('visible');
        }, index * 50);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <PlaxLayout bg={false}>
      {/* banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">About us</div>
                <h1 className="mil-mb-20">
                  Research with Purpose, Advice with Integrity
                </h1>
                <p className="mil-text-m mil-soft mil-mb-30">
                  I believe wealth management should be unbiased, transparent, and deeply
                  personal. With SEBI-regulated expertise and global perspectives, I simplify
                  complexity and guide you with clarity. From research-backed strategies to
                  personalized execution, every step is crafted with integrity. Together, we
                  build not just wealth, but long-term financial confidence.
                </p>
                <div className="mil-badge mil-up" style={{ display: "inline-block" }}>
                  SEBI Registered • Fiduciary • Research-Driven • AI-Enhanced
                </div>

                <ul className="mil-breadcrumbs mil-center mil-mt-40">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* features (Founder philosophy) */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">The Vision that Drives Growsin</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                The future of wealth management is not shaped by finance alone, nor by
                technology in isolation — it is defined by their convergence. As the Founder
                of <strong>Growsin</strong> and SEBI-registered RIA &amp; RA, my mission is to deliver advice
                that is transparent, unbiased, and deeply rooted in research, guided always
                by fiduciary responsibility. AI does not replace judgment — it enhances it.
                Paired with regulated financial expertise, it sharpens research, personalizes
                strategies, and anticipates client needs with precision.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Integrity at the Core</h5>
                    <p className="mil-text-m mil-soft">
                      Transparent, conflict-free, research-backed guidance. Your best interest
                      is the only interest.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/1.png"
                  alt="About Growsin"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* facts */}
      <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={2}>2</span>
                <span className="mil-pale">x</span>
              </p>
              <h5>SEBI Licenses (RIA &amp; RA)</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="24">24</span>
                <span className="mil-pale">/7</span>
              </p>
              <h5>Research-First Discipline</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={1}>1</span>
                <span className="mil-pale"> Goal</span>
              </p>
              <h5>Your Best Interest</h5>
            </div>
          </div>
        </div>
      </div>
      {/* facts end */}

      {/* strengths CTA */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Principles That Power Growsin
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Fiduciary Clarity</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Advice that is transparent, conflict-free, and accountable —
                    always aligned to your interests.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Research + AI</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Regulated expertise enhanced by AI for sharper insights,
                    personalization, and faster decisions.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/inner-pages/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">Confidence for Life</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    We replace confusion with clarity and uncertainty with a
                    disciplined, long-term framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">Our Values — Foundations of Trust</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Wealth management, for me, is not about selling products or chasing trends — it
                is about building a disciplined, long-term framework where clarity replaces confusion
                and confidence replaces uncertainty. Advice must be personal, research-backed, and
                evolve as life changes.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Absolute Transparency</h5>
                    <p className="mil-text-m mil-soft">
                      Clear, conflict-free recommendations with full disclosures. Your plan,
                      your rules — executed with discipline.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Technology with Judgment</h5>
                    <p className="mil-text-m mil-soft">
                      AI enhances, not replaces, human judgment — enabling real-time insights,
                      personalized strategies, and precise execution.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="img/inner-pages/2.png"
                  alt="Growsin values"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team (2 members, controlled image height) */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-light mil-up">Meet the Team Behind Growsin</h2>
              </div>
            </div>

            <div className="row">
              {/* Murali */}
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait team-por mil-mb-30">
                    <img src="img/inner-pages/team/Murali Krishna Sivvala.jpeg" alt="Murali Krishna Sivvala" />
                  </div>
                  <h5 className="mil-light mil-mb-5">Murali Krishna Sivvala</h5>
                  <p className="mil-text-xs mil-soft mil-mb-15">THE STRATEGIST</p>
                  <p className="mil-text-xs mil-soft mil-mb-10">
                    SEBI Registered Investment Adviser &amp; Research Analyst
                  </p>
                  <p className="mil-text-m mil-soft">
                    As the Founder of Growsin and SEBI-registered Investment Advisor (RIA) and
                    Research Analyst (RA), my mission is to deliver financial advice that is
                    transparent, unbiased, and deeply rooted in research. Every recommendation
                    is guided by fiduciary responsibility. I simplify complexity, align
                    strategies with personal goals, and create a clear path to financial
                    independence — delivering clarity, confidence, and continuity.
                  </p>
                  <p className="mil-text-m mil-soft mil-mt-10">
                    Every client’s journey is unique. I build roadmaps that evolve as life changes,
                    supported by technology that provides real-time insights, transparent reporting,
                    and seamless execution.
                  </p>
                </div>
              </div>

              {/* Kartik */}
              <div className="col-xl-6 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait team-por mil-mb-30">
                    <img src="img/inner-pages/team/Kartik Mahajan.jpeg" alt="Kartik Mahajan" />
                  </div>
                  <h5 className="mil-light mil-mb-5">Kartik Mahajan</h5>
                  <p className="mil-text-xs mil-soft mil-mb-15">THE ARCHITECT</p>
                  <p className="mil-text-xs mil-soft mil-mb-10">
                    Chief Technology Officer Perspective
                  </p>
                  <p className="mil-text-m mil-soft">
                    From India, I lead with the mindset of an architect — designing digital
                    systems that embed intelligence, clarity, and accessibility into every layer.
                    Security is foundational: advanced encryption, multi-layered authentication,
                    and resilient architectures protect data in a digital-first world.
                  </p>
                  <p className="mil-text-m mil-soft mil-mt-10">
                    We transform financial complexity into clarity with real-time visibility,
                    live data, instant updates, and dynamic reports — so users act quickly and
                    confidently.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          /* Only affects team portraits on this page */
          .team-por {
            width: 100%;
            max-width: 550px;    
            height: 100%;      
            margin: 0 auto;
            border-radius: 28px;
            overflow: hidden;
            background: #f3f4f6;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          }
          .team-por img {
            width: 100%;
            height: 100%;
            object-fit: cover;        /* fill without distortion */
            object-position: center;  /* adjust to 'top' if you want more headroom */
            display: block;
          }

          /* Responsive tuning */
          @media (max-width: 1199.98px) {
            .team-por { max-width: 520px; height: 560px; }
          }
          @media (max-width: 767.98px) {
            .team-por { max-width: 100%; height: 500px; border-radius: 22px; }
          }
          @media (max-width: 479.98px) {
            .team-por { height: 440px; border-radius: 18px; }
          }
        `}</style>
      </div>
      {/* team end */}

      {/* quote */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30">
                “Ultimately, my purpose as a SEBI-registered RIA and RA is to stand as a trusted
                guide — combining fiduciary integrity, research-driven strategies, and
                technology-enabled clarity — to create a wealth management experience truly
                built around you.”
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60">— Murali Krishna Sivvala</p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Privacy &amp; Protection</h5>
                        <p className="mil-text-m mil-soft">
                          Confidentiality, secure storage, and consent-driven data use —
                          with clear, transparent reporting.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">Technology that Empowers</h5>
                        <p className="mil-text-m mil-soft">
                          Real-time dashboards, dynamic reports, and seamless workflows
                          that remove friction and add clarity.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* quote end */}

      <CallToAction2 />
    </PlaxLayout>
  );
};

export default Page;
