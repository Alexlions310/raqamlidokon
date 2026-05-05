import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/raqamli-dokon-logo.png'

const navItems = [
  { label: 'Imkoniyatlar', href: '#features' },
  { label: 'Qanday ishlaydi', href: '#how-it-works' },
  { label: 'Narxlar', href: '#pricing' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="shrink-0">
          <img
            src={logo}
            alt="Raqamli Dokon"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-indigo-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Telegram
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Bepul boshlash
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-900 px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Bepul boshlash
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
