import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { API } from 'aws-amplify' // import amplify dependencies

function App() {
  const [greeting, setGreeting] = useState(null) // construct greeting and setGreeting 
  async function fetchGreeting() { // declare an asynch function called fetchGreeting
    const apiData = await API.get('mypythonapi', '/greeting') // Get API by using amplify library
    setGreeting(apiData.message) // Set message property to the response of fetchGreeting() 
  }
  useEffect(() => { // useEffect hook for async func. transition 
    fetchGreeting()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>{greeting}</h1> 
      </header>
    </div>
  );
}

export default App;