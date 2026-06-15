// ===============================
// КОД ДОСТУПА ДЛЯ СОТРУДНИКОВ
// ===============================
var STAFF_CODE = "FLORA2026";

// ===============================
// ПЕРЕВОДЫ: RU / EN
// ===============================
var translations = {
    ru: {
        siteTitle: "Сотворяй — Цветочный магазин",
        logoText: "цветы, создающие настроение",
        navCategories: "Категории",
        navCatalog: "Каталог",
        navConstructor: "Конструктор",
        navDelivery: "Доставка",
        navTracking: "Заказ",
        navAbout: "О нас",
        navContacts: "Контакты",
        staffLogin: "Для сотрудников",
        staffLogout: "Выйти из режима сотрудника",
        staffTitle: "Вход для сотрудников",
        staffText: "Введите код доступа, чтобы открыть служебный раздел.",
        staffCodePlaceholder: "Код доступа",
        staffEnter: "Войти",
        staffWrongCode: "Неверный код доступа.",
        staffWelcome: "Служебный раздел открыт.",
        staffClosed: "Служебный раздел закрыт.",
        cartWord: "Корзина",
        heroTitle: "Цветы, которые дарят счастье",
        heroText: "Свежие букеты, авторские композиции, онлайн-оплата и доставка в удобное время.",
        heroBtn: "Выбрать букет",
        heroBuilderBtn: "Собрать свой букет",
        categoriesTitle: "Наши букеты",
        catMono: "Монобукеты",
        catMonoDesc: "Один вид цветов — максимум элегантности",
        catAuthor: "Авторские букеты",
        catAuthorDesc: "Уникальные композиции от флористов",
        catBox: "Цветы в коробке",
        catBoxDesc: "Стильная подача в шляпных коробках",
        catWedding: "Букеты невесты",
        catWeddingDesc: "Нежные букеты для особенного дня",
        catDried: "Букеты из сухоцветов",
        catDriedDesc: "Долговечная красота природы",
        catalogTitle: "Каталог",
        searchPlaceholder: "Поиск букета",
        allCategories: "Все категории",
        minPricePlaceholder: "Цена от",
        maxPricePlaceholder: "Цена до",
        inStockOnly: "Только в наличии",
        sortPopular: "По популярности",
        sortPriceAsc: "Сначала дешевле",
        sortPriceDesc: "Сначала дороже",
        sortDelivery: "По времени доставки",
        resetFilters: "Сбросить",
        found: "найдено",
        constructorTitle: "Конструктор букета",
        constructorText: "Выберите основу, размер, упаковку и дополнения.",
        baseBouquet: "Базовый букет",
        choose: "Выберите",
        size: "Размер",
        package: "Упаковка",
        postcard: "Текст открытки",
        cardPlaceholder: "Напишите пожелание",
        additional: "Дополнительно",
        addRose: "Премиум-розы +700 ₽",
        addPeony: "Пионы +900 ₽",
        addTulip: "Тюльпаны +500 ₽",
        addGreen: "Зелень +250 ₽",
        addVase: "Ваза +1200 ₽",
        addSweets: "Сладости +800 ₽",
        builderTotalLabel: "Стоимость:",
        saveDraft: "Сохранить черновик",
        addCustom: "Добавить в корзину",
        sizeSmall: "S — компактный",
        sizeMedium: "M — стандартный",
        sizeLarge: "L — большой",
        wrapCraft: "Крафт",
        wrapMatte: "Матовая плёнка",
        wrapPremium: "Премиум-бумага",
        constructorPreviewTitle: "Ваш букет",
        deliveryTitle: "Доставка и самовывоз",
        deliveryOrderTitle: "Доставка",
        address: "Адрес",
        addressPlaceholder: "Введите адрес доставки",
        date: "Дата",
        slot: "Временной слот",
        paymentMethods: "Оплата картой, СБП, электронным кошельком или наличными.",
        pickupTitle: "Самовывоз",
        pickupText: "Москва, ул. Цветочная, 10.",
        pickupSchedule: "Ежедневно 09:00 — 21:00.",
        pickupNote: "После оплаты вы получите код получения на Email.",
        mapTitle: "Зона доставки",
        mapText: "Москва и Московская область",
        trackingTitle: "Отслеживание заказа",
        orderStatusTitle: "Статус заказа",
        noActiveOrder: "Пока нет активного заказа.",
        statusAccepted: "Принят",
        statusAssembling: "Собирается",
        statusCourier: "Передан курьеру",
        statusWay: "В пути",
        statusDelivered: "Доставлен",
        loyaltyTitle: "Программа лояльности",
        loyaltyPoints: "Баллы за каждый заказ",
        loyaltyPointsText: "До 5% кэшбэка бонусами.",
        loyaltyDates: "Напоминания о датах",
        loyaltyDatesText: "Дни рождения, годовщины и праздники.",
        loyaltyDiscounts: "Персональные скидки",
        loyaltyDiscountsText: "Предложения на основе истории заказов.",
        corporateTitle: "Корпоративным клиентам",
        companyPlaceholder: "Название компании",
        innPlaceholder: "ИНН",
        corporateCommentPlaceholder: "Комментарий к заявке",
        corporateBtn: "Отправить заявку",
        adminTitle: "Панель сотрудников",
        tabAdmin: "Администратор",
        tabFlorist: "Флорист",
        tabCourier: "Курьер",
        tabManager: "Менеджер",
        dashOrders: "Заказы сегодня",
        dashRevenue: "Выручка",
        dashAverage: "Средний чек",
        dashConversion: "Конверсия",
        adminCatalog: "Каталог, остатки, цены, категории, акции",
        adminDelivery: "Слоты, зоны доставки, тарифы, курьеры",
        adminCrm: "CRM-карточки клиентов и история взаимодействий",
        adminAnalytics: "Аналитика: выручка, средний чек, KPI",
        floristPanelTitle: "Панель флориста",
        courierPanelTitle: "Панель курьера",
        managerPanelTitle: "Панель менеджера",
        aboutTitle: "О нас",
        aboutP1: "«Сотворяй» — это больше, чем просто цветочный магазин. Мы создаём настроение и помогаем дарить эмоции с 2018 года.",
        aboutP2: "Наши флористы работают только со свежими цветами и вкладывают душу в каждую композицию.",
        years: "лет на рынке",
        clients: "довольных клиентов",
        support: "поддержка",
        offerTitle: "Специальное предложение",
        offerText: "При первом заказе скидка 15% по промокоду START15",
        hours: "часа",
        minutes: "минут",
        seconds: "секунд",
        offerBtn: "Воспользоваться",
        featuresTitle: "Почему выбирают нас",
        featDeliveryTitle: "Бесплатная доставка",
        featDeliveryText: "От 3000 ₽ по городу",
        featFreshTitle: "Свежесть 100%",
        featFreshText: "Цветы от проверенных поставщиков",
        featFloristsTitle: "Топ-флористы",
        featFloristsText: "Авторские композиции",
        featPaymentTitle: "Удобная оплата",
        featPaymentText: "Карта, СБП, кошелёк, наличные",
        newsletterTitle: "Подпишитесь на новости",
        newsletterText: "Промокоды, идеи для букетов и новинки.",
        emailPlaceholder: "Введите ваш email",
        subscribeBtn: "Подписаться",
        footerDesc: "Дарим радость и красоту с 2018 года. Свежие цветы, бережная доставка и индивидуальный подход.",
        footerCategories: "Категории",
        footerInfo: "Информация",
        footerContacts: "Контакты",
        footerAddress: "Москва, ул. Цветочная, 10",
        footerHours: "Ежедневно 09:00 — 21:00",
        footerRights: "Сотворяй — все права защищены © 2026",
        cartTitle: "Ваша корзина",
        promoPlaceholder: "Промокод",
        bonusPlaceholder: "Списать бонусы",
        applyPromo: "Применить",
        checkoutBtn: "Оформить заказ",
        total: "Итого",
        emptyCart: "Корзина пуста, но цветы уже ждут вас!",
        checkoutTitle: "Оформление заказа",
        customerNamePlaceholder: "Ваше имя",
        customerPhonePlaceholder: "Телефон",
        methodDelivery: "Доставка",
        methodPickup: "Самовывоз",
        paymentCard: "Банковская карта",
        paymentSbp: "СБП",
        paymentWallet: "Электронный кошелёк",
        paymentCash: "Наличными при получении",
        consentText: "Я согласен на обработку персональных данных",
        placeOrder: "Оплатить и оформить заказ",
        supportTitle: "Помощник",
        supportText: "Я помогу выбрать букет, открыть корзину или проверить доставку.",
        openCart: "Открыть корзину",
        tagHit: "Хит",
        tagNew: "Новинка",
        tagPremium: "Премиум",
        tagFresh: "Свежие цветы",
        tagFast: "Быстро",
        available: "В наличии",
        unavailable: "Нет в наличии",
        addToCart: "В корзину",
        notifyMe: "Сообщить",
        customize: "Настроить",
        composition: "Состав",
        deliveryFrom: "доставка от",
        minutesShort: "мин",
        addedToCart: "добавлен в корзину",
        notifyMessage: "Мы сообщим о поступлении",
        promoApplied: "Промокод применён.",
        promoWrong: "Промокод не найден. Попробуйте START15.",
        draftSaved: "Черновик сохранён.",
        warnRequired: "Выберите базовый букет, размер и упаковку.",
        warnPremium: "Нельзя выбрать слишком много премиум-компонентов.",
        warnSeason: "Для сухоцветных композиций нельзя добавить пионы или тюльпаны.",
        orderCreated: "Заказ оформлен! Чек будет отправлен на Email.",
        subscribed: "Спасибо за подписку",
        corporateSent: "Заявка отправлена. Менеджер свяжется с вами.",
        checkoutSummary: "Сумма к оплате",
        deliveryCost: "доставка",
        discount: "скидка",
        bonusesUsed: "бонусы",
        busy: "занято",
        noResults: "Ничего не найдено",
        individualBouquet: "Индивидуальный букет",
        customAdded: "Индивидуальный букет добавлен в корзину"
    },
    en: {
        siteTitle: "Sotvoryay — Flower Shop",
        logoText: "flowers that create mood",
        navCategories: "Categories",
        navCatalog: "Catalog",
        navConstructor: "Builder",
        navDelivery: "Delivery",
        navTracking: "Order",
        navAbout: "About",
        navContacts: "Contacts",
        staffLogin: "Staff only",
        staffLogout: "Exit staff mode",
        staffTitle: "Staff login",
        staffText: "Enter access code to open the staff area.",
        staffCodePlaceholder: "Access code",
        staffEnter: "Enter",
        staffWrongCode: "Wrong access code.",
        staffWelcome: "Staff area unlocked.",
        staffClosed: "Staff area closed.",
        cartWord: "Cart",
        heroTitle: "Flowers that bring happiness",
        heroText: "Fresh bouquets, designer arrangements, online payment and convenient delivery.",
        heroBtn: "Choose bouquet",
        heroBuilderBtn: "Build your bouquet",
        categoriesTitle: "Our bouquets",
        catMono: "Mono bouquets",
        catMonoDesc: "One type of flowers — maximum elegance",
        catAuthor: "Designer bouquets",
        catAuthorDesc: "Unique arrangements by florists",
        catBox: "Flowers in a box",
        catBoxDesc: "Stylish presentation in hat boxes",
        catWedding: "Bridal bouquets",
        catWeddingDesc: "Tender bouquets for a special day",
        catDried: "Dried flower bouquets",
        catDriedDesc: "Lasting beauty of nature",
        catalogTitle: "Catalog",
        searchPlaceholder: "Search bouquet",
        allCategories: "All categories",
        minPricePlaceholder: "Price from",
        maxPricePlaceholder: "Price to",
        inStockOnly: "In stock only",
        sortPopular: "By popularity",
        sortPriceAsc: "Cheaper first",
        sortPriceDesc: "Expensive first",
        sortDelivery: "By delivery time",
        resetFilters: "Reset",
        found: "found",
        constructorTitle: "Bouquet builder",
        constructorText: "Choose a base, size, wrapping and extras.",
        baseBouquet: "Base bouquet",
        choose: "Choose",
        size: "Size",
        package: "Wrapping",
        postcard: "Card text",
        cardPlaceholder: "Write your message",
        additional: "Extras",
        addRose: "Premium roses +700 ₽",
        addPeony: "Peonies +900 ₽",
        addTulip: "Tulips +500 ₽",
        addGreen: "Greenery +250 ₽",
        addVase: "Vase +1200 ₽",
        addSweets: "Sweets +800 ₽",
        builderTotalLabel: "Price:",
        saveDraft: "Save draft",
        addCustom: "Add to cart",
        sizeSmall: "S — compact",
        sizeMedium: "M — standard",
        sizeLarge: "L — large",
        wrapCraft: "Craft paper",
        wrapMatte: "Matte film",
        wrapPremium: "Premium paper",
        constructorPreviewTitle: "Your bouquet",
        deliveryTitle: "Delivery and pickup",
        deliveryOrderTitle: "Delivery",
        address: "Address",
        addressPlaceholder: "Enter delivery address",
        date: "Date",
        slot: "Time slot",
        paymentMethods: "Payment by card, SBP, e-wallet or cash.",
        pickupTitle: "Pickup",
        pickupText: "Moscow, Flower street, 10.",
        pickupSchedule: "Daily 09:00 — 21:00.",
        pickupNote: "After payment you will receive a pickup code by Email.",
        mapTitle: "Delivery zone",
        mapText: "Moscow and Moscow region",
        trackingTitle: "Order tracking",
        orderStatusTitle: "Order status",
        noActiveOrder: "No active order yet.",
        statusAccepted: "Accepted",
        statusAssembling: "Assembling",
        statusCourier: "With courier",
        statusWay: "On the way",
        statusDelivered: "Delivered",
        loyaltyTitle: "Loyalty program",
        loyaltyPoints: "Points for each order",
        loyaltyPointsText: "Up to 5% cashback in bonuses.",
        loyaltyDates: "Date reminders",
        loyaltyDatesText: "Birthdays, anniversaries and holidays.",
        loyaltyDiscounts: "Personal discounts",
        loyaltyDiscountsText: "Offers based on order history.",
        corporateTitle: "For corporate clients",
        companyPlaceholder: "Company name",
        innPlaceholder: "Tax ID",
        corporateCommentPlaceholder: "Application comment",
        corporateBtn: "Send request",
        adminTitle: "Staff panel",
        tabAdmin: "Administrator",
        tabFlorist: "Florist",
        tabCourier: "Courier",
        tabManager: "Manager",
        dashOrders: "Orders today",
        dashRevenue: "Revenue",
        dashAverage: "Average order",
        dashConversion: "Conversion",
        adminCatalog: "Catalog, stock, prices, categories, promotions",
        adminDelivery: "Slots, delivery zones, tariffs, couriers",
        adminCrm: "Customer CRM cards and interaction history",
        adminAnalytics: "Analytics: revenue, average order, KPI",
        floristPanelTitle: "Florist panel",
        courierPanelTitle: "Courier panel",
        managerPanelTitle: "Manager panel",
        aboutTitle: "About us",
        aboutP1: "Sotvoryay is more than a flower shop. We create mood and help give emotions since 2018.",
        aboutP2: "Our florists work only with fresh flowers and put soul into every arrangement.",
        years: "years on market",
        clients: "happy customers",
        support: "support",
        offerTitle: "Special offer",
        offerText: "15% off your first order with promo code START15",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        offerBtn: "Use offer",
        featuresTitle: "Why choose us",
        featDeliveryTitle: "Free delivery",
        featDeliveryText: "From 3000 ₽ in the city",
        featFreshTitle: "100% freshness",
        featFreshText: "Flowers from trusted suppliers",
        featFloristsTitle: "Top florists",
        featFloristsText: "Designer arrangements",
        featPaymentTitle: "Convenient payment",
        featPaymentText: "Card, SBP, wallet, cash",
        newsletterTitle: "Subscribe to news",
        newsletterText: "Promo codes, bouquet ideas and new arrivals.",
        emailPlaceholder: "Enter your email",
        subscribeBtn: "Subscribe",
        footerDesc: "We bring joy and beauty since 2018. Fresh flowers, careful delivery and personal approach.",
        footerCategories: "Categories",
        footerInfo: "Information",
        footerContacts: "Contacts",
        footerAddress: "Moscow, Flower street, 10",
        footerHours: "Daily 09:00 — 21:00",
        footerRights: "Sotvoryay — all rights reserved © 2026",
        cartTitle: "Your cart",
        promoPlaceholder: "Promo code",
        bonusPlaceholder: "Spend bonuses",
        applyPromo: "Apply",
        checkoutBtn: "Checkout",
        total: "Total",
        emptyCart: "Cart is empty, but flowers are waiting for you!",
        checkoutTitle: "Checkout",
        customerNamePlaceholder: "Your name",
        customerPhonePlaceholder: "Phone",
        methodDelivery: "Delivery",
        methodPickup: "Pickup",
        paymentCard: "Bank card",
        paymentSbp: "SBP",
        paymentWallet: "E-wallet",
        paymentCash: "Cash on delivery",
        consentText: "I agree to personal data processing",
        placeOrder: "Pay and place order",
        supportTitle: "Assistant",
        supportText: "I can help choose a bouquet, open cart or check delivery.",
        openCart: "Open cart",
        tagHit: "Hit",
        tagNew: "New",
        tagPremium: "Premium",
        tagFresh: "Fresh flowers",
        tagFast: "Fast",
        available: "In stock",
        unavailable: "Out of stock",
        addToCart: "Add",
        notifyMe: "Notify",
        customize: "Customize",
        composition: "Composition",
        deliveryFrom: "delivery from",
        minutesShort: "min",
        addedToCart: "added to cart",
        notifyMessage: "We will notify you when available",
        promoApplied: "Promo code applied.",
        promoWrong: "Promo code not found. Try START15.",
        draftSaved: "Draft saved.",
        warnRequired: "Choose base bouquet, size and wrapping.",
        warnPremium: "Too many premium components selected.",
        warnSeason: "Dried bouquets cannot include peonies or tulips.",
        orderCreated: "Order created! Receipt will be sent by Email.",
        subscribed: "Thanks for subscribing",
        corporateSent: "Request sent. A manager will contact you.",
        checkoutSummary: "Amount to pay",
        deliveryCost: "delivery",
        discount: "discount",
        bonusesUsed: "bonuses",
        busy: "busy",
        noResults: "No results found",
        individualBouquet: "Custom bouquet",
        customAdded: "Custom bouquet added to cart"
    }
};

