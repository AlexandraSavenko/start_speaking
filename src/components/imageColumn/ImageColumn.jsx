import { useParams } from "react-router-dom";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageColumn.module.css";

export default function ImageColumn({ images }) {
  const { lessonId } = useParams();
  return (
    <ul className={css.imageColumn}>
      {images.map((el) => (
        <li className={css.imageBox} key={el.id}>
          <img
            className={css.image}
            src={`/task_images/${lessonId}/${el.url}.png`}
            alt={el.label}
          />
          <div className={css.buttonBox}>
            <SpeakButton text={el.question} type={"question"} />
            <SpeakButton text={el.answer || el.lable} type={"sound"} />
          </div>
        </li>
      ))}
    </ul>
  );
}
