import { useState } from "react";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageBox.module.css";
import { useParams } from "react-router-dom";

const ImageBox = ({ images, type}) => {
  const {lessonId} = useParams();
  const [isGallery, setIsGallery] = useState(false);
  const [revealed, setRevealed] = useState([])

  const reveal = (id) => {
    setRevealed(prev => [...prev, id])
  }
  return (
    <div className={css.imageWrapper}>
      <div className={css.viewToggle}>
        <button className={css.toggleBtn} onClick={() => setIsGallery(!isGallery)}>
          {isGallery ? "show all at once" : "show one by one"}
        </button>
      </div>
      <div className={isGallery ? css.imageBoxGallery : css.imageBoxGrid}>
       {images.map((el) => (
        <div key={el.url} className={css.card}>
          <div className={css.imageWrap}>
            <img className={css.image} src={`/task_images/${lessonId}/${el.url}.png`} alt={el.label} />
          {type === "Ask and look" && <div className={`${css.imageCover} ${revealed.includes(el.id) ? css.revealed : ""}`} onClick={() => reveal(el.id)}>
            <img className={css.image} src={`/task_images/${lessonId}/${el.quUrl}.png`} alt={el.label} />
          </div> }
          </div>
          
          {el.label && <div className={css.textBox}>
            <div className={css.buttonBox}>
             {el.question && <SpeakButton text={el.question} type={"question"} />}
            <SpeakButton text={el.answer || el.label} type={"sound"} /> 
            </div>
            <p>{el.label}</p>
          </div>}
          
        </div>
      ))} 
      </div>
      
    </div>
  );
};

export default ImageBox;
