import css from './Reading.module.css'
import { useParams } from 'react-router-dom';
import { lessons } from '../../lessons';
import SpeakButton from '../speakButton/SpeakButton';

const Reading = () => {
    const { lessonId } = useParams();

  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) return <p>Story not found.</p>;
  return (
    <ul className={css.readingBox}>
      {lesson.pages.map(page => (
        <li className={css.readingContent} key={page.id}>
          {page.altText && (
            <img
              src={`/story_images/${lesson.id}/${page.id}.png`}
              alt={page.altText}
              style={{ maxWidth: "100%" }}
            />
          )}
          {page.text && <ul className={css.textBlock}>{
            page.text.map((el, id) => <li key={id}>
              <SpeakButton text={el} type={"sound"}/>
            <p>{el}</p>
            </li> )}
            </ul>  }
        </li>
      ))}
    </ul>
  )
}

export default Reading
