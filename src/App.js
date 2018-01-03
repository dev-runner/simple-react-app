import React from 'react';
import ItemsFilter from './ItemsFilter';
import ItemsList from './ItemsList';
import AddItem from './AddItem';


// App component
class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            items: [],
            filter: '',
            newName: '',
            newEmail: ''
        };

        this.filterItems = this.filterItems.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentWillMount(){
        // fetch initial set of items from remote REST api
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({items: res }));
    }

    filterItems(e){
        this.setState({
            filter: e.target.value
        });
    }

    addItem(e){
        e.preventDefault();
        
        let newItem = {
            id: (this.state.items[this.state.items.length-1].id + 1),
            name: e.target.newName.value,
            email: e.target.newEmail.value
        };

        let items = this.state.items.slice(); // shallow copy of array
        items.push(newItem);

        this.setState({
            items: items
        });
    }

    render(){

        let items = this.state.items;

        if(this.state.filter){
            items = items.filter(item => item.name.toLowerCase().includes( this.state.filter.toLowerCase() ));
        }

        return (
            <div>
                <ItemsFilter label="Filter names" onChange={this.filterItems} />
                <ItemsList items={items} />
                <AddItem onSubmit={this.addItem} />
            </div>
        );
    }

};


export default App;