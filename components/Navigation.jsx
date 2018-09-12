import {colors, typography} from '../utils/styles'
import {img} from '../utils/images'
import Link from 'next/link'
import {Affix, Button, Menu, Dropdown, Icon} from 'antd';
import RegistrationButton from '../components/RegistrationButton'
import 'antd/dist/antd.css'

const styles = {
    registrationButton: {
        ...typography.lightSmallText,
        borderRadius: '50px',
        margin: '0 40px 0 20px'
    },
    menuButton: {
        ...typography.lightSmallText,
        borderRadius: '50px'
    },
    menuLink: {
        ...typography.lightSmallText
    },
    navigationWrapper: {
        color: colors.primary.dark,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        top: 0,
        boxShadow: '0px 3px 4px -2px rgba(117,117,117,1)',
        zIndex: 100
    },
    navLogo: {
        cursor: 'pointer',
        height: 30,
        marginLeft: 40
    }
}

const menu = (
    <Menu>
        <Menu.Item>
            <Link href='/'>
                <a style={styles.menuLink} rel='noopener noreferrer'>Домашняя страница</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link href='/program'>
                <a style={styles.menuLink} rel="noopener noreferrer">Программа форума</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link href='/registration'>
                <a style={styles.menuLink} rel="noopener noreferrer">Регистрация</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link href='/contacts'>
                <a style={styles.menuLink} rel="noopener noreferrer">Контакты</a>
            </Link>
        </Menu.Item>
    </Menu>
);

export default() => {
    return (
        <Affix offsetTop={0}>
            <div style={styles.navigationWrapper}>
                <Link href='/'>
                    <img
                        src={img.yfnyLogoMark.url}
                        alt={img.yfnyLogoMark.alt}
                        style={styles.navLogo}/>
                </Link>
                <div>
                    <Dropdown overlay={menu}>
                        <Button type='primary' ghost style={styles.menuButton}>
                            Навигация
                            <Icon type="down"/>
                        </Button>
                    </Dropdown>
                    <RegistrationButton title={'Регистрация'}/>
                </div>
            </div>
        </Affix>
    )
}
