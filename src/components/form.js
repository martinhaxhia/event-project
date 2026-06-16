import { useState } from 'react'

function MyForm() {
  const [name, setName] = useState("");

  if(name.length <= 8){
    alert("paswordi duhet te jete me i madh se 8 karaktere")
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

export default MyForm;