import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Grid from '../components/grid'
import Sidebar from '../components/sidebar'
import axios from 'axios'

class AppWithRouter extends React.Component {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		items: [],
	// 		categories: [{ 'id': 0, 'name': 'Todos' }],
	// 		selectedCategories: [],
	// 		allCategories: true,
	// 		openSidebar: false,
	// 		loadingCategories: true,
	// 	}
	// 	this.openHandler = this.openHandler.bind(this)
	// 	this.categorySelectedHandler = this.categorySelectedHandler.bind(this)
	// }

	// componentDidMount() {
	// 	axios.get("http://develop.plataforma5.la:3000/api/products")
	// 		.then(response => response.data)
	// 		.then(data => this.setState({ items: data }))

	// 	axios.get("http://develop.plataforma5.la:3000/api/categories")
	// 		.then(response => response.data)
	// 		.then(data => this.setState({
	// 			categories: this.state.categories.concat(data),
	// 			loadingCategories: false
	// 		}))
	// }

	// openHandler() {
	// 	this.setState({ openSidebar: !this.state.openSidebar })
	// }

	// categorySelectedHandler(e) {
	// 	const id = parseInt(e.target.id);

	// 	if (id === 0) {

	// 		this.setState({
	// 			selectedCategories: !this.state.allCategories ? this.state.categories.map(cat => cat.id): [],
	// 			allCategories: !this.state.allCategories,
	// 		})
	// 	} else {
	// 		let isSelected = (this.state.selectedCategories.indexOf(id) >= 0)
	// 		const selCategories = this.state.selectedCategories
	// 		this.setState({
	// 			selectedCategories: !isSelected ?
	// 				selCategories.concat([parseInt(id)]) :
	// 				selCategories.filter(catId => catId != id),
	// 			allCategories: false
	// 		})
	// 	}
	// }

	render() {
		return (
			<Switch>
				<Route path='/products' render={(props) => <App />}	/>
				<Route path='/products/:categoryId' 
					render={ match => <App selectedCategory={match.params.categoryId} /> } 
				/>

				<Route path='/' render={() => <Redirect to="/products" />}></Route>
			</Switch>
		)
	}
}

export default App;