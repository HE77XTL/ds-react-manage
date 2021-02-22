const MenuList = [
    {
        key: 'dashboard',
        icon: 'AppstoreOutlined',
        url: '/dashboard',
        title: '数据看板',
    },
    {
        key: 'aboutSub',
        url: '',
        title: '表单',
        icon: 'MailOutlined',
        children: [
            {
                key: 'about',
                url: '/about',
                title: 'about',
                icon: 'SettingOutlined'
            }
        ]
    },
    {
        key: 'example',
        icon: 'SettingOutlined',
        url: '',
        title: '示例',
        children: [
            {
                key: 'reduxExample',
                icon: 'SettingOutlined',
                url: '/example/reduxExample',
                title: 'reduxExample',
            },
            {
                key: 'antExample',
                icon: 'SettingOutlined',
                url: '',
                title: 'antExample',
                children: [
                    {
                        key: 'exampleForm',
                        icon: 'SettingOutlined',
                        url: '/example/exampleForm',
                        title: '表单示例',
                    },
                    {
                        key: 'exampleTable',
                        icon: 'SettingOutlined',
                        url: '/example/exampleTable',
                        title: '表格示例',
                    }
                ]
            },
        ]
    },
];
export default MenuList
