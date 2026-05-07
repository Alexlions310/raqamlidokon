import { motion } from 'framer-motion'
import { Globe, Send, PhoneCall } from 'lucide-react'
import { useAppSettings } from '../context/AppSettings'
import { fadeUpItem, staggerContainer } from '../utils/animations'

function Footer() {
  const { t } = useAppSettings()

  return (
    <footer className="mt-10 border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={fadeUpItem}>
          <motion.p variants={fadeUpItem} className="text-lg font-semibold text-slate-900 dark:text-white">
            Raqamli Dokon
          </motion.p>
          <motion.p variants={fadeUpItem} className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.footer.subtitle}
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:gap-6"
        >
          <motion.a
            variants={fadeUpItem}
            href="https://t.me/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <Send size={16} /> Telegram
          </motion.a>
          <motion.a
            variants={fadeUpItem}
            href="https://instagram.com/raqamlidokon"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <Globe size={16} /> Instagram
          </motion.a>
          <motion.a
            variants={fadeUpItem}
            href="tel:+998901234567"
            className="inline-flex items-center gap-2 transition hover:text-indigo-600"
          >
            <PhoneCall size={16} /> +998 90 123 45 67
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
