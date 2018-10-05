// import React from 'react';
// import ReactDOM from 'react-dom';

const NavComponent = React.createClass({
	render(){
		return (
			<nav>
				<div className='wideNav'>
					<a href="#"> Latest EP</a>
					<a href="#"> Shows</a>
					<a href="#"> Swine Video</a>
					<a href="#"> Photos </a>
				</div>

				<div className='narrowNav'>
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowRefs">
						<a href="#" onClick={this.burgerToggle}>> Latest EP</a>
						<a href="#" onClick={this.burgerToggle}>> Shows</a>
						<a href="#" onClick={this.burgerToggle}>> Swine Video</a>
						<a href="#" onClick={this.burgerToggle}>> Photos </a>
					</div>
				</div>
			</nav>
		);
		
	}, 
		burgerToggle: function() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
});

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));

