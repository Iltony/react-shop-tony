import React, {Fragment} from 'react'
import SidebarButton from './sidebarButton'
import CategoryListItem from './categoryListItem'
import { ALL_CATEGORIES_ID, ALL_CATEGORIES_TITLE } from '../constants'

const isInList = (list, value) => (list.indexOf(value) >= 0)

const Sidebar = ({
	isOpen,
	openHandler,
	categorySelectedHandler,
	categories,
	selectedCategories,
	allCategoriesSelected
}) => {
	return (
		<div className="container-full h-100">
			<SidebarButton isOpen={isOpen} openHandler={openHandler} />
			{isOpen &&
				<div>
					<ul className='list-group mr-3'>
						<CategoryListItem
							key={ALL_CATEGORIES_ID}
							category={{ id: ALL_CATEGORIES_ID, name: ALL_CATEGORIES_TITLE}}
							categorySelectedHandler={categorySelectedHandler}
							isChecked={allCategoriesSelected} />

						{categories.map(
							cat => <CategoryListItem
									key={cat.id}
									category={cat}
									categorySelectedHandler={categorySelectedHandler}
									isChecked={isInList(selectedCategories, cat.id)} />)
						}
					</ul>
				</div>
			}
		</div>)
}

export default Sidebar