
import './App.css';
import { useState } from 'react';

function App() {

  const [color,SetColor] = useState('')
  const [tempbackgroundcolor, SetTempBackgroundcolor] = useState('')
  const [backgroundcolor, SetBackgroundcolor] = useState('')

 

  const handleBackgroundColorChange = (e) => {
    e.preventDefault();
    SetBackgroundcolor(tempbackgroundcolor)
    
  }

  const handlereset = (e) => {
    e.preventDefault();
    SetBackgroundcolor('')
    SetColor('')
    SetTempBackgroundcolor('')
  }
  

  return (
    <div className="App" style = {{ backgroundColor: backgroundcolor}}  >
      
      <form >

        <label style = {{ color: color}}>Enter Text Color :
          <input
          type = "text"
          style = {{ color: color}}
          value = {color}
          onChange = {(e) => SetColor(e.target.value)}
          />
        </label>

        <label style = {{ color: color}}>Submit Background Color :
          <input
          type = "text"
          style = {{ color: color}}
          value = {tempbackgroundcolor}
          onChange={(e) => SetTempBackgroundcolor(e.target.value) }
          />
          
        </label>

        <div className="inputbtn">
        <input
          type = "submit"
          style = {{ color: color}}
          onClick={handleBackgroundColorChange}
          />
          <input
          type = "submit"
          value = "Reset"
          style = {{ color: color}}
          onClick={handlereset}
          />
        </div>

      </form>
    </div>
  );
}

export default App;
