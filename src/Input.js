import React, {Component} from 'react';

class Input extends Component {

    constructor() {
        super();
        this.state = {
            source: '',
            destination: '',
            service: ''
        }
    }

    render() {
        return (
            <div className="app-input">
                <div>
                    <span>Source:</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Destination:</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Protocol/Port:</span>
                    <input type="text" />
                </div>
                <div>
                    <button>Check rule!</button>
                    <button>Clear</button>
                </div>
            </div>
        );
    }
}

export default Input;