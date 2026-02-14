import IDELayout from "@/components/ide/IDELayout";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import SectionDivider from "@/components/ui/SectionDivider";
import FadeInSection from "@/components/ui/FadeInSection";
import StackStatus from "@/components/cards/StackStatus";

const stackItems = [
  { label: "Language", value: "TypeScript / Java / Python" },
  { label: "Frontend", value: "React / React Native" },
  { label: "Backend", value: "Spring Boot / Node.js" },
  { label: "Infra", value: "AWS / Docker / CI/CD" },
  { label: "DB", value: "PostgreSQL / Redis" },
];

export default function Home() {
  return (
    <IDELayout>
      <div className="mx-auto max-w-[85%] px-6 py-12 md:px-12 lg:px-16 xl:max-w-7xl">
        {/* ── README.md — Hero + About ── */}
        <FadeInSection>
          <section id="readme" className="mb-24 scroll-mt-4" aria-label="About me">
            {/* Faux file tab */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-t border-t-2 border-accent/50 px-3 py-1.5 font-mono text-xs text-text-muted"
              style={{ backgroundColor: "var(--color-ide-sidebar)" }}
            >
              <span className="text-icon-md">M↓</span>
              README.md
            </div>

            <h1 className="font-heading text-5xl font-bold tracking-tight text-text-bright md:text-6xl lg:text-7xl">
              Chaeho Yoon
            </h1>
            <p className="mt-3 font-heading text-xl font-medium text-accent md:text-2xl">
              Full-Stack Software Engineer
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
              {/* About text */}
              <div className="space-y-4 text-base leading-relaxed text-text-primary">
                <p>
                  I build robust, scalable systems at the intersection of
                  performance and elegance. Currently focused on distributed
                  architectures and high-throughput data pipelines.
                </p>
                <p>
                  Specializing in mission-critical platforms with experience
                  serving{" "}
                  <span className="font-semibold text-text-bright">
                    20 million+ users
                  </span>
                  . My philosophy is rooted in clean architecture and technical
                  precision. Every line of code should earn its place.
                </p>
              </div>

              {/* Stack Status Card */}
              <StackStatus items={stackItems} />
            </div>
          </section>
        </FadeInSection>

        {/* ── Experience ── */}
        <FadeInSection delay={100}>
          <section
            id="experience"
            className="mb-24 scroll-mt-4"
            aria-label="Work experience"
          >
            <SectionDivider title="Experience" />
            <Experience />
          </section>
        </FadeInSection>

        {/* ── Projects ── */}
        <FadeInSection delay={100}>
          <section
            id="projects"
            className="mb-24 scroll-mt-4"
            aria-label="Selected projects"
          >
            <SectionDivider title="Projects" />
            <Projects />
          </section>
        </FadeInSection>

        {/* ── skills.json ── */}
        <FadeInSection delay={100}>
          <section
            id="skills"
            className="mb-24 scroll-mt-4"
            aria-label="Technical skills"
          >
            <SectionDivider title="Technical DNA" />
            <Skills />
          </section>
        </FadeInSection>



        {/* Footer */}
        <footer
          className="border-t pb-8 pt-6 text-center font-mono text-xs text-text-muted"
          style={{ borderColor: "var(--color-ide-border)" }}
        >
          <p>
            © 2026 Chaeho Yoon · Built with{" "}
            <span className="text-syntax-blue">Next.js</span> &{" "}
            <span className="text-syntax-blue">Tailwind CSS</span>
          </p>
        </footer>
      </div>
    </IDELayout>
  );
}
