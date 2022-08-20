import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getSinglePosts} from "../redux/postSlice";
import { useParams } from "react-router-dom";
import { addComment, getComments,deleteComment,updateComment } from "../redux/commentSlice";
import Swal from "sweetalert2";
const NewsDetails = () => {

  const { id } = useParams();

// ///posts///
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.post);
// console.log(posts);
  //////single post///////////

  useEffect(() => {
    dispatch(getSinglePosts(id));
  }, [dispatch]);
  const singlepost = useSelector((state) => state.post);

  // console.log(singlepost);
  ////// end single post ///////

  // //////////Comment //////////
  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch]);
  const comment1 = useSelector((state) => state.comment);
  console.log(comment1.comments);
/////
let currentTimestamp = Date.now();
let date = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}).format(currentTimestamp);
console.log(date)


////
  
  const [commentData, setCommentData] = useState({ 
    date:date,
    state:false,
    comment: " ",
    user_id_comment: localStorage.id,
    post_id_comment: id,
  });
// console.log(id)
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

    dispatch(addComment(commentData));
  
  console.log(commentData);}
/////////start edit////////
 const [showEdit, setShowEdit] = useState(false);

const isEdit=(e)=>{
  setShowEdit(true)
}
//////
// const commentId= comment1.comments.id;
// console.log(commentId)
const handleSubmitEdit = (e) => {
  e.preventDefault();
   setShowEdit(false);

  dispatch(updateComment(commentData));

  console.log(commentData);
};

  let check = localStorage.getItem("id");
