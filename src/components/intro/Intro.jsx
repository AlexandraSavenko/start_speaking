import css from "./Intro.module.css";

const Intro = () => {
  return (
    <div>
      <div className={css.hero}>
          <h1 className={css.title}>Welcome to Start Speaking Course</h1>
          <img src="/hero.png" alt="hero"/>
        </div>
    </div>
  );
};

export default Intro;
