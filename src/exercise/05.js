// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...otherProps}) => {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        Small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        Medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        Large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
