// import Footer from "../../Footer/Footer";
import { FquestionsAsked } from "../../fetchContent/FquestionsAsked";
import "./frequently_asked_questions.css";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="question-main-container">
        <div className="bg-image">
          <header className="bg-text">
            <p>Using Creativity in Brush Strokes</p>
          </header>
        </div>
      </div>
      <FquestionsAsked />
      {/* <Footer /> */}
    </>
  );
};

export default FrequentlyAskedQuestions;
