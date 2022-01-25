import { useSelector } from 'react-redux';
import {
    Row,
    Col,
    Typography,
    Menu,
    Dropdown,
    Button,
    Divider,
} from 'antd';
import Link from 'next/link';
import { HeartFilled, SmileOutlined, InsertRowAboveOutlined } from '@ant-design/icons';
import styles from '../styles/NavBar.module.css';
import { actions } from '../redux/authentication/reducer';

const menu = (
    <Menu>
        <Menu.Item key='profile'>
            <Link href="/profile">
                <a>Profile</a>
            </Link>
        </Menu.Item>
        <Menu.Item key='logout'>
            <Link href="/">
                <a>LogOut</a>
            </Link>
        </Menu.Item>
    </Menu>
);

const NavBar = () => {

    return (
        <>
            <Row>
                <Col span={24} lg={24} className={styles.navbarTop}>
                    Order Online 0800 108 8822(UK) or + 44 203 471 3000
                    <Dropdown overlay={menu}>
                        <Button className={styles.buttonAccount}>MyAccount</Button>
                    </Dropdown>
                </Col>
                <Col span={8} lg={16} style={{ paddingTop: '30px' }}>
                    <Typography.Title level={3} className={styles.title}>
                        <span className={styles.navbar}>OnlineShop</span>
                        <span className={styles.navbar}>
                            Cosmetics
                            <HeartFilled className={styles.heartIcon} />
                        </span>
                    </Typography.Title>
                </Col>
                <Col span={8} lg={8}>
                    <div className={styles.loginRegisterLinks}>
                        <div>
                            <h6>Hi, customer <SmileOutlined /></h6>
                            <Link href="/login"><a>Log in</a></Link>
                            <span>or</span>
                            <Link href="/register"><a>Register</a></Link>
                        </div>
                        <Divider type="vertical" style={{ backgroundColor: "white", height: '70px' }} />
                        <div>
                            <Link href="/cart">
                                <span><InsertRowAboveOutlined className={styles.cartIcon} /></span>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Divider type="horizontal" style={{ backgroundColor: 'white' }} />
            <div className={styles.menu}>
                <Menu mode="horizontal" className={styles.menu}>
                    <Menu.Item key="home">
                        <Link href="/"><span>#HOME</span></Link>
                    </Menu.Item>
                    <Menu.Item key="makeup">
                        <Link href="/makeup"><span>MAKEUP</span></Link>
                    </Menu.Item>
                    <Menu.Item key="skin-care">
                        <Link href="/nail"><span>SKINCARE</span></Link>
                    </Menu.Item>
                    <Menu.Item key="parfumes">
                        <Link href="/parfumes"><span>PARFUMES</span></Link>
                    </Menu.Item>
                    <Menu.Item key="products">
                        <Link href="/products"><span>PRODUCTS</span></Link>
                    </Menu.Item>
                    <Menu.Item key="orders">
                        <Link href="/orders"><span>ORDERS</span></Link>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
};

export default NavBar;
