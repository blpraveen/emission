// server.autosuggest.js
import React from 'react';
import './component.css';
import symbol from './symbol.svg'
class Make extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            show: false,
            suggestion: {}
        };
    }

   

    render() {
        // const { value, suggestion } = this.state;

     
        // Adding AutoSuggest component
        return (
        <React.Fragment>
        <div className="body-top">
            <h2 className="title"><img className="symbol" src={symbol} />Make</h2>
            <p className="sub-title">Company of the vehical</p>
        </div>
        <div className="row">
            <div className="body-column">
                <div className="body-full margin-card">
                    <div className="column-div-left"><span className="type-class-1">Ford</span></div>
                    <div className="column-div-right"><span className="val-perc">9%</span>
                    </div>
                </div>
                <div className="body-full margin-card">
                    <div className="column-div-left"><span className="type-class-1">Chervolet</span></div>
                    <div className="column-div-right"><span className="val-perc">8%</span>
                    </div>
                </div>
                <div className="body-full margin-card">
                    <div className="column-div-left val-color">Others (6169)</div>
                    <div className="column-div-right val-color"><span className="val-perc">84%</span>
                    </div>
                </div>
            </div>
            <div className="body-column">
                <div className="hr-1"> </div>
                <div className="body-full-2 body-full">
                    <div className="column-div2-left"><span className="type-class-1">Valid</span> <span className="scolor scolor-r"></span>
                    </div>
                    <div className="column-div2-right1"><span className="val-perc">7385</span></div>
                    <div className="column-div2-right2"><span className="val-perc val-color">9%</span>
                    </div>
                </div>
                <div className="body-full-2 body-full">
                    <div className="column-div2-left"><span className="type-className-1">Mismatched</span> <span className="scolor scolor-o"></span>
                    </div>
                    <div className="column-div2-right1"><span className="val-perc">0</span></div>
                    <div className="column-div2-right2"><span className="val-perc val-color">0%</span>
                    </div>
                </div>
                <div className="body-full-2 body-full">
                    <div className="column-div2-left"><span className="type-className-1">Missing</span> <span className="scolor scolor-g"></span>
                    </div>
                    <div className="column-div2-right1"><span className="val-perc">0</span></div>
                    <div className="column-div2-right2"><span className="val-perc val-color">0%</span>
                    </div>
                </div>
                <div className="body-full-2 body-full">
                    <div className="column-div2-left"><span className="type-className-1">Unique</span>
                    </div>
                    <div className="column-div2-right1"><span className="val-perc">42</span></div>
                    <div className="column-div2-right2"><span className="val-perc val-color">0%</span>
                    </div>
                </div>
                <div className="body-full-2 body-full">
                    <div className="column-div2-left"><span className="type-className-1">Most Common</span>
                    </div>
                    <div className="column-div2-right1"><span className="val-perc">FORD</span></div>
                    <div className="column-div2-right2"><span className="val-perc val-color">0%</span>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    
        );
    }
}

export default Make;