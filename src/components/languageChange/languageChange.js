import React, {useState} from 'react'
import {Popover, Button} from 'antd'
import styles from './languageChange.module.less'
import {connect} from 'react-redux'
import {changeLanguage} from '../../actions/index'
import {useTranslation} from "react-i18next";
import {TranslationOutlined} from '@ant-design/icons';


const LanguageChange = function ({dispatch}) {
    const {t} = useTranslation();
    const languageOption = [
        {
            name: '中文',
            value: 'zh_cn'
        },
        {
            name: 'English',
            value: 'en_us'
        }
    ];


//--- useState ----------------------
    const [visible, setVisible] = useState(false);

//--- useEffect ----------------------

//--- function ----------------------
    function onVisibleChange(visible) {
        setVisible(visible)
    }

    function onLanguageClick(item) {
        dispatch(changeLanguage(item.value));
        setVisible(false)
    }

    const content = (
        <div className={styles.languageSelectWrap}>
            {languageOption.map((item, index) => {
                return (
                    <div
                        className={styles.languageItem} onClick={e => {
                        onLanguageClick(item)
                    }} key={index}>
                        {item.name}
                    </div>)
            })}
        </div>
    );

    return (<div className={styles.languageChange}>
        <Popover
            content={content}
            placement="bottomRight"
            arrowPointAtCenter
            trigger="click"
            visible={visible}
            onVisibleChange={onVisibleChange}>
            <TranslationOutlined style={{fontSize: "20px"}}/>
        </Popover>
    </div>)
}

export default connect()(LanguageChange)
