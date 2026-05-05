import { Globe, Send, PhoneCall } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">Raqamli Dokon</p>
          <p className="mt-1 text-sm text-slate-500">Telegram asosidagi raqamli savdo platformasi</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <Send size={16} /> Telegram
          </a>
          <a
            href="https://instagram.com/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <Globe size={16} /> Instagram
          </a>
          <a href="tel:+998901234567" className="inline-flex items-center gap-2 transition hover:text-indigo-600">
            <PhoneCall size={16} /> +998 90 123 45 67
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
