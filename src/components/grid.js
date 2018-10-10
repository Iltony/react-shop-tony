import Item from './Item'
import React, {Fragment} from 'react'

const getSelectedCategoriesTitle = (categories, selectedCategories, allCategories) => {
	return 	allCategories ?
			categories.map(x => x.name).join(', ') :
			categories.filter(x => selectedCategories.indexOf(x.id) >= 0).map(x => x.name).join(', ')
}

const getFilteredItems = (items, selectedCategories, allCategories) => {
	return allCategories ?
			items
			: items.filter(x => selectedCategories.indexOf(x.categoryId) < 0)
}

const Grid = ({items, categories, selectedCategories, allCategories}) => {
	return ( 
		<Fragment>
			<div class="panel panel-heading bg-white mt-2">
				{`Categorias: ${getSelectedCategoriesTitle(categories, selectedCategories, allCategories)}`}
			</div>

			<div className="d-flex flex-wrap mt-2"> 
				{
					getFilteredItems(items, selectedCategories, allCategories).map(item => <Item item={item} key={item.id} />)
				}
			</div>
		</Fragment>)
};

export default Grid;