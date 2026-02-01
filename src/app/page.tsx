import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burhan Sheikh — Business Web Platforms & Admin Systems',
  description:
    'I design and build professional, modern web platforms for real businesses. Admin dashboards, customer systems, SEO-ready, scalable and production-grade.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I Build <span className="text-blue-500">Business Web Platforms</span>,
              <br /> not just websites.
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Modern, secure, scalable web systems designed for real businesses —
              admin dashboards, customer management, reviews, SEO, and long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                View My Work
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition font-semibold"
              >
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* subtle background glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14">
            What I Actually Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Web Platforms',
                desc: 'Production-ready platforms built for real operations, not demos or templates.',
              },
              {
                title: 'Admin Dashboards',
                desc: 'Manage customers, reviews, staff, content, and data from one secure panel.',
              },
              {
                title: 'SEO & Performance Systems',
                desc: 'Fast, indexed, social-share optimized systems designed to grow visibility.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14">
            Real Projects (Not Sold Yet)
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* MITC */}
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">
                  MITC Business Platform
                </h3>
                <span className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-400">
                  Available
                </span>
              </div>

              <ul className="space-y-2 text-gray-300">
                <li>• Admin dashboard with full control</li>
                <li>• Customer leads & inquiries</li>
                <li>• Reviews & ratings system</li>
                <li>• SEO & social sharing optimized</li>
                <li>• WhatsApp-first contact flow</li>
              </ul>
            </div>

            {/* TECHMATE */}
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">
                  Techmate Business Platform
                </h3>
                <span className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-400">
                  Available
                </span>
              </div>

              <ul className="space-y-2 text-gray-300">
                <li>• Professional business presence</li>
                <li>• Customer engagement system</li>
                <li>• Admin-controlled content</li>
                <li>• Scalable & secure architecture</li>
                <li>• Mobile & desktop optimized</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY ME ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14">
            Why My Work Is Different
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <p>• Business-first design thinking</p>
            <p>• Clean, maintainable codebase</p>
            <p>• Long-term scalability in mind</p>
            <p>• Honest pricing & ownership clarity</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-gradient-to-br from-blue-600/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Looking for a serious business platform?
          </h2>
          <p className="text-gray-300 mb-10">
            If you want something professional, scalable, and built properly —
            let’s discuss your business.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} KashPages · Built by Burhan Sheikh
      </footer>
    </main>
  )
}
