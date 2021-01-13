import { faFemale, faLocationArrow, faMailBulk, faMale, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {

    useParams
} from "react-router-dom";
import getUser from '../../store/user/actions/getUser';
import ActionBar from '../header/ActionBar';
import styles from './User.module.css';
export function UserDetails() {
    const { users, user, userLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getUser(id))

        }

    }, [])

    return (
        <div className={styles.maintainer}>
            <div className={styles.material} />
            <ActionBar
                back
                title={users.data.find((x) => x.id === id)?.firstName}
            />
            {
                userLoading ?
                    <div className={styles.loader}>
                    </div>
                    :
                    <>
                        {user &&

                            <div className={styles.profileContainer}>



                                <img src={user.picture} alt="Girl in a jacket"
                                    className={styles.profileImage}
                                />

                                <h1>{user?.firstName + ' ' + user?.lastName}</h1>
                                <div className={styles.rowItem}>
                                    <FontAwesomeIcon icon={faMailBulk} className={styles.icon} />
                                    <h4>{user?.email}</h4>

                                </div>
                                <div className={styles.rowItem}>
                                    <FontAwesomeIcon icon={user.gender === 'male' ? faMale : faFemale} className={styles.icon} />
                                    <h4>{user?.gender}</h4>

                                </div>
                                <div className={styles.rowItem}>
                                    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                    <h4>{user?.phone}</h4>

                                </div>
                                <div className={styles.rowItem}>
                                    <FontAwesomeIcon icon={faLocationArrow} className={styles.icon} />
                                    <h4 className={styles.address}>{user?.location?.street + '-' +
                                        user?.location?.city + '-' +
                                        user?.location?.state + '-' +
                                        user?.location?.country


                                    }</h4>


                                </div>
                            </div>
                        }
                    </>
            }

        </div>
    );
}
