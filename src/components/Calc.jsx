import React from "react";

import { useState } from "react";

const Calc = () => {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState("");

  const handleNumberClick = (e) => {
    const value = e.target.value;

    if (!operator) {
      setNumber(number + value);
      setDisplay(number + value);
    } else {
      setNumber2(number2 + value);
      setDisplay(display + value);
    }
  };
  const handleOperatorClick = (e) => {
    const value = e.target.value;

    setOperator(value);
    setDisplay(display + " " + value + " ");
  };

  const handleClearClick = () => {
    setDisplay("");
    setOperator(null);
    setNumber("");
    setNumber2("");
  };

  const handleResultClick = () => {
    const num1 = parseFloat(number);
    const num2 = parseFloat(number2);

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return result;
    }
    setDisplay(result.toString());
    setNumber(result.toString());
    setNumber2("");
    setOperator(null);
  };
  return (
    <div>
      <div className="container">
        <div className="calculator">
          <table>
            <tr>
              <td colspan="4">
                <input type="text" id="display" readonly value={display} />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculatorButtons"
                  id="cleanDisplay"
                  value="C"
                  onClick={handleClearClick}
                >
                  C
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="deleteDigit"
                  value="CE"
                  onClick={handleClearClick}
                >
                  CE
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="division"
                  value="/"
                  onClick={handleOperatorClick}
                >
                  &divide;
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="multiplication"
                  value="*"
                  onClick={handleOperatorClick}
                >
                  &times;
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculatorButtons"
                  id="num7"
                  value="7"
                  onClick={handleNumberClick}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num8"
                  value="8"
                  onClick={handleNumberClick}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num9"
                  value="9"
                  onClick={handleNumberClick}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="subtraction"
                  value="-"
                  onClick={handleOperatorClick}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculatorButtons"
                  id="num4"
                  value="4"
                  onClick={handleNumberClick}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num5"
                  value="5"
                  onClick={handleNumberClick}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num6"
                  value="6"
                  onClick={handleNumberClick}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="sum"
                  value="+"
                  onClick={handleOperatorClick}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="calculatorButtons"
                  id="num1"
                  value="1"
                  onClick={handleNumberClick}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num2"
                  value="2"
                  onClick={handleNumberClick}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="num3"
                  value="3"
                  onClick={handleNumberClick}
                >
                  3
                </button>
              </td>
              <td rowspan="2">
                <button
                  className="calculatorButtons"
                  id="result"
                  value="="
                  onClick={handleResultClick}
                >
                  =
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button
                  className="calculatorButtons"
                  id="num0"
                  value="0"
                  onClick={handleNumberClick}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  className="calculatorButtons"
                  id="point"
                  value="."
                  onClick={handleNumberClick}
                >
                  .
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calc;
