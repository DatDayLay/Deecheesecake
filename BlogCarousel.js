import styles from "./BlogCarousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogCarousel = ({ blogs }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.blogCar} id="blogs">
      <h2>Our Blog</h2>
      <h6>Our Recent Posts</h6>
      <article>
        <Slider
          {...settings}
          style={{
            zIndex: "0",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
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
        </Slider>
      </article>
    </div>
  );
};

export default BlogCarousel;
