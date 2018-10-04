import React from 'react'
import Grid from '../components/grid'
import Sidebar from '../components/sidebar'
import axios from 'axios'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			items: [],
			categories: [{
				'id': 0,
				'name': 'Todos'
			}],
			filteredItems: [],
			selectedCategories: [],
			allCategories: true,
			openSidebar: false,
			loadingCategories: true,
		}
		this.openHandler = this.openHandler.bind(this)
		this.categorySelectedHandler = this.categorySelectedHandler.bind(this)
	}

	componentDidMount() {
		axios.get("http://develop.plataforma5.la:3000/api/products")
			.then(response => response.data)
			.then(data => this.setState({ items: data, filteredItems: data }))

		axios.get("http://develop.plataforma5.la:3000/api/categories")
			.then(response => response.data)
			.then(data => this.setState({
				categories: this.state.categories.concat(data),
				loadingCategories: false
			}))
	}

	openHandler() {
		this.setState({ openSidebar: !this.state.openSidebar })
	}

	categorySelectedHandler(e) {
		const id = parseInt(e.target.id);

		if (id === 0) {
			if (!this.state.allCategories) {
				this.setState({
					filteredItems: this.state.items,
					selectedCategories: this.state.categories.map(cat => cat.id),
					allCategories: true,
				})
			} else {
				this.setState({
					filteredItems: [],
					selectedCategories: [],
					allCategories: false,
				})
			}
		} else {
			let isSelected = (this.state.selectedCategories.indexOf(id) >= 0)
			const selCategories = this.state.selectedCategories
			this.setState({
				selectedCategories: !isSelected ?
					selCategories.concat([parseInt(id)]) :
					selCategories.filter(catId => catId != id),
				allCategories: false
			},
				() => {
					const hasCategories = (this.state.selectedCategories.length > 0)	
					const filteredItems = this.state.items.filter(
						item => this.state.selectedCategories.indexOf(item.categoryId) >= 0)
	
					this.setState({
						filteredItems: hasCategories ? filteredItems : []
					})
				})
		}
	}

	render() {
		const AppWithSidebar = () => (
			
			<div className="d-flex container bg-red">
				<div className="flex-column">
					<Sidebar
						openHandler={this.openHandler}
						categorySelectedHandler={this.categorySelectedHandler}
						isOpen={this.state.openSidebar}
						categories={this.state.categories}
						selectedCategories={this.state.selectedCategories}
						allCategories={this.state.allCategories}
					/>
				</div>
			 	<div>
					<Grid items={this.state.filteredItems} />
				</div>
			</div>
			)

		return (<AppWithSidebar />)
	}
}

export default App;