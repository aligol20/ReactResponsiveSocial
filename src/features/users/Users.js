import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../../store/user/actions/getUsers';
import BottomTab from '../bottomTab/BottomTab';
import ActionBar from '../header/ActionBar';
import TopTab from '../header/TopTab';
import { Posts } from '../posts/Posts';
import { UsersList } from './items/UsersList';
import styles from './User.module.css';





export function Users() {


  const { users, isLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users.length === 0)
      dispatch(getUsers())
  }, [users])

  return (

    <div className={styles.main}>


      <div className={styles.header}>
        <ActionBar />
        <TopTab />
      </div>
      {isLoading ?
        <div className={styles.loaderMaintainer}>
          <div className={styles.loader}>
          </div>
        </div>
        :
        <>
          <Posts />
          <UsersList />
        </>
      }
      <BottomTab />




    </div>
  );
}
