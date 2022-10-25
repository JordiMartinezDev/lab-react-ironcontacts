// src/App.js
import { useState } from "react";
import "./App.css";
import Data from "./contacts.json";

const contacts = Data.slice(0, 5);
console.log(contacts);

function App() {
  const [updateContacts, setUpdateContacts] = useState(contacts);

  function addRandomContact() {
    const newArray = updateContacts.map((contact) => {
      return contact;
    });

    let randomNum = ~~(Math.random() * Data.length);

    newArray.push(Data[randomNum]);
    Data.splice(randomNum, 1);
    setUpdateContacts(newArray);
    console.log(Data);
  }

  return (
    <div className="App">
      <h1> IronContacts</h1>
      <button onClick={addRandomContact}>Contact</button>
      <table>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
        </tr>
        {updateContacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} width="150" height="200" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? " 🏆" : ""}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
