import React, { useState, useEffect } from "react";
import { useBlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
import { Helmet } from "react-helmet-async";

const DetailedBlog = (props) => {
  let navigate = useNavigate();
  const [temp, setTemp] = useState(false);

  const { ID } = useParams();
  const { isSingleLoading, singleBlog, getSinglePost } = useBlogContext();

  useEffect(() => {
    getSinglePost(ID);
  }, []);

  const { title, postText, author } = singleBlog;
  console.log(singleBlog);
  if (isSingleLoading === true) {
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

  const deleteBlog = async (id) => {
    setTemp(true);
    const blogdelete = doc(db, "blogPosts", id);
    await deleteDoc(blogdelete);
    setTemp(false);
    navigate("/BlogHome");
    window.location.reload(false);
    localStorage.setItem(
      "alertMsg",
      "Your Blog has been successfully deleted!"
    );
    props.setAlertMsg("Your Blog has been successfully deleted!");
    localStorage.setItem("alertColor", "lightgreen");
    props.setAlertColor("lightgreen");
  };

  return (
    <>
      <Helmet>
        <title>Detailed Blog | VALSCO - {title}</title>
        <meta name="description" content={postText} />
      </Helmet>
      <section className="detailed-blog">
        <h1 className="detailed-blog-title">{title}</h1>
        <p>{postText}</p>
        {author && author.name && (
          <p className="detailed-blog-author">@{author.name}</p>
        )}
        {props.authenticated &&
          author &&
          auth.currentUser &&
          auth.currentUser.uid === author.id && (
            <button
              className="blog-card-delete-btn"
              onClick={() => deleteBlog(ID)}
            >
              Delete Blog
            </button>
          )}
      </section>
    </>
  );
};

export default DetailedBlog;
