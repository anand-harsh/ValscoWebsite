import React from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useBlogContext } from "../context/BlogContext";
import Blog from "./Blog";
import { Helmet } from "react-helmet-async";
// import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
export default function BlogHome(props) {
  const { isLoading, blogs, getPosts } = useBlogContext();
  const postsCollectionRef = collection(db, "blogPosts");
  if (isLoading === true) {
    return (
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blogs - VALSCO</title>
        <meta
          name="description"
          content="Explore a collection of insightful blog posts related to technology, innovation, and more. Stay updated with the latest trends and discussions in the tech world."
        />
      </Helmet>
      <div className="blog-card-container">
        {blogs.map((currentElement) => {
          return (
            <Blog
              key={currentElement.id}
              {...currentElement}
              authenticated={props.authenticated}
              setAlertMsg={props.setAlertMsg}
              setAlertColor={props.setAlertColor}
            />
          );
        })}
      </div>
    </>
  );
}
