/**
 * MAKE XORA — Main Interactive Engine
 * Floating Pill Navbar, 3D Dotted Canvas Globe, Bento Spotlight,
 * Interactive Playground, Pricing Engine, FAQ Accordion & Hero Slider
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. FLOATING PILL NAVBAR SCROLL HANDLER
  // ==========================================================================
  function initFloatingNav() {
    const navWrapper = document.querySelector('.floating-nav-wrapper') || document.querySelector('.ref-navbar-header');
    if (!navWrapper) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navWrapper.classList.add('scrolled');
      } else {
        navWrapper.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.nav-mobile-btn') || document.querySelector('.ref-mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('active');
        mobileDrawer.style.right = '0';
        document.body.style.overflow = 'hidden';
      });

      if (drawerClose) {
        drawerClose.addEventListener('click', () => {
          mobileDrawer.classList.remove('active');
          mobileDrawer.style.right = '-100%';
          document.body.style.overflow = '';
        });
      }

      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('active');
          mobileDrawer.style.right = '-100%';
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ==========================================================================
  // 2. HERO SLIDER CONTROLS (MOCKUP ACCURATE)
  // ==========================================================================
  function initHeroSlider() {
    const prevBtn = document.getElementById('heroSliderPrev');
    const nextBtn = document.getElementById('heroSliderNext');
    const textEl = document.getElementById('heroSliderText');

    if (!textEl) return;

    const slides = [
      "Turn ideas into impact faster than ever.",
      "Rank #1 on Google and get cited by ChatGPT.",
      "Scale your brand with viral high-retention reels.",
      "Maximize return on ad spend with custom funnels."
    ];

    let current = 0;

    function updateSlide(idx) {
      current = (idx + slides.length) % slides.length;
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = slides[current];
        textEl.style.opacity = '1';
      }, 150);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => updateSlide(current - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => updateSlide(current + 1));
    }

    // Auto rotate every 6 seconds
    setInterval(() => {
      updateSlide(current + 1);
    }, 6000);
  }

  // ==========================================================================
  // 3. BENTO CARDS SPOTLIGHT HOVER EFFECT
  // ==========================================================================
  function initBentoSpotlight() {
    const cards = document.querySelectorAll('.bento-card, .ref-service-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ==========================================================================
  // 4. 3D DOTTED CANVAS GLOBE (VIDEO 00:18 - 00:22)
  // ==========================================================================
  function initDottedGlobe() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const radius = Math.min(width, height) * 0.44;
    const centerX = width / 2;
    const centerY = height / 2;

    // Generate latitude/longitude dot grid
    const dots = [];
    const latLines = 26;
    const lonStep = 18;

    for (let i = 0; i <= latLines; i++) {
      const lat = (Math.PI / latLines) * i - Math.PI / 2;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const circumference = 2 * Math.PI * radius * cosLat;
      const count = Math.max(8, Math.floor(circumference / lonStep));

      for (let j = 0; j < count; j++) {
        const lon = (2 * Math.PI / count) * j;
        dots.push({
          x: radius * cosLat * Math.sin(lon),
          y: radius * sinLat,
          z: radius * cosLat * Math.cos(lon),
          baseSize: 1.5
        });
      }
    }

    // Key client network hubs (Canada, USA, UK, Australia, UAE, Bangladesh)
    const hubs = [
      { lat: 0.76, lon: -1.4, name: "Toronto / Kitchener (#1 Rank)" },
      { lat: 0.71, lon: -1.3, name: "New York" },
      { lat: 0.90, lon: 0.0, name: "London" },
      { lat: -0.59, lon: 2.64, name: "Sydney" },
      { lat: 0.44, lon: 0.96, name: "Dubai" },
      { lat: 0.41, lon: 1.58, name: "Dhaka HQ" }
    ];

    const hubPoints = hubs.map(h => ({
      x: radius * Math.cos(h.lat) * Math.sin(h.lon),
      y: radius * Math.sin(h.lat),
      z: radius * Math.cos(h.lat) * Math.cos(h.lon),
      name: h.name
    }));

    let rotationAngle = 0;
    const tiltAngle = 0.35; // gentle natural Earth tilt
    const cosTilt = Math.cos(tiltAngle);
    const sinTilt = Math.sin(tiltAngle);

    function render() {
      ctx.clearRect(0, 0, width, height);

      rotationAngle += 0.004;
      const cosRot = Math.cos(rotationAngle);
      const sinRot = Math.sin(rotationAngle);

      // Draw background atmospheric halo
      const haloGrad = ctx.createRadialGradient(centerX, centerY + radius * 0.4, radius * 0.2, centerX, centerY, radius * 1.15);
      haloGrad.addColorStop(0, 'rgba(229, 9, 20, 0.24)');
      haloGrad.addColorStop(0.5, 'rgba(184, 5, 14, 0.08)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Render dotted wireframe
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Rotate Y
        const rx = d.x * cosRot + d.z * sinRot;
        const rz = -d.x * sinRot + d.z * cosRot;

        // Tilt X
        const ry = d.y * cosTilt - rz * sinTilt;
        const rzFinal = d.y * sinTilt + rz * cosTilt;

        // Depth projection & cull backface dots
        if (rzFinal > -radius * 0.25) {
          const alpha = Math.max(0.12, (rzFinal + radius) / (radius * 2));
          const size = d.baseSize * (0.8 + 0.6 * (rzFinal / radius));

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
          ctx.beginPath();
          ctx.arc(centerX + rx, centerY + ry, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render highlighted client hubs with pulsing beacon
      const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.005);
      for (let i = 0; i < hubPoints.length; i++) {
        const h = hubPoints[i];

        const rx = h.x * cosRot + h.z * sinRot;
        const rz = -h.x * sinRot + h.z * cosRot;

        const ry = h.y * cosTilt - rz * sinTilt;
        const rzFinal = h.y * sinTilt + rz * cosTilt;

        if (rzFinal > 0) {
          const px = centerX + rx;
          const py = centerY + ry;

          // Glowing beacon ring
          ctx.strokeStyle = `rgba(229, 9, 20, ${0.9 - pulse * 0.4})`;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(px, py, 5 + pulse * 6, 0, Math.PI * 2);
          ctx.stroke();

          // Center solid point (stark white beacon)
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(px, py, 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Label
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.font = '600 10px "Space Grotesk", sans-serif';
          ctx.fillText(h.name, px + 8, py - 4);
        }
      }

      requestAnimationFrame(render);
    }

    render();

    window.addEventListener('resize', () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    });
  }

  // ==========================================================================
  // 5. INTERACTIVE PLAYGROUND / TOOL DISCOVERY (VIDEO 00:23 - 00:26)
  // ==========================================================================
  const PLAYGROUND_DATA = {
    "seo": {
      title: "Search & Generative AI Optimization",
      command: "makexora rank --audit --surface google,chatgpt,perplexity",
      output: `[2026-11-12] Auditing Dual-Surface Visibility for Client URL...
✓ Technical Health Score: 98/100 (Core Web Vitals Pass)
✓ Google Search: #1 Organic Position for Primary Intent Queries
✓ Google AI Overview: Direct Entity Source Citation Verified
✓ ChatGPT Search: Brand Cited in Top Answer Engine Synthesis
✓ Output: +250% Organic Leads in 90-Day Execution Window.`
    },
    "social": {
      title: "Viral Organic Social Media Engine",
      command: "makexora social --campaign reel-dominance --platforms ig,fb,tiktok",
      output: `[2026-11-12] Launching 30-Day Omnichannel Publishing Calendar...
✓ High-Retention Video Reels Formatted & Optimized
✓ SEO-Engineered Captions & Keyword-Clustered Hashtags
✓ Community Outreach: 100% Comments & Inbound DMs Managed
✓ Result: 3.4× Average Engagement Rate Lift across 50+ Accounts.`
    },
    "ads": {
      title: "Data-Driven Media Buying & ROAS",
      command: "makexora ads --channels google-search,meta-capi --optimize roas",
      output: `[2026-11-12] Synchronizing Full-Funnel Advertising Campaigns...
✓ Google Ads: Search & High-Intent Conversion Tracking Live
✓ Meta Ads: Server-Side CAPI + Dynamic Retargeting Engaged
✓ Target ROAS Achieved: 4.2× Return on Advertising Spend
✓ 100% Client Ownership of Pixel, Ad Accounts & Creative Assets.`
    },
    "web": {
      title: "Full-Stack Custom Web Engineering",
      command: "makexora build --stack nextjs,tailwind,shopify --speed 99",
      output: `[2026-11-12] Deploying High-Performance Digital Flagship...
✓ Lighthouse Performance Score: 99/100 (Mobile & Desktop)
✓ Custom 3D Animations & Frictionless Conversion Architecture
✓ Native Schema.org JSON-LD Entity Graph Injected
✓ Turnaround: 12-Day Sprint from Figma Prototype to Live Production.`
    }
  };

  function initPlayground() {
    const tabButtons = document.querySelectorAll('.playground-tab-btn');
    const titleEl = document.getElementById('playgroundTerminalTitle');
    const commandEl = document.getElementById('playgroundCommand');
    const outputEl = document.getElementById('playgroundOutput');

    if (!tabButtons.length || !outputEl) return;

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.getAttribute('data-tool');
        const data = PLAYGROUND_DATA[key];
        if (data) {
          if (titleEl) titleEl.textContent = data.title;
          if (commandEl) commandEl.textContent = data.command;
          outputEl.textContent = data.output;
        }
      });
    });
  }

  // ==========================================================================
  // 6. PRICING ENGINE SWITCHER (VIDEO 00:31 - 00:33)
  // ==========================================================================
  function initPricingSwitcher() {
    const buttons = document.querySelectorAll('.pricing-switcher-btn');
    const panels = document.querySelectorAll('.pricing-category-panel');

    if (!buttons.length || !panels.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panels.forEach(panel => {
          if (panel.id === target) {
            panel.style.display = 'grid';
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 7. FAQ ACCORDION (VIDEO 00:34 - 00:35)
  // ==========================================================================
  function initFaq() {
    const items = document.querySelectorAll('.faq-card-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-trigger-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        items.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isOpen);
      });
    });
  }

  // ==========================================================================
  // 8. HERO CARDS STEPPER CONTROLLER
  // ==========================================================================
  function initHeroCardsStepper() {
    const step1 = document.getElementById('featStep1') || document.getElementById('heroStep1');
    const step2 = document.getElementById('featStep2') || document.getElementById('heroStep2');
    const prevBtn = document.getElementById('featPrevBtn') || document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('featNextBtn') || document.getElementById('heroNextBtn');
    const deck1 = document.getElementById('featCardsDeck1') || document.getElementById('heroCardDeck1');
    const deck2 = document.getElementById('featCardsDeck2') || document.getElementById('heroCardDeck2');

    if (!deck1 || !deck2) return;

    let currentStep = 1;

    function goToStep(step) {
      currentStep = step;
      if (currentStep === 1) {
        if (step1) step1.classList.add('active');
        if (step2) step2.classList.remove('active');
        deck2.style.opacity = '0';
        deck2.style.transform = 'translateX(10px)';
        setTimeout(() => {
          deck2.style.display = 'none';
          deck1.style.display = 'flex';
          setTimeout(() => {
            deck1.style.opacity = '1';
            deck1.style.transform = 'translateX(0)';
          }, 20);
        }, 150);
      } else {
        if (step2) step2.classList.add('active');
        if (step1) step1.classList.remove('active');
        deck1.style.opacity = '0';
        deck1.style.transform = 'translateX(-10px)';
        setTimeout(() => {
          deck1.style.display = 'none';
          deck2.style.display = 'flex';
          setTimeout(() => {
            deck2.style.opacity = '1';
            deck2.style.transform = 'translateX(0)';
          }, 20);
        }, 150);
      }
    }

    if (step1) step1.addEventListener('click', () => goToStep(1));
    if (step2) step2.addEventListener('click', () => goToStep(2));
    if (prevBtn) prevBtn.addEventListener('click', () => goToStep(currentStep === 1 ? 2 : 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToStep(currentStep === 1 ? 2 : 1));
  }

  // ==========================================================================
  // DOM READY INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initFloatingNav();
    initHeroSlider();
    initBentoSpotlight();
    initDottedGlobe();
    initPlayground();
    initPricingSwitcher();
    initFaq();
    initHeroCardsStepper();
  });

})();
