import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Lianne" body="React.js is awesome!"/>
        <Post author="Sandy" body="Check out the full course!"/>
      </ul>
  </>
  );
}

export default PostsList;