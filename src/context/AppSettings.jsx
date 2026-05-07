import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_THEME_KEY = 'rd-theme'
const STORAGE_LANG_KEY = 'rd-language'

const translations = {
  uz: {
    nav: {
      features: 'Imkoniyatlar',
      howItWorks: 'Qanday ishlaydi',
      pricing: 'Narxlar',
      telegram: 'Telegram',
      start: 'Bepul boshlash',
      toggleMenu: 'Menyuni ochish/yopish',
      languageLabel: 'Til',
      themeLight: 'Yorug rejim',
      themeDark: 'Tungi rejim',
    },
    hero: {
      badge: 'Ozbekistondagi kontent yaratuvchilar uchun',
      title: 'Telegram orqali oz raqamli dokoningizni yarating',
      desc: 'Kurslar, e-book va raqamli mahsulotlarni avtomatik soting: tolov qabul qilish, mahsulotni yetkazish va mijoz bilan ishlash - barchasi Telegram bot orqali.',
      contact: 'Telegram orqali boglanish',
      dashboard: 'Jonli panel',
      orders: '+40 buyurtma / 12 soat',
      card1: 'Bot yetkazib beradi',
      card2: 'Tolov avtomatik',
      card3: 'Sotuv analitikasi',
    },
    social: {
      tag: 'Ijtimoiy isbot',
      title: '12 soatda 40+ buyurtma',
      subtitle: 'Onlab kontent yaratuvchilar Raqamli Dokon bilan sotuvlarini avtomatlashtirmoqda.',
      testimonials: [
        {
          name: 'Aziza Qodirova',
          role: 'Online kurs muallifi',
          text: 'Raqamli Dokon orqali birinchi haftada 120 ta kurs sotdim. Jarayon juda oson va tez.',
        },
        {
          name: 'Jahongir Murodov',
          role: 'Telegram kanal egasi',
          text: 'Endi buyurtmalarni qolda tekshirmayman. Bot tolovni qabul qilib, faylni darhol yuboradi.',
        },
        {
          name: 'Dilshod Karimov',
          role: 'Digital entrepreneur',
          text: 'Sotuvlarim 2 baravar oshdi. Ayniqsa avtomatlashtirish biznesga katta yengillik berdi.',
        },
      ],
    },
    features: {
      tag: 'Imkoniyatlar',
      title: 'Sotuvni avtomatlashtiradigan asosiy funksiyalar',
      items: [
        {
          title: 'Mahsulotlarni boshqarish',
          desc: 'Kurs, e-book va fayllarni bir paneldan tartibli boshqaring.',
        },
        {
          title: 'Avtomatik tolovlar',
          desc: 'Mijoz tolov qilishi bilan tizim buyurtmani avtomatik qayta ishlaydi.',
        },
        {
          title: 'Telegram orqali yetkazish',
          desc: 'Bot mahsulotni xaridordan song bir necha soniyada yuboradi.',
        },
        {
          title: 'Oddiy interfeys',
          desc: 'Texnik bilimlarsiz ham dokoningizni bir necha daqiqada ishga tushiring.',
        },
      ],
    },
    steps: {
      tag: 'Qanday ishlaydi',
      title: '3 oddiy qadamda ishga tushiring',
      items: [
        {
          title: 'Dokon yarating',
          desc: 'Telegram dokoningiz nomini kiriting va sozlamalarni yakunlang.',
        },
        {
          title: 'Mahsulot qoshing',
          desc: 'Kurs, e-book yoki digital mahsulotlaringizni yuklang.',
        },
        {
          title: 'Sotishni boshlang',
          desc: 'Havolani auditoriyangiz bilan bolishing va avtomatik savdoni yoqing.',
        },
      ],
    },
    benefits: {
      tag: 'Afzalliklar',
      title: 'Biznesingizni yangi bosqichga olib chiqing',
      items: [
        'Vaqtingizni tejaydi: qolda yuborish va tekshirish yoq',
        'Sotuvlaringizni oshiradi: 24/7 avtomatik qabul',
        'Toliq avtomatlashtirilgan: tolov + yetkazish + xabarlar',
      ],
    },
    pricing: {
      tag: 'Narxlar',
      title: 'Hamyonbop, aniq va shaffof',
      trial: '1 oy bepul sinov',
      amount: '50,000 UZS',
      period: 'oyiga, sinov muddatidan keyin',
      desc: 'Bitta sotuvning ozi ham oylik tolovni qoplaydi. Qolganlari sof foyda.',
      cta: 'Bepul sinovni boshlash',
    },
    cta: {
      title: 'Hozirroq boshlang - birinchilardan boling',
      desc: 'Auditoriyangizni pulga aylantiring. Bir necha daqiqada Telegram asosidagi raqamli dokoningiz tayyor boladi.',
      start: 'Bepul boshlash',
      contact: 'Telegram orqali boglanish',
    },
    footer: {
      subtitle: 'Telegram asosidagi raqamli savdo platformasi',
    },
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      pricing: 'Pricing',
      telegram: 'Telegram',
      start: 'Get started',
      toggleMenu: 'Toggle menu',
      languageLabel: 'Language',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
    },
    hero: {
      badge: 'For creators in Uzbekistan',
      title: 'Launch your digital store via Telegram',
      desc: 'Sell courses, ebooks, and digital products automatically: payments, delivery, and customer flow all handled by your Telegram bot.',
      contact: 'Contact on Telegram',
      dashboard: 'Live dashboard',
      orders: '+40 orders / 12 hours',
      card1: 'Bot delivers instantly',
      card2: 'Automatic payments',
      card3: 'Sales analytics',
    },
    social: {
      tag: 'Social proof',
      title: '40+ orders in 12 hours',
      subtitle: 'Dozens of creators already automate sales with Raqamli Dokon.',
      testimonials: [
        {
          name: 'Aziza Qodirova',
          role: 'Online course creator',
          text: 'I sold 120 courses in the first week using Raqamli Dokon. Setup was fast and simple.',
        },
        {
          name: 'Jahongir Murodov',
          role: 'Telegram channel owner',
          text: 'I no longer verify orders manually. The bot accepts payment and sends files right away.',
        },
        {
          name: 'Dilshod Karimov',
          role: 'Digital entrepreneur',
          text: 'My sales doubled. Automation made operations much easier for my business.',
        },
      ],
    },
    features: {
      tag: 'Features',
      title: 'Core tools that automate your sales',
      items: [
        {
          title: 'Product management',
          desc: 'Manage courses, ebooks, and files from one clean panel.',
        },
        {
          title: 'Automatic payments',
          desc: 'Orders are processed automatically right after customer payment.',
        },
        {
          title: 'Telegram delivery',
          desc: 'Your bot sends purchased files within seconds.',
        },
        {
          title: 'Simple interface',
          desc: 'Launch your store in minutes without technical skills.',
        },
      ],
    },
    steps: {
      tag: 'How it works',
      title: 'Launch in 3 simple steps',
      items: [
        {
          title: 'Create your store',
          desc: 'Enter your Telegram store name and complete basic settings.',
        },
        {
          title: 'Add products',
          desc: 'Upload courses, ebooks, or other digital products.',
        },
        {
          title: 'Start selling',
          desc: 'Share your link and enable fully automated sales.',
        },
      ],
    },
    benefits: {
      tag: 'Benefits',
      title: 'Move your business to the next level',
      items: [
        'Save time: no manual checks or file sending',
        'Increase sales: 24/7 automatic order handling',
        'Fully automated flow: payment + delivery + messaging',
      ],
    },
    pricing: {
      tag: 'Pricing',
      title: 'Affordable, clear, and transparent',
      trial: '1 month free trial',
      amount: '50,000 UZS',
      period: 'per month after trial',
      desc: 'One sale can cover the monthly fee. Everything else is profit.',
      cta: 'Start free trial',
    },
    cta: {
      title: 'Start now and be among the first',
      desc: 'Turn your audience into revenue. Your Telegram digital store can be ready in minutes.',
      start: 'Get started',
      contact: 'Contact on Telegram',
    },
    footer: {
      subtitle: 'Telegram-based digital commerce platform',
    },
  },
  ru: {
    nav: {
      features: 'Возможности',
      howItWorks: 'Как это работает',
      pricing: 'Цены',
      telegram: 'Telegram',
      start: 'Начать бесплатно',
      toggleMenu: 'Открыть или закрыть меню',
      languageLabel: 'Язык',
      themeLight: 'Светлая тема',
      themeDark: 'Темная тема',
    },
    hero: {
      badge: 'Для создателей контента в Узбекистане',
      title: 'Запустите свой цифровой магазин через Telegram',
      desc: 'Продавайте курсы, электронные книги и цифровые продукты автоматически: прием платежей, доставка и работа с клиентами через Telegram-бота.',
      contact: 'Связаться в Telegram',
      dashboard: 'Живая панель',
      orders: '+40 заказов / 12 часов',
      card1: 'Бот доставляет автоматически',
      card2: 'Платежи автоматически',
      card3: 'Аналитика продаж',
    },
    social: {
      tag: 'Социальное доказательство',
      title: '40+ заказов за 12 часов',
      subtitle: 'Десятки авторов уже автоматизируют продажи с Raqamli Dokon.',
      testimonials: [
        {
          name: 'Aziza Qodirova',
          role: 'Автор онлайн-курсов',
          text: 'Через Raqamli Dokon я продала 120 курсов за первую неделю. Все было просто и быстро.',
        },
        {
          name: 'Jahongir Murodov',
          role: 'Владелец Telegram-канала',
          text: 'Я больше не проверяю заказы вручную. Бот принимает оплату и сразу отправляет файл.',
        },
        {
          name: 'Dilshod Karimov',
          role: 'Digital entrepreneur',
          text: 'Мои продажи выросли вдвое. Автоматизация сильно упростила бизнес-процессы.',
        },
      ],
    },
    features: {
      tag: 'Возможности',
      title: 'Ключевые функции для автоматизации продаж',
      items: [
        {
          title: 'Управление продуктами',
          desc: 'Управляйте курсами, электронными книгами и файлами из одной панели.',
        },
        {
          title: 'Автоплатежи',
          desc: 'Система обрабатывает заказ автоматически сразу после оплаты.',
        },
        {
          title: 'Доставка через Telegram',
          desc: 'Бот отправляет продукт покупателю за несколько секунд.',
        },
        {
          title: 'Простой интерфейс',
          desc: 'Запустите магазин за минуты даже без технических знаний.',
        },
      ],
    },
    steps: {
      tag: 'Как это работает',
      title: 'Запуск за 3 простых шага',
      items: [
        {
          title: 'Создайте магазин',
          desc: 'Укажите название Telegram-магазина и завершите настройки.',
        },
        {
          title: 'Добавьте продукты',
          desc: 'Загрузите курсы, электронные книги или другие цифровые товары.',
        },
        {
          title: 'Начните продавать',
          desc: 'Поделитесь ссылкой с аудиторией и включите автоматические продажи.',
        },
      ],
    },
    benefits: {
      tag: 'Преимущества',
      title: 'Выведите бизнес на новый уровень',
      items: [
        'Экономит время: без ручной проверки и отправки',
        'Увеличивает продажи: автоматический прием 24/7',
        'Полная автоматизация: оплата + доставка + сообщения',
      ],
    },
    pricing: {
      tag: 'Цены',
      title: 'Доступно, понятно и прозрачно',
      trial: '1 месяц бесплатного теста',
      amount: '50,000 UZS',
      period: 'в месяц после тестового периода',
      desc: 'Даже одна продажа может покрыть ежемесячную плату. Остальное - чистая прибыль.',
      cta: 'Начать бесплатный тест',
    },
    cta: {
      title: 'Начните сейчас и будьте среди первых',
      desc: 'Превратите аудиторию в доход. Ваш цифровой магазин в Telegram будет готов за несколько минут.',
      start: 'Начать бесплатно',
      contact: 'Связаться в Telegram',
    },
    footer: {
      subtitle: 'Платформа цифровой торговли на базе Telegram',
    },
  },
}

const AppSettingsContext = createContext(null)

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_THEME_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_LANG_KEY)
  if (stored === 'uz' || stored === 'en' || stored === 'ru') return stored
  return 'uz'
}

export function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_THEME_KEY, theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    localStorage.setItem(STORAGE_LANG_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      language,
      setLanguage,
      t: translations[language],
    }),
    [theme, language],
  )

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext)
  if (!context) {
    throw new Error('useAppSettings must be used inside AppSettingsProvider')
  }
  return context
}
