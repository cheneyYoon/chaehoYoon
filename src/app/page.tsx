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
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 lg:px-16">
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

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
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
                  precision — every line of code should earn its place.
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

        {/* ── connect.sh — Contact ── */}
        <FadeInSection delay={100}>
          <section
            id="contact"
            className="mb-12 scroll-mt-4"
            aria-label="Contact"
          >
            <SectionDivider title="Contact" />
            <div
              className="rounded-lg border p-6 font-mono text-sm"
              style={{
                backgroundColor: "var(--color-ide-sidebar)",
                borderColor: "var(--color-ide-border)",
              }}
            >
              <p className="text-syntax-green">#!/bin/bash</p>
              <p className="mt-1 text-syntax-green">
                # Let&apos;s connect — I&apos;m always open to new opportunities
              </p>
              <div className="mt-5 space-y-3">
                <p>
                  <span className="text-syntax-purple">export</span>{" "}
                  <span className="text-syntax-blue">EMAIL</span>
                  <span className="text-text-primary">=</span>
                  <a
                    href="mailto:chaeho.yoon@outlook.com"
                    className="text-syntax-orange underline decoration-syntax-orange/30 transition-colors hover:decoration-syntax-orange"
                  >
                    &quot;chaeho.yoon@outlook.com&quot;
                  </a>
                </p>
                <p>
                  <span className="text-syntax-purple">export</span>{" "}
                  <span className="text-syntax-blue">GITHUB</span>
                  <span className="text-text-primary">=</span>
                  <a
                    href="https://github.com/chaehoyoon"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-syntax-orange underline decoration-syntax-orange/30 transition-colors hover:decoration-syntax-orange"
                  >
                    &quot;github.com/chaehoyoon&quot;
                  </a>
                </p>
                <p>
                  <span className="text-syntax-purple">export</span>{" "}
                  <span className="text-syntax-blue">LINKEDIN</span>
                  <span className="text-text-primary">=</span>
                  <a
                    href="https://linkedin.com/in/chaehoyoon"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-syntax-orange underline decoration-syntax-orange/30 transition-colors hover:decoration-syntax-orange"
                  >
                    &quot;linkedin.com/in/chaehoyoon&quot;
                  </a>
                </p>
                <p className="mt-4 pt-2" style={{ borderTop: "1px solid var(--color-ide-border)" }}>
                  <span className="text-syntax-yellow">echo</span>{" "}
                  <span className="text-syntax-orange">
                    &quot;Thanks for visiting! ✌️&quot;
                  </span>
                </p>
              </div>
            </div>
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
