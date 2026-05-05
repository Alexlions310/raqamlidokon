import { motion } from 'framer-motion'
import { Bot, ChartNoAxesCombined, CircleDollarSign } from 'lucide-react'

function HeroSection() {
  return (
    <section id="hero" className="relative py-18 sm:py-24">
      <div className="absolute -top-20 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
      <div className="absolute left-0 top-20 -z-10 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700">
            O‘zbekistondagi kontent yaratuvchilar uchun
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Telegram orqali o‘z raqamli do‘koningizni yarating
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 lg:mx-0">
            Kurslar, e-book va raqamli mahsulotlarni avtomatik soting: to‘lov qabul qilish,
            mahsulotni yetkazish va mijoz bilan ishlash — barchasi Telegram bot orqali.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#pricing"
              className="rounded-full bg-indigo-600 px-8 py-3 text-center text-base font-semibold text-white shadow-xl shadow-indigo-300/60 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              Bepul boshlash
            </a>
            <a
              href="https://t.me/raqamlidokon"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-8 py-3 text-center text-base font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-600"
            >
              Telegram orqali bog‘lanish
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-white/80 bg-white p-6 shadow-2xl shadow-slate-200/70"
        >
          <div className="rounded-2xl bg-slate-900 p-5 text-white">
            <p className="text-sm text-slate-300">Live dashboard</p>
            <p className="mt-2 text-3xl font-bold">+40 buyurtma / 12 soat</p>
            <div className="mt-4 h-2 rounded bg-white/20">
              <div className="h-2 w-4/5 rounded bg-emerald-400" />
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <Bot className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900">Bot yetkazib beradi</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <CircleDollarSign className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900">To‘lov avtomatik</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <ChartNoAxesCombined className="text-indigo-600" size={20} />
              <p className="mt-2 text-sm font-semibold text-slate-900">Sotuv analitikasi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
