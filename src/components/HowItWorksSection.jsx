import { motion } from 'framer-motion'

const steps = [
  { title: 'Do‘kon yarating', desc: 'Telegram do‘koningiz nomini kiriting va sozlamalarni yakunlang.' },
  { title: 'Mahsulot qo‘shing', desc: 'Kurs, e-book yoki digital mahsulotlaringizni yuklang.' },
  { title: 'Sotishni boshlang', desc: 'Havolani auditoriyangiz bilan bo‘lishing va avtomatik savdoni yoqing.' },
]

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Qanday ishlaydi</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">3 oddiy qadamda ishga tushiring</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100/60"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-slate-600">{step.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection
