import React from 'react'

const SidebarButton = ({ isOpen, openHandler }) => {
	return (
		<input type="button"
			className="btn {isOpen ? 'btn-success' : 'btn-danger'} text-right"
			value={isOpen ? "<<<" : ">>>"}
			onClick={openHandler} />
	);
};

const CategoryLi = ({
	category,
	categorySelectedHandler,
	isChecked,
}) => {

	return (
		<li key={category.id}>
			<input type="checkbox"
				value={category.id}
				id={category.id}
				onChange={categorySelectedHandler}
				checked={isChecked ? 'checked' : ''}
			/>
			<b>{category.name}</b>
		</li>
	);
};

const Sidebar = ({
	isOpen,
	openHandler,
	categorySelectedHandler,
	categories,
	selectedCategories
}) => {
	if (isOpen) {
		return (
				<div>
					<SidebarButton isOpen={isOpen} openHandler={openHandler} />
					<ul>
						{categories.map(
							cat => <CategoryLi
									key={cat.id}
									category={cat}
									categorySelectedHandler={categorySelectedHandler}
									isChecked={selectedCategories.indexOf(cat.id) >= 0} />)
						}
					</ul>
				</div>
		);
	}
	else {
		return (
			<aside>
			<div className="col-xm-1 shadow bg-white rounded float">
				<SidebarButton isOpen={isOpen} openHandler={openHandler} />
			</div></aside>
		);
	}
};

export default Sidebar;