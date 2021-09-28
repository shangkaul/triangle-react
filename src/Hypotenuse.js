import "./styles.css";
import { useState } from "react";
export default function Hypotenuse() {
  var [res, useRes] = useState("");

  function FormHandler(e) {
    e.preventDefault();
    var a = e.target.a.value;
    var b = e.target.b.value;
    var hyp = Math.sqrt(a * a + b * b);
    useRes("Length of Hypotenuse=" + hyp);
    var res_block = document.getElementById("res");
    res_block.style.display = "block";
    res_block.scrollIntoView();
  }
  return (
    <div className="App">
      <form className="hypForm" onSubmit={(e) => FormHandler(e)}>
        <label>
          Length of side a :
          <input name="a" type="number" min="0" />
        </label>
        <label>
          Length of side b :
          <input name="b" type="number" min="0" />
        </label>
        <input className="btn" type="submit" value="Submit" />
      </form>
      <div className="res" id="res">
        {res}
      </div>
    </div>
  );
}
