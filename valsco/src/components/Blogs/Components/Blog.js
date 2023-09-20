import React, { useState } from "react";
import { auth, db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./StyleBlog.css";
import { Helmet } from "react-helmet-async";

const Blog = (currentElement, authenticated) => {
  const { author, title, postText, id } = currentElement;

  const deleteBlog = async (id) => {
    const blogdelete = doc(db, "blogPosts", id);
    await deleteDoc(blogdelete);
    window.location.reload(false);

    localStorage.setItem(
      "alertMsg",
      "Your Blog has been successfully deleted!"
    );

    localStorage.setItem("alertColor", "lightgreen");
  };

  return (
    <>
      <Helmet>
        <title>Blogs | VALSCO</title>
        <meta
          name="description"
          content="Experience an interactive and effective blog-making experience with Valsco Technology's modern software solution."
        />
      </Helmet>
      <section className="blog-card">
        <div className="blog-card-title-div">
          <h4 className="blog-card-title">{title}</h4>
        </div>
        <p className="blog-card-desc">{postText.slice(0, 180)}...</p>
        <p className="blog-card-author">@{author.name}</p>
        <div className="blog-card-btn-div">
          <Link to={`/DetailedBlog/${id}`} className="blog-card-read-btn">
            Read Blog
          </Link>
          {authenticated &&
            auth.currentUser &&
            auth.currentUser.uid == author.id && (
              <button
                className="blog-card-delete-btn"
                onClick={() => deleteBlog(id)}
              >
                Delete blog
              </button>
            )}
        </div>
      </section>
    </>
  );
};

export default Blog;
