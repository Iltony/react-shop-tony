import React from 'react'
import { Redirect, Switch, Route, image } from 'react-router-dom'
import Grid from '../components/grid'
import Sidebar from '../components/sidebar'
import axios from 'axios'
import {ALL_CATEGORIES_ID} from '../constants'

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			items: [],
			categories: [],
			selectedCategories: this.props.selectedCategory ? [this.props.selectedCategory] : [],
			openSidebar: false,
			loadingCategories: true
		}
		this.openHandler = this.openHandler.bind(this)
		this.categorySelectedHandler = this.categorySelectedHandler.bind(this)
		this.allCategories = this.allCategories.bind(this)
	}

	allCategories(){
		return this.state.categories ? 
					this.state.categories.every((cat) => this.state.selectedCategories.indexOf(cat.id) >= 0) :
					false
	}
	
	getAllCategoryIds(){
		return this.state.categories ? this.state.categories.map(cat => cat.id).sort((a, b)=>(a>b)) : []
	}
	
	componentDidMount() {
		axios.get("http://develop.plataforma5.la:3000/api/products")
			.then(response => response.data)
			.then(data => this.setState({ items: data }))

		axios.get("http://develop.plataforma5.la:3000/api/categories")
			.then(response => response.data)
			.then(data => {
				this.setState({				
					categories: data.sort((a, b)=>(a.id>b.id)),
					loadingCategories: false
				})})
	}

	openHandler() {
		this.setState({ openSidebar: !this.state.openSidebar })
	}

	categorySelectedHandler(e) {
		const id = parseInt(e.target.id);
		let selCategories = this.state.selectedCategories

		if (id === ALL_CATEGORIES_ID) {
			let isSelected = (this.state.selectedCategories.length === this.state.categories.length)


		 	selCategories = !isSelected ? this.getAllCategoryIds() : []
		} else {


			let isSelected = (selCategories.indexOf(id) >= 0)
			selCategories = !isSelected ? selCategories.concat([parseInt(id)]) : selCategories.filter(catId => catId != id)
		}

		this.setState({ selectedCategories: selCategories })
	}

	getSelectedCategoriesTitle() {
		return this.allCategories() ?
					`All the categories (${this.state.categories.map(x => x.name).join(', ')})` :
					this.state.categories.filter(x => this.state.selectedCategories.indexOf(x.id) >= 0).map(x => x.name).join(', ')
	}

	getFilteredItems(){
		var result = []

		if (this.allCategories()) { 
			return this.state.items
		} else {
			var result = []
			this.state.selectedCategories.map(
				catId => this.state.items.filter(x => x.categoryId === catId)
			).map(aitems=> result.push(...aitems))
			return result
		}
	}

	render() {

		const filteredItems = this.getFilteredItems()
		const hasFilteredItems = (filteredItems.length > 0)

		return (
			<div className="d-flex container bg-dark bt-5">
					
				<div className="flex-column">
					<Sidebar
						openHandler={this.openHandler}
						categorySelectedHandler={this.categorySelectedHandler}
						isOpen={this.state.openSidebar}
						categories={this.state.categories}
						selectedCategories={this.state.selectedCategories}
						allCategoriesSelected={this.allCategories()}
					/>
				</div>
				<div className="full-width">
					<div className="full-width text-light">
						<h2>Electroni<span className="text-info"><b>K</b></span>arina</h2>
						<img style={{maxWidth:'95%'}}  src={'/public/electronics.png'} />
					</div>
					{ hasFilteredItems && 
						<Grid						
							filteredItems = {this.getFilteredItems()}
							filterTitle = {this.getSelectedCategoriesTitle()}
						/>
					}

					{ !hasFilteredItems && 
						<div className="Justify-center text-align-middle h-100 text-info">
							<h5>Choose a category to start</h5>
						</div>
					}


				</div>
			</div>
		)
	}
}

export default App;