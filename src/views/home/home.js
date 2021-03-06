import React, {useState} from 'react'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import store from 'store'
import {Button, DatePicker} from 'antd'
import HomeRouter from '../../router/home'
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom'

import Header from './header'
import Menu from './menu'
import styles from './homeCommon.module.less'


const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

const Home = function ({menuStatus}) {
    const history = useHistory();
    const currentUrl = history.location.pathname;
    const {t} = useTranslation();

//--- useState ----------------------


//--- useEffect ----------------------

//--- function ----------------------


    return (<div className={styles.home}>
        <Header/>
        <Menu currentUrl={currentUrl}/>
        <div className={`${styles.content} ${menuStatus ? styles.collapsed : null} `}>
            <HomeRouter/>
        </div>
    </div>)
}

export default connect(mapStateToProps)(Home)
