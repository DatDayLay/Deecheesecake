import styles from "./AboutUs.module.css";
import fruit from "../Assets/About Us Image.png";
const AboutUs = () => {
  return (
    <div className={styles.about} id="about">
      <section>
        <img src={fruit} alt="" />
      </section>
      <section>
        <h2>We Love Cheesecake</h2>
        <h4>Discover Our Cheesecake Story</h4>
        <p>
          At Cheesecake Love, quality is our cornerstone. Each cheesecake is
          crafted with the finest ingredients, meticulous attention to detail,
          and a dash of creativity
        </p>
        <p>
          We believe in delivering not just desserts but moments of sheer
          indulgence.
        </p>
        <button>Read More</button>
      </section>
    </div>
  );
};

export default AboutUs;
