import css from './MultiQuest.module.css'
import ImageList from '../imageList/ImageList'
import ImageBox from '../imageBox/ImageBox'
import ImageColumn from '../imageColumn/ImageColumn'
import { useParams } from 'react-router-dom'

export default function MultiQuest({images, type}) {
  const {lessonId} = useParams()
  return (
    <div className={css.multiQuestBox}>
      <ImageColumn images={images.rightIC}/>
      {/* <ImageBox image={images.mainImage} type={type} lessonId={lessonId}/> */}
      <img
                  className={css.mainImage}
                  src={`/task_images/${lessonId}/${images.mainImage.url}.png`}
                  alt={images.mainImage.url}
                />
      {/* <ImageColumn images={images.leftIC}/> */}
    </div>
  )
}
