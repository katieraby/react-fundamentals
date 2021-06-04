// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // practising using refs to access value in some cases
  const usernameInput = useRef(null); 
  // const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  
  const handleChange = (event) => {
    const val = event.target.value;
    setUsername(val.toLowerCase());
    // const isValid = val === val.toLowerCase();
    // setError(isValid ? null : 'Username must be lowercase');
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameInput.current.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameInput} type="text" id="username" onChange={handleChange} value={username} />
      </div>
      {/* <div style={{color: 'red'}} role="alert">{error}</div> */}
      <button type="submit" >Submit</button>
      {/* disabled={Boolean(error)} to ensure absolutely passing boolean to the disabled */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
