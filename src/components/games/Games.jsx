import { useParams } from "react-router-dom";
import css from "./Games.module.css";
import { lessons } from "../../lessons";

const Games = () => {
  const { lessonId} = useParams();
        const lesson = lessons.find(l => l.id === lessonId);
  const games = lesson.games;
  return (
    <div>
      <ul className={css.gameBox}>
        {games.map((game, index) => (
          <li key={index}>
            <iframe
              src={game.url}
              style={{ border: "0px", width: "100%", height: "500px" }}
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
            <a href={game.url} target="_blanc">{`game ${index + 1}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
