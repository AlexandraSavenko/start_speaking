import { useParams } from "react-router-dom";
import css from "./Video.module.css";
import { lessons } from "../../lessons";

const Video = () => {
    const { lessonId} = useParams();
    const lesson = lessons.find(l => l.id === lessonId);

  return (
    <div className={css.videoBox}>
      <iframe
        id="video"
        width="800"
        height="600"
        src={`https://www.youtube.com/embed/${lesson.video}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare"
        referrerpolicy="strictOriginWhenCrossOrigin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
