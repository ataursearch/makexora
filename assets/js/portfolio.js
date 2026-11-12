/**
 * MAKE XORA — Portfolio & Verified Case Studies Engine
 * Handles Case Study Modals, Filter Pills, and Screenshot Lightbox
 */

(function () {
  'use strict';

  // Authentic Case Studies Data from verified client campaigns
  window.MAKE_XORA_PORTFOLIO = [
    {
      id: "cs-001",
      client: "Cava Granite",
      category: "seo",
      industry: "Granite & Natural Stone Countertops",
      location: "Kitchener, ON, Canada",
      projectType: "Local SEO & Commercial Search Dominance",
      featuredResult: "#1 Organic Google Ranking",
      description: "Dominating high-intent local and commercial search terms for custom countertops across Kitchener-Waterloo.",
      coverImage: "assets/images/case-studies/cover-cs-001.png",
      coverAlt: "Cava Granite ranking #1 in Google organic search results for quartz countertops kitchener",
      services: ["Technical SEO", "On-Page SEO", "Keyword Strategy", "Content Optimization", "Internal Linking", "Local SEO"],
      metrics: [
        { label: "Top Local Query", value: "#1 Rank" },
        { label: "High-Intent Terms", value: "10+ Top 3" },
        { label: "Map & Organic", value: "Verified" }
      ],
      challenge: "Cava Granite needed to capture homeowners, interior designers, and general contractors actively looking for custom quartz and granite countertop installations in the competitive Kitchener-Waterloo region.",
      strategy: [
        "Keyword research targeting high-intent local countertop queries ('quartz countertops kitchener', 'countertops kitchener waterloo')",
        "On-page content optimization aligned with target search terms and buyer intent",
        "Internal linking improvements to strengthen topical authority across stone categories",
        "Technical SEO audit and implementation ensuring clean crawlability and lightning indexation",
        "Local SEO signals and Google Business Profile optimization for the Kitchener service area"
      ],
      results: [
        { rank: "#1", label: "Organic Google Ranking", page: "Cava Granite Homepage", keyword: "quartz countertops kitchener" },
        { rank: "#2", label: "Organic Google Ranking", page: "Quartz Countertops – Kitchener", keyword: "quartz countertops kitchener" },
        { rank: "#1", label: "Organic Google Ranking", page: "Granite Countertop Installation Guide", keyword: "setting granite countertops" }
      ],
      screenshots: [
        {
          src: "assets/images/case-studies/cs-1.png",
          alt: "Cava Granite ranking #1 in Google organic search results for quartz countertops kitchener",
          caption: "Google Search — Cava Granite at #1 organic position · quartz countertops kitchener"
        },
        {
          src: "assets/images/case-studies/cs-2.png",
          alt: "Cava Granite ranking #2 in Google organic search results for quartz countertops kitchener",
          caption: "Google Search — Cava Granite Quartz Countertops page at #2 organic position · quartz countertops kitchener"
        },
        {
          src: "assets/images/case-studies/cs-3.png",
          alt: "Cava Granite ranking #1 in Google organic search results for setting granite countertops",
          caption: "Google Search — Granite Countertop Installation Guide at #1 organic position · setting granite countertops"
        }
      ],
      takeaways: "Multiple Cava Granite landing pages were observed in prominent organic positions across different search intents. The project demonstrated robust visibility across both commercial purchase searches ('quartz countertops kitchener') and high-intent informational queries ('setting granite countertops')."
    },
    {
      id: "cs-002",
      client: "Everstruct",
      category: "seo",
      industry: "Home Builder & Custom Construction",
      location: "Toronto, ON, Canada",
      projectType: "SEO, Content Architecture & AI Search Optimization",
      featuredResult: "#1 Organic Google Ranking",
      description: "Establishing national and provincial organic dominance for construction, custom deck building, and outdoor living.",
      coverImage: "assets/images/case-studies/cover-cs-002.png",
      coverAlt: "Everstruct ranking #1 in Google organic search results for custom deck builder guide canada",
      services: ["Keyword Research", "Search Intent Optimization", "Content Strategy", "On-Page SEO", "Topical Relevance", "AI Overview Optimization"],
      metrics: [
        { label: "National Canada Query", value: "#1 Rank" },
        { label: "Provincial Query", value: "#2 Rank" },
        { label: "AI Overview", value: "Top Position" }
      ],
      challenge: "Everstruct needed to build organic search authority for high-ticket outdoor living and construction inquiries in Toronto and throughout Ontario without spending tens of thousands on high-CPC Google Search Ads.",
      strategy: [
        "In-depth topical clustering and search intent mapping for high-value construction and custom deck building queries",
        "Authoritative guide development aligned with Google's E-E-A-T and AI assistant retrieval algorithms",
        "On-page optimization targeting both Canada-wide and Ontario-specific search intent",
        "Strategic internal linking connecting informational guides to commercial consultation inquiries",
        "Structured data and entity mapping that secured placement above Google AI Overviews"
      ],
      results: [
        { rank: "#1", label: "Organic Google Ranking", page: "Custom Deck Builder Guide - Expert Deck Building", keyword: "custom deck builder guide canada" },
        { rank: "#2", label: "Organic Google Ranking", page: "Custom Deck Builder Guide - Expert Deck Building", keyword: "custom deck builder guide ontario" },
        { rank: "#1", label: "Organic Google Ranking", page: "Landscape Lighting Ideas for Toronto Backyards", keyword: "landscape lighting ideas for Toronto backyards" },
        { rank: "#1", label: "Organic Google Ranking", page: "Composite Deck vs Wood Deck Guide", keyword: "composite decking or wood toronto" }
      ],
      screenshots: [
        {
          src: "assets/images/case-studies/cs-4.png",
          alt: "Everstruct ranking #1 in Google organic search results for custom deck builder guide canada",
          caption: "Google Search — Everstruct Custom Deck Builder Guide at #1 organic position · custom deck builder guide canada"
        },
        {
          src: "assets/images/case-studies/cs-5.png",
          alt: "Everstruct ranking #2 in Google organic search results for custom deck builder guide ontario",
          caption: "Google Search — Everstruct Custom Deck Builder Guide at #2 organic position · custom deck builder guide ontario"
        },
        {
          src: "assets/images/case-studies/cs-6.png",
          alt: "Everstruct ranking #1 in Google organic search results for landscape lighting ideas for Toronto backyards",
          caption: "Google Search — Landscape Lighting Ideas at #1 organic position · landscape lighting ideas for Toronto backyards"
        },
        {
          src: "assets/images/case-studies/cs-10.png",
          alt: "Everstruct ranking #1 in Google organic search results for composite decking or wood toronto",
          caption: "Google Search — Composite Deck vs Wood Deck at #1 organic position · composite decking or wood toronto (appearing above AI Overview)"
        }
      ],
      takeaways: "Everstruct's high-value guide captured the #1 organic position in Google for national and provincial queries. Rankings appeared directly above Google AI Overviews, confirming that proper topical SEO simultaneously powers traditional and generative search visibility."
    },
    {
      id: "cs-003",
      client: "Cava Granite (Local Commercial Search)",
      category: "local",
      industry: "Granite & Countertops",
      location: "Kitchener-Waterloo, ON",
      projectType: "Local SEO & Geographic Expansion",
      featuredResult: "#2 Organic Google Ranking",
      description: "Capturing high-converting local searches for 'countertops kitchener' and multi-city geographic searches.",
      coverImage: "assets/images/case-studies/cover-cs-003.png",
      coverAlt: "Cava Granite ranking #2 in Google organic search results for countertops kitchener",
      services: ["Local Keyword Research", "Landing Page SEO", "Local Citations", "On-Page SEO"],
      metrics: [
        { label: "City-Level Target", value: "#2 Rank" },
        { label: "Regional Target", value: "#4 Rank" },
        { label: "Buyer Intent", value: "High Intent" }
      ],
      challenge: "Capturing regional countertop queries across both Kitchener and neighboring Waterloo where high-volume residential renovation searches take place.",
      strategy: [
        "Dedicated landing page optimization for geographic intent without thin door-way content",
        "On-page metadata and schema structured data indicating precise regional service coverage",
        "Consistent NAP alignment across top Canadian local business directories"
      ],
      results: [
        { rank: "#2", label: "Organic Google Ranking", page: "Quartz Countertops - Kitchener", keyword: "countertops kitchener" },
        { rank: "#4", label: "Organic Google Ranking", page: "Quartz Countertops - Kitchener", keyword: "countertops kitchener waterloo" }
      ],
      screenshots: [
        {
          src: "assets/images/case-studies/cs-7.png",
          alt: "Cava Granite ranking #2 in Google organic search results for countertops kitchener",
          caption: "Google Search — Cava Granite Quartz Countertops page at #2 organic position · countertops kitchener"
        },
        {
          src: "assets/images/case-studies/cs-8.png",
          alt: "Cava Granite ranking #4 in Google organic search results for countertops kitchener waterloo",
          caption: "Google Search — Cava Granite Quartz Countertops page at #4 organic position · countertops kitchener waterloo"
        }
      ],
      takeaways: "The targeted landing page achieved #2 for the competitive city head-term and #4 for the dual-city regional search, generating qualified direct phone inquiries and showroom visits."
    },
    {
      id: "cs-004",
      client: "Cava Granite (Commercial Investigation)",
      category: "content",
      industry: "Granite & Countertops",
      location: "Kitchener, ON",
      projectType: "Content SEO & Cost Research Intent",
      featuredResult: "#6 Organic Google Ranking",
      description: "Targeting homeowners researching material prices and cost comparisons before purchasing custom kitchen counters.",
      coverImage: "assets/images/case-studies/cover-cs-005.png",
      coverAlt: "Cava Granite ranking #6 in Google organic search results for quartz kitchen countertops cost kitchener",
      services: ["Price Guide Architecture", "Commercial Investigation Content", "Local Intent Mapping"],
      metrics: [
        { label: "Cost-Intent Query", value: "#6 Rank" },
        { label: "SERP Feature", value: "Top Snippet" },
        { label: "Audience Intent", value: "Mid-Funnel" }
      ],
      challenge: "Engaging prospects during the preliminary budget and research phase before they contact competing stone fabricators.",
      strategy: [
        "In-depth pricing breakdown guide analyzing Granite vs Quartz cost, longevity, and maintenance",
        "Local cost factors specific to Southwestern Ontario stone fabrication and installation",
        "Integrated estimate calculator CTA connecting readers directly to free quote requests"
      ],
      results: [
        { rank: "#6", label: "Organic Google Ranking", page: "Granite vs Quartz Cost - Price & Value Guide", keyword: "quartz kitchen countertops cost kitchener" }
      ],
      screenshots: [
        {
          src: "assets/images/case-studies/cs-9.png",
          alt: "Cava Granite ranking #6 in Google organic search results for quartz kitchen countertops cost kitchener",
          caption: "Google Search — Granite vs Quartz Cost guide at #6 organic position · quartz kitchen countertops cost kitchener"
        }
      ],
      takeaways: "Capturing mid-funnel pricing queries positioned Cava Granite as the transparent local authority, nurturing prospects who converted into high-ticket installation contracts."
    }
  ];

  // ==========================================================================
  // MODAL & LIGHTBOX HANDLER
  // ==========================================================================
  function initCaseStudyModal() {
    // Create modal elements in DOM if not present
    let modal = document.getElementById('caseStudyModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'caseStudyModal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-card">
          <button class="modal-close-btn" aria-label="Close modal">&times;</button>
          <div id="modalContent"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // Attach click listener to case study cards
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-case-id]');
      if (!trigger) return;

      const caseId = trigger.getAttribute('data-case-id');
      const cs = window.MAKE_XORA_PORTFOLIO.find(item => item.id === caseId);
      if (!cs) return;

      const contentBox = document.getElementById('modalContent');
      contentBox.innerHTML = `
        <div style="margin-bottom: 24px;">
          <span class="section-eyebrow">${cs.industry} · ${cs.location}</span>
          <h2 style="font-size: 1.85rem; margin-top: 10px; margin-bottom: 8px;">${cs.client} — ${cs.featuredResult}</h2>
          <p style="font-size: 1.05rem; color: var(--text-secondary);">${cs.description}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 28px; background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-sm);">
          ${cs.metrics.map(m => `
            <div style="text-align: center;">
              <div style="font-family: var(--font-mono); font-size: 1.3rem; font-weight: 800; color: var(--brand-red);">${m.value}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 1.25rem; margin-bottom: 10px;">The Challenge</h3>
          <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.65;">${cs.challenge}</p>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 1.25rem; margin-bottom: 12px;">Strategic Execution</h3>
          <ul style="list-style: disc; padding-left: 20px; color: var(--text-secondary); font-size: 0.96rem; line-height: 1.65;">
            ${cs.strategy.map(s => `<li style="margin-bottom: 6px;">${s}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 1.25rem; margin-bottom: 14px;">Documented Ranking Evidence</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${cs.screenshots.map(s => `
              <div style="background: var(--bg-tertiary); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); overflow: hidden; padding: 12px;">
                <img src="${s.src}" alt="${s.alt}" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--border-light);" loading="lazy">
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 8px; font-weight: 500;">${s.caption}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="background: var(--brand-red-light); border: 1px solid var(--brand-red-border); padding: 18px; border-radius: var(--radius-sm); margin-bottom: 28px;">
          <h4 style="color: var(--brand-red); font-size: 1rem; margin-bottom: 6px;">Verified Takeaways</h4>
          <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.6;">${cs.takeaways}</p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 20px; flex-wrap: wrap; gap: 12px;">
          <div style="font-size: 0.86rem; color: var(--text-muted);">Real client engagement verified by Make Xora</div>
          <a href="contact.html?service=seo" class="btn btn-primary btn-sm">Request a Similar Strategy &rarr;</a>
        </div>
      `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // ==========================================================================
  // CATEGORY FILTER
  // ==========================================================================
  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.portfolio-filter .filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cards = document.querySelectorAll('.case-card');
        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCaseStudyModal();
    initPortfolioFilter();
  });

})();
