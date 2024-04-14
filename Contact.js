import styles from "../Components/Contact.module.css";
import img from "../Assets/contactImg.png";
import { Link } from "react-router-dom";
import { Link as LLink } from "react-scroll";
import { useState } from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

// This will log the current year to the console

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isFormInvalid =
    name.trim() === "" || email.trim() === "" || message.trim() === "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Message from Contact Form";
    const body = `Email: ${email}%0D%0AMessage: ${message}`;

    const mailtoLink = `mailto:wcskillz24@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    alert("message sent");
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <div className={styles.contact} id="contact">
      <section>
        <h2>Contact Us </h2>
        <p>
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department!
        </p>
        <img src={img} alt="" />
        <aside>
          <Link className={styles.icon}>
            <li>
              <svg
                data-name="Layer 1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
                  fill="#484848"
                  stroke="#484848"
                />
              </svg>
            </li>
          </Link>
          <Link className={styles.icon}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  d="M10.4366 13.2732C12.5072 13.2732 14.1858 11.7202 14.1858 9.80459C14.1858 7.88894 12.5072 6.336 10.4366 6.336C8.36604 6.336 6.6875 7.88894 6.6875 9.80459C6.6875 11.7202 8.36604 13.2732 10.4366 13.2732Z"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 13.2729V6.33573C2 3.94118 4.09818 2 6.68641 2H14.1847C16.7729 2 18.8711 3.94118 18.8711 6.33573V13.2729C18.8711 15.6674 16.7729 17.6086 14.1847 17.6086H6.68641C4.09818 17.6086 2 15.6674 2 13.2729Z"
                  stroke="#484848"
                  stroke-width="2.5"
                />
                <path
                  d="M15.5918 5.04509L15.6024 5.03406"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </Link>
          <Link className={styles.icon}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
              >
                <path
                  d="M20.9512 2.00819C20.9512 2.00819 19.2129 2.97873 18.2463 3.25382C17.7275 2.69004 17.038 2.29044 16.2711 2.10908C15.5042 1.92772 14.6969 1.97334 13.9583 2.23977C13.2197 2.5062 12.5854 2.98059 12.1415 3.59878C11.6974 4.21697 11.465 4.94912 11.4756 5.69623V6.51037C9.96173 6.54746 8.46172 6.23015 7.10907 5.58668C5.75641 4.94321 4.59314 3.99357 3.72283 2.82233C3.72283 2.82233 0.277166 10.1496 8.02992 13.4061C6.25586 14.5442 4.14248 15.1149 2 15.0344C9.75275 19.1051 19.2283 15.0344 19.2283 5.6718C19.2276 5.44503 19.2045 5.21881 19.1594 4.99607C20.0386 4.17663 20.9512 2.00819 20.9512 2.00819Z"
                  stroke="#484848"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </Link>
          <Link className={styles.icon}>
            <li>
              <svg
                enable-background="new 0 0 512 512"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    d="M255.7,446.3c-53.3,0.3-106.6-0.4-159.8-3.3c-17.3-1-34.6-2.5-50.3-11c-10.5-5.7-18.6-13.6-23.7-24.8   C13.3,388.6,10.6,369,9,349c-3.4-41.3-3.6-82.6-1.8-123.8c0.9-21.9,1.6-44,6.8-65.5c2-8.4,4.9-16.6,8.8-24.4   c9.2-18.3,25.2-27.4,44.5-31.2c16.2-3.2,32.8-3.1,49.3-3.8c55.9-2.3,111.9-3.5,167.9-2.9c43.1,0.5,86.3,1.6,129.4,3.8   c13.3,0.7,26.7,0.9,39.4,5.6c17.2,6.4,30,17.2,36.9,34.7c6.7,16.8,9.3,34.2,10.7,52.1c3.9,48.6,4,97.2,0.8,145.8   c-1.1,16.4-2.2,32.8-6.5,48.9c-9.7,37-32.8,51.5-66.7,53.8c-36.2,2.4-72.5,3.7-108.8,4.2C298.4,446.5,277,446.3,255.7,446.3z    M203.2,344c48.4-26.5,96.2-52.7,144.8-79.3c-48.7-26.7-96.5-52.8-144.8-79.3C203.2,238.7,203.2,291,203.2,344z"
                    fill="#484848"
                  />
                  <path
                    d="M203.2,344c0-53,0-105.3,0-158.5c48.3,26.4,96.1,52.6,144.8,79.3C299.4,291.4,251.6,317.5,203.2,344z"
                    fill="#FEFDFD"
                  />
                </g>
              </svg>
            </li>
          </Link>
        </aside>
        <p>Copyright &copy; {year} Dscode | All rights reserved</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            className={styles.name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            className={styles.mail}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={styles.memo}
            placeholder="Your Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" disabled={isFormInvalid}>
            Contact us now
          </button>
        </form>
        <LLink
          className={styles.back}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 11L12 4L19 11M5 19L12 12L19 19"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </LLink>
      </section>
    </div>
  );
};

export default Contact;
