import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMainPanorama } from '../store/actions/panoramasActions';
import { Link } from 'react-router-dom';

class Panorama extends Component{
	constructor(props){
		super(props);

		this.hoverOn = this.hoverOn.bind(this);
		this.hoverOff = this.hoverOff.bind(this);
		this.state = {
			hover: false
		}
	}
	handleClick(data, e){
		this.props.changeMainPanorama(data);
	}
	hoverOn(){
		this.setState({
			hover:true
		})
	}
	hoverOff(){
		this.setState({
			hover:false
		})

	}
	render(){
		return(
			<Link to={this.props.data.objectId}>
				<div className="panoramas-item" 
				onClick={(e)=>this.handleClick(this.props.data.objectId, e)}
				onMouseEnter={this.hoverOn} 
	            onMouseLeave={this.hoverOff}>
					<div style={{borderColor:this.state.hover?'#f387a1':this.props.isactive?'#ec0974' : 'white'}}>
						<img style={{transform: this.state.hover?'scale(1.3)':'', transition: '0.5s'}} alt="" src={this.props.data.thumbnail}/>
					</div>
					<p>{this.props.data.category}</p>
				</div>
			</Link>
		)
	}
}

export default connect(null, {changeMainPanorama})(Panorama)
