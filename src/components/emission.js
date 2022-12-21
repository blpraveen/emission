// server.autosuggest.js
import React from 'react';
import './component.css';
import Make from './make';
import Model from './model';
import Vehical from './vehical';

class Emission extends React.Component {
    constructor() {
        super();
        this.props
        //Define state for value and suggestion collection
        this.state = {
            show: false,
            suggestion: {}
        };
    }
    componentDidMount() {
        this.setState({show:true})
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            this.setState({show:true})
        }
    }
    render() {
        const { show, suggestion } = this.state;
        if(show) {
            return ( <div className="wrap"><Make suggestion = { suggestion } /> <Model suggestion = { suggestion } /> <Vehical suggestion = { suggestion } /></div>
        );
        } else {
            return '';
        }
        // Adding AutoSuggest component
        
    }
}

export default Emission;