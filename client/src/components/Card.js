import React from 'react'



export default function Card({img, title, price,description, rating }) {
  return (
      <div className='Card'>
          <div className='card_image'>
              <img src={img} alt={ title} />
          </div>
          <div className='card_details'>
              <div className='card_header'>
                  <h1 className='movie_title'>  {title }</h1>
                  <span className='movie_price'> {price } Near</span>

              </div>
              <span className='card_rating'> Rating: { rating} of 10</span>
              <div className='card_description'>
                  {description.substring(0, 150)}...
              </div>
              <button className='card_button'>
                  Buy Ticket
                  </button>
          </div>
          <style jsx>{`
          .Card {
                display: flex;
                flex-direction: column; 
                width: 400px; 
                border: 1px solid #ccc;
                padding-bottom: .5rem;    
                border-radius: .5rem;  
                overflow: hidden;  
                transition: all .3s ease-in-out;   
          }
          .Card:hover {
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }

          .card_image {
                width: 400px;
                height: 250px;
                object-fit: cover;
          }
          .card_image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .card_details {
            padding: .4rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card_header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .card_header h1 { 
            margin: 0;
            font-size: 1.5rem;
            line-height: 1;
          }
            .card_header .movie_price {
                font-size: 1rem;
                font-weight: bold;
                background: #333;
                padding: 0.4rem;
                color: #fff;
                display: flex;
                text-align: center;
                white-space: nowrap;
                text-transform: uppercase;
                border-radius: 0.5rem;
            }
            .card_rating {
                font-size: .9rem;
                font-weight: bolder;
            }
            .card_description {
                font-size: .9rem;
                margin-top: .5rem;
                line-height: 1.3;
            }
            .card_button {
                background: #333;
                color: #fff;
                align-self: flex-end;
                padding: .8rem 1rem;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                width: 100%;
                margin-top: .6rem;
                border: none;
                transition: all .3s ease-in-out;
            }
            .card_button:hover {
                background: #fff;
                color: #333;
                border: 1px solid #333;
            }
          `}</style>
    </div>
  )
}
