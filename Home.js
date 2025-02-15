import HomeCake from "../Assets/Main Image (Home).png";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home} id="home">
      <section>
        <h2>Bite The World of Cheesecake Wonders</h2>
        <p>
          We always make our customer happy by providing
          <br />
          as many choices as possible
        </p>
        <aside>
          <button>Get Started</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 0C4.47999 0 0 4.48 0 10C0 15.52 4.47999 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.53 0 10 0ZM13 12.23L10.0999 13.9C9.73993 14.11 9.34003 14.21 8.94993 14.21C8.55003 14.21 8.15993 14.11 7.79998 13.9C7.07998 13.48 6.64998 12.74 6.64998 11.9V8.55C6.64998 7.72 7.07998 6.97 7.79998 6.55C8.52003 6.13 9.37993 6.13 10.1099 6.55L13.0099 8.22C13.7299 8.64 14.1599 9.38 14.1599 10.22C14.1599 11.06 13.7299 11.81 13 12.23Z"
                fill="#745545"
              />
            </svg>
            Watch Demo
          </button>
        </aside>
      </section>
      <section>
        <img src={HomeCake} alt="" />
      </section>
    </div>
  );
};

export default Home;
