import css from "./SideBar.module.css";
import ContentItem from "../contentItem/ContentItem";
import { useState } from "react";
import { lessons } from "../../lessons";

const SideBar = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(0);
  const numbers = lessons.map((_, index) => index + 1)
  return (
    <div>
      {isOpen && (
        <div className={css.overlay} onClick={() => setIsOpen(false)} />
      )}

      <div className={`${css.sideBar} ${isOpen ? css.open : ""}`}>
        <ul>
          {numbers.map((el) => (
          <li className={css.lessonMenu} onClick={() => setOpenMenu(openMenu === el ? 0 : el)} key={el}>
          {`Lesson ${el}`}
            {openMenu === el && <ContentItem lessonNumber={el} />}
          </li>
        ))}
        </ul>
        
        
      </div>
    </div>
  );
};

export default SideBar;
