import css from "./Vocabulary.module.css";
import { useParams } from "react-router-dom";
import { lessons } from "../../lessons";
import SpeakButton from "../speakButton/SpeakButton";

const Vocabulary = () => {
  const { lessonId} = useParams();
      const lesson = lessons.find(l => l.id === lessonId);
  return (
    <div className={css.vocabularyBox}>
      {Object.entries(lesson.vocabulary).map(([category, words]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul className={css.wordList}>
            {words.map((item, i) => (
              <li key={i} className={css.wordLine}>
                <SpeakButton text={item.word} type={"sound"} />
                <p className={css.wordBox}>
                  <span className={css.word}>{item.word}</span>
                   <span className={css.meaning}>{item.meaning}</span> 
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Vocabulary;
