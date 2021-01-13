import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getUser from '../../../store/user/actions/getUser';
import { useHistory } from "react-router-dom";




import styles from '../Post.module.css';


export const PostListItem = ({ item }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <button
            className={styles.button}
            onClick={() => {
                history.push(`/userPosts/${item?.owner?.id}`);

            }}>

            <img src={item.image} alt="jacket"
                className={styles.avatar}
            />
            <div className={styles.userName}>{item.owner.firstName}</div>




        </button>
    )
}