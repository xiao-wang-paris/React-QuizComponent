import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state={incorrectAnswer:false}
    }

    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler()
            this.setState(state=>{
                return { incorrectAnswer:false}
            })
        }else{
            this.setState((state)=>{
                return {incorrectAnswer:true}
            })
        }
    }
    render(props) {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option,index) => 
                            <QuizQuestionButton 
                                button_text={answer_option} 
                                key={index}
                                clickHandler={this.handleClick.bind(this)}>
                            </QuizQuestionButton>
                        )}    
                    </ul>
                </section>
                {
                 (this.state.incorrectAnswer)?
                        <p className='error'>
                        Sorry, this is not right
                        </p>
                    :
                        null
                }
            </main>
            );
    }
}

export default QuizQuestion