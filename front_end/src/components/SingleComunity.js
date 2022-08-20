import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComunityComment,
  getComcomments,
  getSingleComunity,
} from "../redux/ComunityPost";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const SingleComunity = () => {

  const dispatch = useDispatch();

    const { id } = useParams();
  // console.log(id)
  useEffect(() => {
      
    dispatch(getSingleComunity(id));
 
  }, [dispatch]);
  const singlepost = useSelector((state) => state.comunitypost);

//////////////
  useEffect(() => {
    dispatch(getComcomments(id));
  }, [dispatch]);
  const comment1 = useSelector((state) => state.comunitypost);
// console.log(comment1.comcomments[].name);



  const [commentData, setCommentData] = useState({
    comment_comunity_comments: " ",
    state: false,
    user_id_ComunityComment: localStorage.id,
    post_id_ComunityComment: id,
  });
  const handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    setCommentData({
      ...commentData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addComunityComment(commentData));
  };
// console.log(commentData)


  return (
    <>
      <div class="page-banner-area item-bg3">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Community</h2>
                <ul>
                  <li>
                    <a href="\">Home</a>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner -->

        <!-- Start Blog Details Area --> */}

      <section class="blog-details-area ptb-100">
        <section class="">
          <div class="container">
            <div class="section-title">
              <h2>Post</h2>
            </div>
            <section style={{ backgroundColor: "#eee" }}>
              <div class="container my-5 py-5">
                <div class="row d-flex justify-content-center">
                  <div class="col-md-12 col-lg-10 col-xl-8">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex flex-start align-items-center">
                          <img
                            class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            alt="avatar"
                            width="60"
                            height="60"
                          />
                          <div>
                            <h6 class="fw-bold text-primary mb-1">
                              {singlepost.singlecompost.name}
                            </h6>
                            <p class="text-muted small mb-0">
                              Shared publicly -{" "}
                              {singlepost.singlecompost.created_at}
                            </p>
                          </div>
                        </div>
                        <h5>{singlepost.singlecompost.subject}</h5>
                        <p class="mt-3 mb-4 pb-2">
                          {singlepost.singlecompost.comment_comunity_posts}
                        </p>
                        <img
                          src={
                            "http://localhost:8000/upload/" +
                            singlepost.singlecompost.image_comunity_posts
                          }
                        />
                        {/* 
                        <div class="small d-flex justify-content-start">
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-thumbs-up me-2"></i>
                            <p class="mb-0">Like</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-comment-dots me-2"></i>
                            <p class="mb-0">Comment</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="fas fa-share me-2"></i>
                            <p class="mb-0">Share</p>
                          </a>
                        </div> */}
                      </div>

                      <section>
                        <div class="container my-5 py-5">
                          <div class="row d-flex justify-content-center">
                            <div class="">
                              <div class="card text-dark">
                                {/* /////{" "} */}
                                {comment1.comcomments.map((comment) => {
                                  // if (comment.state != false) {
                                    return (
                                      <>
                                        <div class="card-body p-4">
                                          <h4 class="mb-0">Comments</h4>
                                          <p class="fw-light mb-4 pb-2"></p>

                                          <div class="d-flex flex-start">
                                            <img
                                              class="rounded-circle shadow-1-strong me-3"
                                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                                              alt="avatar"
                                              style={{
                                                width: "5%",
                                                height: "5%",
                                              }}
                                            />
                                            <div>
                                              <h6 class="fw-bold mb-1">
                                                {comment.name}
                                              </h6>
                                              <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                  March 07, 2021
                                                </p>
                                              </div>
                                              <p class="mb-0">
                                                {
                                                  comment.comment_comunity_comments
                                                }
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        <hr class="my-0" />
                                      </>
                                    );
                                  // }
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div
                        class="card-footer py-3 border-0"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <form class="comment-form" onSubmit={handleSubmit}>
                          <div class="d-flex flex-start w-100">
                            <img
                              class="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                              alt="avatar"
                              style={{ width: "5%", height: "5%" }}
                            />

                            <div class="form-outline w-100">
                              <textarea
                                onChange={handleChange}
                                name="comment_comunity_comments"
                                class="form-control"
                                id="textAreaExample"
                                rows="4"
                                style={{ background: "#fff" }}
                              ></textarea>
                              <label class="form-label" for="textAreaExample">
                                Message
                              </label>
                            </div>
                          </div>
                          <div class="float-end mt-2 pt-1">
                            <button
                              type="submit"
                              class="btn btn-primary btn-sm"
                            >
                              Post comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="class-shape"></div>
        </section>
      </section>
    </>
  );
};
export default SingleComunity;
