import { motion } from 'framer-motion'
import { LayoutGrid, WalletCards, Send, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Mahsulotlarni boshqarish',
    desc: 'Kurs, e-book va fayllarni bir paneldan tartibli boshqaring.',
    icon: LayoutGrid,
  },
  {
    title: 'Avtomatik to‘lovlar',
    desc: 'Mijoz to‘lov qilishi bilan tizim buyurtmani avtomatik qayta ishlaydi.',
    icon: WalletCards,
  },
  {
    title: 'Telegram orqali yetkazish',
    desc: 'Bot mahsulotni xaridordan so‘ng bir necha soniyada yuboradi.',
    icon: Send,
  },
  {
    title: 'Oddiy interfeys',
    desc: 'Texnik bilimlarsiz ham do‘koningizni bir necha daqiqada ishga tushiring.',
    icon: Sparkles,
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-14 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Imkoniyatlar</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Sotuvni avtomatlashtiradigan asosiy funksiyalar
        </h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100/70"
            >
              <div className="inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.desc}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturesSection
