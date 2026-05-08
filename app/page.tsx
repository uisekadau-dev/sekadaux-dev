import Image from 'next/image'
import { Github, Instagram, MessageCircle } from 'lucide-react'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Sekadau Dev"
          width={100}
          height={100}
          className="rounded-full border-2 border-neutral-800 dark:border-neutral-200"
        />
      </div>
      
      <h1 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Sekadau Dev
      </h1>
      
      <p className="prose prose-neutral dark:prose-invert mb-8 text-lg">
        Ngoding dari ujung Kalimantan. Frontend enjoyer. 
        Mimpi bikin karya digital dari Sekadau buat dunia. 
        Open to collab & freelance 🚀
      </p>
      
      <div className="flex gap-6">
        <a href="https://github.com/isi-github-lo" target="_blank" className="text-neutral-700 dark:text-neutral-300 hover:text-purple-500">
          <Github size={24} />
        </a>
        <a href="https://instagram.com/isi-ig-lo" target="_blank" className="text-neutral-700 dark:text-neutral-300 hover:text-pink-500">
          <Instagram size={24} />
        </a>
        <a href="https://wa.me/628xxxxxxxxxx" target="_blank" className="text-neutral-700 dark:text-neutral-300 hover:text-green-500">
          <MessageCircle size={24} />
        </a>
      </div>
    </section>
  )
}
