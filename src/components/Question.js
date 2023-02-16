import { useState } from "react";
import { quiz } from "../data";
import { Link } from "react-router-dom";
import Choices from "./Choices";
const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerId, setSelectedAnswerId] = useState(null)
    const [rightAnswer, setRightAnswer] = useState(null)
    const [wrongAnswer, setWrongAnswer] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [displayAnswers, setDisplayAnswers] = useState(false)
    const [result, setResult] = useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0
    })

    const {questions} = quiz
    const {question, choices,correctAnswer} = quiz.questions[currentQuestion]

    let NextQuestion = () =>{
        // 
        setSelectedAnswerId(null)
        setResult((prev) => selectedAnswer ? {...prev, score: prev.score + 10, correctAnswers: prev.correctAnswers + 1 } : {...prev, wrongAnswers: prev.wrongAnswers + 1} )

        if(currentQuestion !== questions.length - 1){
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setCurrentQuestion(0)
            setShowResult(true)
        }
        
    }


   

    const AnswerSelected = ( answer, index) =>{
        
        setSelectedAnswerId(index)
        if(answer === correctAnswer){
            setSelectedAnswer(true)
            setRightAnswer(true)
            setWrongAnswer(true)
            console.log(answer)
            
            
        } else {
            setSelectedAnswer(false)
            setRightAnswer(false)
            setWrongAnswer(false)
            
        }
    }

   const refreshPage = () =>{
    window.location.reload()
   }

    
    
    const addingZero = (number) =>(
        number > 9 ? number : `0${number}`
    )
   


   

    return (
        <>
            <div className="quiz-container">

                {!showResult ? (
                <div className="container">
                    <h1>Question <span className="zero">{addingZero(currentQuestion + 1)}</span> <span className="zero2">/{addingZero(questions.length)}</span></h1>
                    <hr/>
                    <h5>Test your brains without googling the answers  <i class="fa-solid fa-face-smile yellow"></i> <i class="fa-solid fa-face-grin-tongue-squint yellow"></i></h5>
                    
                    <h2>{questions[currentQuestion].question}</h2>
                    {choices.map((answer, index) => (
                        <div className="list-container">
                             <li onClick={() => AnswerSelected(answer, index)} key={answer}
                            className={selectedAnswerId === index  ? "selected-answer" : null }>{answer}</li>
                        </div>
                        
                        )
                        )}

                    
                    
                    <button onClick={NextQuestion} className="button" disabled={selectedAnswerId === null}>{currentQuestion === questions.length - 1 ? "Finish" : "Next Question"}</button>
                    
                </div>
                )  :  (
            
           

                <div className="results container">
                    <h3>Results</h3>
                    
                    
                    <p className="total-questions">Total Questions : <span>{questions.length}</span></p>
                    <p><i class="fa-solid fa-star scores"></i> Total Score: <span>{result.score}</span></p>
                    <p><i class="fa-solid fa-circle-check correct-answ"></i> Correct Answers: <span>{result.correctAnswers}</span></p>
                    <p><i class="fa-solid fa-circle-xmark wrong-answ"></i> Wrong Answers: <span>{result.wrongAnswers}</span></p>
                    <button className="button-answers" onClick={()=>setDisplayAnswers(!displayAnswers)}>{!displayAnswers ? 'Show Answers' : 'Hide Answers'}</button>
                    <button onClick={refreshPage} className="button-answers back">Return To Questions</button>
                    

                    <div className="displays-answers">
                        {questions.map((quest, index)=>(
                            <div className="display-answers-wrapper">
                                
                                {
                                
                                    displayAnswers && <div className="hidden">
                                    <h3><span className="asterik">*</span> {quest.question}</h3>
                                    <h4 className="display-correct">{quest.correctAnswer}</h4>
                                    <hr/>
                                    </div>
                                    
                                
                                }
                            </div>
                            
                        ))}

                    </div>
                </div> )
}
            </div> 
            
        </>
    );
}

 
export default Question;




{/* <ul>
                    {choices.map((answer, index) =>{ return (
                        <li onClick={() => AnswerSelected(answer, index)} key={answer} className={(selectedAnswerId === index && answer=== correctAnswer  ? "correct-answer" : null) || ((selectedAnswerId === index && answer !== correctAnswer  ? "wrong-answer correct-answer" : null ) || (answer === correctAnswer && selectedAnswerId === index   ? " correct-answer" : null )) }>{answer}</li>
                    )}
                    )}
                </ul> */}

                // <h3>{quiz.questions[currentQuestion].question}</h3>