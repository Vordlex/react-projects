import { useState } from "react"
import "./App.css"

const App = () => {
  const initialState = {
    counter: 0,
    textField: "",
    otherTextField: "",
    selectField: "",
    checkboxField: false,
  }

  const [values, setState] = useState(initialState)

  const { counter, textField, otherTextField, selectField, checkboxField } =
    values

  const setButtonValue = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { id } = event.currentTarget
    switch (id) {
      case "increment":
        setState({ ...values, counter: counter + 1 })
        break
      case "decrement":
        setState({ ...values, counter: counter - 1 })
        break
      default:
        break
    }
  }

  const setTextAndSelectValues = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.currentTarget
    setState({ ...values, [name]: value })
  }

  const setCheckboxField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.currentTarget
    setState({ ...values, [name]: checked })
  }

  return (
    <div className="App">
      <div>
        <h1>Contador: {counter}</h1>
        <button onClick={setButtonValue} id="increment">
          Aumentar
        </button>
        <button onClick={setButtonValue} id="decrement">
          Reduzir
        </button>
        <button
          onClick={() => {
            setState({ ...values, counter: 0 })
          }}
        >
          Resetar
        </button>
      </div>

      <div>
        <div>
          <h1>Texto</h1>
          <input
            name="textField"
            onChange={setTextAndSelectValues}
            value={textField}
          />
        </div>
        <div>
          <h1>Outro Texto</h1>
          <input
            name="otherTextField"
            onChange={setTextAndSelectValues}
            value={otherTextField}
          />
        </div>
      </div>

      <div>
        <div>
          <h1>Select</h1>
          <select
            name="selectField"
            onChange={setTextAndSelectValues}
            value={selectField}
          >
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="AAA">AAA</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <h1>Checkbox</h1>
          <input
            type="checkbox"
            name="checkboxField"
            id="checkboxField"
            onChange={setCheckboxField}
            checked={checkboxField}
          />
        </div>
      </div>
      <div>
        <button onClick={() => console.log(values)}>Logar valores</button>
      </div>
    </div>
  )
}

export default App
