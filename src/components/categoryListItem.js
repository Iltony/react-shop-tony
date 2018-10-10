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
            className={`mb-2 rounded shadow list-group-item ${isChecked ? 'text-dark bg-light' : 'text-white bg-dark'}`}>
                {category.name}
		</li>
	);
};

export default CategoryListItem;