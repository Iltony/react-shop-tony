import Item from './Item'
import React, {Fragment} from 'react'

const Grid = ({ filteredItems, filterTitle }) => (
		<Fragment>
			<div className="panel panel-heading bg-light text-info mt-2 card-body rounded shadow">
				<h4 className="card-title">{`(${filteredItems.length}) Items`}</h4>
				<h6 className="card-subtitle mb-2 text-muted">{`${filterTitle}`}</h6>
			</div>

			<div className="d-flex flex-wrap mt-2">
				{
					filteredItems.map(item => (<Item item={item} key={item.id} />))
				}
			</div>
		</Fragment>);


export default Grid;