import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as postsLoader} from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import NewPost, {action as newPostAction} from './routes/NewPost';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          {path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
