import { Mail, MessageCircle, ArrowRight, Code2, Sparkles, Zap } from 'lucide-react'
import './globals.css'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Gradient Background Effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-neutral-800/50 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-400" size={24} />
            <span className="font-bold text-lg">Ui.Xekadau</span>
          </div>
          <a 
            href="https://wa.me/62895404719001"
            target="_blank"
            className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition flex items-center gap-2"
          >
            Hire Me <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 border border-neutral-800 px-4 py-2 rounded-full text-sm text-neutral-400">
            <Sparkles size={16} className="text-blue-400" />
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            UI Designer & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl">
            Dari Sekadau, Kalimantan Barat. Saya merancang & membangun antarmuka digital yang bersih, cepat, dan fleksibel. 
            Spesialis <span className="text-white font-medium">Next.js + Tailwind CSS</span> dengan fokus pada performa dan UX.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="mailto:uisekadaux.dev@gmail.com" 
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              <Mail size={18} />
              Email Saya
            </a>
            
            <a 
              href="https://wa.me/62895404719001" 
              target="_blank"
              className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition">
              <Zap className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-neutral-400">Website dengan skor Lighthouse 95+. Loading di bawah 1 detik.</p>
            </div>
            
            <div className="space-y-3 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition">
              <Code2 className="text-purple-400" size={24} />
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p className="text-neutral-400">Dibangun dengan Next.js 14 & TypeScript. Maintainable & scalable.</p>
            </div>
            
            <div className="space-y-3 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition">
              <Sparkles className="text-pink-400" size={24} />
              <h3 className="text-xl font-semibold">Pixel Perfect</h3>
              <p className="text-neutral-400">Desain presisi dari Figma ke kode. Responsive di semua device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2026 Ui.Xekadau. Sekadau, Kalimantan Barat.</p>
          <p>Dibangun dengan Next.js + Tailwind CSS. Deployed di Vercel.</p>
        </div>
      </footer>
    </main>
  )
}