/////end edit/////

  return (
    <>
      <div class="page-banner-area item-bg3">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>News Details</h2>
                <ul>
                  <li>
                    <a href="\">Home</a>
                  </li>
                  <li>News Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner -->

        <!-- Start Blog Details Area --> */}

      <section class="blog-details-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="blog-details-desc">
                <div class="article-image">
                  <img
                    src={
                      "http://localhost:8000/upload/" +
                      singlepost.singlepost.main_image
                    }
                    alt="image"
                  />
                </div>
                <div class="article-content">
                  <div class="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <a href="#">{singlepost.singlepost.created_at}</a>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <a href="#">{singlepost.singlepost.name_doctor}</a>
                      </li>
                    </ul>
                  </div>

                  <h3>{singlepost.singlepost.title}</h3>
                  <p>{singlepost.singlepost.body}</p>

                  <ul class="wp-block-gallery columns-3">
                    <li class="blocks-gallery-item">
                      <figure>
                        <img
                          src={
                            "http://localhost:8000/upload/im1.jfif" 
                         
                          }
                          alt="image"
                        />
                      </figure>
                    </li>

                    <li class="blocks-gallery-item">
                      <figure>
                        <img
                          src={
                            "http://localhost:8000/upload/im2.jfif" 
                            
                          }
                          alt="image"
                        />
                      </figure>
                    </li>

                    <li class="blocks-gallery-item">
                      <figure>
                        <img
                          src={
                            "http://localhost:8000/upload/im3.jfif" 
                            
                          }
                          alt="image"
                        />
                      </figure>
                    </li>
                  </ul>
                  <h3>Four Major Elements That We Offer:</h3>
                  <ul class="features-list">
                    <li>
                      <i class="bx bx-check"></i>
                      Your child’s interests, likes, dislikes
                    </li>
                    <li>
                      <i class="bx bx-check"></i>
                      Their routines- patterns of eating, sleeping, toileting
                    </li>
                    <li>
                      <i class="bx bx-check"></i>
                      Your child’s current wellbeing
                    </li>
                    <li>
                      <i class="bx bx-check"></i>
                      Any major events taking place at home.
                    </li>
                  </ul>
                  <h3>It’s Time To Think Differently About Homeschooling</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                </div>
{/* 
                <div class="article-footer">
                  <div class="article-tags">
                    <span>
                      <i class="bx bxs-bookmark"></i>
                    </span>
                    <a href="#">Preschool</a>,<a href="#">Children</a>
                  </div>

                  <div class="article-share">
                    <ul class="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                {/* <div class="post-navigation">
                  <div class="navigation-links">
                    <div class="nav-previous">
                      <a href="index.html">
                        <i class="bx bx-chevron-left"></i>
                        Prev Post
                      </a>
                    </div>
                    <div class="nav-next">
                      <a href="index.html">
                        Next Post
                        <i class="bx bx-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {check && (
                  <>
                    <div class="comments-area">
                      <div class="comment-respond">
                        <h3 class="comment-reply-title">Leave a Comment</h3>

                        <form class="comment-form" onSubmit={handleSubmit}>
                          <p class="comment-notes"></p>

                          <p class="comment-form-comment">
                            <label>Comment</label>

                            <textarea
                              onChange={handleChange}
                              name="comment"
                              cols="45"
                              placeholder="Your Comment..."
                              rows="5"
                              maxlength="65525"
                              required="required"
                            ></textarea>
                          </p>
                          <p class="comment-form-cookies-consent"></p>
                          <p class="form-submit">
                            <input
                              type="submit"
                              name="submit"
                              id="submit"
                              class="submit"
                              value="Post A Comment"
                            />
                          </p>
                        </form>
                      </div>
                      <h3 class="comments-title">
                        <br></br> Comments:
                      </h3>
                      
                      {comment1.comments.map((comment) => {
                        if (comment.state != false) {
                          return (
                            <ol class="comment-list">
                              <li class="comment">
                                <div class="comment-body">
                                  <footer class="comment-meta">
                                    <div class="comment-author vcard">
                                      <img
                                       src= {"http://localhost:8000/upload/" + comment.image}
                                        class="avatar"
                                        alt="image"
                                      />
                                      <b class="fn">{comment.name}</b>
                                    </div>
                                    <div class="comment-metadata">
                                      <a href="#">
                                        <span>{comment.date}</span>
                                      </a>
                                    </div>
                                  </footer>
                                  <div class="comment-content">
                                    <p>{comment.comment}</p>

                                    <button
                                      onClick={() => {
                                        setCommentData(comment);
                                        isEdit();
                                      }}
                                      style={{
                                        background: "none",
                                        color: "inherit",
                                        border: "none",
                                        padding: 0,
                                        font: "inherit",
                                        outline: "inherit",
                                      }}
                                    >
                                      <a class="comment-reply-link">
                                        <Icon
                                          icon="fa6-regular:pen-to-square"
                                          style={{ fontSize: "24px" }}
                                        />
                                      </a>
                                    </button>
                                    <button
                                      style={{
                                        background: "none",
                                        color: "inherit",
                                        border: "none",
                                        padding: " 10px",
                                        font: "inherit",
                                        outline: "inherit",
                                      }}
                                      onClick={() => {
                                        dispatch(deleteComment(comment.id));
                                      }}
                                    >
                                      <a class="comment-reply-link">
                                        <Icon
                                          icon="material-symbols:cancel-rounded"
                                          style={{ fontSize: "24px" }}
                                        />
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          );
                        }
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
            {/*edit comment */}
            {showEdit && (
              <form onSubmit={handleSubmitEdit}>
                <div className="form-group">
                  <p class="comment-form-comment">
                    <textarea
                      onChange={handleChange}
                      name="comment"
                      cols="45"
                      placeholder="Your Comment..."
                      rows="5"
                      value={commentData.comment}
                      maxlength="65525"
                      required="required"
                    ></textarea>
                  </p>
                </div>
                <div className="form-group" style={{ width: "10%" }}>
                  <button
                    className="form-control  btn btn-primary"
                    type="submit"
                  >
                    update
                  </button>
                </div>
              </form>
            )}

            {/*edit comment end  */}

            <div class="col-lg-4 col-md-12">
              <aside class="widget-area">
                <section class="widget widget_search">
                  <h3 class="widget-title">Search</h3>

                  <form class="search-form">
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        class="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i class="bx bx-search-alt"></i>
                    </button>
                  </form>
                </section>

                <section class="widget widget_ketan_posts_thumb">
                  <h3 class="widget-title">Popular Posts</h3>
                  {posts.posts.map((post) => {
                    return (
                      <article class="item" key={post.id}>
                        <a href={`/NewsDetails/${post.id}`} class="thumb">
                          <img
                            src={
                              "http://localhost:8000/upload/" + post.main_image
                            }
                            class="fullimage cover bg1"
                            role="img"
                          />
                        </a>
                        <div class="info">
                          <span>{post.date}</span>
                          <h4 class="title usmall">
                            <a href={`/NewsDetails/${post.id}`}>{post.title}</a>
                          </h4>
                        </div>
                      </article>
                    );
                  })}
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsDetails;
