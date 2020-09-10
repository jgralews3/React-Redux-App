import React from 'react';
import {newCard} from './actions'
import {connect} from 'react-redux'

function Random(props) {
    console.log(props)
  if (props.isFetching){
    return <h2 className="loading">Loading Card...</h2>
  } 
  // else if(props.error.length > 0){
  //   return <p>{props.error}</p>
  // } 
  else {
    return (<div className="App">
      <div>
        <h2>{props.cardName}</h2>
        <img src={props.cardImage}></img>
        <p>{props.cardText}</p>
      </div>
     <button onClick={props.newCard}>Get New Card</button>
    </div>
  );
}}

const mapStateToProps = (state) => {
  return {cardName: state.cardName, isFetching: state.isFetching, cardImage: state.cardImage, cardText: state.cardText}
}

const mapDispatchToProps = {newCard}

export default connect(mapStateToProps, mapDispatchToProps)(Random);