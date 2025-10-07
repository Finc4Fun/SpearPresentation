import React, { useState, useEffect } from 'react';
import { Menu, FileText, X, ChevronLeft, ChevronRight, Globe, Radar, Network, Zap, Shield, Cpu, Database, Satellite, Users, Target, TrendingUp, Award } from 'lucide-react';

const GIDEPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  
  const logoUrl = "https://avatars.githubusercontent.com/u/89326455?s=200&v=4";
  const cdaoLogoUrl = "https://media.licdn.com/dms/image/v2/D4E0BAQHY3FTfoTbc9A/company-logo_200_200/company-logo_200_200/0/1690826329854/dod_chief_digital_and_artificial_intelligence_office_logo?e=1762992000&v=beta&t=6cd4Xzso1NnB6xgJR4i97Gkm1hq4WOGGaxedRWfKSF4";
  const gideImageUrl = "https://media.licdn.com/dms/image/v2/D4E22AQGD_rJY6tlkmA/feedshare-shrink_800/feedshare-shrink_800/0/1717686617596?e=1762992000&v=beta&t=iF1y7qat0qJELczwOpiZ43IauP7hbpas1vZaq-aXDpE";

  const slides = [
    {
      title: "Spear AI Services Support to CDAO GIDE",
      subtitle: "October 2025 | 1-Hour Presentation",
      type: "title",
      notes: "Welcome, everyone. Today, we'll dive into how Spear AI Services supports the DoD's CDAO GIDE initiative, driving cutting-edge AI to empower our military. This is about real impact—making decisions faster and keeping our warfighters ahead. Let's get started."
    },
    {
      title: "Agenda",
      type: "list",
      content: [
        "Overview of CDAO, GIDE, CJADC2 (15 min)",
        "Spear AI Services Mission & Expertise (5 min)",
        "Initial Involvement (5 min)",
        "Key Projects (5 min)",
        "Technologies & Services (5 min)",
        "Addressing Goals (5 min)",
        "Impacts (5 min)",
        "Collaboration Evolution (5 min)",
        "Value Proposition (5 min)",
        "Portfolio Fit (5 min)",
        "Innovations (5 min)",
        "Feedback (5 min)",
        "Future Plans (5 min)",
        "Commitment (5 min)",
        "Next Steps (5 min)",
        "Q&A"
      ],
      notes: "Here's our roadmap for the hour. We'll start with a deep dive into what CDAO, GIDE, and CJADC2 are—crucial context for those new to the DoD. Then, we'll walk through Spear AI Services' role, from our mission to our measurable wins and future plans. We'll wrap with Q&A. Let's begin with the big picture."
    },
    {
      title: "Overview - CDAO",
      type: "visual-content",
      icon: Shield,
      showCDAOLogo: true,
      content: [
        "Chief Digital and Artificial Intelligence Office (CDAO) under OUSD(R&E) in U.S. Department of Defense (DoD)",
        "Spearheads AI and data analytics for national security",
        "Hub for testing/deploying tools for faster military decisions"
      ],
      notes: "The CDAO is the DoD's nerve center for AI and data. Sitting under the Office of the Under Secretary of Defense for Research and Engineering, it's tasked with getting advanced tech into the hands of our military. Think of it as a lab that tests and rolls out tools to make decisions faster—whether it's spotting a threat or coordinating a response."
    },
    {
      title: "CDAO Aims",
      type: "content",
      showCDAOLogo: true,
      content: [
        "Fields CJADC2 capability to Joint Force"
      ],
      notes: "At its core, the CDAO is focused on delivering a game-changing capability called CJADC2 to the Joint Force—our Army, Navy, Air Force, Marines, and Space Force working as one. This is about wiring up the military for the 21st century, and we'll unpack what that means next."
    },
    {
      title: "Overview - CJADC2",
      type: "network-visual",
      showCDAOLogo: true,
      content: [
        "Combined Joint All-Domain Command and Control (CJADC2): DoD strategy connecting all branches and allies",
        "Integrates sensors/data across domains for rapid responses",
        "Replaces manual processes with AI-driven real-time intelligence"
      ],
      notes: "CJADC2 is the DoD's vision to link every branch and our allies into one seamless network. Imagine satellites, radars, and drones feeding data instantly across land, sea, air, space, and cyber. It's about replacing slow, paper-based processes with AI that delivers real-time intel, so commanders can act before the enemy does."
    },
    {
      title: "CDAO Role in CJADC2",
      type: "content",
      showCDAOLogo: true,
      content: [
        "CDAO took over experiment series for CJADC2 fielding"
      ],
      notes: "The CDAO stepped up to lead the charge on CJADC2, running experiments to test and refine the tech needed to make this vision real. They're the ones ensuring these systems actually work in the chaos of the battlefield, not just in a PowerPoint."
    },
    {
      title: "Overview - AC2A",
      type: "visual-content",
      icon: Zap,
      showCDAOLogo: true,
      content: [
        "Advanced Command and Control Accelerator (AC2A) in CDAO",
        "Advances CJADC2 for U.S. military/allies",
        "Provides apps, data services, experimentation",
        "Focus: data integration, AI/ML, experiments for faster C2"
      ],
      notes: "Within CDAO, the Advanced Command and Control Accelerator—or AC2A—is the engine driving CJADC2 forward. It builds apps, manages data pipelines, and runs experiments to integrate AI and machine learning. The goal? Make command and control faster and more effective across the Joint Force and our allies."
    },
    {
      title: "AC2A & GIDE",
      type: "content",
      showCDAOLogo: true,
      content: [
        "AC2A parents GIDE"
      ],
      notes: "AC2A oversees GIDE, the testing ground where these ideas come to life. Think of AC2A as the strategic brain, and GIDE as the hands-on lab where we prove what works."
    },
    {
      title: "Overview - GIDE",
      type: "globe-visual",
      showCDAOLogo: true,
      content: [
        "Global Information Dominance Experiments (GIDE): CDAO-led for strategic tech testing",
        "Originated at NORAD/NORTHCOM in Colorado",
        "Integrates global sensor data for real-time battlefield view",
        "Accelerates decisions, connects commands, detects threats via experiments",
        "Transferred to CDAO in late 2022 by DepSecDef Hicks"
      ],
      notes: "GIDE is where the rubber meets the road. Started at NORAD/NORTHCOM, it pulls data from global sensors—like satellites and underwater mics—to create a live battlefield picture. Since Deputy Secretary Hicks handed it to CDAO in 2022, GIDE's been testing tech to connect commands globally, speed up decisions, and catch every threat."
    },
    {
      title: "GIDE Aims",
      type: "gide-image",
      showCDAOLogo: true,
      content: [
        "Fields lasting CJADC2 capabilities; champions AI use cases for joint force"
      ],
      notes: "GIDE's mission is to deliver CJADC2 systems that stick—battle-tested tools that let the Joint Force dominate. It's also about proving AI's value, so every commander, from a ship captain to a general, can rely on it."
    },
    {
      title: "Services Mission & Expertise",
      type: "visual-content",
      icon: Target,
      content: [
        "Spear AI Services, rooted in Project Maven, empowers warfighters with AI/tech expertise",
        "Drives defense innovation via mission engineering/operational support",
        "Aligns with GIDE for information dominance/rapid decisions",
        "Project Maven Heritage..."
      ],
      notes: "Spear AI Services was born from Project Maven, a DoD AI trailblazer. Our mission? Empower warfighters with the best AI and tech expertise. We focus on mission engineering—designing solutions that fit real-world needs—and operational support, perfectly aligned with GIDE's push for faster, smarter decisions."
    },
    {
      title: "Initial Involvement",
      type: "content",
      content: [
        "Joined GIDE 2023 as subcontractor under George Mason PPP",
        "Provides AI/operational expertise for tech integration",
        "Ripple effect: Feeds other services team opportunities"
      ],
      notes: "In 2023, we joined GIDE as a subcontractor under George Mason's public-private partnership. Our role was to bring AI and operational know-how to integrate cutting-edge tech. This wasn't just a gig—it opened doors for our services team to grow across the DoD."
    },
    {
      title: "Key Projects & Initiatives",
      type: "visual-content",
      icon: Radar,
      content: [
        "Lead AI Integrator, Global Integration Leads, Mission Support for 18th Airborne Corps & INDOPACOM",
        "Identifies/tests/refines tech via experimentation for warfighter needs",
        "Example: Scale AI LLM Tool"
      ],
      notes: "We wear three hats in GIDE: Lead AI Integrator, Global Integration Leads, and Mission Support for the 18th Airborne Corps and INDOPACOM. We scout, test, and perfect tech through experiments, ensuring it solves real warfighter problems—like using Scale AI's LLM tool to boost decision-making."
    },
    {
      title: "Technologies, Tools, & Services",
      type: "tech-stack",
      content: [
        "Integrates Palantir Foundry (data fusion), Anduril Lattice (edge autonomy), Scale AI LLM (modeling)",
        "Mission engineering: Workflow mapping, use case ID for AI/warfighter pairing",
        "Forces at play... Rory can tell more..."
      ],
      notes: "We bring tools like Palantir's Foundry for data fusion, Anduril's Lattice for edge autonomy, and Scale AI's LLM for advanced modeling. Our mission engineering maps workflows and pinpoints use cases, ensuring tech fits warfighter needs like a glove. Rory, our expert, can dive deeper."
    },
    {
      title: "Addressing CDAO Goals",
      type: "visual-content",
      icon: Database,
      content: [
        "Supports CJADC2 with custom workflows in Foundry/Lattice, unlocking data for defense",
        "Digitizes processes, enhances analysis, speeds decisions",
        "Experiments new tech for global command collaboration",
        "Strategic Objectives..."
      ],
      notes: "We fuel CJADC2 by building custom workflows in Foundry and Lattice, tapping into massive data sets. We digitize clunky processes, sharpen analysis, and cut decision times for leaders. Plus, we experiment with new tech to link commands worldwide, aligning with CDAO's strategic goals."
    },
    {
      title: "Measurable Impacts",
      type: "impact-boxes",
      content: [
        "5 personnel drive >50% experiments in Jan exercise",
        "Introduced 11/17 techs with 18th Airborne",
        "Modernizes INDOPACOM data networks via AI",
        "Transitions Global Integration to Joint Force tool",
        "Story about counterpart contractor"
      ],
      notes: "Our five-person team punches above its weight, driving over half the experiments for GIDE's January exercise. We brought 11 of 17 techs to the 18th Airborne, modernized INDOPACOM's data networks with AI, and turned our Global Integration into a Joint Force tool. Unlike a competitor with 70 people—half unknown—we deliver."
    },
    {
      title: "Evolution of Collaboration",
      type: "timeline-visual",
      content: [
        "From 2023 subcontractor to embedded partner",
        "FSR support to INDOPACOM/18th ABC, real-time tool refining",
        "Set to grow in new year"
      ],
      notes: "Since 2023, we've gone from subcontractor to trusted partner, embedding with INDOPACOM and 18th Airborne to refine tools on the fly. Our Field Service Reps are in the thick of it, and we're poised for even bigger growth in 2026."
    },
    {
      title: "Unique Value Proposition",
      type: "visual-content",
      icon: Users,
      content: [
        "Deep warfighter understanding, pushes intel low for impact",
        "Lean team (pilots, JICOs, analysts) iterates fast, fights bureaucracy",
        "Unlike bloated contractors (e.g., 70 people, half unknown)",
        "Story about large defense contractor..."
      ],
      notes: "We get warfighters—our team of pilots, joint interface officers, and analysts pushes intel to the front lines. Unlike big contractors with 70-person teams where half are ghosts, our lean, flat crew moves fast, cuts red tape, and delivers real impact. One contractor's bloat showed us: mission focus wins."
    },
    {
      title: "Fit Within Broader Portfolio",
      type: "content",
      content: [
        "First major contract, anchors IC expansion",
        "Drives AI/operational expertise across defense",
        "Guided by Field to Learn/Value/Scale",
        "Side note: 2 Spear AI capabilities experimented in 18th ABC exercise"
      ],
      notes: "GIDE was our first big win, setting the stage for growth in the intelligence community. It's the heart of our mission to deliver AI and operational expertise across defense, guided by our Field to Learn, Value, and Scale approach. Fun fact: two Spear AI tools were tested in the 18th Airborne's last exercise."
    },
    {
      title: "Innovations & Lessons Learned",
      type: "visual-content",
      icon: Award,
      content: [
        "Pioneered global planning tools for real-time cross-theater ops",
        "Lesson: Seamless data sharing critical, via iterative processes",
        "Many firsts (e.g., UK-US digital target sharing)"
      ],
      notes: "GIDE let us pioneer global planning tools, linking commands for real-time ops across theaters. We learned seamless data sharing is everything, built through iterative processes that deliver value. We also scored firsts, like digital UK-US target sharing—a game-changer."
    },
    {
      title: "Testimonials & Feedback",
      type: "content",
      content: [
        "Supported foreign integration, AI adoption, kill chain closure, mission to 18th Airborne/INDOPACOM",
        "Earned Joint Force trust",
        "Very good company position..."
      ],
      notes: "We've supported foreign partners, AI adoption, faster kill chains, and missions for 18th Airborne and INDOPACOM. The Joint Force trusts us, and we're in a strong position to keep delivering for the DoD."
    },
    {
      title: "Future Plans",
      type: "visual-content",
      icon: TrendingUp,
      content: [
        "Scale via targeted contracts, leverage Tradewinds Award (CDAO Marketplace)",
        "Deliver AI/SME/tech innovation",
        "Focus: Concrete warfighter value via scalable solutions",
        "Deliberate client selection"
      ],
      notes: "We're scaling smart—chasing targeted contracts and leveraging our Tradewinds Award in CDAO's Marketplace for new tech. Our focus stays on delivering real value to warfighters with scalable solutions, and we're picky about our clients to keep that edge."
    },
    {
      title: "Commitment to National Security",
      type: "visual-content",
      icon: Shield,
      content: [
        "IDs pain points, adapts tech for DoD, fields fast",
        "Quarterly training via exercises for tech-capable force",
        "Mission: Field to Learn/Value/Scale keeps warfighters ahead",
        "Discussion about Ben Hines..."
      ],
      notes: "We spot warfighter pain points, adapt tech fast, and get it to the field. Through quarterly exercises, we train a tech-ready force. Our Field to Learn, Value, and Scale mission keeps our military ahead. Ben Hines, one of our stars, embodies this commitment."
    },
    {
      title: "Next Steps",
      type: "visual-content",
      icon: Target,
      content: [
        "Pursue larger contracts for AI/tech expansion in CCMDs/IC",
        "Via experimentation/iterative approach, deliver high-impact capabilities",
        "Make DoD more lethal/responsive"
      ],
      notes: "Looking ahead, we're chasing bigger contracts to expand our AI and tech footprint in combatant commands and the intel community. Our iterative, experimental approach will keep delivering capabilities that make the DoD faster and deadlier."
    },
    {
      title: "Q&A",
      subtitle: "Thank you",
      type: "title",
      notes: "That's our story—Spear AI Services turning tech into battlefield wins for GIDE. Now, let's open it up for your questions. Thank you!"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        setMenuOpen(false);
        setNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setMenuOpen(false);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const NetworkDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <defs>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Central node */}
      <circle cx="200" cy="150" r="30" fill="#0ea5e9" opacity="0.3" />
      <circle cx="200" cy="150" r="20" fill="#00d4ff" />
      <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">HQ</text>
      
      {/* Outer nodes */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + Math.cos(rad) * 100;
        const y = 150 + Math.sin(rad) * 80;
        const domains = ['Land', 'Sea', 'Air', 'Space', 'Cyber'];
        return (
          <g key={i}>
            <line x1="200" y1="150" x2={x} y2={y} stroke="#00d4ff" strokeWidth="2" opacity="0.4" />
            <circle cx={x} cy={y} r="25" fill="url(#nodeGlow)" />
            <circle cx={x} cy={y} r="15" fill="#1e3a5f" stroke="#00d4ff" strokeWidth="2" />
            <text x={x} y={y + 5} textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="bold">{domains[i]}</text>
          </g>
        );
      })}
      
      {/* Connecting lines between outer nodes */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const nextAngle = [72, 144, 216, 288, 0][i];
        const rad1 = (angle * Math.PI) / 180;
        const rad2 = (nextAngle * Math.PI) / 180;
        const x1 = 200 + Math.cos(rad1) * 100;
        const y1 = 150 + Math.sin(rad1) * 80;
        const x2 = 200 + Math.cos(rad2) * 100;
        const y2 = 150 + Math.sin(rad2) * 80;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00d4ff" strokeWidth="1" opacity="0.2" strokeDasharray="3,3" />;
      })}
    </svg>
  );

  const GlobeVisualization = () => (
    <svg viewBox="0 0 400 300" className="w-full h-64">
      <defs>
        <radialGradient id="globeGlow">
          <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Globe */}
      <circle cx="200" cy="150" r="80" fill="url(#globeGlow)" />
      <circle cx="200" cy="150" r="70" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
      
      {/* Latitude lines */}
      {[-40, -20, 0, 20, 40].map((offset, i) => (
        <ellipse key={i} cx="200" cy={150 + offset} rx="70" ry={15 - Math.abs(offset) / 4} fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
      ))}
      
      {/* Longitude lines */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <ellipse key={i} cx="200" cy="150" rx={Math.abs(Math.cos(rad)) * 70} ry="70" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" transform={`rotate(${angle} 200 150)`} />
        );
      })}
      
      {/* Sensor points */}
      {[
        { x: 150, y: 120 }, { x: 250, y: 130 }, { x: 180, y: 180 },
        { x: 220, y: 170 }, { x: 200, y: 100 }, { x: 230, y: 150 }
      ].map((point, i) => (
        <g key={i}>
          <circle cx={point.x} cy={point.y} r="8" fill="#00d4ff" opacity="0.6">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
          <circle cx={point.x} cy={point.y} r="3" fill="#ffffff" />
        </g>
      ))}
      
      {/* Satellites */}
      {[{ x: 280, y: 80 }, { x: 120, y: 70 }].map((sat, i) => (
        <g key={i}>
          <Satellite x={sat.x - 8} y={sat.y - 8} size={16} className="text-cyan-400" />
          <circle cx={sat.x} cy={sat.y} r="20" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" strokeDasharray="3,3">
            <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );

  const TechStackVisual = () => (
    <div className="flex justify-around items-center h-64">
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
          <Database size={48} className="text-cyan-400" />
        </div>
        <p className="text-cyan-400 font-bold">Palantir Foundry</p>
        <p className="text-gray-400 text-sm">Data Fusion</p>
      </div>
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
          <Network size={48} className="text-cyan-400" />
        </div>
        <p className="text-cyan-400 font-bold">Anduril Lattice</p>
        <p className="text-gray-400 text-sm">Edge Autonomy</p>
      </div>
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
          <Cpu size={48} className="text-cyan-400" />
        </div>
        <p className="text-cyan-400 font-bold">Scale AI LLM</p>
        <p className="text-gray-400 text-sm">AI Modeling</p>
      </div>
    </div>
  );

  const TimelineVisual = () => (
    <div className="flex items-center justify-center h-64">
      <div className="relative w-full max-w-3xl">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/30 via-cyan-400 to-cyan-500/30"></div>
        <div className="flex justify-between relative">
          {[
            { year: '2023', label: 'Subcontractor', icon: '🤝' },
            { year: '2024', label: 'Embedded Partner', icon: '⚡' },
            { year: '2025', label: 'Trusted Advisor', icon: '🎯' },
            { year: '2026', label: 'Strategic Growth', icon: '🚀' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-4 border-cyan-400 flex items-center justify-center text-2xl mb-4 hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-cyan-400 font-bold mb-1">{item.year}</p>
              <p className="text-gray-300 text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSlideContent = (slide) => {
    if (slide.type === 'title') {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center px-16">
          <img 
            src={logoUrl} 
            alt="Spear AI" 
            className="h-32 w-32 rounded-2xl shadow-2xl shadow-cyan-400/30 border-4 border-cyan-500/40 mb-12"
          />
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-2xl text-cyan-400">{slide.subtitle}</p>
          )}
        </div>
      );
    }

    if (slide.type === 'list') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <div className="grid grid-cols-2 gap-6">
            {slide.content.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-xl text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'network-visual') {
      return (
        <div className="px-20 py-12">
          <h2 className="text-5xl font-bold text-white mb-8">{slide.title}</h2>
          <div className="flex gap-12 items-center">
            <div className="flex-1">
              <NetworkDiagram />
            </div>
            <div className="flex-1 space-y-6">
              {slide.content.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                  <p className="text-lg text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (slide.type === 'globe-visual') {
      return (
        <div className="px-20 py-12">
          <h2 className="text-5xl font-bold text-white mb-8">{slide.title}</h2>
          <div className="flex gap-12 items-center">
            <div className="flex-1">
              <GlobeVisualization />
            </div>
            <div className="flex-1 space-y-5">
              {slide.content.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                  <p className="text-base text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (slide.type === 'tech-stack') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <TechStackVisual />
          <div className="mt-8 space-y-4">
            {slide.content.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                <p className="text-lg text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'metrics-visual') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {slide.content.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{item.metric}</div>
                <div className="text-sm text-cyan-300 mb-3 uppercase tracking-wide">{item.label}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            {slide.content.slice(3).map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{item.metric}</div>
                <div className="text-sm text-cyan-300 mb-3 uppercase tracking-wide">{item.label}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'impact-boxes') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <div className="space-y-6">
            {slide.content.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-6 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-102 hover:shadow-lg hover:shadow-cyan-400/20 flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-cyan-400">{idx + 1}</span>
                </div>
                <p className="text-xl text-gray-200 leading-relaxed flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'timeline-visual') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <TimelineVisual />
          <div className="mt-12 space-y-4">
            {slide.content.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                <p className="text-lg text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (slide.type === 'gide-image') {
      return (
        <div className="px-20 py-16">
          <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
          <div className="flex gap-12 items-center">
            <div className="flex-1">
              <img 
                src={gideImageUrl} 
                alt="GIDE CDAO" 
                className="w-full rounded-xl shadow-2xl shadow-cyan-400/30 border-2 border-cyan-500/30"
              />
            </div>
            <div className="flex-1 space-y-6">
              {slide.content.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                  <p className="text-2xl text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (slide.type === 'visual-content') {
      const IconComponent = slide.icon;
      return (
        <div className="px-20 py-16">
          <div className="flex items-center gap-6 mb-12">
            {IconComponent && (
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border-2 border-cyan-400/50 flex items-center justify-center">
                <IconComponent size={40} className="text-cyan-400" />
              </div>
            )}
            <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
          </div>
          <div className="space-y-6">
            {slide.content.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
                <p className="text-xl text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="px-20 py-16">
        <h2 className="text-5xl font-bold text-white mb-12">{slide.title}</h2>
        <div className="space-y-6">
          {slide.content.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-6 flex-shrink-0"></div>
              <p className="text-xl text-gray-200 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Spear AI Logo - Top Right on every slide */}
      <div className="fixed top-6 right-24 z-30">
        <img 
          src={logoUrl} 
          alt="Spear AI" 
          className="h-16 w-16 rounded-lg shadow-lg shadow-cyan-400/20 border-2 border-cyan-500/30"
        />
      </div>

      {/* CDAO Logo - Top Left on CDAO-related slides */}
      {slides[currentSlide].showCDAOLogo && (
        <div className="fixed top-6 left-24 z-30">
          <img 
            src={cdaoLogoUrl} 
            alt="CDAO" 
            className="h-16 w-16 rounded-lg shadow-lg shadow-cyan-400/20 border-2 border-cyan-500/30 bg-white p-1"
          />
        </div>
      )}

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 left-6 z-50 p-3 bg-slate-800/90 hover:bg-slate-700 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
      >
        <Menu className="w-6 h-6 text-cyan-400" />
      </button>

      {/* Slide Navigation Menu */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed left-0 top-0 h-full w-96 bg-gradient-to-b from-slate-900 to-slate-950 z-50 shadow-2xl border-r border-cyan-500/30 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Navigation</h3>
                <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-2">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      currentSlide === idx
                        ? 'bg-cyan-500/20 border-l-4 border-cyan-400 text-white'
                        : 'bg-slate-800/40 hover:bg-slate-800 text-gray-300 hover:text-white border-l-4 border-transparent'
                    }`}
                  >
                    <span className="text-sm text-cyan-400 font-mono">{idx + 1}</span>
                    <p className="mt-1 text-sm">{slide.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Notes Button */}
      <button
        onClick={() => setNotesOpen(!notesOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-slate-800/90 hover:bg-slate-700 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
      >
        <FileText className="w-6 h-6 text-cyan-400" />
      </button>

      {/* Notes Panel */}
      {notesOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setNotesOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 h-full w-2/5 bg-gradient-to-b from-slate-900 to-slate-950 z-50 shadow-2xl border-l border-cyan-500/30 overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Speaker Notes</h3>
                  <p className="text-sm text-cyan-400 mt-1">Slide {currentSlide + 1} of {slides.length}</p>
                </div>
                <button onClick={() => setNotesOpen(false)} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="bg-slate-800/40 p-6 rounded-lg border border-cyan-500/20">
                <p className="text-gray-200 leading-relaxed">{slides[currentSlide].notes}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Slide Counter */}
      <div className="fixed bottom-6 left-6 z-30 px-4 py-2 bg-slate-800/90 rounded-lg border border-cyan-500/30 text-cyan-400 font-mono text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Main Slide Content */}
      <div 
        className="relative h-full flex items-center justify-center cursor-pointer"
        onClick={nextSlide}
      >
        <div className="w-full max-w-7xl transition-all duration-500 ease-out">
          {renderSlideContent(slides[currentSlide])}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
          }}
          disabled={currentSlide === 0}
          className={`p-3 rounded-lg transition-all duration-300 ${
            currentSlide === 0
              ? 'bg-slate-800/40 text-gray-600 cursor-not-allowed'
              : 'bg-slate-800/90 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-400/20'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
          }}
          disabled={currentSlide === slides.length - 1}
          className={`p-3 rounded-lg transition-all duration-300 ${
            currentSlide === slides.length - 1
              ? 'bg-slate-800/40 text-gray-600 cursor-not-allowed'
              : 'bg-slate-800/90 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-400/20'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default GIDEPresentation;