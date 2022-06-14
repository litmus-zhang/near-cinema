import React from 'react'

export default function Header() {
  return (
      <header>
          <h1 className='logo'>Near Cinema</h1>
          
          <style jsx>{`
          header {
              position: sticky;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 1rem;
                color: #fff;
                background-color: #333;
          }
            .logo {
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: bold;
                letter-spacing: 1px;
                align-self: center;
                margin: 0;
            }
          `}</style>
    </header>
  )
}
