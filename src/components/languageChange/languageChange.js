import React, {useState} from 'react'
import {Popover, Button} from 'antd'
import styles from './languageChange.module.less'
import {connect} from 'react-redux'
import {changeLanguage} from '../../actions/index'

const LanguageChange = function ({dispatch}) {
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
            {languageOption.map(item => {
                return (
                    <div
                        className={styles.languageItem} onClick={e => {
                        onLanguageClick(item)
                    }}>
                        {item.name}
                    </div>)
            })}
        </div>
    );

    return (<div>
        <Popover content={content} trigger="click" visible={visible} onVisibleChange={onVisibleChange}>
            <Button>Language</Button>
        </Popover>
    </div>)
}

export default connect()(LanguageChange)
