import { motion } from 'framer-motion'

function CtaSection() {
  return (
    <section className="py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center text-white shadow-2xl shadow-indigo-300/60 sm:p-10"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Hoziroq boshlang — birinchilardan bo‘ling</h2>
        <p className="mx-auto mt-3 max-w-2xl text-indigo-100">
          Auditoriyangizni pulga aylantiring. Bir necha daqiqada Telegram asosidagi raqamli
          do‘koningiz tayyor bo‘ladi.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-full bg-white px-7 py-3 font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Bepul boshlash
          </a>
          <a
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Telegram orqali bog‘lanish
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CtaSection
