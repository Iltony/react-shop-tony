import React from 'react'
import Grid from '../components/grid'
import Sidebar from '../components/sidebar'
import axios from 'axios'

class App extends React.Component {
   
	constructor(props){
		super(props)

		this.state = {
			items: [],
			categories: [{
				"id":0,
				"name":"Todos"
			}],
			filteredItems: [],
			selectedCategories: [0],
			openSidebar: false,
			loadingCategories: true,
		}
		this.openHandler = this.openHandler.bind(this)
		this.categorySelectedHandler = this.categorySelectedHandler.bind(this)
	}

	componentDidMount(){
		axios.get("http://develop.plataforma5.la:3000/api/products")
		.then(response => response.data)
		.then(data => this.setState({items: data, filteredItems: data}))

		axios.get("http://develop.plataforma5.la:3000/api/categories")
		.then(response => response.data)
		.then(data => this.setState({
			categories: this.state.categories.concat(data),
			loadingCategories: false
		}))
	}

	openHandler(){
		this.setState({openSidebar: !this.state.openSidebar})
	}

	categorySelectedHandler(e){

		const id = e.target.value;
		const value = e.target.checked;

		const selCategories = this.state.selectedCategories;

		this.setState({
				selectedCategories: value ?
					selCategories.concat([parseInt(id)]) :
					selCategories.filter(catId => catId != id)
			},
			() => {



				this.setState({
					filteredItems: this.state.selectedCategories.length === 0 ? [] :
									this.state.items.filter(
										item =>
											this.state.selectedCategories.indexOf(0) >= 0 ? false :
											this.state.selectedCategories.indexOf(item.categoryId) < 0)
				})
			})
	}

	render(){
		const AppWithSidebar = () => (
		<div className="body">
			<Sidebar 
				className="container shadow bg-gray rounded fixed"
				isOpen={this.state.openSidebar} 
				openHandler={this.openHandler}
				categorySelectedHandler={this.categorySelectedHandler} 
				categories={this.state.categories}
				selectedCategories={this.state.selectedCategories} />

			<Grid 
				className="container"
				style="margin-left:{this.state.openSidebar ? '200px' : 'auto'}"
				items={this.state.filteredItems}/>
		</div>)

		return (<AppWithSidebar />)
	}
}

export default App;