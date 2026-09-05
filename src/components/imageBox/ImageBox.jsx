import { useState } from "react";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageBox.module.css";
import { useParams } from "react-router-dom";

const ImageBox = ({ images}) => {
  const {lessonId} = useParams();
  const [isGallery, setIsGallery] = useState(false);
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
          <img className={css.image} src={`/task_images/${lessonId}/${el.url}.png`} alt={el.label} />
          {el.label && <div className={css.textBox}>
            <SpeakButton text={el.answer} />
            <p>{el.label}</p>
          </div>}
          
        </div>
      ))} 
      </div>
      
    </div>
  );
};

export default ImageBox;
