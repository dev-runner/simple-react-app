import React from 'react';

// AddItem component
export default class extends React.Component {

    render(){
        return (
            <form onSubmit={this.props.onSubmit}>
                <label htmlFor="newName">Name: </label>
                <input type="text" id="newName" name="newName" />

                <label htmlFor="newEmail">Email:</label>
                <input type="text" id="newEmail" name="newEmail" />

                <input type="submit" value="Ok" />
            </form>
        );
    }

}

