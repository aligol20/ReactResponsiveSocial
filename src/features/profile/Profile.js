import React from 'react'
import BottomTab from '../bottomTab/BottomTab';
import styles from '../users/User.module.css';



const Profile = () => {


    return (
        <>
            <div className={styles.blankPage}>
                <h2 className={styles.singleTitle}>
                    {'Profile Tab'}
                </h2>
            </div>
            <BottomTab />
        </>
    )

}

export default Profile