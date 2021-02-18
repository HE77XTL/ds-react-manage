import React from 'react'
import styles from './homeCommon.module.less'
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

const Menu = function ({menuStatus}) {
    console.log('menuStatus88888')
    console.log(menuStatus)
//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

    return (<div className={`${styles.menu} ${menuStatus ? styles.collapsed : null}`}>
        Menu
    </div>)
}

export default connect(mapStateToProps)(Menu)
