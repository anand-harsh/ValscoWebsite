import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Link } from "react-router-dom";
// import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
import { useBlogContext } from "../context/BlogContext";
import { Helmet } from "react-helmet-async";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default function Slider({ authenticated }) {
  const { isLoading, blogs, getPosts } = useBlogContext();
  const postsCollectionRef = collection(db, "blogPosts");
  const blogsFinal = blogs.length > 3 ? [blogs[0], blogs[1], blogs[2]] : blogs;

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

  const deleteBlog = async (id) => {
    const blogdelete = doc(db, "blogPosts", id);
    await deleteDoc(blogdelete);
    window.location.reload(false);
  };

  return (
    <>
      <Helmet>
        <title>Valsco Technology - Blog Slider</title>
        <meta
          name="description"
          content="Explore the latest blog posts in the Valsco Technology blog carousel. Swipe through the blog cards to read interesting content."
        />
      </Helmet>
      <div className="swiper-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          className="mySwiper"
        >
          {blogsFinal.map((currentElement) => {
            return (
              <SwiperSlide className="swiperslide" key={currentElement.id}>
                <section className="swiper-slide-card">
                  <h3 className="swiper-slide-title">{currentElement.title}</h3>
                  <p className="swiper-slide-desc">
                    {currentElement.postText.slice(0, 250)}...
                  </p>
                  <p className="swiper-slide-author">
                    @{currentElement.author.name}
                  </p>
                  <div className="blog-card-btn-div">
                    <Link
                      to={`/DetailedBlog/${currentElement.id}`}
                      className="blog-card-read-btn"
                    >
                      Read Blog
                    </Link>
                    {authenticated &&
                      auth.currentUser &&
                      auth.currentUser.uid === currentElement.author.id && (
                        <button
                          className="blog-card-delete-btn"
                          onClick={() => deleteBlog(currentElement.id)}
                        >
                          Delete blog
                        </button>
                      )}
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="slider-instruct">...Drag to swipe the blog cards...</p>
      </div>
    </>
  );
}
