import Sidebar from "@/components/layout/Sidebar";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-black-primary focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          {/* About */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <SectionHeader title="About" />
            <FadeInSection>
              <div className="space-y-4">
                <p>
                  I&apos;m a Computer Engineering student at the{" "}
                  <span className="text-text-primary">
                    University of Toronto
                  </span>{" "}
                  with a minor in{" "}
                  <span className="text-text-primary">
                    Artificial Intelligence
                  </span>{" "}
                  and{" "}
                  <span className="text-text-primary">
                    Engineering Business
                  </span>
                  . Most recently, I spent 16 months at{" "}
                  <a
                    href="https://www.bibliocommons.com"
                    className="font-medium text-text-primary hover:text-accent focus-visible:text-accent"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    BiblioCommons
                  </a>{" "}
                  as a fullstack engineer, shipping features to a platform used
                  by{" "}
                  <span className="text-text-primary">20 million+</span> users
                  across 200+ public libraries.
                </p>
                <p>
                  Right now, I&apos;m building{" "}
                  <a
                    href="https://learnify-bytes.com"
                    className="font-medium text-text-primary hover:text-accent focus-visible:text-accent"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Learnify
                  </a>
                  , an AI learning platform serving{" "}
                  <span className="text-text-primary">
                    550+ daily students
                  </span>{" "}
                  across 3 Canadian universities, and CourtView, an AI-powered
                  court availability predictor built with TensorFlow.
                </p>
                <p>
                  I&apos;m drawn to the intersection of frontend craft, backend
                  architecture, and cloud infrastructure — building systems that
                  are as elegant under the hood as they are on the surface.
                </p>
              </div>
            </FadeInSection>
          </section>

          {/* Experience */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <SectionHeader title="Experience" />
            <FadeInSection>
              <Experience />
            </FadeInSection>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <SectionHeader title="Projects" />
            <FadeInSection>
              <Projects />
            </FadeInSection>
          </section>

          {/* Technical DNA */}
          <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Technical skills"
          >
            <SectionHeader title="Technical DNA" />
            <FadeInSection>
              <Skills />
            </FadeInSection>
          </section>

          {/* Footer */}
          <footer className="max-w-md pb-16 text-sm text-text-muted sm:pb-0">
            <p>
              Loosely designed in{" "}
              <span className="text-text-secondary">Figma</span> and coded in{" "}
              <span className="text-text-secondary">Visual Studio Code</span>.
              Built with{" "}
              <a
                href="https://nextjs.org/"
                className="font-medium text-text-secondary hover:text-accent focus-visible:text-accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-text-secondary hover:text-accent focus-visible:text-accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                Tailwind CSS
              </a>
              , deployed with{" "}
              <a
                href="https://vercel.com/"
                className="font-medium text-text-secondary hover:text-accent focus-visible:text-accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vercel
              </a>
              . All text is set in the{" "}
              <span className="text-text-secondary">Inter</span> typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
