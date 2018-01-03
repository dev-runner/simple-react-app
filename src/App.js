import React from 'react';

class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            items: [],
            filter: ''
        };
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({items: res }));
    }

    filter(e){
        this.setState({
            filter: e.target.value
        });
        console.log(this.state.filter);
    }

    render(){

        let items = this.state.items;

        if(this.state.filter){
            items = items.filter(item => item.name.toLowerCase().includes( this.state.filter.toLowerCase() ));
        }

        return (
            <div>
                Filter names: <input type="text" onChange={this.filter.bind(this)} />
                {items.map(item => <h1 key={item.id}>{item.id}. {item.name}</h1>)}
            </div>
        );
    }

};


export default App;