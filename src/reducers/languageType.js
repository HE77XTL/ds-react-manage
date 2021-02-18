import i18next from "i18next";
import {Message} from 'antd'
import store from "store";

import zhCNAntd from 'antd/lib/locale/zh_CN';
import enGBAntd from 'antd/lib/locale/en_GB';

function updateObject(oldObject, newValues) {
    // 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
    return Object.assign({}, oldObject, newValues);
}

function getAntLanguage(type) {
    switch (type) {
        case 'zh_cn':
            return zhCNAntd;
        case 'en_us':
            return enGBAntd;
        default:
            return zhCNAntd;
    }
}


const languageType = (state = {
    i18next: 'zh_cn',
    antDesign: zhCNAntd
}, action) => {
    switch (action.type) {
        case 'TOGGLE_LANGUAGE':
            i18next.changeLanguage(action.languageType).catch(() => {
                Message.error("change language fail")
            });
            store.set("languageType", action.languageType);

            return updateObject(state, {
                i18next: action.languageType,
                antDesign: getAntLanguage(action.languageType)
            });
        default:
            return state
    }
};

export default languageType
