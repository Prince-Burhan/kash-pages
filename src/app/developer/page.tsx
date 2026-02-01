import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Developer — Burhan Sheikh',
  description:
    'Meet the developer behind KashPages. I design and build real-world business platforms, admin dashboards, and scalable systems.',
}

export default function DeveloperPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            I’m <span className="text-blue-500">Burhan Sheikh</span>
          </h1>

          <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
            I’m a full-stack web developer focused on building
            <span className="text-white font-medium"> real business platforms</span>,
            not generic websites.
            <br /><br />
            I work directly with business owners who want clarity, control,
            and long-term value from their digital presence.
          </p>
        </div>

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            My Development Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-300">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Business First
              </h3>
              <p>
                Every decision starts with how the business actually operates —
                staff, customers, workflows, and growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                No Over-Engineering
              </h3>
              <p>
                I build what’s needed today, structured in a way
                that can scale tomorrow — clean, understandable, and maintainable.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Ownership & Clarity
              </h3>
              <p>
                Clients always know what they own, what’s licensed,
                and how their system works. No hidden traps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD ================= */}
      <section className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            What I Build
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-300">

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Business Platforms
              </h3>
              <ul className="space-y-2">
                <li>• Admin dashboards</li>
                <li>• Customer & lead management</li>
                <li>• Reviews & moderation systems</li>
                <li>• Business settings & branding control</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Performance & Growth Systems
              </h3>
              <ul className="space-y-2">
                <li>• SEO-ready architecture</li>
                <li>• Social sharing optimization</li>
                <li>• Scalable Firebase-based backends</li>
                <li>• Secure authentication flows</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Experience & Approach
          </h2>

          <div className="max-w-4xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I design systems the way businesses actually think —
              not how tutorials explain them.
            </p>

            <p>
              My work focuses on long-term usability, clear admin workflows,
              performance, and security. I prefer fewer features that work
              perfectly over bloated systems that confuse users.
            </p>

            <p>
              I usually work one-on-one with clients, handling everything from
              architecture to deployment, so there is no communication gap.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-br from-blue-600/20 to-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want to work together?
          </h2>
          <p className="text-gray-300 mb-10">
            If you want a serious, well-built system for your business,
            let’s discuss it properly.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Message me on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} KashPages · Developer Portfolio
      </footer>

    </main>
  )
}
