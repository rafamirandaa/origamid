import React from 'react'

function Radio({pergunta, options, active, value, onChange, id}) {
  if(active === false) return null;
  return (
    <fieldset style={{
      padding: '2rem',
      marginBottom: '1rem',
      border: '2px solid #eee',
    }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option, index) => (
        <label key={index}>
          <input 
          type="radio" 
          checked={value === option} 
          value={option} 
          id={id}
          onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio
