import React from 'react';

// ItemsFilter component
export default class extends React.Component {

    render(){
        return (
            <div>
                <label htmlFor="item-filter">{this.props.label}</label>
                <input type="text" id="item-filter" placeholder="Filter items" onChange={this.props.onChange} />
            </div>
        );
    }

}