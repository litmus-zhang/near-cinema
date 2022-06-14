import React from 'react'

export default function FormInput({label, name, type, placeholder, value, required, onChange}) {
  return (
      <div className='formInput'>
              <label>{ label}</label>
          <input
              type={type}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              className='form_input'
              required={required}
          />
              <style jsx>{`
            .formInput {
                  display: flex;
                  flex-direction: column;

                  }
          label {
                display: block;
                margin-bottom: .5rem;
                color: #333;
                font-size: .8rem;
                font-family: inherit;
                font-weight: bold;
          }
          .form_input {
                width: 240px;
                padding: .5rem;
                border: 1px solid #ccc;
                border-radius: .2rem;
                font-family: inherit;
                margin-bottom: .5rem;

          }
          .form_input:focus {
                outline: none;
                border: 1.5px solid #333;
          }
          `}</style>
    </div>
  )
}
