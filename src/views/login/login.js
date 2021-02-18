import React from 'react'
import {Form, Input, Button} from 'antd'
import styles from './login.module.less'
import LanguageChange from '../../components/languageChange/languageChange'

import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

const Login = function () {
    const history = useHistory();
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

    const {t} = useTranslation()

    const loginFormRef = React.createRef();


//--- useState ----------------------

//--- useEffect ----------------------

//--- function ----------------------
    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('/')

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<div className={styles.login}>
        <div className={styles.loginPanel}>
            <div className={styles.title}>{t('login')}</div>
            <Form {...layout}
                  ref={loginFormRef}
                  name='loginForm'
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}>
                <Form.Item
                    label={t('userName')}
                    name="username"
                    rules={[
                        {required: true, message: 'Please input your username!',},

                        {
                            pattern: /^(?![0-9]$)(?![a-zA-Z]$)[0-9A-Za-z]{1,50}$/,
                            message: 'must be English or numeric',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={t('password')}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        {t('submit')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className={styles.changeLanguageWrap}>
            <LanguageChange/>
        </div>
    </div>)
};

export default Login
