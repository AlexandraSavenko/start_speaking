import { useParams, NavLink, Outlet } from "react-router-dom";
import { lessons } from "../../lessons";
import css from "./SpeakingLayout.module.css";

const SpeakingLayout = () => {
  const { lessonId } = useParams();
  const lesson = lessons.find((l) => l.id === lessonId);

  return (
    <div className={css.speakingWrapper}>
      <h2 className={css.heading}>Speaking</h2>

      <nav className={css.nav}>
        {lesson.speaking.map((task) => (
          <NavLink
            key={task.id}
            to={task.id}
            className={({ isActive }) =>
              `${isActive ? css.active : ""} ${css.link}`
            }
          >
            {task.title}
          </NavLink>
        ))}
      </nav>

      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default SpeakingLayout;
