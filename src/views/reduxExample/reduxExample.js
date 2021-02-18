import React, {useState} from 'react'
import styles from './reduxExample.module.less'
import Comment from './comment'
import ToggleLanguage from './toggleLanguage'
import AsyncChange from './asyncChange'


const ReduxExample = function () {

//--- useState ----------------------
    const [article, setArticle] = useState({
        title: 'hhhh',
        content: 'xxxxx',
        comment: {
            name: 'ds',
            value: 'kkkkkkkk'
        }
    });

//--- useEffect ----------------------

//--- function ----------------------

    return (<div className={styles.reduxExample}>
        <div className={styles.reduxExample}>
            页面公共部分
            <h3>标题： {article.title}</h3>
            <p>内容： {article.content}</p>
        </div>
        <div className={styles.flex}>
            <div className={styles.componentA}>
                <Comment comment={article.comment}/>
            </div>
            <div className={styles.componentB}>
                组件B， 影响组件C D 的数据
                <div>
                    <div className={styles.componentC}>组件C</div>
                    <div className={styles.componentD}>
                        组件D
                        切换语言功能
                        <ToggleLanguage/>
                    </div>
                </div>
            </div>
            <div>
                <AsyncChange/>
            </div>
        </div>
    </div>)
}

export default ReduxExample
