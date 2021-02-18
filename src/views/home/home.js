import React, {useState} from 'react'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import store from 'store'
import {Button, DatePicker} from 'antd'
import HomeRouter from '../../router/home'

const Home = function () {
    const {t} = useTranslation();

//--- useState ----------------------


//--- useEffect ----------------------

//--- function ----------------------


    return (<div>
        <h2>homePage</h2>
        <h3>
            {t('helloWorld')}
        </h3>
        <div>
            <DatePicker/>
        </div>
        <div style={{padding: '20px'}}>
            <HomeRouter/>
        </div>
    </div>)
}

export default Home
