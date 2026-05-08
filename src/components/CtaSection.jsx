import { motion } from 'framer-motion'
import { useAppSettings } from '../context/AppSettings'
import { gentleHover } from '../utils/animations'

function CtaSection() {
  const { t } = useAppSettings()

  return (
    <section className="py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center text-white shadow-lg shadow-indigo-300/35 sm:p-10"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">{t.cta.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-indigo-100">
          {t.cta.desc}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <motion.a
            href="#pricing"
            whileHover={gentleHover}
            whileTap={{ scale: 0.98 }}
            className="button-shine inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            {t.cta.start}
          </motion.a>
          <motion.a
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            whileHover={gentleHover}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/70 px-7 font-semibold text-white transition hover:bg-white/10"
          >
            {t.cta.contact}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default CtaSection
