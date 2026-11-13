import { useState } from "react";
import css from "./ImageList.module.css";
import ImageBox from "../imageBox/ImageBox";

const ImageList = ({ images, type}) => {
  const [isGallery, setIsGallery] = useState(false);

  return (
    <div className={css.imageWrapper}>
      <div className={css.viewToggle}>
        <button className={css.toggleBtn} onClick={() => setIsGallery(!isGallery)}>
          {isGallery ? "show all at once" : "show one by one"}
        </button>
      </div>
      <ul className={isGallery ? css.imageBoxGallery : css.imageBoxGrid}>
       {images.map((el, i) => ( <li key={i}><ImageBox image={el} type={type}/></li> 
      ))} 
      </ul>
      
    </div>
  );
};

export default ImageList;
