import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPosts from '../../store/post/actions/getPosts';
import { PostListItem } from './items/PostListItem';
import styles from './Post.module.css';

export function Posts() {



    const { posts } = useSelector(state => state.post)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className={styles.postList}>
            {posts && posts.data && posts.data.map((item, index) =>

                <PostListItem key={index.toString()} item={item} />

            )}

        </div>
    );
}
