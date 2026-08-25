import css from './Activities.module.css'
import { useParams } from 'react-router-dom';
import { lessons } from '../../lessons';
import TaskItem from '../taskItem/TaskItem';

const Activities = () => {
        const { lessonId} = useParams();
            const lesson = lessons.find(l => l.id === lessonId);
  const storyTasks = lesson.tasks
  const activityTaskList = Object.keys(storyTasks)
  return (
    <ul className={css.activityBox}>
      {activityTaskList.map((el, index) => <li key={index}><TaskItem item={storyTasks[el]}/></li> )}
    </ul>
  )
}

export default Activities
