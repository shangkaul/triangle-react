import "./styles.css";
import { useState } from "react";

export default function Area() {
  var [res, useRes] = useState("");

  function FormHandler(e) {
    e.preventDefault();
    var a = Number(e.target.a.value);
    var b = Number(e.target.b.value);
    var c = Number(e.target.c.value);
    var s = a + b + c;
    console.log(s);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    useRes("The area of the triangle is: " + area.toFixed(2) + " sq units");
    var res_block = document.getElementById("res");
    res_block.style.display = "block";
    res_block.scrollIntoView();
  }
  return (
    <div className="App">
      <div className="head">Area of the Triangle</div>
      <form className="hypForm" onSubmit={(e) => FormHandler(e)}>
        <label>
          Length of side a :
          <input name="a" type="number" min="0" />
        </label>
        <label>
          Length of side b :
          <input name="b" type="number" min="0" />
        </label>
        <label>
          Length of side c :
          <input name="c" type="number" min="0" />
        </label>
        <input className="btn" type="submit" value="Submit" />
      </form>
      <div className="res" id="res">
        {res}
      </div>
    </div>
  );
}
