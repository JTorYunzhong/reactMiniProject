import Header from "./Header";
import { useForm } from "./useForm";
import { getRandomChar, getSpecialChar } from "./utils";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [values, setValues] = useForm({
    length: 6,
    uppercase: true,
    lowercase: true,
    numbers: true,
    spercialCharacters: true,
  });

  const fieldsArray = [
    {
      field: values.uppercase,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.lowercase,
      getChar: () => getRandomChar(97, 122),
    },
    ,
    { field: values.numbers, getChar: () => getRandomChar(48, 57) },
    {
      field: values.spercialCharacters,
      getChar: () => getSpecialChar(),
    },
  ];

  const handleOnClipboard = async () => {
    if (generatedPassword) {
      await navigator.clipboard.writeText(generatedPassword);
      alert("Copied to clipboard");
    } else {
      alert("No password to copy");
    }
  };

  const handleOnSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    let password = "";
    const checkedFields = fieldsArray.filter(({ field }) => field);
    if (checkedFields.length === 0) {
      alert("Please select at least one field");
      console.log("length  = 0 ");
    } else {
      for (let i = 0; i < values.length; i++) {
        const index = Math.floor(Math.random() * checkedFields.length);
        const letter = checkedFields[index].getChar();
        password += letter;
      }
      setGeneratedPassword(password);
    }
  };
  return (
    <div className="App">
      <Header headerContent={"Password Generator"} />
      <div class="container">
        <form id="pg-form">
          <div class="result">
            <input
              type="text"
              id="result"
              placeholder="Min 6 Char"
              readOnly
              value={generatedPassword}
            />
            <button type="button" onClick={(e) => handleOnSubmit(e)}>
              Generate Password
            </button>
            <button type="button" onClick={(event) => handleOnClipboard(event)}>
              copy
            </button>
          </div>
          <div>
            <div class="field">
              <label for="length">Password Length</label>
              <input
                type="number"
                id="length"
                min="6"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div class="field">
              <label for="uppercase">Uppercase</label>
              <input
                type="checkbox"
                id="uppercase"
                checked={values.uppercase}
                onChange={setValues}
              />
            </div>
            <div class="field">
              <label for="lowercase">Lowercase</label>
              <input
                type="checkbox"
                id="lowercase"
                checked={values.lowercase}
                onChange={setValues}
              />
            </div>
            <div class="field">
              <label for="numbers">Numbers</label>
              <input
                type="checkbox"
                id="numbers"
                checked={values.numbers}
                onChange={setValues}
              />
            </div>
            <div class="field">
              <label for="spercialCharacters">Special Characters</label>
              <input
                type="checkbox"
                id="spercialCharacters"
                checked={values.spercialCharacters}
                onChange={setValues}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
