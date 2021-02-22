import React, {useState} from 'react'
import {Popover} from 'antd'
import styles from './userAvatar.module.less'
import Avatar from '../../assets/image/userAvatar.jpg'
import {useTranslation} from 'react-i18next'


const UserAvatar = function () {
    const {t} = useTranslation();
    const avatarOptions = [
        {
            name: t('userCenter'),
            value: 'userCenter'
        },
        {
            name: t('logout'),
            value: 'logout'
        }
    ];

//--- useState ----------------------
    const [userName, setUserName] = useState('hedssdfdsfdsfdsfds');
    const [visible, setVisible] = useState(false);

//--- useEffect ----------------------

//--- function ----------------------
    function onVisibleChange(visible) {
        setVisible(visible)
    }

    function onAvatarClick(item) {
        console.log(item)
        setVisible(false)
    }

    const content = (
        <div>
            {avatarOptions.map((item, index) => {
                return (
                    <div className={styles.avatarItem} onClick={e => {
                        onAvatarClick(item)
                    }} key={index}>{item.name}</div>
                )
            })}
        </div>
    );

    return (<div className={styles.userAvatar}>
        <Popover content={content} trigger="click" visible={visible} onVisibleChange={onVisibleChange}>
            <div className={styles.userCard}>
                <img src={Avatar} alt="Avatar"/>
                <div className={styles.userName}>{userName}</div>
            </div>
        </Popover>
    </div>)
};

export default UserAvatar
