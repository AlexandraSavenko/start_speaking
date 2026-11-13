import css from './MultiQuest.module.css'
import ImageList from '../imageList/ImageList'
import ImageBox from '../imageBox/ImageBox'
import ImageColumn from '../imageColumn/ImageColumn'

export default function MultiQuest({images, type}) {
  return (
    <div className={css.multiQuestBox}>
      <ImageColumn images={images.rightIC}/>
      <ImageBox image={images.mainImage} type={type}/>
      <ImageColumn images={images.leftIC}/>
    </div>
  )
}
