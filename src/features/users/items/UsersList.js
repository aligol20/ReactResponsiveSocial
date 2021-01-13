import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";




import styles from '../User.module.css';


export const UsersList = () => {
    const { users, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();


    return (
        <div className={styles.userList}
            onScroll={(event) => { console.log(event, 'scrolling') }}>
            {users && users.data && users.data.map((item, index) =>
                <button
                    className={styles.listItem}
                    key={index}
                    onClick={() => {

                        history.push(`/userDetails/${item.id}`);


                    }}>
                    {/* <div className={styles.rowItem}
                    > */}
                    <img src={item.picture} alt="Girl in a jacket"
                        className={styles.avatar}
                    />
                    <div className={styles.usernameContainer}>
                        <div className={styles.userName}>{item.firstName + ' ' + item.lastName}</div>
                        <div className={styles.email}>{item.email}</div>
                    </div>




                    {/* </div> */}
                </button>

            )}
        </div>
    )
}