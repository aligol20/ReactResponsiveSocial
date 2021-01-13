import React from 'react';
import { FiMessageCircle, FiSettings, FiUser } from "react-icons/fi";
import { useHistory, useLocation } from "react-router-dom";
import styles from './Bottom.module.css';



const BottomTab = () => {
    const history = useHistory()
    const location = useLocation()



    return (
        <div className={styles.bottomFixed}>
            <FiUser
                onClick={() => history.push('/profile')}
                className={styles.icon} color={location.pathname === '/profile' ? 'rgb(36,195,216)' : 'black'} />
            <FiMessageCircle
                onClick={() => history.push('/')}

                className={styles.icon} color={location.pathname === '/' ? 'rgb(36,195,216)' : 'black'} />
            <FiSettings
                onClick={() => history.push('/tools')}

                className={styles.icon} color={location.pathname === '/tools' ? 'rgb(36,195,216)' : 'black'} />

        </div>
    )
}
export default BottomTab