import "./styles.css";
import { useState } from "react";
import ques from "./data";
export default function Quiz() {
  var [res, useRes] = useState("");
  var score = [];

  function FormHandler(e) {
    e.preventDefault();
    var sum = score.reduce((a, b) => {
      return a + b;
    });

    console.log(score);
    console.log(sum);

    useRes("Your Final Score is: " + sum);

    var res_block = document.getElementById("res");
    res_block.style.display = "block";
    res_block.scrollIntoView();
  }
  function checkAnswer(e) {
    var i = e.target.id.split("_")[0];
    if (e.target.value === ques[i].a) {
      score[i] = 4;
    } else {
      score[i] = -1;
    }
  }
  return (
    <div className="App">
      <div className="head">Triangle Quiz</div>
      <form className="quizForm" onSubmit={(e) => FormHandler(e)}>
        {ques.map((q, i) => {
          return (
            <label key={i} onChange={checkAnswer.bind(this)}>
              Q.{i + 1} {q.q}
              <br />
              <input
                className="rad"
                id={i + "_a1"}
                name={"a" + (i + 1)}
                type="radio"
                value={q.op1}
              />
              {q.op1}
              <br />
              <input
                className="rad"
                id={i + "_a2"}
                name={"a" + (i + 1)}
                type="radio"
                value={q.op2}
              />
              {q.op2}
              <br />
              <input
                className="rad"
                id={i + "_a3"}
                name={"a" + (i + 1)}
                type="radio"
                value={q.op3}
              />
              {q.op3}
              <br />
              <input
                className="rad"
                id={i + "_a4"}
                name={"a" + (i + 1)}
                type="radio"
                value={q.op4}
              />
              {q.op4}
              <br />
            </label>
          );
        })}
        <label className="quiz_submit">
          <input className="btn" type="submit" value="Submit" />
        </label>
      </form>
      <div className="res" id="res">
        {res}
      </div>
    </div>
  );
}
