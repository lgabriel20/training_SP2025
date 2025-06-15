import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Sandy" body="Check out the full course!"/>
      </ul>
    </>
  );
}

export default PostsList;