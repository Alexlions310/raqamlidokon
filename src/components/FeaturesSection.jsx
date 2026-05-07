import { motion } from 'framer-motion'
import { LayoutGrid, WalletCards, Send, Sparkles } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'
import { fadeUpItem, gentleHover, staggerContainer } from '../utils/animations'

const icons = [LayoutGrid, WalletCards, Send, Sparkles]

function FeaturesSection() {
  const { t } = useAppSettings()

  return (
    <section id="features" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{t.features.tag}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{t.features.title}</h2>
      </div>
      <motion.div
        className="mt-10 grid gap-5 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t.features.items.map((feature, index) => {
          const Icon = icons[index]
          return (
            <motion.article
              key={feature.title}
              variants={fadeUpItem}
              whileHover={gentleHover}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.desc}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}

export default FeaturesSection
