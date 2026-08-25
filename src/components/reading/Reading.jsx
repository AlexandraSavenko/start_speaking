import css from './Reading.module.css'
import { useParams } from 'react-router-dom';
import { lessons } from '../../lessons';
import SpeakButton from '../speakButton/SpeakButton';

const Reading = () => {
    const { lessonId } = useParams();

  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) return <p>Story not found.</p>;
  return (
    <div className={css.readingBox}>
      {lesson.pages.map(page => (
        <div className={css.readingContent} key={page.id}>
          {page.altText && (
            <img
              src={`/story_images/${lesson.id}/text_${page.id}.png`}
              alt={page.altText}
              style={{ maxWidth: "100%" }}
            />
          )}
          {page.text && <div className={css.textBlock}>
            <SpeakButton text={page.text}/>
            <p>{page.text}</p></div>  }
        </div>
      ))}
    </div>
  )
}

export default Reading
