// 动态加载 ant design 图标
import React from "react";

import {
    AppstoreOutlined, MailOutlined, SettingOutlined, MenuUnfoldOutlined,
} from '@ant-design/icons';


const DsIcon = function ({name}) {
    const icons = {
        AppstoreOutlined: <AppstoreOutlined/>,
        MailOutlined: <MailOutlined/>,
        SettingOutlined: <SettingOutlined/>,
        MenuUnfoldOutlined: <MenuUnfoldOutlined/>,
    };
    return icons[name] ? icons[name]: null
};

export default DsIcon

