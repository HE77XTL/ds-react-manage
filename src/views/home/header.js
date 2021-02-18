import React from 'react'
import {Button} from "antd";
import {connect} from 'react-redux'
import styles from './homeCommon.module.less'
import {menuCollapse} from '../../actions/index'

const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

const Header = function ({menuStatus, dispatch}) {

    console.log('menuStatus7777')
    console.log(menuStatus)

//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    function onCollapse() {
        dispatch(menuCollapse(!menuStatus))
    }

    return (<div className={`${styles.header} ${menuStatus ? styles.collapsed : null}`}>
        header
        <Button onClick={onCollapse}>toggle</Button>
    </div>)
};

export default connect(mapStateToProps)(Header)
