import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import '../assets/css/style.css';
import '../assets/css/quiz.css';
import subtract from '../assets/images/Subtract.png';

const TherapyQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      text: "How old is your child?",
      options: [
        { text: "Under 2 years", value: 1 },
        { text: "2-5 years", value: 2 },
        { text: "6-12 years", value: 3 },
        { text: "13+ years", value: 4 }
      ]
    },
    {
      id: 2,
      text: "How does your child interact with other children?",
      options: [
        { text: "Very well, makes friends easily", value: 1 },
        { text: "Somewhat well, but needs guidance", value: 2 },
        { text: "Struggles with social interactions", value: 3 },
        { text: "Avoids social interactions", value: 4 }
      ]
    },
    {
      id: 3,
      text: "How does your child respond to changes in routine?",
      options: [
        { text: "Adapts easily", value: 1 },
        { text: "Needs some time to adjust", value: 2 },
        { text: "Gets upset but eventually calms down", value: 3 },
        { text: "Has significant difficulty with changes", value: 4 }
      ]
    },
    {
      id: 4,
      text: "Does your child engage in repetitive behaviors?",
      options: [
        { text: "Rarely or never", value: 1 },
        { text: "Sometimes, but not concerning", value: 2 },
        { text: "Frequently, but manageable", value: 3 },
        { text: "Very frequently and disruptive", value: 4 }
      ]
    },
    {
      id: 5,
      text: "How is your child's communication development?",
      options: [
        { text: "Age-appropriate", value: 1 },
        { text: "Slightly delayed", value: 2 },
        { text: "Significantly delayed", value: 3 },
        { text: "Non-verbal or minimal verbal", value: 4 }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach(value => {
      total += value;
    });
    setScore(total);
  };

  const getRecommendation = () => {
    if (score <= 10) {
      return {
        text: "Your child's development appears to be within typical ranges. However, if you have any concerns, we recommend consulting with a pediatrician or developmental specialist.",
        action: "Learn More",
        link: "/#services"
      };
    } else if (score <= 15) {
      return {
        text: "Your child may benefit from early intervention services. We recommend scheduling a consultation with our team to discuss your concerns and explore potential support options.",
        action: "Contact Us",
        link: "/waitlist"
      };
    } else {
      return {
        text: "Based on your responses, your child may benefit from ABA therapy services. We strongly recommend scheduling a consultation with our team to discuss your child's specific needs and develop a personalized treatment plan.",
        action: "Contact Us",
        link: "/waitlist"
      };
    }
  };

  const handleAction = () => {
    const recommendation = getRecommendation();
    navigate(recommendation.link);
  };

  const recommendation = getRecommendation();

  return (
    <section className="page-section" id="quiz_sec">
      <SEO
        title="Child Development Assessment Quiz | Ohana Therapies"
        description="Take our quick assessment quiz to understand if your child might benefit from ABA therapy services."
        keywords="ABA therapy assessment, child development quiz, autism assessment, behavioral therapy evaluation"
        image={subtract}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' },
          { name: 'Assessment Quiz', url: 'https://ohanatherapies.com/#quiz_sec' }
        ]}
      />
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">ASSESSMENT QUIZ</h1>
            <img src={subtract} alt="Decorative separator" loading="lazy" />
          </div>
        </div>
        
        {!showResults ? (
          <div className="quiz-container">
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <h2 className="quiz-question">{questions[currentQuestion].text}</h2>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="quiz-option"
                  onClick={() => handleAnswer(option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <p className="quiz-progress">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        ) : (
          <div className="quiz-results">
            <h2 className="results-title">Assessment Results</h2>
            <p className="results-message">{recommendation.text}</p>
            <div className="results-actions">
              <button className="cm_btn" onClick={handleAction}>
                {recommendation.action}
              </button>
            </div>
            <div className="results-disclaimer">
              <p>Note: This quiz is for informational purposes only and is not a diagnostic tool. A professional evaluation is necessary for an accurate assessment.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapyQuiz; 