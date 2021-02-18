import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import PageZh from './locales/zh_cn'
import PageEn from './locales/en_us'
import store from "store";

// the translations
// (tip move them in a JSON file and import them)

// 多语言，会默认先读取 缓存，如没有，默认英文
const languageType = store.get('languageType') || 'zh_cn';


const resources = {
    en_us: {
        translation: PageEn
    },
    zh_cn: {
        translation: PageZh
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: languageType,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
