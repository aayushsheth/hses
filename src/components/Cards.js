import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get many benefits out of HSES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/shared_icon.png'
              text='Get access to a collection of over 20+ HSES powerpoints and videos targeted for AP curriculum'
              label='Shared Resources'
              path='/services'
            />
            <CardItem
              src='images/collaborative.jpeg'
              text='Give help or recieve advice from other HSES leaders and participants'
              label='Collaborative Community'
              path='/products'
            />
            <CardItem
              src='images/organizing.png'
              text='Work with HSES members to create and participate in topical contests'
              label='Organizing Contests'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;