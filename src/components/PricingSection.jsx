import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'
import { gentleHover } from '../utils/animations'

function PricingSection() {
  const { t } = useAppSettings()

  return (
    <section id="pricing" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{t.pricing.tag}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{t.pricing.title}</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={gentleHover}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-10 max-w-xl rounded-3xl border border-indigo-200 bg-white p-8 text-center shadow-lg shadow-indigo-100/35 dark:border-indigo-500/40 dark:bg-slate-900"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          <BadgeCheck size={16} /> {t.pricing.trial}
        </span>
        <p className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">{t.pricing.amount}</p>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{t.pricing.period}</p>
        <p className="mt-5 text-slate-600 dark:text-slate-300">{t.pricing.desc}</p>
        <motion.a
          href="https://t.me/raqamlidokon"
          target="_blank"
          rel="noreferrer"
          whileHover={gentleHover}
          whileTap={{ scale: 0.98 }}
          className="button-shine mt-7 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-sm shadow-indigo-300/30 transition hover:bg-indigo-500"
        >
          {t.pricing.cta}
        </motion.a>
      </motion.div>
    </section>
  )
}

export default PricingSection