// ===============================
// КАТАЛОГ ТОВАРОВ (50 позиций)
// ===============================
var flowersCatalog = [
    // МОНОБУКЕТЫ (10)
    { id: 1, название: "Нежные пионы", категория: "mono", цена: 2890, изображение: "https://voronezh.buket24delivery.ru/bc_24/iblock/f6b/1bci1q0xbnqcvcb7d5uzufzczhl2cubl/5-rozovykh-pionov.jpg", остаток: 8, популярность: 98, время: 90, метки: ["hit", "fresh"], состав: { ru: "розовые пионы, премиальная упаковка", en: "pink peonies, premium packaging" }, перевод: { en: "Tender Peonies" } },
    { id: 2, название: "Алые розы", категория: "mono", цена: 3290, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/27/1775467647_35877427.jpg", остаток: 12, популярность: 96, время: 60, метки: ["hit", "fast"], состав: { ru: "алые розы, зелень, премиальная упаковка", en: "red roses, greenery, premium wrapping" }, перевод: { en: "Scarlet Roses" } },
    { id: 3, название: "Жёлтые тюльпаны", категория: "mono", цена: 1690, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/49/1772521579_19405349.jpg", остаток: 14, популярность: 89, время: 55, метки: ["fresh", "fast"], состав: { ru: "жёлтые тюльпаны, лента, крафт", en: "yellow tulips, ribbon, craft paper" }, перевод: { en: "Yellow Tulips" } },
    { id: 4, название: "Белая орхидея", категория: "mono", цена: 2590, изображение: "https://content3.flowwow-images.com/data/flowers/1000x1000/17/1744706651_9841817.jpg", остаток: 5, популярность: 87, время: 110, метки: ["premium", "fresh"], состав: { ru: "белая орхидея, кашпо", en: "white orchid, pot" }, перевод: { en: "White Orchid" } },
    { id: 5, название: "Розовая дымка", категория: "mono", цена: 3590, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/23/1652273280_46266323.jpg", остаток: 6, популярность: 86, время: 85, метки: ["new", "fresh"], состав: { ru: "кустовые розы, матовая плёнка", en: "spray roses, matte film" }, перевод: { en: "Pink Haze" } },
    { id: 6, название: "Солнечные герберы", категория: "mono", цена: 1890, изображение: "https://storage.florist.ru/f/get/supplier/736/products/f0/00/_f6d8277718bf8da67a241fb53207/800x800/67f7bc7ee17ec.jpg", остаток: 13, популярность: 87, время: 50, метки: ["hit", "fast"], состав: { ru: "мини-герберы, хризантемы, розы", en: "mini gerberas, chrysanthemums, roses" }, перевод: { en: "Sunny Gerberas" } },
    { id: 7, название: "Кремовые гортензии", категория: "mono", цена: 3990, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/39/1771688160_55375939.jpg", остаток: 3, популярность: 88, время: 130, метки: ["premium"], состав: { ru: "кремовые гортензии, матовая плёнка", en: "cream hydrangeas, matte film" }, перевод: { en: "Cream Hydrangeas" } },
    { id: 8, название: "Первое свидание", категория: "mono", цена: 1990, изображение: "https://images.flomarket.com/4648073a-68a8-4923-3766-1faca7bd5f00/large", остаток: 15, популярность: 93, время: 50, метки: ["hit", "fast"], состав: { ru: "розовые розы, гипсофила, лента", en: "pink roses, gypsophila, ribbon" }, перевод: { en: "First Date" } },
    { id: 9, название: "Пионовое облако", категория: "mono", цена: 4890, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/42/1776866201_33375142.jpg", остаток: 3, популярность: 92, время: 100, метки: ["premium", "new"], состав: { ru: "пионы, эвкалипт", en: "peonies, eucalyptus" }, перевод: { en: "Peony Cloud" } },
    { id: 10, название: "Сердце из роз", категория: "mono", цена: 5290, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/40/1769686695_40495140.jpg", остаток: 4, популярность: 88, время: 110, метки: ["premium"], состав: { ru: "51 алая роза, упаковка, лента", en: "51 red roses, wrapping, ribbon" }, перевод: { en: "Heart of Roses" } },
    // АВТОРСКИЕ БУКЕТЫ (10)
    { id: 11, название: "Для моей любимой", категория: "author", цена: 2390, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/38/1766387873_83714338.jpg", остаток: 9, популярность: 95, время: 70, метки: ["hit", "fresh"], состав: { ru: "гортензия, хлопок, хризантемы, нежная упаковка, открытка", en: "hydrangea, cotton, chrysanthemums, tender wrapping, card" }, перевод: { en: "For My Beloved" } },
    { id: 12, название: "Признание", категория: "author", цена: 4290, изображение: "https://storage.florist.ru/f/get/supplier/493/products/81441/dd/94/_402fd7ca991f7d87e278070741e1/800x800/6740457b12358.jpg", остаток: 5, популярность: 90, время: 95, метки: ["premium", "fresh"], состав: { ru: "пионы, кустовые розы, эвкалипт", en: "peonies, spray roses, eucalyptus" }, перевод: { en: "Confession" } },
    { id: 13, название: "Вечер вдвоём", категория: "author", цена: 3790, изображение: "https://storage.florist.ru/f/get/supplier/1178/products/0/a6/1c/_fd4fa7691176ccffb4ef019b6e8b/800x800/696cc2fede1d2.jpg", остаток: 7, популярность: 84, время: 80, метки: ["fresh"], состав: { ru: "бордовые розы, эустома, зелень", en: "burgundy roses, eustoma, greenery" }, перевод: { en: "Evening Together" } },
    { id: 14, название: "Романтика Парижа", категория: "author", цена: 3990, изображение: "https://www.roza4u.ru/image/cache/catalog/Zimnij-buket-s-pionami-i-ranunkulyusami-/Zimnij-buket-s-pionami-i-ranunkulyusami-1-700x700.jpg", остаток: 6, популярность: 85, время: 90, метки: ["fresh"], состав: { ru: "пионы, ранункулюсы, премиум-бумага", en: "peonies, ranunculus, premium paper" }, перевод: { en: "Paris Romance" } },
    { id: 15, название: "Бархатная ночь", категория: "author", цена: 4490, изображение: "https://findreason.ru/upload/iblock/763/763ab7d0210ec257b86de6ca4f82cc7e.jpg", остаток: 5, популярность: 83, время: 95, метки: ["premium", "fresh"], состав: { ru: "тёмные розы, каллы, зелень", en: "dark roses, callas, greenery" }, перевод: { en: "Velvet Night" } },
    { id: 16, название: "Солнечные подсолнухи", категория: "author", цена: 3990, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/64/1772444419_54259564.jpg", остаток: 6, популярность: 91, время: 80, метки: ["new", "fast"], состав: { ru: "подсолнухи, герберы, декоративная зелень", en: "sunflowers, gerberas, decorative greenery" }, перевод: { en: "Sunny Sunflowers" } },
    { id: 17, название: "Медовый рассвет", категория: "author", цена: 3490, изображение: "https://www.roza4u.ru/image/catalog/Buket_s_podsolnuhami_i_kustovoj_rozoj_/Buket_s_podsolnuhami_i_kustovoj_rozoj_1.jpg", остаток: 7, популярность: 78, время: 85, метки: ["new"], состав: { ru: "подсолнухи, кустовые розы, зелень", en: "sunflowers, spray roses, greenery" }, перевод: { en: "Honey Dawn" } },
    { id: 18, название: "Тёплый август", категория: "author", цена: 3890, изображение: "https://www.studiofloristic.ru/files/catalog/3589/w640_89920a217b47aa294d091cde46597891.jpg", остаток: 4, популярность: 84, время: 90, метки: ["premium", "fresh"], состав: { ru: "подсолнухи, солидаго", en: "sunflowers, solidago" }, перевод: { en: "Warm August" } },
    { id: 19, название: "Эустома", категория: "author", цена: 1790, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/70/1704782704_66579270.jpg", остаток: 7, популярность: 82, время: 100, метки: ["fresh"], состав: { ru: "эустома, матовая плёнка", en: "eustoma, matte film" }, перевод: { en: "Eustoma" } },
    { id: 20, название: "Жемчужный туман", категория: "author", цена: 2290, изображение: "https://novokuzneck.rus-buket.ru/files/images/7750-mify-muz-22131.jpg", остаток: 6, популярность: 81, время: 115, метки: ["new", "premium"], состав: { ru: "белая эустома, гипсофила", en: "white eustoma, gypsophila" }, перевод: { en: "Pearl Mist" } },
    // ЦВЕТЫ В КОРОБКЕ (10)
    { id: 21, название: "Розовый сад", категория: "box", цена: 3190, изображение: "https://avatars.mds.yandex.net/get-mpic/18944582/2a0000019c4f4a128d1cf3fcb6f7ad790e0c/orig", остаток: 11, популярность: 81, время: 65, метки: ["fast"], состав: { ru: "розовые розы, альстромерия, шляпная коробка", en: "pink roses, alstroemeria, hat box" }, перевод: { en: "Rose Garden" } },
    { id: 22, название: "Белый вальс", категория: "box", цена: 4590, изображение: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/198/098/045/682/111/56/600020366125b1.jpg", остаток: 4, популярность: 90, время: 120, метки: ["premium", "fresh"], состав: { ru: "белые каллы, эвкалипт, коробка", en: "white callas, eucalyptus, box" }, перевод: { en: "White Waltz" } },
    { id: 23, название: "Королевская орхидея", категория: "box", цена: 5490, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/10/1763031206_48821010.jpg", остаток: 2, популярность: 85, время: 140, метки: ["premium"], состав: { ru: "орхидеи, гортензии, премиум-коробка", en: "orchids, hydrangeas, premium box" }, перевод: { en: "Royal Orchid" } },
    { id: 24, название: "Апельсиновое утро", категория: "box", цена: 2790, изображение: "https://dostavkatsvetov.ru/upload/iblock/c64/c64c34b358b192e2bbc53d3c4b0415d9.jpg", остаток: 10, популярность: 80, время: 65, метки: ["fast"], состав: { ru: "тюльпаны, коробка", en: "tulips, box" }, перевод: { en: "Orange Morning" } },
    { id: 25, название: "Радость дня", категория: "box", цена: 2290, изображение: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-11/519/964/354/181/918/100067692262b0.jpg", остаток: 11, популярность: 80, время: 60, метки: ["hit"], состав: { ru: "герберы, зелень, коробка", en: "gerberas, greenery, box" }, перевод: { en: "Joy of the Day" } },
    { id: 26, название: "Солнце в руках", категория: "box", цена: 2990, изображение: "https://velikie-luki.loveflowers.ru/wp-content/uploads/2021/04/tsvety-v-korobke-solnechnyy-den.jpg", остаток: 8, популярность: 86, время: 70, метки: ["hit", "fresh"], состав: { ru: "подсолнухи, ромашки, лента, коробка", en: "sunflowers, daisies, ribbon, box" }, перевод: { en: "Sun in Hands" } },
    { id: 27, название: "Айвори", категория: "box", цена: 3590, изображение: "https://nesklad.ru/upload/iblock/8f4/azliet8nnw0ckhe23rpvzyfmegdtdpn5.jpg", остаток: 8, популярность: 79, время: 105, метки: ["fresh"], состав: { ru: "кремовые розы, эустома, коробка", en: "cream roses, eustoma, box" }, перевод: { en: "Ivory" } },
    { id: 28, название: "Белая классика", категория: "box", цена: 2990, изображение: "https://i.letu.ru/common/img/pim/2026/04/EX_14c33bd3-2775-43c9-af65-aca92f106875.jpg", остаток: 10, популярность: 86, время: 90, метки: ["hit"], состав: { ru: "белые розы, зелень, шляпная коробка", en: "white roses, greenery, hat box" }, перевод: { en: "White Classic" } },
    { id: 29, название: "Строгий стиль", категория: "box", цена: 4090, изображение: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-12/038/346/974/181/857/100067690820b0.jpg", остаток: 5, популярность: 72, время: 110, метки: ["premium"], состав: { ru: "каллы, коробка", en: "callas, box" }, перевод: { en: "Strict Style" } },
    { id: 30, название: "Шёпот нежности", категория: "box", цена: 2790, изображение: "https://i.letu.ru/common/img/pim/2025/01/EX_ea34c39e-63ff-4f04-b4fb-072b88f254a1.jpg", остаток: 0, популярность: 79, время: 75, метки: ["new"], состав: { ru: "эустома, кустовые розы, коробка", en: "eustoma, spray roses, box" }, перевод: { en: "Whisper of Tenderness" } },
    // БУКЕТЫ НЕВЕСТЫ (10)
    { id: 31, название: "Снежная грация", категория: "wedding", цена: 4890, изображение: "https://www.timyanbuket.com/image/cache/catalog/2026/005_may/6730/0b1a5439-0x800.jpg", остаток: 3, популярность: 83, время: 125, метки: ["premium", "new"], состав: { ru: "белые орхидеи, каллы", en: "white orchids, callas" }, перевод: { en: "Snow Grace" } },
    { id: 32, название: "Лунный свет", категория: "wedding", цена: 4390, изображение: "https://flowersev.ru/upload/iblock/ddd/jyojm08sdkezhk1mw8yoqt2rg7lvf7l0.png", остаток: 7, популярность: 78, время: 100, метки: ["new", "fresh"], состав: { ru: "белая эустома, кустовые розы, эвкалипт", en: "white eustoma, spray roses, eucalyptus" }, перевод: { en: "Moonlight" } },
    { id: 33, название: "Белый шёлк", категория: "wedding", цена: 5190, изображение: "https://static.tildacdn.com/stor3463-3432-4436-a562-343531373032/85675994.jpg", остаток: 0, популярность: 74, время: 135, метки: ["premium"], состав: { ru: "гортензии, орхидеи", en: "hydrangeas, orchids" }, перевод: { en: "Silver Silk" } },
    { id: 34, название: "Жёлтое настроение", категория: "wedding", цена: 2490, изображение: "https://i4.storeland.net/3/1036/210351794/075a3e/35-narcissov-jpg.jpg", остаток: 9, популярность: 82, время: 60, метки: ["fresh"], состав: { ru: "нарциссы", en: "daffodils" }, перевод: { en: "Yellow Mood" } },
    { id: 35, название: "Лимонный фреш", категория: "wedding", цена: 4090, изображение: "https://storage.florist.ru/f/get/supplier/47/products/0/35/ef/_5db80cc3158ac7b1f0eda992ea60/800x800/67c3085c2f755.jpg", остаток: 12, популярность: 75, время: 55, метки: ["fast"], состав: { ru: "жёлтые тюльпаны, лента", en: "yellow tulips, ribbon" }, перевод: { en: "Lemon Fresh" } },
    { id: 36, название: "Янтарный свет", категория: "wedding", цена: 3290, изображение: "https://cs6.livemaster.ru/storage/40/ce/085daa041a8faa08e561650bcacq.jpg", остаток: 6, популярность: 73, время: 80, метки: ["new"], состав: { ru: "оранжевые розы, хризантемы, зелень", en: "orange roses, chrysanthemums, greenery" }, перевод: { en: "Amber Light" } },
    { id: 37, название: "Утро в Тоскане", категория: "wedding", цена: 4190, изображение: "https://cvetokus.ru/images/stories/virtuemart/product/resized/23b6d1ef-4eee-4ecb-9183-afc445f17ed7_600x600.jpg", остаток: 0, популярность: 76, время: 100, метки: ["premium"], состав: { ru: "подсолнухи, эустома", en: "sunflowers, eustoma" }, перевод: { en: "Tuscan Morning" } },
    { id: 38, название: "Летний полдень", категория: "wedding", цена: 4190, изображение: "https://i.letu.ru/common/img/pim/2025/12/AUX_cc24c425-5467-40fa-8e90-09e8ae935196.jpg", остаток: 0, популярность: 77, время: 75, метки: ["fresh"], состав: { ru: "хризантемы, тюльпаны", en: "chrysanthemums, tulips" }, перевод: { en: "Summer Noon" } },
    { id: 39, название: "Невеста мечты", категория: "wedding", цена: 5890, изображение: "https://content2.flowwow-images.com/data/flowers/1000x1000/61/1774587537_92258161.jpg", остаток: 2, популярность: 94, время: 150, метки: ["premium", "hit"], состав: { ru: "розы, эустома", en: "roses, eustoma" }, перевод: { en: "Dream Bride" } },
    { id: 40, название: "Нежный каскад", категория: "wedding", цена: 6590, изображение: "https://buket.market/upload/resize_cache/iblock/51e/1000_1000_140cd750bba9870f18aada2478b24840a/51e97670d1219317727f8869d34fe122.jpg", остаток: 4, популярность: 80, время: 130, метки: ["premium", "new"], состав: { ru: "орхидеи, плющ, белые розы", en: "orchids, ivy, white roses" }, перевод: { en: "Tender Cascade" } },
    // БУКЕТЫ ИЗ СУХОЦВЕТОВ (10)
    { id: 41, название: "Лавандовое поле", категория: "dried", цена: 2190, изображение: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/658/701/293/418/181/1/100067668964b0.jpg", остаток: 4, популярность: 84, время: 120, метки: ["premium"], состав: { ru: "лаванда, сухоцветы, хлопок, крафт", en: "lavender, dried flowers, cotton, craft paper" }, перевод: { en: "Lavender Field" } },
    { id: 42, название: "Ромашковый луг", категория: "dried", цена: 3890, изображение: "https://cs1.livemaster.ru/storage/cc/53/d8b6438afc32fbf6bfcf49faaclp--tsvety-i-floristika-bukety-vesennij-buket-iz-suhotsvetov-roma.jpg", остаток: 0, популярность: 78, время: 115, метки: ["new"], состав: { ru: "ромашки, сухоцветы, зелень", en: "daisies, dried flowers, greenery" }, перевод: { en: "Daisy Meadow" } },
    { id: 43, название: "Васильковое небо", категория: "dried", цена: 3290, изображение: "https://ir.ozone.ru/s3/multimedia-1-v/7616188363.jpg", остаток: 7, популярность: 75, время: 95, метки: ["new"], состав: { ru: "васильки, ромашки, колоски", en: "cornflowers, daisies, spikelets" }, перевод: { en: "Cornflower Sky" } },
    { id: 44, название: "Травы и хлопок", категория: "dried", цена: 3490, изображение: "https://venusinfleurs.ru/image/catalog/product/3469/3469_1.jpg", остаток: 5, популярность: 72, время: 105, метки: ["new", "premium"], состав: { ru: "сухоцветы, хлопок, лаванда, травы", en: "dried flowers, cotton, lavender, herbs" }, перевод: { en: "Herbs and Cotton" } },
    { id: 45, название: "Прованс", категория: "dried", цена: 3990, изображение: "https://basket-12.wbbasket.ru/vol1820/part182014/182014492/images/big/1.webp", остаток: 4, популярность: 82, время: 110, метки: ["premium", "hit"], состав: { ru: "лаванда, сухоцветы, лён", en: "lavender, dried flowers, flax" }, перевод: { en: "Provence" } },
    { id: 46, название: "Дикие травы", категория: "dried", цена: 2490, изображение: "https://cs2.livemaster.ru/storage/1e/f3/242cd1c6faa8c7772d59005be4aj--tsvety-i-floristika-buket-iz-suhotsvetov-raskidistoj-formy-v-.jpg", остаток: 10, популярность: 68, время: 85, метки: ["fast"], состав: { ru: "злаки, травы, сухоцветы", en: "cereals, herbs, dried flowers" }, перевод: { en: "Wild Herbs" } },
    { id: 47, название: "Деревенский шарм", категория: "dried", цена: 3290, изображение: "https://newflora.ru/wp-content/uploads/2020/10/sunb_Newflora.ru-3.jpg", остаток: 5, популярность: 71, время: 100, метки: ["new"], состав: { ru: "подсолнухи мини сухие, травы, колоски, мешковина", en: "dried mini sunflowers, herbs, spikelets, burlap" }, перевод: { en: "Rustic Charm" } },
    { id: 48, название: "Сухоцветный микс", категория: "dried", цена: 3490, изображение: "https://posiflora.com/wp-content/uploads/2024/08/suhoczvety-1.jpg", остаток: 3, популярность: 80, время: 125, метки: ["premium", "new"], состав: { ru: "сухоцветы, лагурус, хлопок, пампасная трава", en: "dried flowers, lagurus, cotton, pampas grass" }, перевод: { en: "Dried Flower Mix" } },
    { id: 49, название: "Полевая свобода", категория: "dried", цена: 1990, изображение: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/250/631/817/118/163/2/600022597421b1.jpg", остаток: 12, популярность: 76, время: 80, метки: ["hit", "fast"], состав: { ru: "ромашки сушёные, васильки, зелень, крафт", en: "dried daisies, cornflowers, greenery, craft paper" }, перевод: { en: "Field Freedom" } },
    { id: 50, название: "Луговая сказка", категория: "dried", цена: 3190, изображение: "", остаток: 6, популярность: 77, время: 100, метки: ["new", "fresh"], состав: { ru: "лаванда, ромашки, зверобой", en: "lavender, daisies, hypericum" }, перевод: { en: "Meadow Tale" } }
];

// ===============================
// ГЛОБАЛЬНОЕ СОСТОЯНИЕ
// ===============================
var cart = [];
var currentFilter = "all";
var currentLang = localStorage.getItem("sotvoryay_lang") || "ru";
var promoCode = null;
var activeOrder = null;
try { activeOrder = JSON.parse(localStorage.getItem("sotvoryay_order") || "null"); } catch (e) { activeOrder = null; }

// ===============================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ===============================
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || (translations.ru && translations.ru[key]) || key;
}

function money(value) {
    return Math.max(0, Math.round(value)).toLocaleString("ru-RU") + " ₽";
}

function getProductName(product) {
    if (currentLang === "ru") return product.название;
    return (product.перевод && product.перевод[currentLang]) || product.название;
}

function getProductComposition(product) {
    return (product.состав && product.состав[currentLang]) || (product.состав && product.состав.ru) || "";
}

function getCategoryName(category) {
    var names = { mono: t("catMono"), author: t("catAuthor"), box: t("catBox"), wedding: t("catWedding"), dried: t("catDried") };
    return names[category] || category;
}

function getTagName(tag) {
    var map = { hit: "tagHit", "new": "tagNew", premium: "tagPremium", fresh: "tagFresh", fast: "tagFast" };
    return t(map[tag] || tag);
}

function showNotification(message) {
    var notif = document.createElement("div");
    notif.className = "notification";
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(function() { notif.remove(); }, 2200);
}

// ===============================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
// ===============================
function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.title = t("siteTitle");
    var i18nEls = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < i18nEls.length; i++) { i18nEls[i].textContent = t(i18nEls[i].getAttribute("data-i18n")); }
    var placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < placeholderEls.length; j++) { placeholderEls[j].placeholder = t(placeholderEls[j].getAttribute("data-i18n-placeholder")); }
    var langBtns = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < langBtns.length; k++) {
        if (langBtns[k].getAttribute("data-lang") === currentLang) { langBtns[k].classList.add("active"); } else { langBtns[k].classList.remove("active"); }
    }
    renderProducts(); populateBuilderBase(); updateBuilder(); updateCartUI(); renderOrderStatus(); fillSlots();
}

function setupLanguageSwitcher() {
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() { currentLang = this.getAttribute("data-lang"); localStorage.setItem("sotvoryay_lang", currentLang); applyLanguage(); });
    }
}

// ===============================
// РЕЖИМ СОТРУДНИКА
// ===============================
function setupStaffAccess() {
    var staffBtn = document.getElementById("staffBtn");
    var staffModal = document.getElementById("staffModal");
    var closeStaffBtn = document.getElementById("closeStaffBtn");
    var staffForm = document.getElementById("staffForm");
    var staffArea = document.getElementById("staffArea");
    var staffLogoutBtn = document.getElementById("staffLogoutBtn");
    if (sessionStorage.getItem("sotvoryay_staff") === "1" && staffArea) { staffArea.classList.remove("hidden"); }
    if (staffBtn) { staffBtn.addEventListener("click", function() { if (sessionStorage.getItem("sotvoryay_staff") === "1" && staffArea) { staffArea.scrollIntoView({ behavior: "smooth" }); } else { openModal(staffModal); } }); }
    if (closeStaffBtn) { closeStaffBtn.addEventListener("click", function() { closeModal(staffModal); }); }
    if (staffModal) { staffModal.addEventListener("click", function(e) { if (e.target === staffModal) closeModal(staffModal); }); }
    if (staffForm) { staffForm.addEventListener("submit", function(e) { e.preventDefault(); var code = document.getElementById("staffCode"); var val = code ? code.value.trim() : ""; if (val === STAFF_CODE) { sessionStorage.setItem("sotvoryay_staff", "1"); if (staffArea) staffArea.classList.remove("hidden"); closeModal(staffModal); staffForm.reset(); showNotification(t("staffWelcome")); if (staffArea) staffArea.scrollIntoView({ behavior: "smooth" }); } else { showNotification(t("staffWrongCode")); } }); }
    if (staffLogoutBtn) { staffLogoutBtn.addEventListener("click", function() { sessionStorage.removeItem("sotvoryay_staff"); if (staffArea) staffArea.classList.add("hidden"); showNotification(t("staffClosed")); window.scrollTo({ top: 0, behavior: "smooth" }); }); }
}

// ===============================
// КОРЗИНА
// ===============================
function saveCart() { localStorage.setItem("sotvoryay_cart", JSON.stringify(cart)); }

function loadCart() {
    try { var saved = localStorage.getItem("sotvoryay_cart"); cart = saved ? JSON.parse(saved) : []; var clean = []; for (var i = 0; i < cart.length; i++) { if (cart[i] && cart[i].id !== undefined) { cart[i].quantity = Number(cart[i].quantity || 1); clean.push(cart[i]); } } cart = clean; } catch (e) { cart = []; }
    updateCartUI();
}

function addToCart(id) {
    var productId = Number(id); var product = null;
    for (var i = 0; i < flowersCatalog.length; i++) { if (flowersCatalog[i].id === productId) { product = flowersCatalog[i]; break; } }
    if (!product) return;
    if (product.остаток <= 0) { showNotification(t("notifyMessage") + ": " + getProductName(product)); return; }
    var existing = null;
    for (var j = 0; j < cart.length; j++) { if (!cart[j].custom && Number(cart[j].id) === productId) { existing = cart[j]; break; } }
    if (existing) { if (existing.quantity >= product.остаток) { showNotification(t("available") + ": " + product.остаток); return; } existing.quantity++; } else { cart.push({ id: productId, quantity: 1, custom: false }); }
    saveCart(); updateCartUI(); showNotification(getProductName(product) + " " + t("addedToCart"));
}

function increaseCartItem(id) {
    var item = null; for (var i = 0; i < cart.length; i++) { if (String(cart[i].id) === String(id)) { item = cart[i]; break; } }
    if (!item) return;
    if (!item.custom) { var product = null; for (var j = 0; j < flowersCatalog.length; j++) { if (flowersCatalog[j].id === Number(item.id)) { product = flowersCatalog[j]; break; } } if (product && item.quantity >= product.остаток) { showNotification(t("available") + ": " + product.остаток); return; } }
    item.quantity++; saveCart(); updateCartUI();
}

function removeFromCart(id) {
    var index = -1; for (var i = 0; i < cart.length; i++) { if (String(cart[i].id) === String(id)) { index = i; break; } }
    if (index === -1) return;
    if (cart[index].quantity > 1) { cart[index].quantity--; } else { cart.splice(index, 1); }
    saveCart(); updateCartUI();
}

function deleteFromCart(id) {
    var clean = []; for (var i = 0; i < cart.length; i++) { if (String(cart[i].id) !== String(id)) clean.push(cart[i]); }
    cart = clean; saveCart(); updateCartUI();
}

function getCartCount() { var sum = 0; for (var i = 0; i < cart.length; i++) sum += Number(cart[i].quantity || 0); return sum; }

function getCartSubtotal() {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].custom) { sum += Number(cart[i].price || 0) * Number(cart[i].quantity || 1); }
        else { var product = null; for (var j = 0; j < flowersCatalog.length; j++) { if (flowersCatalog[j].id === Number(cart[i].id)) { product = flowersCatalog[j]; break; } } if (product) sum += product.цена * Number(cart[i].quantity || 1); }
    }
    return sum;
}

function getCartSummary() {
    var subtotal = getCartSubtotal();
    var discount = promoCode === "START15" ? subtotal * 0.15 : 0;
    var bonusInput = document.getElementById("bonusInput");
    var requestedBonuses = Number(bonusInput ? bonusInput.value : 0) || 0;
    var bonuses = Math.min(requestedBonuses, subtotal * 0.3);
    var delivery = (subtotal === 0 || subtotal >= 3000) ? 0 : 350;
    var total = subtotal - discount - bonuses + delivery;
    return { subtotal: subtotal, discount: discount, bonuses: bonuses, delivery: delivery, total: total };
}

function updateCartUI() {
    var cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) cartCountEl.textContent = getCartCount();
    var cartList = document.getElementById("cartList");
    var totalDiv = document.getElementById("cartTotalPrice");
    if (!cartList || !totalDiv) return;
    if (cart.length === 0) { cartList.innerHTML = '<div class="empty-cart-msg">' + t("emptyCart") + '</div>'; totalDiv.textContent = t("total") + ": " + money(0); return; }
    var html = "";
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i]; var name = "", price = 0, meta = "";
        if (item.custom) { name = (item.names && item.names[currentLang]) || (item.names && item.names.ru) || t("individualBouquet"); price = Number(item.price || 0); meta = (item.params && item.params[currentLang]) || (item.params && item.params.ru) || ""; }
        else { var product = null; for (var j = 0; j < flowersCatalog.length; j++) { if (flowersCatalog[j].id === Number(item.id)) { product = flowersCatalog[j]; break; } } if (!product) continue; name = getProductName(product); price = product.цена; meta = getProductComposition(product); }
        html += '<li class="cart-item"><div><div class="cart-item-title">' + name + '</div><div class="cart-item-meta">' + meta + '</div><div class="cart-item-meta">' + money(price) + ' × ' + item.quantity + '</div></div><div class="cart-item-actions"><button type="button" onclick="removeFromCart(\'' + item.id + '\')">−</button><span style="min-width:25px;text-align:center">' + item.quantity + '</span><button type="button" onclick="increaseCartItem(\'' + item.id + '\')">+</button><button type="button" onclick="deleteFromCart(\'' + item.id + '\')">×</button></div></li>';
    }
    cartList.innerHTML = html;
    var summary = getCartSummary();
    totalDiv.innerHTML = t("total") + ": <strong>" + money(summary.total) + "</strong><small>" + t("deliveryCost") + ": " + money(summary.delivery) + " · " + t("discount") + ": " + money(summary.discount) + " · " + t("bonusesUsed") + ": " + money(summary.bonuses) + "</small>";
}

// ===============================
// ОТРИСОВКА ТОВАРОВ
// ===============================
function renderProducts() {
    var grid = document.getElementById("productsGrid"); var results = document.getElementById("resultsCount"); if (!grid) return;
    var searchEl = document.getElementById("productSearch"); var search = searchEl ? searchEl.value.trim().toLowerCase() : "";
    var selectFilterEl = document.getElementById("catalogFilter"); var selectFilter = selectFilterEl ? selectFilterEl.value : "all";
    var minPriceEl = document.getElementById("minPrice"); var minPrice = Number(minPriceEl ? minPriceEl.value : 0) || 0;
    var maxPriceEl = document.getElementById("maxPrice"); var maxPriceRaw = maxPriceEl ? maxPriceEl.value : ""; var maxPrice = maxPriceRaw ? Number(maxPriceRaw) : Infinity;
    var stockOnlyEl = document.getElementById("stockOnly"); var stockOnly = stockOnlyEl ? stockOnlyEl.checked : false;
    var sortEl = document.getElementById("sortSelect"); var sort = sortEl ? sortEl.value : "popular";
    currentFilter = selectFilter;
    var filtered = [];
    for (var i = 0; i < flowersCatalog.length; i++) {
        var p = flowersCatalog[i]; var name = getProductName(p).toLowerCase(); var nameRu = p.название.toLowerCase(); var composition = getProductComposition(p).toLowerCase();
        var matchCategory = currentFilter === "all" || p.категория === currentFilter;
        var matchSearch = !search || name.indexOf(search) !== -1 || nameRu.indexOf(search) !== -1 || composition.indexOf(search) !== -1;
        var matchPrice = p.цена >= minPrice && p.цена <= maxPrice;
        var matchStock = !stockOnly || p.остаток > 0;
        if (matchCategory && matchSearch && matchPrice && matchStock) filtered.push(p);
    }
    filtered.sort(function(a, b) { if (sort === "priceAsc") return a.цена - b.цена; if (sort === "priceDesc") return b.цена - a.цена; if (sort === "delivery") return a.время - b.время; return b.популярность - a.популярность; });
    if (results) results.textContent = filtered.length + " " + t("found");
    if (filtered.length === 0) { grid.innerHTML = '<div class="empty-cart-msg">' + t("noResults") + '</div>'; return; }
    grid.innerHTML = "";
    for (var j = 0; j < filtered.length; j++) {
        var product = filtered[j]; var isAvailable = product.остаток > 0;
        var card = document.createElement("article"); card.className = "product-card" + (isAvailable ? "" : " disabled");
        var badgesHtml = ""; for (var b = 0; b < product.метки.length; b++) { badgesHtml += '<span class="badge">' + getTagName(product.метки[b]) + '</span>'; }
        var actionsHtml = isAvailable ? '<button type="button" class="btn-add" onclick="addToCart(' + product.id + ')">' + t("addToCart") + '</button>' : '<button type="button" class="btn-add" onclick="notifyProduct(' + product.id + ')">' + t("notifyMe") + '</button>';
        card.innerHTML = '<div class="product-img"><img src="' + product.изображение.trim() + '" alt="' + getProductName(product) + '" loading="lazy"><div class="badges">' + badgesHtml + '</div></div><div class="product-info"><div class="product-category">' + getCategoryName(product.категория) + '</div><div class="product-title">' + getProductName(product) + '</div><p class="product-composition">' + getProductComposition(product) + '</p><div class="product-meta"><span class="' + (isAvailable ? "stock-ok" : "stock-no") + '">' + (isAvailable ? t("available") + ": " + product.остаток : t("unavailable")) + '</span><span>' + t("deliveryFrom") + ' ' + product.время + ' ' + t("minutesShort") + '</span></div><div class="product-price">' + money(product.цена) + '</div><div class="product-actions">' + actionsHtml + '<button type="button" class="btn-add secondary" onclick="prefillBuilder(' + product.id + ')">' + t("customize") + '</button></div></div>';
        grid.appendChild(card);
    }
}

function notifyProduct(id) {
    var product = null; for (var i = 0; i < flowersCatalog.length; i++) { if (flowersCatalog[i].id === Number(id)) { product = flowersCatalog[i]; break; } }
    if (!product) return; showNotification(t("notifyMessage") + ": " + getProductName(product));
}

// ===============================
// ФИЛЬТРЫ
// ===============================
function setupFilters() {
    var ids = ["productSearch", "catalogFilter", "minPrice", "maxPrice", "stockOnly", "sortSelect"];
    for (var i = 0; i < ids.length; i++) { var el = document.getElementById(ids[i]); if (!el) continue; el.addEventListener("input", renderProducts); el.addEventListener("change", renderProducts); }
    var filterEls = document.querySelectorAll("[data-filter]");
    for (var j = 0; j < filterEls.length; j++) {
        filterEls[j].addEventListener("click", function() {
            var filterValue = this.getAttribute("data-filter"); if (!filterValue) return;
            currentFilter = filterValue; var catalogFilterEl = document.getElementById("catalogFilter"); if (catalogFilterEl) catalogFilterEl.value = filterValue;
            var cards = document.querySelectorAll(".filter-card"); for (var k = 0; k < cards.length; k++) { if (cards[k].getAttribute("data-filter") === filterValue) { cards[k].classList.add("active"); } else { cards[k].classList.remove("active"); } }
            renderProducts(); var productsSection = document.getElementById("products"); if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
        });
    }
    var reset = document.getElementById("resetFiltersBtn");
    if (reset) { reset.addEventListener("click", function() { currentFilter = "all"; var s = document.getElementById("productSearch"); if (s) s.value = ""; var f = document.getElementById("catalogFilter"); if (f) f.value = "all"; var mn = document.getElementById("minPrice"); if (mn) mn.value = ""; var mx = document.getElementById("maxPrice"); if (mx) mx.value = ""; var so = document.getElementById("stockOnly"); if (so) so.checked = false; var sr = document.getElementById("sortSelect"); if (sr) sr.value = "popular"; var cards = document.querySelectorAll(".filter-card"); for (var i = 0; i < cards.length; i++) cards[i].classList.remove("active"); renderProducts(); }); }
}

// ===============================
// МОДАЛЬНЫЕ ОКНА
// ===============================
function openModal(modal) { if (modal) modal.classList.add("active"); }
function closeModal(modal) { if (modal) modal.classList.remove("active"); }

function setupCartModal() {
    var modal = document.getElementById("cartModal"); var cartButton = document.getElementById("cartButton"); var closeCartBtn = document.getElementById("closeCartBtn"); var checkoutBtn = document.getElementById("checkoutBtn");
    if (cartButton) { cartButton.addEventListener("click", function() { updateCartUI(); openModal(modal); }); }
    if (closeCartBtn) { closeCartBtn.addEventListener("click", function() { closeModal(modal); }); }
    if (checkoutBtn) { checkoutBtn.addEventListener("click", function() { if (!cart.length) { showNotification(t("emptyCart")); return; } openCheckoutModal(); }); }
    if (modal) { modal.addEventListener("click", function(e) { if (e.target === modal) closeModal(modal); }); }
    var applyPromoBtn = document.getElementById("applyPromoBtn");
    if (applyPromoBtn) { applyPromoBtn.addEventListener("click", function() { var input = document.getElementById("promoInput"); var code = input ? input.value.trim().toUpperCase() : ""; if (code === "START15") { promoCode = "START15"; showNotification(t("promoApplied")); } else { promoCode = null; showNotification(t("promoWrong")); } updateCartUI(); }); }
    var bonusInput = document.getElementById("bonusInput"); if (bonusInput) { bonusInput.addEventListener("input", updateCartUI); }
}

function setupSupportModal() {
    var helperBtn = document.getElementById("helperBtn"); var supportModal = document.getElementById("supportModal"); var closeSupportBtn = document.getElementById("closeSupportBtn"); var supportCartBtn = document.getElementById("supportCartBtn");
    if (helperBtn) { helperBtn.addEventListener("click", function() { openModal(supportModal); }); }
    if (closeSupportBtn) { closeSupportBtn.addEventListener("click", function() { closeModal(supportModal); }); }
    if (supportCartBtn) { supportCartBtn.addEventListener("click", function() { closeModal(supportModal); openModal(document.getElementById("cartModal")); }); }
    if (supportModal) { supportModal.addEventListener("click", function(e) { if (e.target === supportModal) closeModal(supportModal); }); }
}

// ===============================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ===============================
function openCheckoutModal() {
    var modal = document.getElementById("checkoutModal"); var summaryBox = document.getElementById("checkoutSummary"); var summary = getCartSummary();
    if (summaryBox) { summaryBox.innerHTML = t("checkoutSummary") + ": " + money(summary.total) + "<br>" + t("deliveryCost") + ": " + money(summary.delivery) + "<br>" + t("discount") + ": " + money(summary.discount) + "<br>" + t("bonusesUsed") + ": " + money(summary.bonuses); }
    openModal(modal);
}

function setupCheckout() {
    var modal = document.getElementById("checkoutModal"); var closeBtn = document.getElementById("closeCheckoutBtn"); var form = document.getElementById("checkoutForm"); var receiveMethod = document.getElementById("receiveMethod"); var address = document.getElementById("checkoutAddress");
    if (closeBtn) { closeBtn.addEventListener("click", function() { closeModal(modal); }); }
    if (modal) { modal.addEventListener("click", function(e) { if (e.target === modal) closeModal(modal); }); }
    if (receiveMethod && address) { receiveMethod.addEventListener("change", function() { var isPickup = receiveMethod.value === "pickup"; address.style.display = isPickup ? "none" : "block"; address.required = !isPickup; }); }
    if (form) { form.addEventListener("submit", function(e) { e.preventDefault(); var summary = getCartSummary(); activeOrder = { id: Math.floor(1000 + Math.random() * 9000), total: summary.total, status: 0, createdAt: new Date().toISOString() }; localStorage.setItem("sotvoryay_order", JSON.stringify(activeOrder)); cart = []; promoCode = null; saveCart(); updateCartUI(); renderOrderStatus(); closeModal(modal); closeModal(document.getElementById("cartModal")); showNotification(t("orderCreated")); simulateOrderStatus(); location.hash = "#tracking"; form.reset(); }); }
}

function renderOrderStatus() {
    var box = document.getElementById("orderStatusBox"); if (!box) return;
    if (!activeOrder) { box.innerHTML = '<div class="empty-cart-msg">' + t("noActiveOrder") + '</div>'; return; }
    var statuses = ["statusAccepted", "statusAssembling", "statusCourier", "statusWay", "statusDelivered"];
    var html = '<p><strong>#' + activeOrder.id + '</strong> · ' + money(activeOrder.total) + '</p><div class="status-line">';
    for (var i = 0; i < statuses.length; i++) { html += '<div class="status-step' + (i <= activeOrder.status ? ' active' : '') + '">' + t(statuses[i]) + '</div>'; }
    html += '</div>'; box.innerHTML = html;
}

function simulateOrderStatus() {
    if (!activeOrder) return; var steps = [1, 2, 3, 4];
    for (var i = 0; i < steps.length; i++) { (function(status, delay) { setTimeout(function() { if (!activeOrder) return; activeOrder.status = status; localStorage.setItem("sotvoryay_order", JSON.stringify(activeOrder)); renderOrderStatus(); }, delay); })(steps[i], (i + 1) * 4500); }
}

// ===============================
// КОНСТРУКТОР БУКЕТА
// ===============================
var sizePrices = { s: 0, m: 700, l: 1500 };
var wrapPrices = { craft: 0, matte: 350, premium: 700 };

function populateBuilderBase() {
    var select = document.getElementById("baseSelect"); if (!select) return; var selected = select.value;
    var html = '<option value="">' + t("choose") + '</option>';
    for (var i = 0; i < flowersCatalog.length; i++) { if (flowersCatalog[i].остаток > 0) { html += '<option value="' + flowersCatalog[i].id + '">' + getProductName(flowersCatalog[i]) + ' — ' + money(flowersCatalog[i].цена) + '</option>'; } }
    select.innerHTML = html; if (selected) select.value = selected;
}

function getBuilderState() {
    var baseSelectEl = document.getElementById("baseSelect"); var baseId = Number(baseSelectEl ? baseSelectEl.value : 0); var base = null;
    for (var i = 0; i < flowersCatalog.length; i++) { if (flowersCatalog[i].id === baseId) { base = flowersCatalog[i]; break; } }
    var sizeEl = document.getElementById("sizeSelect"); var size = sizeEl ? sizeEl.value : "";
    var wrapEl = document.getElementById("wrapSelect"); var wrap = wrapEl ? wrapEl.value : "";
    var cardTextEl = document.getElementById("cardText"); var cardText = cardTextEl ? cardTextEl.value : "";
    var addons = document.querySelectorAll(".builder-addon:checked");
    var price = base ? base.цена : 0; price += sizePrices[size] || 0; price += wrapPrices[wrap] || 0;
    for (var j = 0; j < addons.length; j++) { price += Number(addons[j].getAttribute("data-price") || 0); }
    var warnings = [];
    if (!base || !size || !wrap) warnings.push(t("warnRequired"));
    var premiumCount = 0; for (var k = 0; k < addons.length; k++) { if (addons[k].getAttribute("data-premium") === "1") premiumCount++; }
    if (premiumCount > 2) warnings.push(t("warnPremium"));
    if (base && base.категория === "dried") { for (var m = 0; m < addons.length; m++) { var val = addons[m].value; if (val === "peony" || val === "tulip") { warnings.push(t("warnSeason")); break; } } }
    var parts = []; if (base) parts.push(getProductName(base)); if (size) parts.push(t("size") + ": " + size.toUpperCase()); if (wrap) parts.push(t("package") + ": " + wrap);
    var addonNames = []; for (var n = 0; n < addons.length; n++) addonNames.push(addons[n].value); if (addonNames.length) parts.push("+ " + addonNames.join(", "));
    if (cardText) parts.push(t("postcard") + ": " + cardText); var params = parts.join(" · ");
    return { valid: warnings.length === 0, price: price, warnings: warnings, params: params };
}

function updateBuilder() {
    var total = document.getElementById("builderTotal"); var preview = document.getElementById("builderPreview"); var previewPrice = document.getElementById("builderPreviewPrice"); var warningsBox = document.getElementById("builderWarnings"); var addCustomBtn = document.getElementById("addCustomBtn");
    var state = getBuilderState();
    if (total) total.textContent = money(state.price); if (preview) preview.textContent = state.params || "—"; if (previewPrice) previewPrice.textContent = money(state.price);
    if (warningsBox) { var wHtml = ""; for (var i = 0; i < state.warnings.length; i++) { wHtml += '<div class="warning">' + state.warnings[i] + '</div>'; } warningsBox.innerHTML = wHtml; }
    if (addCustomBtn) addCustomBtn.disabled = !state.valid;
}

function saveBuilderDraft() {
    var addons = document.querySelectorAll(".builder-addon:checked"); var addonVals = []; for (var i = 0; i < addons.length; i++) addonVals.push(addons[i].value);
    var draft = { base: (document.getElementById("baseSelect") || {}).value || "", size: (document.getElementById("sizeSelect") || {}).value || "", wrap: (document.getElementById("wrapSelect") || {}).value || "", cardText: (document.getElementById("cardText") || {}).value || "", addons: addonVals };
    localStorage.setItem("sotvoryay_builder_draft", JSON.stringify(draft)); showNotification(t("draftSaved"));
}

function loadBuilderDraft() {
    var saved = localStorage.getItem("sotvoryay_builder_draft"); if (!saved) return;
    try { var draft = JSON.parse(saved); var b = document.getElementById("baseSelect"); if (b) b.value = draft.base || ""; var s = document.getElementById("sizeSelect"); if (s) s.value = draft.size || ""; var w = document.getElementById("wrapSelect"); if (w) w.value = draft.wrap || ""; var c = document.getElementById("cardText"); if (c) c.value = draft.cardText || ""; var addons = document.querySelectorAll(".builder-addon"); for (var i = 0; i < addons.length; i++) { addons[i].checked = draft.addons && draft.addons.indexOf(addons[i].value) !== -1; } updateBuilder(); } catch (e) { localStorage.removeItem("sotvoryay_builder_draft"); }
}

function addCustomBouquetToCart() {
    var state = getBuilderState(); if (!state.valid) return;
    cart.push({ id: "custom-" + Date.now(), custom: true, quantity: 1, price: state.price, names: { ru: translations.ru.individualBouquet, en: translations.en.individualBouquet }, params: { ru: state.params, en: state.params } });
    saveCart(); updateCartUI(); showNotification(t("customAdded")); openModal(document.getElementById("cartModal"));
}

function prefillBuilder(id) {
    var select = document.getElementById("baseSelect"); if (!select) return; select.value = String(id); updateBuilder();
    var section = document.getElementById("constructor"); if (section) section.scrollIntoView({ behavior: "smooth" });
}

function setupBuilder() {
    var ids = ["baseSelect", "sizeSelect", "wrapSelect", "cardText"];
    for (var i = 0; i < ids.length; i++) { var el = document.getElementById(ids[i]); if (!el) continue; el.addEventListener("input", updateBuilder); el.addEventListener("change", updateBuilder); }
    var addons = document.querySelectorAll(".builder-addon"); for (var j = 0; j < addons.length; j++) { addons[j].addEventListener("change", updateBuilder); }
    var saveDraftBtn = document.getElementById("saveDraftBtn"); if (saveDraftBtn) saveDraftBtn.addEventListener("click", saveBuilderDraft);
    var addCustomBtn = document.getElementById("addCustomBtn"); if (addCustomBtn) addCustomBtn.addEventListener("click", addCustomBouquetToCart);
}

// ===============================
// ДОСТАВКА И СЛОТЫ
// ===============================
function fillSlots() {
    var slots = ["09:00–11:00", "11:00–13:00", "13:00–15:00", "15:00–17:00", "17:00–19:00", "19:00–21:00"];
    var selectIds = ["deliverySlot", "checkoutSlot"];
    for (var i = 0; i < selectIds.length; i++) { var select = document.getElementById(selectIds[i]); if (!select) continue; var html = ""; for (var j = 0; j < slots.length; j++) { var disabled = j === 2 ? " disabled" : ""; var label = j === 2 ? slots[j] + " — " + t("busy") : slots[j]; html += '<option value="' + slots[j] + '"' + disabled + '>' + label + '</option>'; } select.innerHTML = html; }
}

function setDateLimits() {
    var today = new Date().toISOString().split("T")[0]; var dateIds = ["deliveryDate", "checkoutDate"];
    for (var i = 0; i < dateIds.length; i++) { var input = document.getElementById(dateIds[i]); if (!input) continue; input.min = today; input.value = today; }
}

// ===============================
// ТАБЫ ПАНЕЛИ СОТРУДНИКОВ
// ===============================
function setupAdminTabs() {
    var tabs = document.querySelectorAll(".role-tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
            var allTabs = document.querySelectorAll(".role-tab"); for (var j = 0; j < allTabs.length; j++) allTabs[j].classList.remove("active");
            var allPanels = document.querySelectorAll(".role-panel"); for (var k = 0; k < allPanels.length; k++) allPanels[k].classList.remove("active");
            this.classList.add("active"); var panel = document.getElementById(this.getAttribute("data-panel")); if (panel) panel.classList.add("active");
        });
    }
}

