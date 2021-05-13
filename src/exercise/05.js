// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

const Box = ({className = '', style, ...otherProps}) => {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        Small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        Medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        Large orange box
      </Box>
    </div>
  )
}

export default App
