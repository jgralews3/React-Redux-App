import React from 'react';
import {newCard} from './actions'
import {connect} from 'react-redux'

function MyCommanders (props){
    return(
        <div>
            <h2>Search My Commanders</h2>
            {props.commanders.map((commander) => {
                return(
                <p>{commander.cardname})</p>
                )
                })}
            {/* <p>{props.commanders[0].cardName}</p> */}
        </div>
    )
}

const mapDispatchToProps = {newCard}

const mapStateToProps = (state) => {
    return {isFetching: state.isFetching, commanders: state.commanders}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCommanders)
