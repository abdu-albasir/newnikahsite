export const countriesName = ["Казахстан", "Киргизия", "Узбекистан", "Россия"];

// gender & country
export const page1 = {
  title: "Заполнение анкеты",
  items: {
    gender: {
      title: "Выберите Ваш пол",
      items: [
        {
          label: "Я Мужчина",
          value: "Мужчина",
        },
        {
          label: "Я Женщина",
          value: "Женщина",
        },
      ],
    },
    country: {
      title: "Выберите Вашу Страну",
      items: [
        {
          label: countriesName[0],
          value: countriesName[0],
        },
        {
          label: countriesName[1],
          value: countriesName[1],
        },
        {
          label: countriesName[2],
          value: countriesName[2],
        },
        {
          label: countriesName[3],
          value: countriesName[3],
        },
      ],
    },
  },
};

// country & region
export const page2 = {
  title: "Выберите Ваш город",
  name: "region",
  countries: {
    [countriesName[0]]: {
      name: countriesName[0],
      regions: [
        "Алматы",
        "Астана",
        "Шымкент",
        "Актобе",
        "Тараз",
        "Атырау",
        "Кызылорда",
        "Актау",
        "Павлодар",
        "Караганда",
        "Костанай",
        "Туркестан",
      ],
    },
    [countriesName[1]]: {
      name: countriesName[1],
      regions: [
        "Бишкек",
        "Ош",
        "Джалал-Абад",
        "Каракол",
        "Токмок",
        "Узген",
        "Базар-Коргон",
      ],
    },
    [countriesName[2]]: {
      name: countriesName[2],
      regions: [
        "Ташкент",
        "Самарканд",
        "Бухара",
        "Андижан",
        "Фергана",
        "Навои",
        "Наманган",
      ],
    },
    [countriesName[3]]: {
      name: countriesName[3],
      regions: [
        "Москва",
        "Санкт-Петербург",
        "Новосибирск",
        "Екатеринбург",
        "Нижний Новгород",
        "Казань",
        "Челябинск",
        "Краснодарский край",
        "Свердловск",
      ],
    },
  },
};
