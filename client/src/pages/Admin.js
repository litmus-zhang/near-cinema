import React from 'react'
import FormInput from '../components/FormInput'


const FORM_INPUT = [
    {
        label: 'Movie Title',
        name: 'title',
        type: 'text',
        placeholder: 'Title',
        value: '',
        required: true
    },
    {
        label: 'Year of Release',
        name: 'year',
        type: 'number',
        placeholder: 'Year',
        value: '',
        required: true
    },
    {
        label: 'Director',
        name: 'director',
        type: 'text',
        placeholder: 'Director',
        value: '',
        required: true
    },
   
    {
        label: 'Price in Near',
        name: 'price',
        type: 'number',
        placeholder: '0.00 Near',
        value: '',
        required: true
    },
    {
        label: 'Movie Rating',
        name: 'rating',
        type: 'number',
        placeholder: '0 of 10',
        value: '',
        required: true
    },
    {
        label: 'Genre',
        name: 'genre',
        type: 'text',
        placeholder: 'Genre i.e Action, Comedy, etc',
        value: '',
        required: true
    },

]

export default function Admin() {
    return (
      <div className='movie_form'>
            
      <form>
          <div className='form_header'>
          <h2> Movie Details</h2>
          </div>
          {
    FORM_INPUT.map((input, index) => (<FormInput key={index} {...input} />))
          }
          <div>
              
          <label>Movie Description</label>
          <textarea
              className='form_input'
              name='description'
              placeholder='Movie Description'
              value=''
              required={true}
              onChange={(e) =>  console.log(e.target.value)}
              
              rows='5'
                cols='50'
          />
          </div>
          <button className='form_submit' type='submit'>Add New Movie</button>
    </form>
            <style jsx>{`
          .movie_form {
                display: flex;
                place-content: center;
          }
          form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 2rem;
                padding-bottom: 2rem;
                width: 400px;
                height: auto;
                overflow: hidden;
                border-radius: .5rem;
                box-shadow: 0 0 .5rem #ccc;

          }
          
          .form_header {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;
                width: 100%;
                color: #fff;
                font-size: 1rem;
                background-color: #222;
          }
            .form_submit {
                width: 260px;
                padding: .5rem;
                font-family: inherit;
                font-size: .8rem;
                font-weight: bold;
                border-radius: .2rem;
                background-color: #222;
                color: #fff;
                cursor: pointer;
            }
          ` }</style>
      </div>
  )
}
