import React from 'react';
import { FiArrowLeft, FiSearch, FiUserPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import styles from './Header.module.css';


const ActionBar = ({ title = 'All Chat', back = false }) => {
    let history = useHistory();
    const handleBackPressed = () => {
        history.goBack()
    }

    return (
        <div className={back ? styles.actionBarBack : styles.actionBar}>

            {back &&

                <FiArrowLeft color='black' className={styles.icon} onClick={handleBackPressed} />}

            <h3 className={styles.title}>{title}</h3>

            {!back &&

                <div className={styles.leftSide}>



                    <input type="text" name="search" className={styles.input}>
                    </input>



                    <FiSearch className={styles.icon} />

                    <FiUserPlus className={styles.icon} />


                </div>
            }



        </div>
    )
}
export default ActionBar