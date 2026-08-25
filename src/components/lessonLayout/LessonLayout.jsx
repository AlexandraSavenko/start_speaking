import { useParams, NavLink, Outlet } from "react-router-dom";
import { lessons } from "../../lessons";
import css from "./LessonLayout.module.css";

function LessonLayout() {
  const { lessonId } = useParams();
  const lesson = lessons.find((l) => l.id === lessonId);
  return (
    <div className={css.layoutBox}>
      <div className={css.titleBox}>
        <h1>{lesson.title}</h1>
      {/* <a className={css.downloadLink} href={lesson.file} target="_blanc">
        <svg className={css.icon}>
          <use href="/icons.svg#icon-download"></use>
        </svg>
        <span>download the story</span>
      </a> */}
      </div>
      
      <Outlet />
    </div>
  );
}

export default LessonLayout;
