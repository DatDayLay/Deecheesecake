import styles from "./Menu.module.css";
import MenuCarousel from "./MenuCarousel";
const Menu = ({ cakes, isMobile }) => {
  return (
    <>
      {window.innerWidth >= 721 && (
        <div className={styles.menu} id="menu">
          <h2>Our Menu</h2>

          <article>
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
          </article>
        </div>
      )}

      {isMobile && <MenuCarousel cakes={cakes} />}
    </>
  );
};

export default Menu;

{
  /* <article>
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
        </article> */
}
