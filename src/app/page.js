import { Media } from "./media";
import { Reveal } from "./reveal";

export const metadata = {
  title: "Tino Nyazika | Personal Branding & Social Media Manager",
  description:
    "Tino Nyazika builds brands that grow reach, reputation, and revenue through organic content systems, Reels, and carousels.",
  openGraph: {
    title: "Tino Nyazika | Portfolio",
    description: "Build a brand that grows your reach, your reputation, and your revenue.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

/* ---------- EDIT THESE ---------- */
const UPWORK_URL = "https://www.upwork.com/freelancers/YOUR-PROFILE";
// Images live in /public/portfolio/

const helpItems = [
  {
    title: "Growing your audience with proven social strategies",
    copy: "My approach has generated over 1 million organic views and taken client accounts from 0 to 1,000 followers in 90 days.",
  },
  {
    title: "Saving you time by managing it all",
    copy: "Most clients spend just a few hours a month on social media. I handle everything from strategy to posting, involving you only where it adds real value.",
  },
  {
    title: "Creating content that drives sales & awareness",
    copy: "My content has generated 536 leads for clients — built around Reels and infographics that reflect your brand's voice and require minimal input from you.",
  },
];

const reelGroups = [
  {
    title: "Personal Branding",
    items: [
      { src: "/Green and Yellow Modern Business Services Promotional Ads Mobile VIdeo.mp4", label: "Personal branding Reel 1" },
      { src: "/2.mp4", label: "Personal branding Reel 2" },
      { src: "/3.mp4", label: "Personal branding Reel 3" },
    ],
  },
  {
    title: "Fitness & Sports",
    items: [
      { src: "/F1.mp4", label: "Fitness Reel 1" },
      { src: "/F2.mp4", label: "Fitness Reel 2" },
      { src: "/F3.mp4", label: "Sports Reel" },
    ],
  },
  {
    title: "Real Estate Flip & Fix Investing",
    items: [
      { src: "/RS1.mp4", label: "Flip & fix Reel 1" },
      { src: "/RS2.mp4", label: "Flip & fix Reel 2" },
      { src: "/RS3.mp4", label: "Flip & fix Reel 3" },
    ],
  },
];

const instagramCarousel = [
  { src: "/1.PNG", label: "Instagram carousel slide 1" },
  { src: "/2.PNG", label: "Instagram carousel slide 2" },
  { src: "/3.PNG", label: "Instagram carousel slide 3" },
  { src: "/4.PNG", label: "Instagram carousel slide 4" },
  { src: "/7.PNG", label: "Instagram carousel slide 5" },
  { src: "/3.PNG", label: "Instagram carousel slide 6" },
  { src: "/7.PNG", label: "Instagram carousel slide 7" },
  { src: "/7.PNG", label: "Instagram carousel slide 8" },
  { src: "/4.PNG", label: "Instagram carousel slide 9" },
];

const realEstateGraphics = [
  { src: "/_Tino's Portfolio 2.2. Final (1).png", label: "Closing announcement graphic" },
  { src: "/_Tino's Portfolio 2.2. Final (2).png", label: "Property listing graphic" },
  { src: "/_Tino's Portfolio 2.2. Final(3).png", label: "Property teaser graphic" },
];

const infoCarousels = [
  { src: "/portfolio/info-carousel-1.png", label: "Info carousel 1" },
  { src: "/portfolio/info-carousel-2.png", label: "Info carousel 2" },
  { src: "/portfolio/info-carousel-3.png", label: "Info carousel 3" },
  { src: "/portfolio/info-carousel-4.png", label: "Info carousel 4" },
];

const steps = [
  {
    number: "01",
    title: "Clarity Call & Brand Direction",
    points: [
      "We begin with a focused conversation to understand your business, goals, audience and brand voice.",
      "I then shape a clear brand direction so your content feels consistent, recognisable and true to you.",
    ],
    image: { src: "/_Tino's Portfolio 2.2. Final (13).png", label: "Reach +162% and Qualified Profile Visits +138% analytics" },
  },
  {
    number: "02",
    title: "Strategy & Competitor Audit",
    points: [
      "I audit your current presence, research your industry and analyse what is already working for your competitors.",
      "This reveals the content gaps and opportunities your brand can own.",
    ],
    image: { src: "/_Tino's Portfolio 2.2. Final (12).png", label: "Competitor audit table" },
  },
  {
    number: "03",
    title: "Content Strategy & Calendar",
    points: [
      "I create a custom content plan built around your vision, audience and business goals.",
      "You receive clear content pillars and a structured calendar for approval before anything is produced.",
    ],
    image: { src: "/_Tino's Portfolio 2.2. Final (11).png", label: "Content calendar spreadsheet" },
  },
];

const proof = [
  ["906K", "Instagram views · 30 days"],
  ["753K", "Facebook video views"],
  ["633K", "TikTok video views · 7 days"],
  ["+162%", "Reach growth · 90 days"],
];

const resultShots = [
  { src: "/_Tino's Portfolio 2.2. Final (5).png", label: "Instagram: 521,598 views in 90 days", caption: "Instagram · 521,598 views" },
  { src: "/_Tino's Portfolio 2.2. Final (21).png", label: "Instagram: 906,221 views in 30 days", caption: "Instagram · 906,221 views" },
  { src: "/_Tino's Portfolio 2.2. Final (3).png", label: "Facebook: 322,876 views, 752,911 video views, 2,483 profile activity", caption: "Facebook · 752,911 video views" },
  { src: "/_Tino's Portfolio 2.2. Final (4).png", label: "TikTok: 354,984 video views", caption: "TikTok · 354,984 views" },
  { src: "/_Tino's Portfolio 2.2. Final (22).png", label: "TikTok: 633,390 video views", caption: "TikTok · 633,390 views" },
];

const reviews = [
  {
    job: "Social Media Manager for Brokerage Branding",
    date: "Jun 20, 2025",
    quote:
      "Tino has been nothing short of amazing. If you're looking for someone who is going to be detailed, timely, communicate effectively and professional. He is your guy! I was trying to run our social media platforms myself. He completely took the load off and his work is impeccable.",
  },
  {
    job: "Social Media Marketing",
    date: "Mar 5, 2026 – Apr 5, 2026",
    quote:
      "Tino is AMAZING! He helped us get on track with social media and strategy. He created systems and guided our US team to create a scalable and repeatable process we can actually stick to. We're finally consistent and seeing results.",
  },
  {
    job: "Freelance Social Media Manager for Luxury Real Estate Brand",
    date: "Sep 2, 2025 – Oct 15, 2025",
    quote:
      "Working with Tino has been wonderful - he is super plugged in, understood our business model immediately and immersed himself fully into our region, market, knows exactly who our competitors are. He is super innovative, and his ideas not only gave us traction on our organic channel, but his assets also performed really well as paid ads, and gave us great ideas on paid ads etc. Ive recommended him to many friends of mine, and theyre equally happy. 10/10 for Tino, dont doubt it for a second",
    tag: "Clear Communicator",
  },
  {
    job: "Sports Social Media Manager needed to grow first 1,000 followers",
    date: "Jan 23, 2026 – Feb 24, 2026",
    quote:
      "Tino was great to work with! Very prepared, responsive, and took and applied feedback in a fast efficient way. I would hire Tino again and recommend him for other projects.",
  },
];

/* ---------- page ---------- */
export default function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="shell nav-inner">
          <a href="#top" className="wordmark">Tino Nyazika</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
            <a href="#reviews">Reviews</a>
          </div>
          <a className="button button-light nav-cta" href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-ghost" aria-hidden="true">Portfolio</div>
        <div className="hero-copy">
          <h1>
            Grow your reach.<br />
            Your reputation.<br />
            <em>Your revenue.</em>
          </h1>
          <p>
            I'm Tino — I build brands through organic content systems, Reels and
            carousels, so you become the go-to brand in your industry.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
              Message me on Upwork
            </a>
            <a className="button button-outline" href="#work">See the work</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio preview">
          <div className="phone-shell phone-left" aria-hidden="true">
            <div className="phone-island" />
            <div className="mini-screen compact-stat">
              <small>Organic views</small>
              <strong>1M+</strong>
              <span>Generated for clients</span>
            </div>
          </div>
          <div className="phone-shell phone-center">
            <div className="phone-island" />
            <div className="phone-status"><span>9:41</span><span>•••</span></div>
            <div className="phone-brand">Tino</div>
            <div className="phone-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="phone-img" src="/_Tino's Portfolio 2.2. Final.png" alt="Portrait of Tino Nyazika" />
            </div>
            <div className="phone-message">
              <strong>Tino Nyazika</strong>
              <span>Build a brand that grows your reach, your reputation, and your revenue</span>
            </div>
          </div>
          <div className="phone-shell phone-right" aria-hidden="true">
            <div className="phone-island" />
            <div className="mini-screen metric-screen compact-stat">
              <small>Leads generated</small>
              <strong>536</strong>
              <span>From Reels &amp; infographics</span>
              <div className="metric-bars"><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section id="help" className="section-tight services-band">
        <div className="shell">
          <Reveal className="section-heading compact">
            <p className="section-kicker">What I do</p>
            <h2 className="title-md">I can help you by…</h2>
          </Reveal>
          <Reveal group className="help-grid">
            {helpItems.map((item) => (
              <article className="help-card" key={item.title}>
                <span className="help-check" aria-hidden="true">✓</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section-tight shell">
        <Reveal className="section-heading compact">
          <p className="section-kicker">Selected work</p>
          <h2 className="title-md">Content that earns attention and converts it.</h2>
        </Reveal>

        {reelGroups.map((group) => (
          <Reveal className="work-group" key={group.title}>
            <h3 className="work-title">{group.title}</h3>
            <div className="reel-grid">
              {group.items.map((item) => (
                <Media key={item.src} {...item} ratio="ratio-reel" />
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal className="work-group">
          <h3 className="work-title">Instagram Carousel</h3>
          <div className="ig-grid">
            {instagramCarousel.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-post" zoomable />
            ))}
          </div>
        </Reveal>

        <Reveal className="work-group">
          <h3 className="work-title">Real Estate Graphics</h3>
          <div className="post-grid">
            {realEstateGraphics.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-post" />
            ))}
          </div>
        </Reveal>

        <Reveal className="work-group">
          <h3 className="work-title">Info Carousel Examples</h3>
          <div className="info-grid">
            {infoCarousels.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-square" />
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-tight about-band">
        <div className="shell">
          <Reveal className="section-heading compact">
            <p className="section-kicker">My four-step process</p>
            <h2 className="title-md">To help you become the go-to brand in your industry.</h2>
          </Reveal>
          <Reveal group className="step-list">
            {steps.map((step, i) => (
              <article className={`step-card ${i % 2 ? "flip" : ""}`} key={step.number}>
                <div>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <ul>
                    {step.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="step-media">
                  <Media {...step.image} ratio="ratio-wide" />
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-tight shell proof-section">
        <Reveal className="section-heading compact">
          <p className="section-kicker">Results</p>
          <h2 className="title-md">Real numbers from real accounts.</h2>
        </Reveal>
        <Reveal group className="proof-grid">
          {proof.map(([value, label]) => (
            <div className="proof-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
        <Reveal group className="results-grid">
          {resultShots.map((shot) => (
            <Media key={shot.src} {...shot} ratio="ratio-shot" />
          ))}
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-tight services-band">
        <div className="shell">
          <Reveal className="section-heading compact">
            <p className="section-kicker">Reviews</p>
            <h2 className="title-md">5.0 from every client.</h2>
          </Reveal>
          <Reveal group className="review-grid">
            {reviews.map((r) => (
              <article className="review-card" key={r.job}>
                <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="review-job">{r.job}</p>
                <span className="review-date">{r.date}</span>
                <p className="review-quote">“{r.quote}”</p>
                {r.tag && <span className="review-tag">{r.tag}</span>}
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section id="contact" className="closing-band">
        <Reveal className="shell closing-inner">
          <div>
            <h2 className="title-md">
              Let's build your<br /><em>content system.</em>
            </h2>
            <p>
              I'd love to learn more about your business, your goals, and what's
              holding your content back. Let's see if I could be the right
              long-term social media partner for your brand.
            </p>
          </div>
          <div className="closing-actions">
            <a className="button button-primary" href={UPWORK_URL} target="_blank" rel="noopener noreferrer">
              Message me on Upwork
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer">
        <Reveal className="shell footer-top">
          <div>
            <a href="#top" className="footer-name">Tino Nyazika</a>
            <p>Build a brand that grows your reach, your reputation, and your revenue.</p>
          </div>
        </Reveal>
        <div className="shell footer-bottom">
          <span>© 2026 Tino Nyazika</span>
          <span>Strategy · Content · Growth</span>
        </div>
      </footer>
    </main>
  );
}