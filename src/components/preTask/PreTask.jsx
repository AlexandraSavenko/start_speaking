import css from './PreTask.module.css'
import ImageBox from '../imageBox/ImageBox';
import SpeakButton from '../speakButton/SpeakButton';
import { useParams } from 'react-router-dom';
import { lessons } from '../../lessons';

const PreTask = () => {
     const { lessonId,type, taskId } = useParams();
  const lesson = lessons.find((l) => l.id === lessonId);
  const task = lesson[type].find((t) => t.id === taskId);
  if (!task) return <p>Task not found</p>;
  return (
    <div className={css.taskBox}>
      <div>
        <h3>{taskId}</h3>
        <div className={css.taskTwo}>
          <SpeakButton text={task.dialogue}/>
          <p>{task.dialogue}</p>
        </div>
      </div>
      <ImageBox images={task.images}/>
    </div>
  )
}

export default PreTask
