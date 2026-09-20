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
const UPWORK_URL = "https://www.upwork.com/freelancers/YOUR-PROFILE"; // <- replace
// Images live in /public/portfolio/  (filenames below)

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
      { src: "/portfolio/personal-branding-1.png", label: "Personal branding Reel 1" },
      { src: "/portfolio/personal-branding-2.png", label: "Personal branding Reel 2" },
      { src: "/portfolio/personal-branding-3.png", label: "Personal branding Reel 3" },
    ],
  },
  {
    title: "Fitness & Sports",
    items: [
      { src: "/portfolio/fitness-1.png", label: "Fitness Reel 1" },
      { src: "/portfolio/fitness-2.png", label: "Fitness Reel 2" },
      { src: "/portfolio/sports-1.png", label: "Sports Reel" },
    ],
  },
  {
    title: "Real Estate Flip & Fix Investing",
    items: [
      { src: "/portfolio/real-estate-reel-1.png", label: "Flip & fix Reel 1" },
      { src: "/portfolio/real-estate-reel-2.png", label: "Flip & fix Reel 2" },
      { src: "/portfolio/real-estate-reel-3.png", label: "Flip & fix Reel 3" },
    ],
  },
];

const instagramCarousel = Array.from({ length: 9 }, (_, i) => ({
  src: `/portfolio/carousel-${i + 1}.png`,
  label: `Instagram carousel slide ${i + 1}`,
}));

const realEstateGraphics = [
  { src: "/portfolio/re-graphic-1.png", label: "Closing announcement graphic" },
  { src: "/portfolio/re-graphic-2.png", label: "Property listing graphic" },
  { src: "/portfolio/re-graphic-3.png", label: "Property teaser graphic" },
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
    image: { src: "/portfolio/process-1-reach.png", label: "Reach +162% and Qualified Profile Visits +138% analytics" },
  },
  {
    number: "02",
    title: "Strategy & Competitor Audit",
    points: [
      "I audit your current presence, research your industry and analyse what is already working for your competitors.",
      "This reveals the content gaps and opportunities your brand can own.",
    ],
    image: { src: "/portfolio/process-2-audit.png", label: "Competitor audit table" },
  },
  {
    number: "03",
    title: "Content Strategy & Calendar",
    points: [
      "I create a custom content plan built around your vision, audience and business goals.",
      "You receive clear content pillars and a structured calendar for approval before anything is produced.",
    ],
    image: { src: "/portfolio/process-3-calendar.png", label: "Content calendar spreadsheet" },
  },
  {
    // TODO: your slides only showed 3 steps — replace with your real step 4
    number: "04",
    title: "Content Production & Growth Reporting",
    points: [
      "I create, schedule and publish your content, keeping your involvement minimal.",
      "I track results and keep refining the system around what performs best.",
    ],
    image: { src: "/portfolio/process-4.png", label: "Step 4 visual" },
  },
];

const proof = [
  ["906K", "Instagram views · 30 days"],
  ["753K", "Facebook video views"],
  ["633K", "TikTok video views · 7 days"],
  ["+162%", "Reach growth · 90 days"],
];

