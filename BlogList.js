import styles from "../Components/BlogList.module.css";
import BlogCarousel from "./BlogCarousel";
const BlogList = ({ blogs, isMobile }) => {
  return (
    <>
      {window.innerWidth >= 721 && (
        <div className={styles.bloglist} id="blogs">
          <h2>Our Blog</h2>
          <h6>Our Recent Posts</h6>
          <article>
            {blogs.map((blog) => {
              return (
                <section key={blog.header}>
                  <img src={require(`../Assets/${blog.img}`)} alt="" />
                  <h5>{blog.title}</h5>
                  <h3>{blog.header}</h3>
                  <p>{blog.text}</p>
                  <button>{blog.btn}</button>
                </section>
              );
            })}
          </article>
        </div>
      )}
      {isMobile && <BlogCarousel blogs={blogs} />}
    </>
  );
};

export default BlogList;
