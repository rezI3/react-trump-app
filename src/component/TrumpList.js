import React from 'react'
import Trump from './Trump.js'

const TrumpList = ({drawnCards}) => {
  
  return drawnCards.map((card) => <Trump card={card} key={card.id}/>)
}

export default TrumpList;
