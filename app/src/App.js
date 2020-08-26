import React from 'react';
import logo from './logo.svg';
import './App.css';
import {newCard} from './actions'
import {connect} from 'react-redux'

function App(props) {
  if (props.isFetching){
    return <h2 className="loading">Loading Card...</h2>
  } else {
    return (<div className="App">
      <div>
        <h2>{props.cardName}</h2>
        <img src={props.cardImage}></img>
      </div>
     <button onClick={props.newCard}>Get New Card</button>
    </div>
  );
}}

const mapStateToProps = (state) => {
  return {cardName: state.cardName, isFetching: state.isFetching, cardImage: state.cardImage}
}

const mapDispatchToProps = {newCard}

export default connect(mapStateToProps, mapDispatchToProps)(App);
