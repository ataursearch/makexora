/**
 * MAKE XORA — Afreen Digital Growth Assistant Widget
 * Instant answers across SEO, Social Media, Paid Ads, Web Dev & Pricing
 */

(function () {
  'use strict';

  const KNOWLEDGE_BASE = {
    name: "Afreen",
    role: "Make Xora Growth Assistant",
    categories: [
      { id: "seo", title: "SEO & AI Search Visibility" },
      { id: "social", title: "Social Media Management" },
      { id: "ads", title: "Media Buying & Paid Ads" },
      { id: "web", title: "Full-Stack Web Development" },
      { id: "pricing", title: "Pricing & Retainers" },
      { id: "agency", title: "How We Work & Onboarding" }
    ],
    featured: ["seo-ai-combo", "social-included", "ads-vs-social", "web-tech", "pricing-scopes", "guarantees"],
    questions: [
      {
        id: "seo-ai-combo",
        cat: "seo",
        q: "How do traditional SEO and AI Search (GEO & AEO) work together?",
        short: "AI visibility is built directly on the foundation of technical SEO and authoritative content.",
        detail: [
          "AI assistants like ChatGPT, Gemini, Perplexity, and Google AI Overviews do not invent answers from scratch. They synthesize facts and citations from crawlable, structured, and authoritative websites.",
          "When we optimize your technical health, structured schema data, topical authority, and high-quality backlinks for Google, we simultaneously provide the entity signals that AI engines need to cite and recommend your brand."
        ],
        cta: { text: "Explore SEO & AI Search", href: "services/seo-ai-search.html" },
        related: ["guarantees", "first-30-days"]
      },
      {
        id: "first-30-days",
        cat: "seo",
        q: "What actually happens during the first 30 days of an SEO engagement?",
        short: "Weeks 1–2 focus on technical audits and baselines; weeks 3–4 deploy high-priority fixes and schema.",
        detail: [
          "Week 1 & 2: Complete technical crawl, competitor keyword gap analysis, AI surface visibility audit, and roadmap prioritization.",
          "Week 3 & 4: Direct execution of critical technical fixes, Core Web Vitals optimizations, structured data implementation, and production of the first optimized content.",
          "Day 30: Executive working session reviewing what shipped, early crawl improvements, and the 90-day trajectory."
        ],
        cta: { text: "Get Your Free Audit", href: "contact.html?service=audit" },
        related: ["seo-ai-combo", "guarantees"]
      },
      {
        id: "guarantees",
        cat: "seo",
        q: "Can you guarantee #1 rankings or specific AI citations?",
        short: "No honest agency can guarantee #1 rankings, and you should be wary of any that do.",
        detail: [
          "Google evaluates hundreds of dynamic ranking signals, and AI engines continuously update retrieval algorithms without advance notice.",
          "What Make Xora guarantees is rigorous, transparent execution based on your real search data, white-hat methodology, and unfiltered monthly reporting that documents every win, baseline, and strategic adjustment."
        ],
        cta: { text: "Review Verified Results", href: "portfolio.html" },
        related: ["seo-ai-combo", "pricing-scopes"]
      },
      {
        id: "social-included",
        cat: "social",
        q: "What is included in Make Xora's monthly social media management?",
        short: "Complete end-to-end management: content creation, reels, captions, scheduling, and community replies.",
        detail: [
          "Our packages ($199 Starter, $299 Growth, $329 Premium) cover custom-designed graphics, short-form video/reels, full editorial calendars, SEO-optimized captions, hashtag research, and comment/DM management.",
          "We handle publishing across Meta (Facebook & Instagram), TikTok, YouTube, LinkedIn, and Pinterest so your brand stays consistently active without taking time away from your core operations."
        ],
        cta: { text: "View Social Packages", href: "services/social-media.html" },
        related: ["ads-vs-social", "pricing-scopes"]
      },
      {
        id: "ads-vs-social",
        cat: "ads",
        q: "How does Paid Media Buying differ from Organic Social Media?",
        short: "Organic social builds community, credibility, and brand trust; Paid Media buys targeted traffic and immediate leads.",
        detail: [
          "Organic social management focuses on consistent publishing, audience retention, brand aesthetics, and community engagement.",
          "Media buying (Google Search Ads, Meta Performance Ads) deploys advertising budgets to target high-intent buyers, capture instant demand, retarget site visitors, and generate measurable ROAS (Return on Ad Spend)."
        ],
        cta: { text: "Explore Paid Media Services", href: "services/paid-advertising.html" },
        related: ["ads-budget", "social-included"]
      },
      {
        id: "ads-budget",
        cat: "ads",
        q: "What ad budget do I need to start Google Ads or Meta Ads?",
        short: "We typically recommend starting with at least $1,000–$2,500/month in ad spend for statistically significant testing.",
        detail: [
          "Ad platforms require enough conversion data for machine-learning algorithms to optimize bids and audience delivery.",
          "During the initial 30 days, we test creative variations, audience segments, and landing page angles before scaling the winning campaigns."
        ],
        cta: { text: "Discuss Campaign Budget", href: "contact.html?service=ads" },
        related: ["ads-vs-social", "pricing-scopes"]
      },
      {
        id: "web-tech",
        cat: "web",
        q: "What technologies and platforms does Make Xora support for web development?",
        short: "We build custom, high-speed websites using modern HTML5, JavaScript/TypeScript, React/Next.js, Shopify, and WordPress.",
        detail: [
          "We tailor the stack to your business model: headless custom code for maximum speed and security, Shopify for high-growth e-commerce, or WordPress/WooCommerce for flexible CMS management.",
          "Every website we engineer is mobile-first, scored 90+ on Core Web Vitals, fully accessible, and architected for search engine indexation from day one."
        ],
        cta: { text: "Explore Web Development", href: "services/web-development.html" },
        related: ["pricing-scopes", "first-30-days"]
      },
      {
        id: "pricing-scopes",
        cat: "pricing",
        q: "How does Make Xora price services and retainers?",
        short: "We offer transparent monthly retainers and custom milestone-based scopes with zero lock-in contracts.",
        detail: [
          "Social media plans start at $199–$329/mo. SEO retainers typically range from $199/mo (Foundation) to $899+/mo (Full Authority & GEO). Custom websites are scoped transparently based on specifications.",
          "All retainers run month-to-month. You own 100% of your assets, ad accounts, code repositories, and analytics data at all times."
        ],
        cta: { text: "View Transparent Pricing", href: "pricing.html" },
        related: ["first-30-days", "guarantees"]
      },
      {
        id: "international-clients",
        cat: "agency",
        q: "Do you work with businesses outside North America?",
        short: "Yes, Make Xora serves clients worldwide across North America, the UK, Europe, Australia, and Asia.",
        detail: [
          "Our workflows, dashboards, and communication channels (Slack, WhatsApp, Loom, and Google Meet) are structured to accommodate multiple time zones smoothly.",
          "Search fundamentals and digital growth frameworks are global, while local SEO and advertising campaigns are tailored specifically to your target geographic markets."
        ],
        cta: { text: "Book a Consultation", href: "contact.html" },
        related: ["pricing-scopes", "first-30-days"]
      }
    ]
  };

  function initAssistant() {
    const root = document.createElement('div');
    root.className = 'afr-root';
    root.innerHTML = `
      <button type="button" class="afr-launch" aria-haspopup="dialog" aria-expanded="false" title="Ask Afreen — Growth Assistant">
        <span class="afr-av">A</span>
        <div class="afr-launch-t">
          <b>Ask ${KNOWLEDGE_BASE.name}</b>
          <span>Digital Growth Assistant</span>
        </div>
      </button>

      <section class="afr-panel" role="dialog" aria-label="Afreen, Digital Growth Assistant" hidden>
        <div class="afr-head">
          <span class="afr-av">A</span>
          <div class="afr-head-t">
            <b>${KNOWLEDGE_BASE.name}</b>
            <span>Online · Instant Answers</span>
          </div>
          <button type="button" class="afr-head-btn afr-close-btn" aria-label="Close assistant">&times;</button>
        </div>
        <div class="afr-body" tabindex="0"></div>
        <div class="afr-foot">
          <button type="button" class="afr-foot-btn afr-home-btn">Overview</button>
          <button type="button" class="afr-foot-btn afr-cats-btn">All Topics</button>
          <a href="contact.html" class="afr-foot-btn" style="color: var(--brand-red);">Talk to Human &rarr;</a>
        </div>
      </section>
    `;
    document.body.appendChild(root);

    const launchBtn = root.querySelector('.afr-launch');
    const panel = root.querySelector('.afr-panel');
    const closeBtn = root.querySelector('.afr-close-btn');
    const body = root.querySelector('.afr-body');
    const homeBtn = root.querySelector('.afr-home-btn');
    const catsBtn = root.querySelector('.afr-cats-btn');

    function openPanel() {
      panel.hidden = false;
      launchBtn.hidden = true;
      launchBtn.setAttribute('aria-expanded', 'true');
      if (!body.children.length) renderHome();
      body.scrollTop = 0;
    }

    function closePanel() {
      panel.hidden = true;
      launchBtn.hidden = false;
      launchBtn.setAttribute('aria-expanded', 'false');
      launchBtn.focus();
    }

    launchBtn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    homeBtn.addEventListener('click', renderHome);
    catsBtn.addEventListener('click', renderCategories);

    function renderHome() {
      body.innerHTML = `
        <div class="afr-bubble agent">
          <p><b>Hi there! I'm Afreen.</b></p>
          <p>I'm Make Xora's digital growth assistant. How can I help your business grow today?</p>
        </div>
        <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em; margin-top: 4px;">Popular Questions</div>
        <div class="afr-chips-wrap">
          ${KNOWLEDGE_BASE.featured.map(id => {
            const q = KNOWLEDGE_BASE.questions.find(item => item.id === id);
            return q ? `<button type="button" class="afr-chip" data-qid="${q.id}">${q.q}</button>` : '';
          }).join('')}
        </div>
      `;
      attachChipListeners();
    }

    function renderCategories() {
      body.innerHTML = `
        <div class="afr-bubble agent">
          <p><b>Select a topic to explore:</b></p>
        </div>
        <div class="afr-chips-wrap">
          ${KNOWLEDGE_BASE.categories.map(c => `
            <button type="button" class="afr-chip" data-cat="${c.id}">
              <strong>${c.title}</strong>
            </button>
          `).join('')}
        </div>
      `;
      body.querySelectorAll('[data-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
          renderCategory(btn.getAttribute('data-cat'));
        });
      });
    }

    function renderCategory(catId) {
      const cat = KNOWLEDGE_BASE.categories.find(c => c.id === catId);
      const questions = KNOWLEDGE_BASE.questions.filter(q => q.cat === catId);

      body.innerHTML = `
        <div class="afr-bubble agent">
          <p>Questions related to <b>${cat ? cat.title : 'this topic'}</b>:</p>
        </div>
        <div class="afr-chips-wrap">
          ${questions.map(q => `
            <button type="button" class="afr-chip" data-qid="${q.id}">${q.q}</button>
          `).join('')}
        </div>
      `;
      attachChipListeners();
    }

    function renderQuestion(qId) {
      const q = KNOWLEDGE_BASE.questions.find(item => item.id === qId);
      if (!q) return;

      body.innerHTML = `
        <div class="afr-bubble user">${q.q}</div>
        <div class="afr-bubble agent">
          <p><b>${q.short}</b></p>
          ${q.detail.map(d => `<p>${d}</p>`).join('')}
          ${q.cta ? `
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--border-light);">
              <a href="${q.cta.href}" style="font-weight: 700; color: var(--brand-red); display: inline-flex; align-items: center; gap: 4px;">
                ${q.cta.text} &rarr;
              </a>
            </div>
          ` : ''}
        </div>
        ${q.related && q.related.length ? `
          <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.06em; margin-top: 8px;">Related Questions</div>
          <div class="afr-chips-wrap">
            ${q.related.map(rid => {
              const rq = KNOWLEDGE_BASE.questions.find(item => item.id === rid);
              return rq ? `<button type="button" class="afr-chip" data-qid="${rq.id}">${rq.q}</button>` : '';
            }).join('')}
          </div>
        ` : ''}
      `;
      attachChipListeners();
      body.scrollTop = 0;
    }

    function attachChipListeners() {
      body.querySelectorAll('[data-qid]').forEach(btn => {
        btn.addEventListener('click', () => {
          renderQuestion(btn.getAttribute('data-qid'));
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initAssistant);

})();
