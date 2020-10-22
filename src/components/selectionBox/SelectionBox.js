import React from 'react';

import './Styles.scss';

const SelectionBox = (props) => {
  return(
    <div
      className="selectionBox"
      id={"selectionBox" + props.id}
    >
      <img className="selectionBox--image" alt={props.answer.imageAlt} src={props.answer.image} />
      <div className='selectionBox--checkbox-text-container'>
        <input className="selectionBox--checkbox" type="checkbox" />
        <span className="selectionBox--text">{props.answer.text}</span>
      </div>
    </div>
  )
}

export default SelectionBox;
