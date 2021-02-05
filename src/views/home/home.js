import React, {useState} from 'react'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import store from 'store'

const Home = function () {
    const {t, i18n} = useTranslation();

//--- useState ----------------------
    const [toggleBtn, setToggleBtn] = useState(getLanguage(store.get('languageType')));

//--- useEffect ----------------------

//--- function ----------------------
    function languageChange(item) {
        let newBtn = {
            type: 'zh',
            text: '点击切换英文'
        };
        if (toggleBtn.type === 'zh') {
            newBtn.type = 'en'
            newBtn.text = '点击切换中文'
        }
        i18next.changeLanguage(newBtn.type);
        setToggleBtn(getLanguage(newBtn.type));
        store.set("languageType", item.type);
    }

    function getLanguage(type) {
        switch (type) {
            case 'zh':
                return {
                    type: 'zh',
                    text: '点击切换英文'
                };
            case 'en':
                return {
                    type: 'en',
                    text: '点击切换中文'
                };
            default:
                return {
                    type: 'en',
                    text: '点击切换中文'
                }
        }

    }

    return (<div>
        <h2>homePage</h2>
        <h3>
            {t('helloWorld')}
        </h3>
        <div>
            <button onClick={languageChange}>{toggleBtn.text}</button>
        </div>
    </div>)
}

export default Home
