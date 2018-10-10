import React from 'react'

const SidebarButton = ({ isOpen, openHandler }) => {
	return (
		<div className="container-full justify-content-right">
			<input type="button"
				className={`btn rounded-circle mt-2 mb-2 mr-3`}
				value={isOpen ? "<" : '>' }
				onClick={openHandler} />
		</div>
	);
};


export default SidebarButton;