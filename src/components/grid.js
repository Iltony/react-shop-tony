import Item from './Item'
import React, {Fragment} from 'react'

const Grid = ({items}) => {
	return ( 
		<div className="d-flex flex-wrap"> 
		{
			items.map(item => <Item item={item} key={item.id} />)
		}
		</div>)
};

export default Grid;