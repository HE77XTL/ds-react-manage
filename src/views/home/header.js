import React from 'react'
import {Button} from "antd";
import {connect} from 'react-redux'
import styles from './homeCommon.module.less'
import {menuCollapse} from '../../actions/index'
import Logo from "../../assets/image/headerLogo.jpg";
import LanguageChange from '../../components/languageChange/languageChange'
import UserAvatar from '../../components/userAvatar/userAvatar'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'

const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

const Header = function ({menuStatus, dispatch}) {
    console.log(11111111)
//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function onCollapse() {
        dispatch(menuCollapse(!menuStatus))
    }

    return (<div className={`${styles.header} ${menuStatus ? styles.collapsed : null}`}>
        <div className={styles.logoWrap}>
            <img src={Logo} alt="logo"/>
        </div>
        <div className={styles.toggleBtn}>
            {menuStatus ? <MenuUnfoldOutlined onClick={onCollapse}/> : <MenuFoldOutlined onClick={onCollapse}/>}
        </div>
        <UserAvatar/>
        <LanguageChange/>
    </div>)
};

export default connect(mapStateToProps)(Header)
