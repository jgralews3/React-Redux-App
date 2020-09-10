import React from 'react';
import './App.css';
import {newCard} from './actions'
import {connect} from 'react-redux'
import Random from './Random'
import MyCommanders from './MyCommanders'
import {Route, Link} from 'react-router-dom'

function App(props) {
  return(
    <div>
      <nav>
        <a> <Link to="/random">Get Random Commander </Link></a>
        <a> <Link to="/mycommanders">Search My Commanders</Link></a>
      </nav>
    <Route path="/random">
      <Random />
    </Route>
    <Route path="/mycommanders">
      <MyCommanders />
    </Route>
    </div>
  )}

const mapStateToProps = (state) => {
  return {cardName: state.cardName, isFetching: state.isFetching, cardImage: state.cardImage}
}

const mapDispatchToProps = {newCard}

export default connect(mapStateToProps, mapDispatchToProps)(App);
