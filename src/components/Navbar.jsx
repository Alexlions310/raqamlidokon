import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, language, setLanguage, t } = useAppSettings()
  const languages = ['uz', 'en', 'ru']

  const navItems = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
  ]

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold text-slate-900 dark:text-white">
          Raqamli <span className="text-indigo-600">Dokon</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-indigo-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-full border border-slate-300 bg-white p-1 dark:border-slate-600 dark:bg-slate-800">
            {languages.map((lang) => {
              const isActive = language === lang
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700'}`}
                  aria-label={`${t.nav.languageLabel}: ${lang.toUpperCase()}`}
                >
                  {lang.toUpperCase()}
                </button>
              )
            })}
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.nav.telegram}
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            {t.nav.start}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-slate-600 dark:text-slate-200 md:hidden"
          aria-label={t.nav.toggleMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full border border-slate-300 bg-white p-1 dark:border-slate-600 dark:bg-slate-800">
                {languages.map((lang) => {
                  const isActive = language === lang
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700'}`}
                      aria-label={`${t.nav.languageLabel}: ${lang.toUpperCase()}`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  )
                })}
              </div>
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-slate-600 dark:text-slate-200"
                aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-900 px-5 py-2 text-center text-sm font-semibold text-white"
            >
              {t.nav.start}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
