import css from "./imgVocabulary.module.css";
import { lessons } from "../../lessons";
import ImageBox from "../imageBox/ImageBox";

export default function ImgVocabulary() {
  const allPreListening = lessons.map((lesson) => ({
      id: lesson.id,
      images: lesson.prelistening.flatMap((task) => task.images ?? []),
    }));
  console.log(allPreListening);
  return <div>
    {
        allPreListening.map(lesson => (<section className={css.section} key={lesson.id}>
    <h2 className={css.tytle}> {lesson.id}</h2>

    <ul className={css.imageBoxGrid}>
       {lesson.images.map((el, i) => ( <li key={i}><ImageBox image={el} type={"voc"} lessonId={lesson.id} /></li> 
      ))} 
      </ul>
  </section>))
    }
  </div>;
}
