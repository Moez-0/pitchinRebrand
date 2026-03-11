// components/TechStack.tsx
import Image from "next/image";
import Link from "next/link";

const techCategories = [
  {
    title: "AI Tools",
    technologies: [
      { name: "Cursor", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/6889cf223ed28fc6ee0fe989_Frame%209147.svg" },
      { name: "ChatGPT", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/6889cf22b10ebea120124fe4_Frame%209145.svg" },
      { name: "Claude", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/6889cf2290f66c9500422ae4_Frame%209146.svg" },
    ]
  },
  {
    title: "Front-End",
    technologies: [
      { name: "JavaScript", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f035954b6d9920609a_image%2079.png" },
      { name: "TypeScript", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f0e62694503ff1c161_image%2080.png" },
      { name: "Vue.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f1ac361105eed87fc0_image%2084.png" },
      { name: "Nuxt.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f0bc5e6a93599bdb70_image%2085.png" },
      { name: "React.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f04578cce4f503f2cd_image%2083.png" },
      { name: "Next.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f09d2bb77e3944fe20_image%2086.png" },
      { name: "Vuex", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f05856c4051dc60bef_image%2090.png" },
      { name: "Tailwind", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f48f5d69d9658a191b_image%2091.png" },
      { name: "Storybook", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f3697af41d4e3d37be_image%2092.png" },
      { name: "Vite", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773761c564c48f16b829b3_image%2093.png" },
      { name: "Cypress", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773761c564c48f16b829b3_image%2093.png" }
    ]
  },
  {
    title: "Mobile Development",
    technologies: [
      { name: "React Native", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f04578cce4f503f2cd_image%2083.png" },
      { name: "Flutter", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f1ac361105eed87fc0_image%2084.png" },
      { name: "Kotlin", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" },
      { name: "Swift", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732dfaa52fb56871c2d_image%2095.png" },
      { name: "iOS", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732dfaa52fb56871c2d_image%2095.png" },
      { name: "Android", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" },
      { name: "Ionic", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687736f1ac361105eed87fc0_image%2084.png" },
      { name: "Xamarin", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" }
    ]
  },
  {
    title: "Back-End",
    technologies: [
      { name: "PHP Laravel", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" },
      { name: "Node.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732dfaa52fb56871c2d_image%2095.png" },
      { name: "Express.js", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/6877373273e2844838cb12b6_image%2096.png" },
      { name: "MySQL", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732b9464c332ca90eea_image%2099.png" },
      { name: "PostgreSQL", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732f4fb7c0cfb8ab99a_image%20100.png" },
      { name: "MongoDB", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773732acafc02fea0c8337_image%20101.png" },
      { name: "Python", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" },
      { name: "Java", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737321cb6a12b73845964_image%2094.png" }
    ]
  },
  {
    title: "QA",
    technologies: [
      { name: "Postman", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687746bfcdaa3e4bfbce103f_qa.png" },
      { name: "Selenium", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737cec5dbc2a702be4d8a_image%20109.png" },
      { name: "Visual Studio", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737cedfaa52fb56877e43_image%20111.png" },
      { name: "Jest", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/6877383cd0a1c1eb22514cfa_image%20112.png" },
      { name: "Cypress", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/68773761c564c48f16b829b3_image%2093.png" },
      { name: "Playwright", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737cec5dbc2a702be4d8a_image%20109.png" }
    ]
  },
  {
    title: "UI/UX",
    technologies: [
      { name: "Figma", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737d9bce7e03a5029ba2e_image%20114.png" },
      { name: "Adobe Suite", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737ebf94cfb1b434b37e0_image%20115.png" },
      { name: "Google Analytics", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737d9f75f8563a26eabba_image%20116.png" },
      { name: "Confluence", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737d900bb15f21d81aadc_image%20118.png" },
      { name: "Sketch", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737d9bce7e03a5029ba2e_image%20114.png" },
      { name: "InVision", icon: "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/687737ebf94cfb1b434b37e0_image%20115.png" }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Our Tech Stack
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            Modern technologies we master to build exceptional software solutions.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-zinc-800 group-hover:text-primary transition-colors duration-500">
                {category.title}
              </h3>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-sm text-zinc-500 tracking-wide uppercase mb-4">
            Need a specific technology?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 text-white hover:border-primary hover:text-primary transition-all duration-500 text-base font-medium group"
          >
            Discuss your tech stack
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

       
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}