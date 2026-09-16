import { speakText } from '../../utils/voiceFunction';
import css from './SpeakButton.module.css'

const SpeakButton = ({text, type}) => {
  return (
    <button className={css.speakBtn} onClick={() => speakText(text)} >
        <svg className={css.icon}>
            <use href={`/icons.svg#icon-${type}`}></use>
          </svg>    
    </button>
  )
}

export default SpeakButton;
