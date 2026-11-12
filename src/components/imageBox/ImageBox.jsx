import { useState } from "react";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageBox.module.css";
import { useParams } from "react-router-dom";

const ImageBox = ({ image, type }) => {
  const { lessonId } = useParams();
  const [revealed, setRevealed] = useState([]);

  const reveal = (id) => {
    setRevealed((prev) => [...prev, id]);
  };
  return (
    <div key={image.url} className={css.card}>
      <div className={css.imageWrap}>
        <img
          className={css.image}
          src={`/task_images/${lessonId}/${image.url}.png`}
          alt={image.label}
        />
        {type === "Ask and look" && (
          <div
            className={`${css.imageCover} ${revealed.includes(image.id) ? css.revealed : ""}`}
            onClick={() => reveal(image.id)}
          >
            <img
              className={css.image}
              src={`/task_images/${lessonId}/${image.quUrl}.png`}
              alt={image.label}
            />
          </div>
        )}
      </div>
      {image.label && (
        <div className={css.textBox}>
          <div className={css.buttonBox}>
            {image.question && (
              <SpeakButton text={image.question} type={"question"} />
            )}
            <SpeakButton text={image.answer || image.label} type={"sound"} />
          </div>
          <p>{image.label}</p>
        </div>
      )}
    </div>
  );
};

export default ImageBox;
