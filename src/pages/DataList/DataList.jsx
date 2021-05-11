import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './style.css';
import { Loader, PageAnimated } from '../../components';
import { postsActions } from '../../store/posts';

export const DataList = () => {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((store) => store.posts );

    useEffect(() => {
        dispatch(postsActions.fetchPosts());
    }, [])

    return (
        <>
            <PageAnimated>
                <div className="data-list">
                    <div className="data-list">
                        {posts.map((post, i) => (
                            <div 
                            key={i} 
                            className={`block ${(i % 2 === 0) ? 'block-right' : 'block-left'}`}
                            >
                                <span>{post.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </PageAnimated>
            {loading && <Loader />}
        </>
    )
}

{/*            <div className="block block-right"></div>
                <div className="block block-left"></div>
                <div className="block block-right"></div>
                <div className="block block-left"></div> */}