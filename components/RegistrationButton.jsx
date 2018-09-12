import Link from 'next/link'
import {Button} from 'antd';
import {typography} from '../utils/styles'

const styles = {
    registrationButton: {
        ...typography.lightSmallText,
        borderRadius: '50px',
        margin: '0 40px 0 20px'
    }
}

const RegistrationButton = ({title}) => {
    return (
        <Link href='/registration'>
            <Button type='primary' style={styles.registrationButton}>{title}</Button>
        </Link>

    )
}

export default RegistrationButton
