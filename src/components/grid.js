import React from 'react'
import Item from './Item'

const Grid = ({items}) => {
	return (
		<div className="row align-items-top justify-content-center"> 
		{
			items.map(item => <Item item={item} key={item.id} />)
		}
		</div>)
};

export default Grid;