import type { Locale } from "./config";

type Dictionary = {
  nav: {
    services: string;
    caseStudies: string;
    aboutUs: string;
    blog: string;
    careers: string;
    getInTouch: string;
    viewAllServices: string;
    lookingSpecific: string;
    serviceItems: {
      webDevelopment: string;
      mobileDevelopment: string;
      digitalMarketing: string;
      branding: string;
      uiuxDesign: string;
      cloudServices: string;
    };
  };
  hero: {
    titleFirst: string;
    titleSecond: string;
    description: string;
    servicesCta: string;
    quoteCta: string;
  };
  services: {
    title: string;
    description: string;
    items: {
      mvpDescription: string;
      outsourcingDescription: string;
      augmentationDescription: string;
    };
    explore: string;
    lookingSpecific: string;
    discussProject: string;
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    readCaseStudy: string;
    viewAllMobile: string;
  };
  process: {
    title: string;
    description: string;
    steps: {
      discoveryTitle: string;
      discoveryDescription: string;
      proposedTitle: string;
      proposedDescription: string;
      kickoffTitle: string;
      kickoffDescription: string;
      supportTitle: string;
      supportDescription: string;
    };
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  techStack: {
    title: string;
    description: string;
    categories: {
      aiTools: string;
      frontEnd: string;
      mobileDevelopment: string;
      backEnd: string;
      qa: string;
      uiux: string;
    };
    needSpecific: string;
    discuss: string;
  };
  whyPitchin: {
    title: string;
    description: string;
    metrics: {
      satisfactionLabel: string;
      satisfactionDescription: string;
      projectsLabel: string;
      projectsDescription: string;
      partnersLabel: string;
      partnersDescription: string;
      speedLabel: string;
      speedDescription: string;
    };
    growthTitle: string;
    growthCaption: string;
    months: string[];
  };
  testimonials: {
    title: string;
    description: string;
    trustedBy: string;
    entries: {
      rpsQuote: string;
      educationQuote: string;
      clinicQuote: string;
    };
  };
  portfolio: {
    title: string;
    description: string;
    ctaLead: string;
    ctaButton: string;
  };
  faq: {
    title: string;
    description: string;
    cta: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    brandDescription: string;
    discover: string;
    resources: string;
    contact: string;
    legal: string;
    termsConditions: string;
    privacyPolicy: string;
    allRightsReserved: string;
    terms: string;
    privacy: string;
  };
  language: {
    label: string;
    english: string;
    french: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      caseStudies: "Case Studies",
      aboutUs: "About Us",
      blog: "Blog",
      careers: "Careers",
      getInTouch: "Get in Touch",
      viewAllServices: "View All Services",
      lookingSpecific: "Looking for something specific? We've got you covered.",
      serviceItems: {
        webDevelopment: "Web Development",
        mobileDevelopment: "Mobile Development",
        digitalMarketing: "Digital Marketing",
        branding: "Branding",
        uiuxDesign: "UI/UX Design",
        cloudServices: "Cloud Services",
      },
    },
    hero: {
      titleFirst: "People-first",
      titleSecond: "Software development",
      description: "We help startups and enterprises build reliable and scalable software together with your team.",
      servicesCta: "Our Services",
      quoteCta: "Get a free quote",
    },
    services: {
      title: "Our Services",
      description: "Get software development services, built around your needs:",
      items: {
        mvpDescription: "Build scalable, custom Minimum Viable Products that are accessible from any location with an internet connection.",
        outsourcingDescription: "From definition and design, to development and testing, we provide end-to-end software outsourcing when you don't have the capacity or expertise in-house.",
        augmentationDescription: "Augment your tech teams with our developers, adding the expertise you need without the long-term commitment.",
      },
      explore: "Explore",
      lookingSpecific: "Looking for something specific?",
      discussProject: "Discuss your project",
    },
    caseStudies: {
      eyebrow: "Our Work",
      title: "Case Studies",
      description: "Real results for real businesses. See how we've helped our clients succeed.",
      viewAll: "View all cases",
      readCaseStudy: "Read case study",
      viewAllMobile: "View all case studies",
    },
    process: {
      title: "Our Process",
      description: "Human-first product teams supporting you from MVP to enterprise scale.",
      steps: {
        discoveryTitle: "Discovery",
        discoveryDescription: "Join a meeting where we discover your requirements, business goals, and project vision through collaborative workshops.",
        proposedTitle: "Proposed Solution",
        proposedDescription: "We work on your requirements and propose a detailed solution with technical architecture, timeline, and resource planning.",
        kickoffTitle: "Project Kick-off",
        kickoffDescription: "We gather the required talent, set up development environments, and transform the proposal into actionable sprint plans.",
        supportTitle: "Ongoing Support",
        supportDescription: "Benefit from comprehensive project management and continuous support throughout your engagement and beyond.",
      },
      ctaTitle: "Build with a team you can trust.",
      ctaDescription: "Human-first product teams supporting you from MVP to enterprise scale.",
      ctaButton: "Start a conversation",
    },
    techStack: {
      title: "Our Tech Stack",
      description: "Modern technologies we master to build exceptional software solutions.",
      categories: {
        aiTools: "AI Tools",
        frontEnd: "Front-End",
        mobileDevelopment: "Mobile Development",
        backEnd: "Back-End",
        qa: "QA",
        uiux: "UI/UX",
      },
      needSpecific: "Need a specific technology?",
      discuss: "Discuss your tech stack",
    },
    whyPitchin: {
      title: "Why Pitchin",
      description: "Data-driven results that speak for themselves.",
      metrics: {
        satisfactionLabel: "Client Satisfaction",
        satisfactionDescription: "Based on post-project surveys",
        projectsLabel: "Projects Delivered",
        projectsDescription: "Across 3 countries",
        partnersLabel: "Long-term Partners",
        partnersDescription: "Clients who continue collaborating",
        speedLabel: "Faster Time-to-Market",
        speedDescription: "Compared to in-house development",
      },
      growthTitle: "Client Growth Trajectory",
      growthCaption: "+50% average client growth within 6 months",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    testimonials: {
      title: "Client Testimonials",
      description: "What our partners say about working with us.",
      trustedBy: "Trusted by 20+ teams in Tunisia and MENA",
      entries: {
        rpsQuote: "Pitchin understood our business quickly. The platform is clear, practical, and helped our team save time from day one.",
        educationQuote: "It is simple for our teachers and easy for students. We finally have one clear system for homework.",
        clinicQuote: "The app is easy to use and our patients adopted it quickly. Our team now spends less time on repetitive calls.",
      },
    },
    portfolio: {
      title: "Diverse Portfolio",
      description: "Partnering with innovative companies across the globe, from startups to enterprises.",
      ctaLead: "Join our global clientele",
      ctaButton: "Start your journey",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Didn't get an answer to your question?",
      cta: "Get in touch now",
      items: [
        {
          question: "What services does Pitchin offer?",
          answer: "Pitchin specializes in MVP Development, Software Outsourcing, and Staff Augmentation. We provide end-to-end software solutions tailored to your business needs, from initial concept to enterprise-scale deployment.",
        },
        {
          question: "What is Staff Augmentation?",
          answer: "Staff Augmentation at Pitchin allows you to extend your in-house team by hiring dedicated talent for specific projects without the hassle of recruitment and onboarding. You get senior developers who integrate seamlessly into your existing workflow, scaling your team up or down as needed.",
        },
        {
          question: "How does the talent hiring process work?",
          answer: "Pitchin assesses your needs through detailed discovery sessions, screens experts based on technical skills and cultural fit, and helps integrate them seamlessly into your team. We handle all HR, payroll, and administrative tasks while you focus on building your product.",
        },
        {
          question: "What industries do Pitchin specialize in?",
          answer: "Pitchin has deep domain expertise in multiple industries including EdTech, FinTech, RiskTech, Healthcare, E-commerce, and Enterprise SaaS solutions.",
        },
        {
          question: "What technologies does Pitchin specialize in?",
          answer: "Pitchin works with a wide range of modern technologies including JavaScript/TypeScript, Python, Java, PHP, and specializes in frameworks such as React.js, Next.js, Vue.js, Node.js, and Laravel. Our tech stack is tailored to meet each project's specific requirements.",
        },
        {
          question: "What are Pitchin's engagement models?",
          answer: "Pitchin offers flexible engagement models including hourly billing for short-term projects, fixed-price for well-defined scopes, and dedicated team models for long-term partnerships. We adapt to your project size, budget, and requirements.",
        },
        {
          question: "How can I start a project with Pitchin?",
          answer: "Starting a project with Pitchin is simple: contact us by email, schedule a discovery call to discuss your vision, and we'll provide a tailored proposal within days. From there, we can begin with a pilot project or full-scale development.",
        },
        {
          question: "Do you offer ongoing support after launch?",
          answer: "Yes, we provide comprehensive post-launch support including maintenance, bug fixes, performance optimization, and feature additions. Our team remains available to ensure your software continues to perform smoothly as your business grows.",
        },
      ],
    },
    footer: {
      brandDescription: "People-first software development. We help startups and enterprises build reliable and scalable software together with your team.",
      discover: "Discover",
      resources: "Resources",
      contact: "Contact",
      legal: "Legal",
      termsConditions: "Terms & Conditions",
      privacyPolicy: "Privacy Policy",
      allRightsReserved: "All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
    },
    language: {
      label: "Language",
      english: "English",
      french: "Français",
    },
  },
  fr: {
    nav: {
      services: "Services",
      caseStudies: "Études de cas",
      aboutUs: "À propos",
      blog: "Blog",
      careers: "Carrières",
      getInTouch: "Nous contacter",
      viewAllServices: "Voir tous les services",
      lookingSpecific: "Vous cherchez quelque chose de précis ? Nous avons ce qu'il faut.",
      serviceItems: {
        webDevelopment: "Développement web",
        mobileDevelopment: "Développement mobile",
        digitalMarketing: "Marketing digital",
        branding: "Branding",
        uiuxDesign: "Design UI/UX",
        cloudServices: "Services cloud",
      },
    },
    hero: {
      titleFirst: "Le logiciel",
      titleSecond: "centré sur l'humain",
      description: "Nous aidons les startups et les entreprises à créer des logiciels fiables et évolutifs, en collaboration avec votre équipe.",
      servicesCta: "Nos services",
      quoteCta: "Demander un devis",
    },
    services: {
      title: "Nos services",
      description: "Des services logiciels pensés autour de vos besoins :",
      items: {
        mvpDescription: "Créez des MVP sur mesure, évolutifs et accessibles partout avec une connexion internet.",
        outsourcingDescription: "De la définition au design, puis au développement et aux tests, nous prenons en charge votre externalisation logicielle de bout en bout.",
        augmentationDescription: "Renforcez vos équipes tech avec nos développeurs, sans engagement long terme.",
      },
      explore: "Découvrir",
      lookingSpecific: "Vous cherchez quelque chose de précis ?",
      discussProject: "Parler de votre projet",
    },
    caseStudies: {
      eyebrow: "Nos projets",
      title: "Études de cas",
      description: "Des résultats concrets pour de vraies entreprises. Découvrez comment nous aidons nos clients à avancer.",
      viewAll: "Voir tous les cas",
      readCaseStudy: "Lire l'étude de cas",
      viewAllMobile: "Voir toutes les études de cas",
    },
    process: {
      title: "Notre processus",
      description: "Des équipes produit centrées sur l'humain pour vous accompagner du MVP à l'échelle entreprise.",
      steps: {
        discoveryTitle: "Découverte",
        discoveryDescription: "Nous échangeons avec vous pour comprendre vos besoins, vos objectifs métier et votre vision produit à travers des ateliers collaboratifs.",
        proposedTitle: "Solution proposée",
        proposedDescription: "Nous analysons vos besoins et proposons une solution détaillée avec architecture technique, planning et ressources.",
        kickoffTitle: "Lancement du projet",
        kickoffDescription: "Nous réunissons les bons profils, mettons en place les environnements et transformons la proposition en plan d'exécution concret.",
        supportTitle: "Support continu",
        supportDescription: "Profitez d'un suivi projet complet et d'un accompagnement continu pendant toute la collaboration et après la mise en ligne.",
      },
      ctaTitle: "Construisez avec une équipe de confiance.",
      ctaDescription: "Des équipes produit centrées sur l'humain pour vous accompagner du MVP à l'échelle entreprise.",
      ctaButton: "Démarrer une discussion",
    },
    techStack: {
      title: "Notre stack technique",
      description: "Des technologies modernes que nous maîtrisons pour concevoir des solutions logicielles solides.",
      categories: {
        aiTools: "Outils IA",
        frontEnd: "Front-end",
        mobileDevelopment: "Développement mobile",
        backEnd: "Back-end",
        qa: "QA",
        uiux: "UI/UX",
      },
      needSpecific: "Besoin d'une technologie précise ?",
      discuss: "Parler de votre stack",
    },
    whyPitchin: {
      title: "Pourquoi Pitchin",
      description: "Des résultats mesurables qui parlent d'eux-mêmes.",
      metrics: {
        satisfactionLabel: "Satisfaction client",
        satisfactionDescription: "D'après nos retours post-projet",
        projectsLabel: "Projets livrés",
        projectsDescription: "Dans 3 pays",
        partnersLabel: "Partenaires long terme",
        partnersDescription: "Des clients qui continuent avec nous",
        speedLabel: "Time-to-market plus rapide",
        speedDescription: "Par rapport à un développement en interne",
      },
      growthTitle: "Trajectoire de croissance client",
      growthCaption: "+50% de croissance moyenne chez nos clients en 6 mois",
      months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    },
    testimonials: {
      title: "Témoignages clients",
      description: "Ce que nos partenaires disent de notre collaboration.",
      trustedBy: "Déjà choisi par 20+ équipes en Tunisie et dans la région MENA",
      entries: {
        rpsQuote: "Pitchin a compris rapidement notre métier. La plateforme est claire, pratique et a aidé notre équipe à gagner du temps dès le premier jour.",
        educationQuote: "C'est simple pour nos enseignants et facile pour les étudiants. Nous avons enfin un système clair pour gérer les devoirs.",
        clinicQuote: "L'application est simple à utiliser et nos patients l'ont adoptée rapidement. Notre équipe passe désormais moins de temps sur les appels répétitifs.",
      },
    },
    portfolio: {
      title: "Portfolio diversifié",
      description: "Nous accompagnons des entreprises innovantes dans le monde entier, de la startup à l'entreprise établie.",
      ctaLead: "Rejoignez notre clientèle internationale",
      ctaButton: "Commencer votre projet",
    },
    faq: {
      title: "Questions fréquentes",
      description: "Vous n'avez pas trouvé la réponse à votre question ?",
      cta: "Nous contacter",
      items: [
        {
          question: "Quels services Pitchin propose-t-il ?",
          answer: "Pitchin est spécialisé dans le développement de MVP, l'externalisation logicielle et le staff augmentation. Nous proposons des solutions de bout en bout adaptées à vos besoins métier, de l'idée initiale au déploiement à grande échelle.",
        },
        {
          question: "Qu'est-ce que le Staff Augmentation ?",
          answer: "Le Staff Augmentation chez Pitchin vous permet de renforcer votre équipe interne avec des talents dédiés pour des projets précis, sans gérer vous-même le recrutement et l'onboarding. Vous bénéficiez de profils seniors qui s'intègrent facilement à votre organisation.",
        },
        {
          question: "Comment se déroule le processus de recrutement des talents ?",
          answer: "Pitchin analyse vos besoins, sélectionne les bons experts selon leurs compétences techniques et leur compatibilité avec votre culture, puis facilite leur intégration dans votre équipe. Nous gérons l'administratif pendant que vous avancez sur le produit.",
        },
        {
          question: "Dans quels secteurs Pitchin intervient-il ?",
          answer: "Pitchin possède une forte expérience dans plusieurs secteurs comme l'EdTech, la FinTech, la RiskTech, la santé, l'e-commerce et les solutions SaaS d'entreprise.",
        },
        {
          question: "Quelles technologies maîtrisez-vous ?",
          answer: "Pitchin travaille avec un large éventail de technologies modernes comme JavaScript/TypeScript, Python, Java, PHP, ainsi qu'avec des frameworks comme React.js, Next.js, Vue.js, Node.js et Laravel. Nous adaptons la stack à chaque besoin.",
        },
        {
          question: "Quels modèles de collaboration propose Pitchin ?",
          answer: "Nous proposons des modes de collaboration flexibles : facturation horaire pour les missions courtes, forfait pour les périmètres bien définis et équipe dédiée pour les partenariats long terme. Nous nous adaptons à votre budget et à votre contexte.",
        },
        {
          question: "Comment démarrer un projet avec Pitchin ?",
          answer: "C'est simple : contactez-nous par email, planifiez un échange de cadrage, puis nous vous envoyons une proposition adaptée en quelques jours. Ensuite, nous pouvons commencer par un pilote ou un projet complet.",
        },
        {
          question: "Proposez-vous un support après le lancement ?",
          answer: "Oui. Nous assurons le support post-lancement : maintenance, corrections, optimisation des performances et évolutions produit. Notre équipe reste disponible pour accompagner votre croissance.",
        },
      ],
    },
    footer: {
      brandDescription: "Développement logiciel centré sur l'humain. Nous aidons les startups et les entreprises à construire des produits fiables et évolutifs avec votre équipe.",
      discover: "Découvrir",
      resources: "Ressources",
      contact: "Contact",
      legal: "Mentions légales",
      termsConditions: "Conditions générales",
      privacyPolicy: "Politique de confidentialité",
      allRightsReserved: "Tous droits réservés.",
      terms: "Conditions",
      privacy: "Confidentialité",
    },
    language: {
      label: "Langue",
      english: "Anglais",
      french: "Français",
    },
  },
};
