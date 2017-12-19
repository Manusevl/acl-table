import React, {Component} from 'react';

import './datatables.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Source',
        data: 'source'
    },
    {
        title: 'Destination',
        data: 'destination'
    },    
    {
        title: 'Destination',
        data: 'destination'
    },
    {
        title: 'Protocols/Ports',
        data: 'services'
    },
    {
        title: 'Action',
        data: 'action'
    },
];

class Table extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            data: this.props.names,
            columns,
        });
    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}

export default Table;