import css from "./Intro.module.css";

const Intro = () => {
  return (
      <div className={css.hero}>
          {/* <h1 className={css.title}>Welcome to </h1> */}
          <img src="/hero.png" alt="hero"/>
        </div>
  );
};

export default Intro;
