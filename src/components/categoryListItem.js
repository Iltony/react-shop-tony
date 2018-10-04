import React, {Fragment} from 'react'

const CategoryListItem = ({
	category,
	categorySelectedHandler,
	isChecked,
}) => {
	return (
        <li 
            key={category.id}
            id={category.id} 
            onClick={categorySelectedHandler}
            className={isChecked ? 'list-group-item list-group-item-info' : 'list-group-item'}>
                {category.name}
		</li>
	);
};

export default CategoryListItem;