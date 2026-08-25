import css from './ContentItem.module.css'
import { NavLink } from 'react-router-dom'

const ContentItem = ({lessonNumber}) => {
  return (
    <ul className={css.itemBox}>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/prelistening`}>{`Pre-Listening ${lessonNumber}`}</NavLink>
      </li>
        <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/story`}>{`Story ${lessonNumber}`}</NavLink>
      </li>
      {/* <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/video`}>Video</NavLink>
      </li> */}
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/vocabulary`}>Vocabulary</NavLink>
      </li>
      {/* <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/activities`}>Activities</NavLink>
      </li> */}
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/speaking`}>Speaking</NavLink>
      </li>
      <li>
      <NavLink className={({isActive}) => `${css.link} ${isActive && css.active}`} to={`lesson${lessonNumber}/games`}>Games</NavLink>
      </li>
    </ul>
  )
}

export default ContentItem
