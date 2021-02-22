import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from './homeCommon.module.less'
import {connect} from "react-redux";
import {Menu} from 'antd'
import menuList from './menuList'

import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';

import DsIcon from '../../components/dsIcon/dsIcon'


const mapStateToProps = state => {
    return {
        menuStatus: state.menuStatus,
    }
};

// 菜单数据处理
// 后端返回的是树，需要扁平化展开获取到初始路由的openKeys
let menuMap = new Map();
let rootSubmenuKeys = [];

function menuToMap(menuList) {
    menuList.forEach(item => {
        rootSubmenuKeys.push(item.key);
        menuKeyFmt(item)
    });

    function menuKeyFmt(menuItem, parentKey = []) {
        const keys = parentKey.concat([menuItem.key]);
        menuMap.set(menuItem.key, {
            url: menuItem.url,
            key: menuItem.key,
            keys: keys,
            title: menuItem.title,
            icon: menuItem.icon,
        });
        if (menuItem.children && menuItem.children.length > 0) {
            menuItem.children.forEach(item => {
                menuKeyFmt(item, keys)
            })
        }
    }
}

menuToMap(menuList);


const MenuComponent = function ({menuStatus, currentUrl}) {
    console.log('menuStatus')
    console.log(menuStatus)
    let currentMenu = {};
    for (let [key, value] of menuMap) {
        if (value.url === currentUrl) {
            currentMenu = value
        }
    }
    const defaultSelectedKeys = [currentMenu.key];
    const defaultOpenKeys = [currentMenu.key];
    const history = useHistory();

//--- useState ----------------------
    const [openKeys, setOpenKeys] = useState([]);

//--- useEffect ----------------------
    useEffect(() => {
        setOpenKeys(currentMenu.keys)
    }, []);

//--- function ----------------------


    function onOpenChange(keys) {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    function onSelect(val) {
        const menu = menuMap.get(val.key);
        setOpenKeys(menu.keys)
        history.push(menu.url)
    }


    const XxxIcon = <DsIcon name="AppstoreOutlined"/>

    console.log('XxxIcon')
    console.log(XxxIcon)


    // 菜单递归渲染
    function getMenu(menuArr) {
        if (!Array.isArray(menuArr)) {
            return null
        }
        return menuArr.map(item => {
            if (item.children && item.children.length > 0) {
                return <Menu.SubMenu key={item.key} title={item.title} icon={<DsIcon name={item.icon}/>}>
                    {getMenu(item.children)}
                </Menu.SubMenu>
            } else {
                return <Menu.Item key={item.key} icon={<DsIcon name={item.icon}/>}>{item.title}</Menu.Item>
            }
        })
    }

//--- operate ----------------------


    return (<div className={`${styles.menu} ${menuStatus ? styles.collapsed : null}`}>
        <Menu theme="dark" mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              inlineCollapsed={menuStatus}
              openKeys={openKeys}
              onSelect={onSelect}
              onOpenChange={onOpenChange}>
            {getMenu(menuList)}
        </Menu>
    </div>)
};

export default connect(mapStateToProps)(MenuComponent)

