import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    handleClick(){
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        return (
            <li><button onClick={this.handleClick(this)}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton