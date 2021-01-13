import React from 'react'
import styles from './Header.module.css'



const TopTab = () => {


    return (
        <div className={styles.topTab}>
            <div className={styles.rowDot}>
                <div className={styles.tabItemActive}> Message
           </div>
                <div className={styles.dot} />

            </div>
            <div className={styles.tabItem}>Group</div>
            <div className={styles.tabItem}>Calls</div>
        </div>
    )
}
export default TopTab