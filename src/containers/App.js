import React from 'react'
import Grid from '../components/grid'
import axios from 'axios'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        axios.get("http://develop.plataforma5.la:3000/api/products")
        .then(response => response.data)
        .then(data => this.setState({items: data}))
    }

    render(){
        return (<Grid className="container" items={this.state.items}/>)
    }
}

export default App;