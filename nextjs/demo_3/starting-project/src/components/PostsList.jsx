import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  }

  function addPostHandler(postData) {}
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting} onAddPost={addPostHandler}
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