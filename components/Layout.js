import { Layout, Divider } from 'antd';
import NavBar from './NavBar';
import styles from '../styles/Navbar.module.css';
import homeStyles from '../styles/Home.module.css';
import { HeartFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout>
            <Header style={{
                backgroundColor: 'black',
                height: '300px',
                padding: '0px',
                textAlign: 'center'
            }}>
                <NavBar />
            </Header>
            <Divider type="horizontal" style={{ backgroundColor: 'white', height: '1px' }} />
            <Content>
                {children}
            </Content>
            <Footer className={homeStyles.footer}>
                © 2022 OnlineShop Cosmetics  <HeartFilled className={styles.heartIcon} />
            </Footer>
        </Layout>
    );
};

export default AppLayout;
