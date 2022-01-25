import { useDispatch } from 'react-redux';
import Head from 'next/head';
import styles from '../styles/login.module.css';
import { Form, Input, Button, message } from 'antd';
import { actions } from '../redux/reducers';

const login = () => {
    const dispatch = useDispatch();
    const successCallback = () => message.success("uiwefh");
    const errorCallback = () => message.error("error");

    const onFinish = (values) => {
        const data = {
            email: values.email,
            password: values.password,
        };
        dispatch(actions.requestLogin(data, successCallback, errorCallback));
    };

    return (
        <div>
            <Head>
                <title>LogIn</title>
            </Head>
            <div className={styles.mainLogin}>
                <Form
                    layout='vertical'
                    className={styles.loginForm}
                    onFinish={onFinish}
                >
                    <Form.Item label="E-mail" name="email" required>
                        <Input type='email' placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" required>
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Button className={styles.btn} type="secondary" htmlType="submit">LogIn</Button>
                </Form>
            </div>
        </div>
    );
};

export default login;