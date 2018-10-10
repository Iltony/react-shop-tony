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
	return (
		<div className="container-full h-100">
			<SidebarButton isOpen={isOpen} openHandler={openHandler} />
			{isOpen &&
				<div>
					<ul className='list-group mr-3'>
						{categories.map(
							cat => <CategoryListItem
									key={cat.id}
									category={cat}
									categorySelectedHandler={categorySelectedHandler}
									isChecked={isInListOrAll(selectedCategories, cat.id, allCategories)} />)
						}
					</ul>
				</div>
			}
		</div>);

	if (isOpen) {
		return (
			<div>
				<SidebarButton isOpen={isOpen} openHandler={openHandler} />
				<ul className='list-group mr-3'>
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