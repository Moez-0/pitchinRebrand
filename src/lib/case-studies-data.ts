import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
    {
        slug: "rps-solar",
        company: "RPS Solar",
        tagline: "Digital platform for solar sales and support",
        category: "Energy Technology",
        title: "RPS: A Solar Platform with Smart Quoting and Gemini AI Chat",
        heroImage: "/rps.png",
        logo: "",
        challenge: "A Tunisian solar company needed one place to manage leads, prepare offers quickly, and answer customer questions without waiting for an agent.",
        solution: "We built the RPS web platform at rps.pitchin.mobi with a simple sales workflow, project tracking, and a Gemini-powered chatbot for common customer questions.",
        results: "The team now prepares offers faster, follows leads in one dashboard, and handles many first-level questions automatically through the chatbot.",
        metrics: [
            { value: "3x", label: "Faster Quote Prep" },
            { value: "35%", label: "More Qualified Leads" },
            { value: "24/7", label: "AI Chat Support" },
            { value: "7 weeks", label: "Time to Launch" },
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Gemini API"],
        testimonial: {
            quote: "Pitchin understood our business quickly. The platform is clear, practical, and helped our team save time from day one.",
            author: "Yassine Trabelsi",
            role: "Operations Manager, RPS Solar",
        },
        translations: {
            fr: {
                tagline: "Plateforme digitale pour ventes et support solaire",
                category: "Technologie énergétique",
                title: "RPS : une plateforme solaire avec devis intelligents et chatbot Gemini AI",
                metricLabels: ["Devis plus rapides", "Plus de leads qualifiés", "Support IA", "Temps de lancement"],
                testimonial: {
                    role: "Responsable des opérations, RPS Solar",
                },
            },
        },
    },
    {
        slug: "learnly",
        company: "Réussite Plus",
        tagline: "Simple learning portal for tutoring centers",
        category: "Education Technology",
        title: "A Simple Student Portal for a Tunis Tutoring Center",
        heroImage: "/studentportalresussite.png",
        logo: "",
        challenge: "The center was sharing homework by WhatsApp and email, and teachers had no clear view of who completed assignments.",
        solution: "We built a lightweight web app where teachers post exercises and students submit answers from phone or laptop.",
        results: "The team got a clear weekly view of student progress and saw better homework completion in the first month.",
        metrics: [
            { value: "+62%", label: "Homework Completion" },
            { value: "140", label: "Active Students" },
            { value: "12", label: "Teachers Using Platform" },
            { value: "4 weeks", label: "Development Time" },
        ],
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        testimonial: {
            quote: "It is simple for our teachers and easy for students. We finally have one clear system for homework.",
            author: "Imen Ben Amor",
            role: "Director, Réussite Plus",
        },
        translations: {
            fr: {
                tagline: "Portail d'apprentissage simple pour centres de soutien",
                category: "Technologie éducative",
                title: "Un portail étudiant simple pour un centre de soutien à Tunis",
                metricLabels: ["Devoirs complétés", "Étudiants actifs", "Enseignants actifs", "Temps de développement"],
                testimonial: {
                    role: "Directrice, Réussite Plus",
                },
            },
        },
    },
    {
        slug: "vitalcare",
        company: "Clinique Carthage",
        tagline: "Simple appointment booking and reminders",
        category: "Health Technology",
        title: "Booking App That Reduced No-Shows in a Private Clinic",
        heroImage: "/clinic.png",
        logo: "",
        challenge: "Reception staff spent many hours confirming appointments by phone, and missed appointments were growing every month.",
        solution: "We delivered a mobile booking app connected to their calendar system, with automatic SMS reminders in French and Arabic.",
        results: "The clinic reduced missed appointments and the reception team saved hours every week.",
        metrics: [
            { value: "38%", label: "Fewer No-Shows" },
            { value: "9 hrs", label: "Admin Time Saved/Wk" },
            { value: "520+", label: "Patient Accounts" },
            { value: "4.7", label: "Average Rating" },
        ],
        technologies: ["React Native", "Node.js", "Twilio API"],
        testimonial: {
            quote: "The app is easy to use and our patients adopted it quickly. Our team now spends less time on repetitive calls.",
            author: "Dr. Ahmed Gharbi",
            role: "Medical Director, Clinique Carthage",
        },
        translations: {
            fr: {
                tagline: "Prise de rendez-vous et rappels simplifiés",
                category: "Technologie santé",
                title: "Une application de réservation qui a réduit les absences dans une clinique privée",
                metricLabels: ["Moins d'absences", "Temps admin économisé/sem.", "Comptes patients", "Note moyenne"],
                testimonial: {
                    role: "Directeur médical, Clinique Carthage",
                },
            },
        },
    },
    {
        slug: "modastyle",
        company: "Dar El Fen",
        tagline: "Local fashion and craft online store",
        category: "E-Commerce",
        title: "E-Commerce Rebuild for a Tunisian Lifestyle Brand",
        heroImage: "/darelfen.png",
        logo: "",
        challenge: "The brand sold mainly through Instagram DMs and had trouble tracking stock and deliveries during product drops.",
        solution: "We built a clean storefront connected to Shopify with simple product management and clear checkout flow.",
        results: "The team launched on time, sold faster during drops, and reduced manual order follow-up.",
        metrics: [
            { value: "2.4x", label: "Online Orders" },
            { value: "36 hrs", label: "First Drop Sellout" },
            { value: "1.4s", label: "Page Load Time" },
            { value: "96", label: "Lighthouse Score" },
        ],
        technologies: ["Next.js", "Shopify Buy Button", "Framer Motion", "Tailwind CSS"],
        testimonial: {
            quote: "The site reflects our brand and is easy for our small team to manage every day.",
            author: "Mariem Jlassi",
            role: "Founder, Dar El Fen",
        },
        translations: {
            fr: {
                tagline: "Boutique en ligne mode et artisanat local",
                category: "E-commerce",
                title: "Refonte e-commerce pour une marque lifestyle tunisienne",
                metricLabels: ["Commandes en ligne", "Rupture du premier drop", "Temps de chargement", "Score Lighthouse"],
                testimonial: {
                    role: "Fondatrice, Dar El Fen",
                },
            },
        },
    },
    {
        slug: "shipswift",
        company: "Rapid Colis",
        tagline: "Local delivery tracking",
        category: "Logistics",
        title: "Tracking Dashboard for a Last-Mile Delivery Team",
        heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
        logo: "",
        challenge: "Dispatchers used spreadsheets and phone calls to assign deliveries, which created delays and customer complaints.",
        solution: "We built a simple dispatch dashboard with rider status and public tracking links sent by SMS.",
        results: "Daily operations became smoother and customers got better visibility on delivery status.",
        metrics: [
            { value: "31%", label: "Routing Efficiency" },
            { value: "14", label: "Riders Managed" },
            { value: "280+", label: "Daily Deliveries" },
            { value: "3 weeks", label: "Delivered In" },
        ],
        technologies: ["React", "Express UI", "MongoDB", "Mapbox API"],
        testimonial: {
            quote: "Exactly what we needed: clear, fast, and practical for our dispatch team.",
            author: "Walid Ben Salah",
            role: "Founder, Rapid Colis",
        },
        translations: {
            fr: {
                tagline: "Suivi de livraison locale",
                category: "Logistique",
                title: "Un tableau de suivi pour une équipe de livraison du dernier kilomètre",
                metricLabels: ["Efficacité de routage", "Livreurs gérés", "Livraisons/jour", "Livré en"],
                testimonial: {
                    role: "Fondateur, Rapid Colis",
                },
            },
        },
    },
    {
        slug: "insightai",
        company: "Groupe El Bahr",
        tagline: "Menu analytics for restaurant operations",
        category: "Data Analytics",
        title: "Simple Margin Dashboard for a Restaurant Group",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        logo: "",
        challenge: "Management had POS exports but no simple way to see which dishes were popular but not profitable.",
        solution: "We built a lightweight dashboard that shows sales, cost, and margin per item with clear filters per location.",
        results: "The group adjusted key menu prices and improved overall profitability in one quarter.",
        metrics: [
            { value: "8%", label: "Margin Increase" },
            { value: "4", label: "Locations Analyzed" },
            { value: "9", label: "Items Repriced" },
            { value: "1 week", label: "To Initial Prototype" },
        ],
        technologies: ["React", "Recharts", "Python", "Pandas"],
        testimonial: {
            quote: "Before this, data review took hours. Now we can make pricing decisions in minutes.",
            author: "Sami Dhouib",
            role: "COO, Groupe El Bahr",
        },
        translations: {
            fr: {
                tagline: "Analyse de menus pour opérations de restauration",
                category: "Analyse de données",
                title: "Un tableau de marge simple pour un groupe de restaurants",
                metricLabels: ["Hausse de marge", "Sites analysés", "Articles repricés", "Prototype initial"],
                testimonial: {
                    role: "Directeur des opérations, Groupe El Bahr",
                },
            },
        },
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}
