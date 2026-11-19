import { useState } from "react";
import css from "./ImageList.module.css";
import ImageBox from "../imageBox/ImageBox";
import { useParams } from "react-router-dom";

const ImageList = ({ images, type}) => {
  const [isGallery, setIsGallery] = useState(false);
    const { lessonId } = useParams();

  return (
    <div className={css.imageWrapper}>
       <div className={css.viewToggle}>
        <button className={css.toggleBtn} onClick={() => setIsGallery(!isGallery)}>
          {isGallery ? "show all at once" : "show one by one"}
        </button>
      </div>
      <ul className={isGallery ? css.imageBoxGallery : css.imageBoxGrid}>
       {images.map((el, i) => ( <li key={i}><ImageBox image={el} type={type} lessonId={lessonId} /></li> 
      ))} 
      </ul>
      
    </div>
  );
};

export default ImageList;
