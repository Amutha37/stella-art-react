// import Survey from './survey/Survey'
import Footer from '../../Footer/Footer'
import { FquestionsAsked } from '../../../components/fetchMessage/FquestionsAsked'
import './frequently_asked_questions.css'

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className='question-main-container'>
        <div className='bg-image'></div>
        <header className='bg-text'>
          <p>Using Creativity in Brush Strokes</p>
        </header>
      </div>
      <FquestionsAsked />
      <Footer />
    </>
  )
}

export default FrequentlyAskedQuestions
