"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experiences",
      contact: "Contact",
    },
    hero: {
      headline: "Engineering Secure Systems at Scale.",
      subheadline: "15+ years building mission-critical, cloud-native systems with strong emphasis on security, reliability, and cost efficiency.",
      supporting: "I help companies design, scale, and protect high-impact systems in complex production environments.",
      ctaExperience: "View Experience",
      ctaContact: "Contact Me",
    },
    about: {
      title: "About",
      intro1: "I am a Senior Software Engineer with over 15 years of experience designing and operating large-scale, distributed systems in production-critical environments. My background spans backend engineering, cloud-native architectures, and high-throughput data pipelines, with a consistent focus on systems that must remain reliable, secure, and cost-efficient under real-world constraints.",
      intro2: "Throughout my career, I have worked on platforms where failures directly translated into financial loss, regulatory exposure, or operational disruption. This context shaped a pragmatic engineering mindset.",
      corePrinciples: "Core Principles",
      principle1: "Design for failure — systems must remain resilient under real-world constraints",
      principle2: "Secure by default — security is integrated into architecture, not added as an afterthought",
      principle3: "Optimize continuously — identify and eliminate hidden inefficiencies that drain resources over time",
      principle4: "Clarity over hype — value measurable impact and engineering fundamentals over abstractions",
      securityFocus: "Security Focus",
      security1: "Application and cloud security — protecting sensitive data flows and reducing attack surfaces",
      security2: "Threat-aware system design — applying offensive security principles to anticipate and mitigate threats",
      security3: "API hardening — securing endpoints in high-throughput, production-critical environments",
      leadership: "Leadership & Collaboration",
      leadership1: "Senior and leadership roles — collaborating with product, infrastructure, and security teams",
      leadership2: "High-ownership environments — comfortable making technical decisions with performance, cost, and security trade-offs",
      leadership3: "Mentoring engineers — building resilient systems that scale and endure",
    },
    experience: {
      title: "Experience",
      gameplan: {
        role: "Senior Backend Engineer",
        company: "GamePlan",
        period: "Remote | Feb 2025 – Aug 2025",
        item1: "Identified and fixed a critical production issue draining ~$7k/day in infrastructure costs, preventing losses exceeding $150k",
        item2: "Designed and implemented observability stack (Prometheus + Grafana), reducing debugging time by over 40%",
        item3: "Built low-latency Go microservices supporting real-time interactions with sub-200ms response times",
        item4: "Introduced Redis caching strategies, reducing API latency by 30–45%",
      },
      independent: {
        role: "Independent Backend Engineer",
        company: "Consulting / R&D",
        period: "Remote | 2023 – 2025",
        item1: "Built Rust-based services processing thousands of events per day with strict <1s end-to-end latency requirements",
        item2: "Designed high-throughput distributed services for real-time data analysis with advanced concurrency and fault-tolerance patterns",
        item3: "Developed scalable ingestion pipelines and rule-based analysis engines focused on consistency and reliability",
      },
      beepbeep: {
        role: "Chief Technology Officer (CTO)",
        company: "Beepbeep Mobilidade",
        period: "Brazil | Oct 2021 – May 2023",
        item1: "Led technical strategy and cloud-native architecture using Go and AWS",
        item2: "Designed and operated high-availability microservices platforms",
        item3: "Implemented observability and operational best practices, reducing production incidents by 35%",
      },
      codeTheory: {
        role: "Full Stack Engineer",
        company: "Code and Theory",
        period: "Remote | Nov 2023 – Feb 2024",
        item1: "Delivered serverless backend services using AWS Lambda, S3, and API Gateway with 99.99% uptime",
        item2: "Improved data access latency by over 50% through optimized caching and routing",
      },
      orel: {
        role: "Backend Specialist / Owner",
        company: "Orel TI",
        period: "Brazil | Dec 2021 – Present",
        item1: "Built real-time content processing APIs using Go with sub-200ms response times",
        item2: "Developed large-scale data ingestion and scraping pipelines using Node.js, NestJS, and AWS Lambda",
        item3: "Delivered automation systems used in AI-driven data processing workflows",
      },
    },
    contact: {
      title: "Let's Talk",
      description: "Interested in discussing distributed systems, security, or high-performance platforms? Let's connect.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
      locationText: "São José, SC – Brazil",
      openToRemote: "Open to Remote",
      downloadResume: "Download Resume",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiências",
      contact: "Contato",
    },
    hero: {
      headline: "Engenharia de Sistemas Seguros em Escala.",
      subheadline: "15+ anos construindo sistemas críticos e nativos da nuvem com forte ênfase em segurança, confiabilidade e eficiência de custos.",
      supporting: "Ajudo empresas a projetar, escalar e proteger sistemas de alto impacto em ambientes de produção complexos.",
      ctaExperience: "Ver Experiências",
      ctaContact: "Entre em Contato",
    },
    about: {
      title: "Sobre",
      intro1: "Sou um Engenheiro de Software Sênior com mais de 15 anos de experiência projetando e operando sistemas distribuídos de grande escala em ambientes críticos de produção. Minha formação abrange engenharia de backend, arquiteturas nativas da nuvem e pipelines de dados de alto rendimento, com foco consistente em sistemas que devem permanecer confiáveis, seguros e eficientes em termos de custo sob restrições do mundo real.",
      intro2: "Ao longo da minha carreira, trabalhei em plataformas onde falhas se traduziram diretamente em perdas financeiras, exposição regulatória ou interrupção operacional. Esse contexto moldou uma mentalidade de engenharia pragmática.",
      corePrinciples: "Princípios Fundamentais",
      principle1: "Projetar para falhas — sistemas devem permanecer resilientes sob restrições do mundo real",
      principle2: "Seguro por padrão — segurança é integrada à arquitetura, não adicionada como reflexão tardia",
      principle3: "Otimizar continuamente — identificar e eliminar ineficiências ocultas que drenam recursos ao longo do tempo",
      principle4: "Clareza sobre hype — valorizar impacto mensurável e fundamentos de engenharia sobre abstrações",
      securityFocus: "Foco em Segurança",
      security1: "Segurança de aplicações e nuvem — protegendo fluxos de dados sensíveis e reduzindo superfícies de ataque",
      security2: "Design de sistemas consciente de ameaças — aplicando princípios de segurança ofensiva para antecipar e mitigar ameaças",
      security3: "Endurecimento de APIs — protegendo endpoints em ambientes de alto rendimento e críticos de produção",
      leadership: "Liderança e Colaboração",
      leadership1: "Funções sênior e de liderança — colaborando com equipes de produto, infraestrutura e segurança",
      leadership2: "Ambientes de alta responsabilidade — confortável em tomar decisões técnicas com trade-offs de desempenho, custo e segurança",
      leadership3: "Mentoria de engenheiros — construindo sistemas resilientes que escalam e perduram",
    },
    experience: {
      title: "Experiência",
      gameplan: {
        role: "Engenheiro Backend Sênior",
        company: "GamePlan",
        period: "Remoto | Fev 2025 – Ago 2025",
        item1: "Identifiquei e corrigi um problema crítico de produção que drenava ~$7k/dia em custos de infraestrutura, prevenindo perdas superiores a $150k",
        item2: "Projetei e implementei stack de observabilidade (Prometheus + Grafana), reduzindo o tempo de depuração em mais de 40%",
        item3: "Construí microsserviços Go de baixa latência suportando interações em tempo real com tempos de resposta sub-200ms",
        item4: "Introduzi estratégias de cache Redis, reduzindo a latência da API em 30–45%",
      },
      independent: {
        role: "Engenheiro Backend Independente",
        company: "Consultoria / P&D",
        period: "Remoto | 2023 – 2025",
        item1: "Construí serviços baseados em Rust processando milhares de eventos por dia com requisitos rigorosos de latência end-to-end <1s",
        item2: "Projetei serviços distribuídos de alto rendimento para análise de dados em tempo real com padrões avançados de concorrência e tolerância a falhas",
        item3: "Desenvolvi pipelines de ingestão escaláveis e motores de análise baseados em regras focados em consistência e confiabilidade",
      },
      beepbeep: {
        role: "Diretor de Tecnologia (CTO)",
        company: "Beepbeep Mobilidade",
        period: "Brasil | Out 2021 – Mai 2023",
        item1: "Liderei estratégia técnica e arquitetura nativa da nuvem usando Go e AWS",
        item2: "Projetei e operei plataformas de microsserviços de alta disponibilidade",
        item3: "Implementei observabilidade e melhores práticas operacionais, reduzindo incidentes de produção em 35%",
      },
      codeTheory: {
        role: "Engenheiro Full Stack",
        company: "Code and Theory",
        period: "Remoto | Nov 2023 – Fev 2024",
        item1: "Entreguei serviços backend serverless usando AWS Lambda, S3 e API Gateway com 99,99% de uptime",
        item2: "Melhorei a latência de acesso a dados em mais de 50% através de cache e roteamento otimizados",
      },
      orel: {
        role: "Especialista Backend / Proprietário",
        company: "Orel TI",
        period: "Brasil | Dez 2021 – Presente",
        item1: "Construí APIs de processamento de conteúdo em tempo real usando Go com tempos de resposta sub-200ms",
        item2: "Desenvolvi pipelines de ingestão e scraping de dados em grande escala usando Node.js, NestJS e AWS Lambda",
        item3: "Entreguei sistemas de automação usados em fluxos de trabalho de processamento de dados orientados por IA",
      },
    },
    contact: {
      title: "Vamos Conversar",
      description: "Interessado em discutir sistemas distribuídos, segurança ou plataformas de alto desempenho? Vamos nos conectar.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Localização",
      locationText: "São José, SC – Brasil",
      openToRemote: "Aberto a Remoto",
      downloadResume: "Baixar Currículo",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // Salvar preferência no localStorage
    const savedLang = localStorage.getItem("lang") as "en" | "pt" | null;
    if (savedLang && (savedLang === "en" || savedLang === "pt")) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    // Fechar dropdowns ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector') && !target.closest('.mobile-menu')) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [langDropdownOpen]);

  const handleLangChange = (newLang: "en" | "pt") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setLangDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 bg-dot-pattern"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 nav-transparent">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain sm:w-[60px] sm:h-[60px]"
            />
            <div className="text-sm sm:text-lg font-bold text-white whitespace-nowrap">
              <span className="hidden sm:inline">PAULO DALMAS</span>
              <span className="sm:hidden">P. DALMAS</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6 text-sm text-white">
              <a href="#home" className="hover:text-gray-300 transition-colors" onClick={closeMobileMenu}>{t.nav.home}</a>
              <a href="#about" className="hover:text-gray-300 transition-colors" onClick={closeMobileMenu}>{t.nav.about}</a>
              <a href="#experience" className="hover:text-gray-300 transition-colors" onClick={closeMobileMenu}>{t.nav.experience}</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors" onClick={closeMobileMenu}>{t.nav.contact}</a>
            </div>
            {/* Language Selector Desktop */}
            <div className="relative group language-selector">
              <button 
                className="flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="uppercase">{lang}</span>
              </button>
              <div 
                className={`absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-200 z-50 language-selector ${langDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleLangChange("en")}
                  className={`block w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors text-left ${lang === "en" ? "bg-white/10" : ""}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLangChange("pt")}
                  className={`block w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors text-left ${lang === "pt" ? "bg-white/10" : ""}`}
                >
                  PT
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Selector Mobile */}
            <div className="relative language-selector">
              <button 
                className="flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="uppercase text-xs">{lang}</span>
              </button>
              {langDropdownOpen && (
                <div 
                  className="absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden z-50 language-selector"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => handleLangChange("en")}
                    className={`block w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors text-left ${lang === "en" ? "bg-white/10" : ""}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLangChange("pt")}
                    className={`block w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors text-left ${lang === "pt" ? "bg-white/10" : ""}`}
                  >
                    PT
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/20 mobile-menu">
            <div className="max-w-[95%] mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                {t.nav.home}
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                {t.nav.about}
              </a>
              <a 
                href="#experience" 
                className="text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                {t.nav.experience}
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-12">
        <div className="max-w-[95%] mx-auto">
          <div className="hero-glass">
            <main className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12 p-12 md:p-16 lg:p-20 h-full">
              <div className="text-left flex-1 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                  {t.hero.headline}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6">
                  {t.hero.subheadline}
                </p>
                <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                  {t.hero.supporting}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#experience"
                    className="inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-md hover:border-white/40 transition-all duration-300 text-base font-medium hover:bg-white/5 text-white"
                  >
                    {t.hero.ctaExperience}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 text-base font-semibold"
                  >
                    {t.hero.ctaContact}
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="photo-bw-wrapper">
                  <Image
                    src="/me.png"
                    alt="Paulo Dalmas"
                    width={300}
                    height={300}
                    className="photo-bw"
                    priority
                    style={{
                      borderRadius: '50px',
                      filter: 'grayscale(100%)',
                    }}
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-8 md:py-12">
        <div className="max-w-[95%] mx-auto">
          <div className="hero-glass">
            <div className="p-12 md:p-16 lg:p-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">
                {t.about.title}
              </h2>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300 mb-8">
                <p>{t.about.intro1}</p>
                <p>{t.about.intro2}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{t.about.corePrinciples}</h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.principle1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.principle2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.principle3}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.principle4}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{t.about.securityFocus}</h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.security1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.security2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.security3}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{t.about.leadership}</h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.leadership1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.leadership2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{t.about.leadership3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-8 md:py-12">
        <div className="max-w-[95%] mx-auto">
          <div className="hero-glass">
            <div className="p-12 md:p-16 lg:p-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-white">
                {t.experience.title}
              </h2>
              
              <div className="space-y-12">
                {/* GamePlan */}
                <div className="border-l-2 border-white/20 pl-6 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.experience.gameplan.role}</h3>
                      <p className="text-lg text-gray-300 mb-1">{t.experience.gameplan.company}</p>
                      <p className="text-sm text-gray-400">{t.experience.gameplan.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.gameplan.item1.replace(/\$150k/g, '<strong class="text-white">$150k</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.gameplan.item2.replace(/over 40%/g, '<strong class="text-white">over 40%</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.gameplan.item3.replace(/sub-200ms/g, '<strong class="text-white">sub-200ms</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.gameplan.item4.replace(/30–45%/g, '<strong class="text-white">30–45%</strong>') }} />
                    </li>
                  </ul>
                </div>

                {/* Independent Backend Engineer */}
                <div className="border-l-2 border-white/20 pl-6 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.experience.independent.role}</h3>
                      <p className="text-lg text-gray-300 mb-1">{t.experience.independent.company}</p>
                      <p className="text-sm text-gray-400">{t.experience.independent.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.independent.item1.replace(/thousands of events per day/g, '<strong class="text-white">thousands of events per day</strong>').replace(/<1s/g, '<strong class="text-white">&lt;1s</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.independent.item2}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.independent.item3}</span>
                    </li>
                  </ul>
                </div>

                {/* Beepbeep Mobilidade - CTO */}
                <div className="border-l-2 border-white/20 pl-6 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.experience.beepbeep.role}</h3>
                      <p className="text-lg text-gray-300 mb-1">{t.experience.beepbeep.company}</p>
                      <p className="text-sm text-gray-400">{t.experience.beepbeep.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.beepbeep.item1}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.beepbeep.item2}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.beepbeep.item3.replace(/35%/g, '<strong class="text-white">35%</strong>') }} />
                    </li>
                  </ul>
                </div>

                {/* Code and Theory */}
                <div className="border-l-2 border-white/20 pl-6 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.experience.codeTheory.role}</h3>
                      <p className="text-lg text-gray-300 mb-1">{t.experience.codeTheory.company}</p>
                      <p className="text-sm text-gray-400">{t.experience.codeTheory.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.codeTheory.item1.replace(/99.99%/g, '<strong class="text-white">99.99%</strong>').replace(/99,99%/g, '<strong class="text-white">99,99%</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.codeTheory.item2.replace(/over 50%/g, '<strong class="text-white">over 50%</strong>').replace(/mais de 50%/g, '<strong class="text-white">mais de 50%</strong>') }} />
                    </li>
                  </ul>
                </div>

                {/* Orel TI */}
                <div className="border-l-2 border-white/20 pl-6 md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.experience.orel.role}</h3>
                      <p className="text-lg text-gray-300 mb-1">{t.experience.orel.company}</p>
                      <p className="text-sm text-gray-400">{t.experience.orel.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: t.experience.orel.item1.replace(/sub-200ms/g, '<strong class="text-white">sub-200ms</strong>') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.orel.item2}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-3 mt-1">•</span>
                      <span>{t.experience.orel.item3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-8 md:py-12">
        <div className="max-w-[95%] mx-auto">
          <div className="hero-glass">
            <div className="p-12 md:p-16 lg:p-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-white">
                {t.contact.title}
              </h2>
              
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {t.contact.description}
                </p>

                {/* Download Resume Button */}
                <div className="flex justify-start">
                  <a
                    href={lang === "en" ? "/Paulo Dalmas Resume.pdf" : "/Paulo Dalmas CV.pdf"}
                    download
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{t.contact.downloadResume}</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <a
                    href="mailto:dalmasjunior@gmail.com"
                    className="group flex items-center gap-4 p-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{t.contact.email}</p>
                      <p className="text-base md:text-lg text-white group-hover:text-gray-200 transition-colors">dalmasjunior@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/paulodalmas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{t.contact.linkedin}</p>
                      <p className="text-base md:text-lg text-white group-hover:text-gray-200 transition-colors">paulodalmas</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/dalmasjunior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{t.contact.github}</p>
                      <p className="text-base md:text-lg text-white group-hover:text-gray-200 transition-colors">dalmasjunior</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-6 border border-white/20 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{t.contact.location}</p>
                      <p className="text-base md:text-lg text-white">{t.contact.locationText}</p>
                      <p className="text-sm text-gray-400 mt-1">{t.contact.openToRemote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
