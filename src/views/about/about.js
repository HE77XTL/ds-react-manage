import React from 'react';
import { Button } from 'antd';
import styles from './about.module.less'

const About  = function () {
    return(
        <div className={styles.title}>
            About
            <div>
                <Button>ant btn</Button>
            </div>

        </div>
    )
};

export default About
