import React from "react";

export const Modal = ({question, answerModal, updateQuestionAnswer}) => {
    const answerQuestion = (answer) => {
        answerModal(answer)
        updateQuestionAnswer(answer)
    }

    return(
        <div id='modal'>
            <h2>{question}</h2>
            <button onClick={() => answerQuestion(true)}>Yes</button>
            <button onClick={() => answerQuestion(false)}>No</button>
        </div>
    )
}