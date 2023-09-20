import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
// import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
import { Helmet } from "react-helmet-async";
export default function CreateBlog(props) {
  const [temp, setTemp] = useState(localStorage.getItem("loading1"));

  useEffect(() => {
    if (!props.authenticated) {
      navigate("/Login");
    }
  });
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "blogPosts");

  const createBlogPost = async () => {
    if (title === "") {
      localStorage.setItem("alertMsg", "Enter the Title of Your Blog!");
      props.setAlertMsg("Enter the Title of Your Blog!");
      localStorage.setItem("alertColor", "lightyellow");
      props.setAlertColor("lightyellow");
    } else if (postText === "") {
      localStorage.setItem("alertMsg", "Enter Your Blog!");
      props.setAlertMsg("Enter Your Blog!");
      localStorage.setItem("alertColor", "lightyellow");
      props.setAlertColor("lightyellow");
    } else {
      localStorage.setItem("loading1", true);
      setTemp(true);
      await addDoc(postsCollectionRef, {
        title: title,
        postText: postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      localStorage.setItem("loading1", false);
      setTemp(false);

      navigate("/BlogHome");
      window.location.reload(false);
      localStorage.setItem(
        "alertMsg",
        "Your Blog has been successfully posted!"
      );
      props.setAlertMsg("Your Blog has been successfully posted!");
      localStorage.setItem("alertColor", "lightgreen");
      props.setAlertColor("lightgreen");
    }
  };

  if (temp === true) {
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
        <title>Create Blogs | VALSCO</title>
        <meta
          name="description"
          content="Create and submit your own blog post on Valsco Technology's platform. Share your insights and opinions on various tech topics and innovations."
        />
      </Helmet>
      <div className="create-div">
        <h2>Post Your Own Blog</h2>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Enter The Title Of The Blog"
          className="title-blog"
        ></input>
        <textarea
          type="text"
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="Type Your Blog"
          className="type-blog"
        ></textarea>
        <button className="create-blog-btn" onClick={createBlogPost}>
          Submit Blog
        </button>
      </div>
    </>
  );
}