// ===============================
// ТАЙМЕР АКЦИИ
// ===============================
function startTimer() {
    var time = 23 * 3600 + 35 * 60 + 23; var hours = document.getElementById("hours"); var minutes = document.getElementById("minutes"); var seconds = document.getElementById("seconds");
    if (!hours || !minutes || !seconds) return;
    setInterval(function() { if (time <= 0) return; time--; var h = Math.floor(time / 3600); var m = Math.floor((time % 3600) / 60); var s = time % 60; hours.textContent = (h < 10 ? "0" : "") + h; minutes.textContent = (m < 10 ? "0" : "") + m; seconds.textContent = (s < 10 ? "0" : "") + s; }, 1000);
}

// ===============================
// ФОРМЫ
// ===============================
function setupForms() {
    var subscribeForm = document.getElementById("subscribeForm");
    if (subscribeForm) { subscribeForm.addEventListener("submit", function(e) { e.preventDefault(); var emailEl = document.getElementById("subEmail"); var email = emailEl ? emailEl.value : ""; if (email) { showNotification(t("subscribed") + ", " + email + "!"); subscribeForm.reset(); } }); }
    var corporateForm = document.getElementById("corporateForm");
    if (corporateForm) { corporateForm.addEventListener("submit", function(e) { e.preventDefault(); showNotification(t("corporateSent")); corporateForm.reset(); }); }
}

// ===============================
// ИНИЦИАЛИЗАЦИЯ
// ===============================
document.addEventListener("DOMContentLoaded", function() {
    loadCart();
    setDateLimits();
    fillSlots();
    setupLanguageSwitcher();
    setupStaffAccess();
    setupFilters();
    setupCartModal();
    setupCheckout();
    setupSupportModal();
    setupBuilder();
    setupAdminTabs();
    setupForms();
    populateBuilderBase();
    loadBuilderDraft();
    applyLanguage();
    startTimer();
});