const resultShots = [
  { src: "/portfolio/results-ig-1.png", label: "Instagram: 521,598 views in 90 days", caption: "Instagram · 521,598 views" },
  { src: "/portfolio/results-ig-2.png", label: "Instagram: 906,221 views in 30 days", caption: "Instagram · 906,221 views" },
  { src: "/portfolio/results-fb.png", label: "Facebook: 322,876 views, 752,911 video views, 2,483 profile activity", caption: "Facebook · 752,911 video views" },
  { src: "/portfolio/results-tt-1.png", label: "TikTok: 354,984 video views", caption: "TikTok · 354,984 views" },
  { src: "/portfolio/results-tt-2.png", label: "TikTok: 633,390 video views", caption: "TikTok · 633,390 views" },
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

/* ---------- building blocks ---------- */
function Media({ src, label, ratio = "ratio-post", play = false, caption }) {
  return (
    <figure className="pf-fig">
      <div className={`pf-media ${ratio}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} loading="lazy" decoding="async" />
        {play && <span className="pf-play" aria-hidden="true">▶</span>}
      </div>
      {caption && <figcaption className="pf-caption">{caption}</figcaption>}
    </figure>
  );
}

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
              <img className="phone-img" src="/portfolio/tino-portrait.png" alt="Portrait of Tino Nyazika" />
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
          <div className="section-heading compact">
            <p className="section-kicker">What I do</p>
            <h2 className="title-md">I can help you by…</h2>
          </div>
          <div className="help-grid">
            {helpItems.map((item) => (
              <article className="help-card" key={item.title}>
                <span className="help-check" aria-hidden="true">✓</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section-tight shell">
        <div className="section-heading compact">
          <p className="section-kicker">Selected work</p>
          <h2 className="title-md">Content that earns attention and converts it.</h2>
        </div>

        {reelGroups.map((group) => (
          <div className="work-group" key={group.title}>
            <h3 className="work-title">{group.title}</h3>
            <div className="reel-grid">
              {group.items.map((item) => (
                <Media key={item.src} {...item} ratio="ratio-reel" play />
              ))}
            </div>
          </div>
        ))}

        <div className="work-group">
          <h3 className="work-title">Instagram Carousel</h3>
          <div className="ig-grid">
            {instagramCarousel.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-post" />
            ))}
          </div>
        </div>

        <div className="work-group">
          <h3 className="work-title">Real Estate Graphics</h3>
          <div className="post-grid">
            {realEstateGraphics.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-post" />
            ))}
          </div>
        </div>

        <div className="work-group">
          <h3 className="work-title">Info Carousel Examples</h3>
          <div className="info-grid">
            {infoCarousels.map((item) => (
              <Media key={item.src} {...item} ratio="ratio-square" />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-tight about-band">
        <div className="shell">
          <div className="section-heading compact">
            <p className="section-kicker">My four-step process</p>
            <h2 className="title-md">To help you become the go-to brand in your industry.</h2>
          </div>
          <div className="step-list">
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
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-tight shell proof-section">
        <div className="section-heading compact">
          <p className="section-kicker">Results</p>
          <h2 className="title-md">Real numbers from real accounts.</h2>
        </div>
        <div className="proof-grid">
          {proof.map(([value, label]) => (
            <div className="proof-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="results-grid">
          {resultShots.map((shot) => (
            <Media key={shot.src} {...shot} ratio="ratio-shot" />
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-tight services-band">
        <div className="shell">
          <div className="section-heading compact">
            <p className="section-kicker">Reviews</p>
            <h2 className="title-md">5.0 from every client.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((r) => (
              <article className="review-card" key={r.job}>
                <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="review-job">{r.job}</p>
                <span className="review-date">{r.date}</span>
                <p className="review-quote">“{r.quote}”</p>
                {r.tag && <span className="review-tag">{r.tag}</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section id="contact" className="closing-band">
        <div className="shell closing-inner">
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
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div>
            <a href="#top" className="footer-name">Tino Nyazika</a>
            <p>Build a brand that grows your reach, your reputation, and your revenue.</p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Tino Nyazika</span>
          <span>Strategy · Content · Growth</span>
        </div>
      </footer>
    </main>
  );
}











// export const metadata = {
//   title: "Tino Nyazika | Growth Social Media Manager",
//   description:
//     "Tino Nyazika builds organic content systems that turn attention into measurable growth for ambitious brands.",
//   openGraph: {
//     title: "Tino Nyazika | Growth Social Media Manager",
//     description: "Strategy first, content second, growth always.",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
// };

// const process = [
//   {
//     number: "01",
//     title: "Strategy",
//     copy: "I get clear on your brand, your audience, and what growth needs to look like before anything gets made.",
//   },
//   {
//     number: "02",
//     title: "Content",
//     copy: "I build a content system, not one-off posts: repeatable formats, a clear cadence, and a voice people remember.",
//   },
//   {
//     number: "03",
//     title: "Growth",
//     copy: "I track what turns attention into real outcomes, then keep refining the system around what works.",
//   },
// ];

// const services = [
//   ["Social strategy", "A focused roadmap built around your audience, goals, and strongest opportunities."],
//   ["Content systems", "Repeatable formats and workflows that make consistent, high-quality publishing possible."],
//   ["Growth & community", "Organic growth shaped by useful content and genuine audience relationships."],
//   ["Analytics & iteration", "Clear reporting that connects content performance to the outcomes that matter."],
// ];

// const proof = [
//   ["3.2M+", "Organic reach"],
//   ["40+", "Brands supported"],
//   ["6×", "Average engagement lift"],
//   ["12", "Markets reached"],
// ];

// function ImagePlaceholder({ label, tall = false }) {
//   return (
//     <div
//       className={`image-placeholder ${tall ? "image-placeholder-tall" : ""}`}
//       role="img"
//       aria-label={label}
//     >
//       <span>{label}</span>
//       <small>Image placeholder</small>
//     </div>
//   );
// }

// export default function Index() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-background text-foreground">
//       <nav className="site-nav" aria-label="Main navigation">
//         <div className="shell nav-inner">
//           <a href="#top" className="wordmark">Tino Nyazika</a>
//           <div className="nav-links">
//             <a href="#work">Work</a>
//             <a href="#process">Process</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//           </div>
//           <a
//             className="button button-light nav-cta"
//             href="mailto:hello@tinonyazika.com?subject=Book%20a%20call"
//           >
//             Book a call
//           </a>
//         </div>
//       </nav>

//       <section id="top" className="hero">
//         <div className="hero-ghost" aria-hidden="true">Tino Nyazika</div>
//         <div className="hero-copy">
//           <h1>
//             Strategy first.<br />
//             Content second.<br />
//             <em>Growth always.</em>
//           </h1>
//           <p>
//             I help brands grow organically by building content systems that turn
//             attention into results — not just impressions.
//           </p>
//           <div className="button-row">
//             <a
//               className="button button-primary"
//               href="mailto:hello@tinonyazika.com?subject=Book%20a%20call"
//             >
//               Book a call
//             </a>
//             <a className="button button-outline" href="#work">See the work</a>
//           </div>
//         </div>
//         <div className="hero-visual" aria-label="Layered content system preview">
//           <div className="phone-shell phone-left" aria-hidden="true">
//             <div className="phone-island" />
//             <div className="mini-screen copy-screen">
//               <small>Strategy</small>
//               <strong>Attention needs a destination.</strong>
//               <span>Start with the outcome.</span>
//             </div>
//           </div>
//           <div className="phone-shell phone-center">
//             <div className="phone-island" />
//             <div className="phone-status"><span>9:41</span><span>•••</span></div>
//             <div className="phone-brand">Tino</div>
//             <div className="phone-portrait">
//               <ImagePlaceholder label="Portrait of Tino" tall />
//             </div>
//             <div className="phone-message">
//               <strong>Build a system.<br />Then let it compound.</strong>
//               <span>Content with a job to do.</span>
//             </div>
//           </div>
//           <div className="phone-shell phone-right" aria-hidden="true">
//             <div className="phone-island" />
//             <div className="mini-screen metric-screen">
//               <small>Organic growth</small>
//               <strong>3.2M</strong>
//               <span>Verified result placeholder</span>
//               <div className="metric-bars">
//                 <i /><i /><i /><i /><i />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="about" className="section about-band">
//         <div className="shell about-grid">
//           <div className="about-photo">
//             <ImagePlaceholder label="Tino at work" tall />
//           </div>
//           <div className="about-copy">
//             <p className="section-kicker">A little about me</p>
//             <h2>Content that earns attention — and knows what to do with it.</h2>
//             <p>
//               Hey, I'm Tino — a growth social media manager and content creator. I
//               help brands grow organically by building content systems that
//               actually convert attention into results.
//             </p>
//             <p className="supporting-copy">
//               My approach is systems-driven, not trend-led. Every idea has a role,
//               every format has a purpose, and every result teaches us what to do
//               next.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="process" className="section shell">
//         <div className="section-heading">
//           <p className="section-kicker">How it works</p>
//           <h2>A clear system for sustainable growth.</h2>
//         </div>
//         <div className="process-grid">
//           {process.map((item) => (
//             <article className="process-card" key={item.number}>
//               <div className="card-glow" aria-hidden="true" />
//               <div className="process-top">
//                 <span className="step-number">{item.number}</span>
//                 <span className="process-mark">Tino</span>
//               </div>
//               <div>
//                 <h3>{item.title}</h3>
//                 <p>{item.copy}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section id="work" className="section services-band">
//         <div className="shell">
//           <div className="section-heading split-heading">
//             <div>
//               <p className="section-kicker">What I do</p>
//               <h2>Built for momentum,<br />not content volume.</h2>
//             </div>
//             <p>
//               I bring the strategy, structure, and feedback loop brands need to
//               make organic social compound over time.
//             </p>
//           </div>
//           <div className="services-grid">
//             {services.map(([title, copy]) => (
//               <article className="service-card" key={title}>
//                 <h3>{title}</h3>
//                 <p>{copy}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section shell proof-section">
//         <div className="section-heading">
//           <p className="section-kicker">Results</p>
//           <h2>Attention is only useful when it moves something.</h2>
//           <p className="placeholder-note">
//             Placeholder figures — replace with Tino's verified results.
//           </p>
//         </div>
//         <div className="proof-grid">
//           {proof.map(([value, label]) => (
//             <div className="proof-item" key={label}>
//               <strong>{value}</strong>
//               <span>{label}</span>
//             </div>
//           ))}
//         </div>
//         <div className="logo-strip" aria-label="Client name placeholders">
//           <span>Client name</span>
//           <span>Brand partner</span>
//           <span>Client name</span>
//           <span>Brand partner</span>
//         </div>
//       </section>

//       <section className="section shell">
//         <div className="testimonial-card">
//           <span className="quote-mark">"</span>
//           <blockquote>
//             "Add a short client quote here that shows how Tino's strategy changed
//             the way the brand creates content — and the results it produced."
//           </blockquote>
//           <div className="testimonial-meta">
//             <div>
//               <strong>Client name</strong>
//               <span>Role, company</span>
//             </div>
//             <small>Testimonial placeholder</small>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="section closing-band">
//         <div className="shell closing-inner">
//           <div>
//             <h2>Let's build your<br /><em>growth engine.</em></h2>
//             <p>
//               If you're ready for a clearer, more consistent way to grow, let's
//               talk.
//             </p>
//           </div>
//           <div className="closing-actions">
//             <a href="mailto:hello@tinonyazika.com">hello@tinonyazika.com</a>
//             <a
//               className="button button-primary"
//               href="mailto:hello@tinonyazika.com?subject=Book%20a%20call"
//             >
//               Book a call
//             </a>
//           </div>
//         </div>
//       </section>

//       <footer className="site-footer">
//         <div className="shell footer-top">
//           <div>
//             <a href="#top" className="footer-name">Tino Nyazika</a>
//             <p>Strategy first, content second, growth always.</p>
//           </div>
//           <div className="social-links">
//             <a href="#instagram">Instagram</a>
//             <a href="#tiktok">TikTok</a>
//             <a href="#linkedin">LinkedIn</a>
//             <a href="#x">X</a>
//           </div>
//           <a href="mailto:hello@tinonyazika.com">hello@tinonyazika.com</a>
//         </div>
//         <div className="shell footer-bottom">
//           <span>© 2026 Tino Nyazika</span>
//           <span>Built for organic growth.</span>
//         </div>
//       </footer>
//     </main>
//   );
// }