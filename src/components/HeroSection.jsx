import { motion } from 'framer-motion'
import { Bot, ChartNoAxesCombined, CircleDollarSign } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'
import { gentleHover } from '../utils/animations'

function HeroSection() {
  const { t } = useAppSettings()

  return (
    <section id="hero" className="relative py-18 sm:py-24">
      <motion.div
        className="absolute -top-20 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 top-20 -z-10 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-500/50 dark:bg-indigo-500/20 dark:text-indigo-200">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">{t.hero.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:mx-0">{t.hero.desc}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <motion.a
              href="#pricing"
              whileHover={gentleHover}
              whileTap={{ scale: 0.98 }}
              className="button-shine inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-center text-base font-semibold text-white shadow-md shadow-indigo-300/30 transition hover:bg-indigo-500"
            >
              {t.nav.start}
            </motion.a>
            <motion.a
              href="https://t.me/raqamlidokon"
              target="_blank"
              rel="noreferrer"
              whileHover={gentleHover}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-center text-base font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              {t.hero.contact}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-white/80 bg-white p-6 shadow-lg shadow-slate-200/40 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/20"
        >
          <div className="rounded-2xl bg-slate-900 p-5 text-white">
            <p className="text-sm text-slate-300">{t.hero.dashboard}</p>
            <p className="mt-2 text-3xl font-bold">{t.hero.orders}</p>
            <div className="mt-4 h-2 rounded bg-white/20">
              <div className="h-2 w-4/5 rounded bg-emerald-400" />
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <motion.div whileHover={gentleHover} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <Bot className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{t.hero.card1}</p>
            </motion.div>
            <motion.div whileHover={gentleHover} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <CircleDollarSign className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{t.hero.card2}</p>
            </motion.div>
            <motion.div whileHover={gentleHover} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <ChartNoAxesCombined className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{t.hero.card3}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
