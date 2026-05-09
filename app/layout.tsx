import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ui.Xekadau - UI Designer & Developer',
  description: 'UI Designer & Developer dari Sekadau, Kalimantan Barat. Spesialis Next.js + Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
