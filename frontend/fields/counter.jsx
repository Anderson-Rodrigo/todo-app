import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc, dec, stepChanged} from './counterAction'

const Counter = (props) => (
    <div>OK</div>
)

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchtoProps = 
    dispatch => bindActionCreators({
        inc,
        dec,
        stepChanged
    }, dispatch)

export default connect(mapStateToProps, mapDispatchtoProps)(Counter)    

export default Counter