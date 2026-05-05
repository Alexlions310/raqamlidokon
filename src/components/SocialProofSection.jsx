import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Aziza Qodirova',
    role: 'Online kurs muallifi',
    text: 'Raqamli Dokon orqali birinchi haftada 120 ta kurs sotdim. Jarayon juda oson va tez.',
  },
  {
    name: 'Jahongir Murodov',
    role: 'Telegram kanal egasi',
    text: 'Endi buyurtmalarni qo‘lda tekshirmayman. Bot to‘lovni qabul qilib, faylni darhol yuboradi.',
  },
  {
    name: 'Dilshod Karimov',
    role: 'Digital entrepreneur',
    text: 'Sotuvlarim 2 baravar oshdi. Ayniqsa avtomatlashtirish biznesga katta yengillik berdi.',
  },
]

function SocialProofSection() {
  return (
    <section className="py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 text-center shadow-lg shadow-indigo-100/40"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Ijtimoiy isbot</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">12 soatda 40+ buyurtma</h2>
        <p className="mt-2 text-slate-600">
          O‘nlab kontent yaratuvchilar Raqamli Dokon bilan sotuvlarini avtomatlashtirmoqda.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100/60"
          >
            <p className="text-slate-600">{item.text}</p>
            <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default SocialProofSection
