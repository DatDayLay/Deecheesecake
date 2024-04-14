import styles from "./MenuCarousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MenuCarousel = ({ cakes }) => {
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
    <div className={styles.carousel} id="menu">
      <h2>Our Menu</h2>
      <article className={styles.cakeCar}>
        <Slider
          {...settings}
          style={{
            zIndex: "0",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
          }}
        >
          {cakes.map((cake) => {
            return (
              <section key={cake.id}>
                <img src={require(`../Assets/${cake.img}`)} alt="" />
                <h3>{cake.name}</h3>
                <p>{cake.description}</p>
                <aside>
                  <h5>
                    <span>$</span>
                    {cake.price}
                  </h5>
                  <h6>&#128968;&#128968;&#128968;&#128968;&#128968;</h6>
                </aside>
              </section>
            );
          })}
        </Slider>
      </article>
    </div>
  );
};

export default MenuCarousel;
