import React from 'react';

// ItemsList component
export default class extends React.Component {

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.items.map(item => <ItemRow key={item.id} item={item} />) }
                </tbody>
            </table>
        );
    }
}

class ItemRow extends React.Component {
    render(){
        let item = this.props.item;
        return(
            <tr><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td></tr>
        );
    }
}