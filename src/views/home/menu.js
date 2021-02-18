import React from 'react'
import styles from './homeCommon.module.less'
import {connect} from "react-redux";
import {Menu} from 'antd'

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

const MenuComponent = function ({menuStatus}) {
//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------

    return (<div className={`${styles.menu} ${menuStatus ? styles.collapsed : null}`}>
        <div style={{color: '#fff', height:'60px'}}>
            DoDo
        </div>
        <Menu theme="dark" mode="inline">
            <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    </div>)
}

export default connect(mapStateToProps)(MenuComponent)
