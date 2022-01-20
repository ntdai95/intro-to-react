import "./App.css"; //<<<<<<<<< CSS STYLING imported here
import React from "react";
import axios from "axios";
const englishContent = "Hello";
const spanContent = "Hola";

class App extends React.Component {
 //Init states at the top of react class like this
 // only one state, is type of object
 //
 state = {
   counter: 0,
   lightSwitch: false,
   content: "sdsad",
   isSpanish: false,
   fact: "No fact yet :) Click the button below",
 };

 handleCounter() {
   this.setState({ counter: this.state.counter + 1 });
 }

 handleLight() {
   this.setState({ lightSwitch: !this.state.lightSwitch });
 }

 handleLanguage() {
   this.setState({ isSpanish: !this.state.isSpanish });
   // if (isSpanish) {
   //   spanContent
   // }
   // else {
   //   englishContent
   // }
 }

 getFact() {
   var getAppClass = this;
   axios
     .get("https://uselessfacts.jsph.pl/random.json?language=en")
     .then(function (response) {
       // handle success
       console.log(response.data.text);
       getAppClass.setState({ fact: response.data.text })
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     });
 }
 
 //to reference a state: this.state.<the name of the state>
 render() {
   return (
     <div className="App">
       <p>{this.state.fact}</p>
       <button onClick={() => this.getFact()}>Get Fact</button>

       <p className="redText">
         {this.state.isSpanish ? spanContent : englishContent}
       </p>
       <button onClick={() => this.handleLanguage()}>Change Lang</button>

       <p className="myNewClass">counter: {this.state.counter}</p>
       <button onClick={() => this.handleCounter()}>clickme</button>

       <p className="myNewClass">
         lightSwitch: {this.state.lightSwitch.toString()}
       </p>
       <button onClick={() => this.handleLight()}>clickme</button>
     </div>
   );
 }
}

export default App;