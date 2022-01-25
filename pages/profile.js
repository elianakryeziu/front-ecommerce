import { useSelector } from 'react-redux';
import React from 'react';
import Head from 'next/head';
import { Form, Input, Button } from 'antd';
import styles from '../styles/profile.module.css';

const Profile = () => {
    const user = useSelector((state) => state?.authentication.user);

    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>
            <div className={styles.profile}>
                <Form
                    initialValue={{
                        name: user?.firstName,
                        lastname: user?.lastName,
                        email: user?.email,
                        password: user?.password,
                    }}
                    className={styles.loginForm}
                    layout='vertical'
                >
                    <Form.Item
                        label='Name'
                        name='name'
                        required
                    >
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        label='Lastname'
                        name='lastname'
                        required
                    >
                        <Input placeholder='Lastname' />
                    </Form.Item>
                    <Form.Item
                        label='E-mail'
                        name='email'
                        required
                    >
                        <Input type='email' placeholder='E-mail' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                    >
                        <Input type='password' hidden={true} placeholder='Name' />
                    </Form.Item>
                    <Button className={styles.btn} htmlType='submit'>
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    )
};

export default Profile;