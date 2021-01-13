import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Post.module.css';
import getUserPosts from '../../store/post/actions/getUserPosts';

import {

    useParams
} from "react-router-dom";
import ActionBar from '../header/ActionBar';
import UserPostItem from './items/UserPostItem';


const UserPosts = () => {
    const { posts } = useSelector(state => state.post)
    const { users } = useSelector(state => state.user)

    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        if (id) {

            dispatch(getUserPosts(id))
        }
    }, [])
    useEffect(() => {
    }, [posts])


    return (
        <div
        >
            <ActionBar
                back
                title={posts?.data?.find((x) => x.owner.id === id)?.owner?.firstName}

            />
            {console.log(posts.data, '<---- posts')}
            {posts?.data?.map((x, index) => (

                <UserPostItem key={index} item={x} />
            )

            )}
        </div>
    )
}
export default UserPosts