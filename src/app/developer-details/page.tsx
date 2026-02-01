import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Details — Architecture, Stack & Approach',
  description:
    'Technical details, architecture decisions, and development approach by Burhan Sheikh.',
}

export default function DeveloperDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            Developer <span className="text-blue-500">Details</span>
          </h1>

          <p className="max-w-4xl text-lg text-gray-300 leading-relaxed">
            This page explains <span className="text-white font-medium">how I build systems</span>,
            what technologies I use, and why these decisions matter
            for real businesses — not demos.
          </p>
        </div>

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Core Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-300">

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Frontend
              </h3>
              <ul className="space-y-2">
                <li>• Next.js (App Router)</li>
                <li>• React (Client & Server components)</li>
                <li>• Tailwind CSS (design system based)</li>
                <li>• Desktop-first, mobile-responsive layouts</li>
                <li>• SEO-optimized metadata & social previews</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Backend & Data
              </h3>
              <ul className="space-y-2">
                <li>• Firebase Authentication</li>
                <li>• Firestore (structured collections)</li>
                <li>• Realtime Database (live features)</li>
                <li>• Firebase Admin SDK (secure APIs)</li>
                <li>• Role-based access control</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            System Architecture
          </h2>

          <div className="max-w-4xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I design applications as <span className="text-white font-medium">modular systems</span>,
              not single-page hacks. Each responsibility is isolated:
            </p>

            <ul className="space-y-3">
              <li>• Authentication layer (secure, token-based)</li>
              <li>• Authorization (role & ownership checks)</li>
              <li>• Data layer with strict access rules</li>
              <li>• Admin logic separated from public UI</li>
            </ul>

            <p>
              This approach ensures:
              scalability, security, maintainability, and future upgrades
              without rewriting everything.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Security & Data Protection
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-300">

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Authentication
              </h3>
              <p>
                Firebase Auth with email/password and OAuth,
                protected by token-based verification.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Authorization
              </h3>
              <p>
                Firestore rules enforce ownership and admin privileges
                at the database level.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Data Safety
              </h3>
              <p>
                No client-side trust. Sensitive actions run only
                through secure server APIs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WORK STYLE ================= */}
      <section className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            How I Work With Clients
          </h2>

          <div className="max-w-4xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I don’t outsource work or hand projects to juniors.
              Every system is built and reviewed personally.
            </p>

            <p>
              I explain technical decisions in simple language so clients
              always understand what they’re paying for.
            </p>

            <p>
              After delivery, clients are not locked in.
              They can maintain, extend, or migrate their system if needed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-br from-blue-600/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Looking for a serious developer?
          </h2>
          <p className="text-gray-300 mb-10">
            If you value clean architecture, security,
            and long-term stability — let’s talk.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Discuss your project on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} KashPages · Technical Overview
      </footer>

    </main>
  )
}
