import React from 'react'
import styles from '../Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { red } from 'chalk';
import moment from 'moment';




const UserPostItem = ({ item }) => {



    return (

        <div className={styles.postItem}
        >

            <img src={item.image} alt="jacket"
                className={styles.postImage}
            />

            <div className={styles.likes}>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faHeart} className={styles.likeIcon} color='red' />
                    <div>{item.likes}</div>
                </div>




                <div className={styles.date}>{moment(item.publishDatemoment).format('MM-DD-YYYY')}</div>

            </div>
            <div className={styles.tags}>
                {item.tags.map((x, index) => (
                    <div
                        key={index}
                        className={styles.tag}>{x}</div>
                ))}

            </div>
            {item.link &&

                <div className={styles.link}>
                    <div

                        href={item.link}
                        className={styles.linkButton}>
                        <div className={styles.buttonText}>
                            {'Open In Intagram'}
                        </div>
                    </div>

                </div>
            }
            <div className={styles.postText}>{item.text}</div>





        </div>
    )
}


export default UserPostItem