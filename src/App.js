import React, {Component} from 'react';
import Input from './Input';
import Table from './Table';
import rules from './rules.json'

class App extends Component {
    constructor() {
        super();
        console.log(rules);
        this.state = {
            data: rules
        }
    }

    render() {
        return (
            <div className="App">
                <Input />
                <Table names={this.state.data} />
            </div>
        );
    }
}

export default App;
