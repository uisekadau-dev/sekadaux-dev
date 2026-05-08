import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-teal-400/30">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <Image
          src="/foto-profil.jpg"
          alt="Sekadau Dev"
          width={160}
          height={160}
          className="mb-8 rounded-full border-4 border-zinc-800 shadow-2xl shadow-teal-500/10"
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Sekadau Dev
        </h1>
        <p className="mt-4 text-xl text-teal-400 md:text-2xl">
          Frontend Developer
        </p>
        <p className="mt-6 max-w-2xl text-zinc-400">
          Ngoding dari ujung Kalimantan. Spesialis bikin web ngebut pake Next.js & Tailwind. 
          Obsesi sama UI bersih dan user experience yang manusiawi.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-teal-400">
            Lihat Project
          </a>
          <a href="https://wa.me/62895404719001" target="_blank" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900">
            Contact Me
          </a>
        </div>
        <ArrowDown className="mt-20 animate-bounce text-zinc-600" />
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-zinc-400">
              Halo! Gue developer asal Sekadau, Kalbar yang udah jatuh cinta sama dunia web. 
              Fokus utama gue adalah ngebangun aplikasi web yang cepet, responsif, dan gampang dipake. 
              <br/><br/>
              Tool utama gue: <span className="text-teal-400">React, Next.js, TypeScript, dan Tailwind CSS</span>. 
              Lagi seneng ngulik Framer Motion buat animasi.
              <br/><br/>
              Fun fact: Bisa debug error Vercel jam 3 pagi ditemenin kopi sekadau item.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="font-semibold text-teal-400">Tech Stack</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-400">
              <li>Next.js</li><li>React</li>
              <li>TypeScript</li><li>Tailwind CSS</li>
              <li>Git & GitHub</li><li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          
          {/* PROJECT 1 */}
          <div className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-teal-500/50">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Warung Sekadau Online</h3>
              <ExternalLink className="text-zinc-600 group-hover:text-teal-400" size={20} />
            </div>
            <p className="mt-3 text-zinc-400">Web toko online buat UMKM Sekadau. Order 24 jam, bayar pake QRIS. Studi kasus pertama.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-zinc-800 px-2 py-1">Next.js</span>
              <span className="rounded bg-zinc-800 px-2 py-1">Supabase</span>
              <span className="rounded bg-zinc-800 px-2 py-1">Tailwind</span>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-sm font-semibold text-zinc-500">Live Demo - Coming Soon</a>
              <a href="https://github.com/sekadaux-dev" target="_blank" className="text-sm font-semibold text-teal-400 hover:underline">Source Code</a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-teal-500/50">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Dashboard Admin Sultan</h3>
              <ExternalLink className="text-zinc-600 group-hover:text-teal-400" size={20} />
            </div>
            <p className="mt-3 text-zinc-400">Dashboard buat mantau penjualan, data user, dan grafik. Dibangun buat latihan Fullstack.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-zinc-800 px-2 py-1">Next.js</span>
              <span className="rounded bg-zinc-800 px-2 py-1">tRPC</span>
              <span className="rounded bg-zinc-800 px-2 py-1">Prisma</span>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-sm font-semibold text-zinc-500">Live Demo - Coming Soon</a>
              <a href="https://github.com/sekadaux-dev" target="_blank" className="text-sm font-semibold text-teal-400 hover:underline">Source Code</a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">Gas Collab?</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Lagi cari developer buat project lo? Atau mau ngobrolin teknologi? 
          Email gue selalu terbuka. Balas cepet kecuali lagi tidur.
        </p>
        <a href="mailto:uisekadaux.dev@gmail.com" className="mt-8 inline-block rounded-lg bg-teal-500 px-8 py-3 font-semibold text-zinc-950 transition hover:bg-teal-400">
          Kirim Email
        </a>
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com/sekadaux-dev" target="_blank" className="text-zinc-500 hover:text-teal-400"><Github /></a>
          <a href="mailto:uisekadaux.dev@gmail.com" className="text-zinc-500 hover:text-teal-400"><Mail /></a>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
        <p>© 2026 Sekadau Dev. Dibuat di Sekadau, deploy ke seluruh dunia.</p>
      </footer>

    </main>
  )
}
