import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

function PricingSection() {
  return (
    <section id="pricing" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Narxlar</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Hamyonbop, aniq va shaffof</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-10 max-w-xl rounded-3xl border border-indigo-200 bg-white p-8 text-center shadow-2xl shadow-indigo-100/60"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
          <BadgeCheck size={16} /> 1 oy bepul sinov
        </span>
        <p className="mt-6 text-5xl font-bold text-slate-900">50,000 UZS</p>
        <p className="mt-2 text-slate-500">oyiga, sinov muddatidan keyin</p>
        <p className="mt-5 text-slate-600">
          Bitta sotuvning o‘zi ham oylik to‘lovni qoplaydi. Qolganlari sof foyda.
        </p>
        <a
          href="https://t.me/raqamlidokon"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg shadow-indigo-300/60 transition hover:-translate-y-0.5 hover:bg-indigo-500"
        >
          Start Free Trial
        </a>
      </motion.div>
    </section>
  )
}

export default PricingSection
