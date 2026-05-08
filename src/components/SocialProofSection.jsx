import { motion } from 'framer-motion'
import { useAppSettings } from '../context/AppSettings'
import { fadeUpItem, gentleHover, staggerContainer } from '../utils/animations'

const avatarByName = {
  'Aziza Qodirova': {
    initials: 'AQ',
    gradient: 'from-rose-500 to-fuchsia-600',
  },
  'Jahongir Murodov': {
    initials: 'JM',
    gradient: 'from-blue-500 to-indigo-600',
  },
  'Dilshod Karimov': {
    initials: 'DK',
    gradient: 'from-emerald-500 to-cyan-600',
  },
}

function SocialProofSection() {
  const { t } = useAppSettings()

  return (
    <section className="py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 text-center shadow-sm shadow-indigo-100/30 dark:border-indigo-500/30 dark:from-slate-900 dark:to-slate-800"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">{t.social.tag}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{t.social.title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{t.social.subtitle}</p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t.social.testimonials.map((item) => (
          <motion.article
            key={item.name}
            variants={fadeUpItem}
            whileHover={gentleHover}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
            <div className="mt-5 flex items-center gap-3">
              <div
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${avatarByName[item.name]?.gradient ?? 'from-slate-500 to-slate-700'}`}
              >
                {avatarByName[item.name]?.initials ?? item.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default SocialProofSection
