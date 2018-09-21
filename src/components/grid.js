import React from 'react'
import Item from './Item'

const Grid = ({items}) => (<div className="container row"> {items.map(item => <Item item={item} key={item.id} />)} </div>)

export default Grid;