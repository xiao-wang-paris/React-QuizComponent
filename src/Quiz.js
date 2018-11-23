import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props) 
        this.state = {quiz_position : 1 }
    }

    showNextQuestion () {
        this.setState((state)=>{
            return {quiz_position:  state.quiz_position + 1}
        })
    }
    
    render() {
        const isQuizEnd = (this.state.quiz_position -1 === quizData.quiz_questions.length)
        return (
            <div>
                {isQuizEnd ? 
                <QuizEnd></QuizEnd> : 
                <QuizQuestion 
                    className='QuizQuestion' 
                    quiz_question= {quizData['quiz_questions'][this.state.quiz_position-1]}
                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    >
                    {quizData['quiz_questions'][0]['instruction_text']}
                </QuizQuestion>}
            </div>
        );
    }
}

export default Quiz