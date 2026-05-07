import { motion } from 'framer-motion'
import { useAppSettings } from '../context/AppSettings'
import { fadeUpItem, gentleHover, staggerContainer } from '../utils/animations'

function HowItWorksSection() {
  const { t } = useAppSettings()

  return (
    <section id="how-it-works" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{t.steps.tag}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{t.steps.title}</h2>
      </div>
      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t.steps.items.map((step, index) => (
          <motion.article
            key={step.title}
            variants={fadeUpItem}
            whileHover={gentleHover}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{step.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{step.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default HowItWorksSection
