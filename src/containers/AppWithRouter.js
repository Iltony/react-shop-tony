import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import App from './App'

class AppWithRouter extends React.Component {
	render() {
		return (
			<Switch>
				{/* <Route path='/products/:categoryId' 
					render={ ({match}) => <App selectedCategory={parseInt(match.params.categoryId)} /> } 
				/> */}
				<Route path='/products/:id' 
					render={ ({match}) => <App selectedProduct={parseInt(match.params.id)} /> } 
				/>
				<Route path='/products' render={(props) => <App />}	/>
				<Route path='/' render={() => <Redirect to="/products" />}></Route>
			</Switch>
		)
	}
}

export default AppWithRouter;