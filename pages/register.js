import {
    Form,
    Input,
    Button,
    Row,
    Col,
} from 'antd';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import styles from '../styles/register.module.css';
import { actions } from '../redux/authentication/reducer';

const register = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        const regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%s&])(?=.{8,})');
        if (values.password) {
            if (values.password.length < 8) {
                message.error(t('password.passwordLength'));
                return;
            }
            if (values.password.search(regexPassword) < 0) {
                message.error(t('password.passwordRegex'));
                return;
            }
        }

        const success = () => {
            message.success('Registred!');
            // window.location.href = '/login';
        };
        const failed = () => {
            message.error('Failed!');
        }
        const data = {
            firstName: values.name,
            lastName: values.lastname,
            fullName: values.usename,
            email: values.email,
            password: values.password,
        };
        dispatch(actions.requestRegistration(data, success, failed));
    };

    return (
        <>
            <Head>
                <title>Regsiter</title>
            </Head>
            <div className={styles.registerPage}>
                <Form
                    layout='vertical'
                    className={styles.registerForm}
                    onFinish={onFinish}
                >
                    <Row>
                        <Col span={12} lg={10}>
                            <Form.Item name="name" label="Name" required>
                                <Input placeholder="Name" />
                            </Form.Item>
                        </Col>
                        <Col span={12} lg={10} offset={4}>
                            <Form.Item name="lastname" label="Lasname" required>
                                <Input placeholder="Lastname" />
                            </Form.Item>
                        </Col>
                        <Col span={12} lg={10}>
                            <Form.Item name="username" label="Username" required>
                                <Input placeholder="Username" />
                            </Form.Item>
                        </Col>
                        <Col span={12} lg={10} offset={4}>
                            <Form.Item name="email" label="E-mail" required>
                                <Input type="email" placeholder="E-mail" />
                            </Form.Item>
                        </Col>
                        <Col span={24} lg={24}>
                            <Form.Item name="password" label="Password" required>
                                <Input type="password" placeholder="Password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button className={styles.btn} type="secondary" htmlType="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default register;