import React from "react";
import Divider from '@material-ui/core/Divider';

export function displayQuestionAnswer(content) {
  return(
    content.map((d, i) =>{
      return(
        <div key={i} className="question">
          <div className="question-answer">
            <p>{d.question}</p>
            <strong>{d.answer}</strong>
          </div>
          <Divider  light />
        </div>
      )
    })
  )
}