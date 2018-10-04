import React from 'react'

const SidebarButton = ({ isOpen, openHandler }) => {
	return (
		<input type="button"
			className={`btn ${isOpen ? 'btn-success' : 'btn-info'}`}
			value={isOpen ? "<" : ">"}
			onClick={openHandler} />
	);
};


export default SidebarButton;