import React from 'react';
import Header from './components/header';
import Headline from './components/headline'
import './app.scss'

const tempArr=[{
  fName:"Joe",
  lName:"Bloggs",
  email:"joe@gmail.com",
  age:24,
  onlineStatus:1
}]

function App() {
  return (
    <div className="App">
     <Header />
     <section className="main">
       <Headline header="Headlines" desc="Click the button to render posts!" tempArr={tempArr}/>
     </section>
    </div>
  );
}

export default App;
