import React, {Fragment} from 'react'
import SidebarButton from './sidebarButton'
import CategoryListItem from './categoryListItem'

const isInListOrAll = (list, value, allCategories) => (list.indexOf(value) >= 0 || allCategories)

const Sidebar = ({
	isOpen,
	openHandler,
	categorySelectedHandler,
	categories,
	selectedCategories,
	allCategories
}) => {
	if (isOpen) {
		return (
			<div>
				<SidebarButton isOpen={isOpen} openHandler={openHandler} />
				<ul className='list-group'>
					{categories.map(
						cat => <CategoryListItem
								key={cat.id}
								category={cat}
								categorySelectedHandler={categorySelectedHandler}
								isChecked={isInListOrAll(selectedCategories, cat.id, allCategories)} />)
					}
				</ul>
			</div>
		);
	}
	else {
		return (<SidebarButton isOpen={isOpen} openHandler={openHandler} />);
	}
};

export default Sidebar;