import React, { useState } from "react"



function Values() {
  const [result, setresult] = useState("")

  function handleChange(event) {
    setresult(result.concat(event.target.name))
  }
  function handleChange1(event) {
    setresult(event.target.value)
  }

  function OnEnter(event){
    
    event.key==="Enter" && finalResult()
  }

  const finalResult = () => {
    try {
      setresult(eval(result))
    } catch (err) {
      //setTimeout(alert("Error"), 3000)
      //setTimeout(function() { alert("Error"); }, 3000);
      setresult("Error")
    }
  }

  return (
    <div className="keys">
      <input onKeyPress = {OnEnter} value={result} onChange={handleChange1} />
      <table className="table table-dark">
        <tbody>
          <tr>
            <td colSpan="2" className="table-active">
              <button
                className="clear"
                onClick={(clear) => {
                  setresult("")
                }}
              >
                Clear
              </button>
            </td>
            <td>
              <button
                onClick={(delLast) => {
                  setresult(result.slice(0, -1))
                }}
              >
                C
              </button>
            </td>
            <td>
              <button name="/" onClick={handleChange}>
                /
              </button>
            </td>
            <td>
              <button name="*" onClick={handleChange}>
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="1" onClick={handleChange} key="1">
                1
              </button>
            </td>
            <td>
              <button name="2" onClick={handleChange} key="2">
                2
              </button>
            </td>
            <td>
              <button name="3" onClick={handleChange} key="3">
                3
              </button>
            </td>
            <td>
              <button name="+" onClick={handleChange}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="4" onClick={handleChange} key="4">
                4
              </button>
            </td>
            <td>
              <button name="5" onClick={handleChange} key="5">
                5
              </button>
            </td>
            <td>
              <button name="6" onClick={handleChange} key="6">
                6
              </button>
            </td>
            <td>
              <button name="-" onClick={handleChange}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="7" onClick={handleChange} key="7">
                7
              </button>
            </td>
            <td>
              <button name="8" onClick={handleChange} key="8">
                8
              </button>
            </td>
            <td>
              <button name="9" onClick={handleChange} key="9">
                9
              </button>
            </td>
            <button onClick={finalResult}>=</button>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Values
