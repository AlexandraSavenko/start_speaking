import { useParams } from "react-router-dom";
import { lessons } from "../../lessons";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./SpeakingTask.module.css";
import ImageList from "../imageList/ImageList";
import MultiQuest from "../multiQuest/MultiQuest";

const SpeakingTask = () => {
  const { lessonId, taskId} = useParams();
      const lesson = lessons.find(l => l.id === lessonId);
  const task = lesson.speaking.find((t) => t.id === taskId);
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      {task.dialogue && <div className={css.dialogueBox}>
        {task.dialogue.map((line, i) => (
          <div key={i} className={css.speakerLine}>
            <SpeakButton text={line.line} type={"sound"} />
            <p key={i}>
              <strong>{line.speaker}:</strong> {line.line}
            </p>
          </div>
        ))}
      </div>}

      {task.table && <div className={css.tableWrap}>
        {task.table.map((row, rowIndex) => (
          <div className={css.table} key={rowIndex}>
            {Object.entries(row).map((el, index) => (
              <div key={index} className={css.column}>
                {Array.isArray(el[1]) ? (
                  el[1].map((word, i) => (
                    <div key={i} className={css.tableLine}>
                      {" "}
                      <SpeakButton text={word} type={"sound"} /> <p key={i}>{word}</p>
                    </div>
                  ))
                ) : (
                  <div className={css.tableLine}>
                    <SpeakButton text={el[1]} type={"sound"} />
                    <p>{el[1]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>}
      <div className={css.imageBox}>
        {task.type === "multiQuest" ? <MultiQuest images={task.images} type={task.type}/> : <ImageList images={task.images} type={task.type} />}
      </div>
      {/* render table based on type here */}
    </div>
  );
};

export default SpeakingTask;
