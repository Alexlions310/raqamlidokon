import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'

function BenefitsSection() {
  const { t } = useAppSettings()

  return (
    <section className="overflow-y-hidden py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">{t.benefits.tag}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{t.benefits.title}</h2>
        <div className="mt-7 grid gap-4">
          {t.benefits.items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
              <span className="mt-0.5 rounded-full bg-emerald-400/20 p-1 text-emerald-300">
                <Check size={16} />
              </span>
              <p className="text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default BenefitsSection
