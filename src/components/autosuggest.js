// server.autosuggest.js
import React from 'react';
import Autosuggest  from 'react-autosuggest';
import './component.css';
import Emission from './emission';

class React_AutoSuggest extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: [],
            showSuggesstion : false
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        const inputValue = value.trim().toLowerCase();
        let response = await fetch("http://www.omdbapi.com/?s=" + inputValue + "&apikey=a591bb53");
        let data = await response.json()
        return data;
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.Title;

    // Render Each Option
     // Render Each Option
    renderSuggestion = suggestion => {
        <span className="sugg-option">
            <span className="icon-wrap"><img src={suggestion.Poster} /></span>
            <span className="name">
                {suggestion.Title}
            </span>
        </span>
    };

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {

        this.getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    this.setState({
                        suggestions: []
                    });
                } else {
                    this.setState({
                        suggestions: data.Search
                    });
                }
            })
         
           
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
        this.setState({showSuggesstion:false})
    };


    render() {
        const { value, suggestions,showSuggesstion } = this.state;  
        // Option props
        const inputProps = {
            placeholder: 'Car Name',
            value,
            onChange: this.onChange
        };
        if(showSuggesstion) {
            return (
                <React.Fragment>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
                <Emission suggestion= {suggestions} />
                </React.Fragment>
            );
        }
        // Adding AutoSuggest component
        
    }
}

export default React_AutoSuggest;