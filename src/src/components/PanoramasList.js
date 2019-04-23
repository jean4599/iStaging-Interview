import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPanoramas } from "../store/actions/panoramasActions";
import Panorama from "./Panorama";
import "./PanoramasList.css";
import { withRouter } from 'react-router'

class PanoramasList extends Component {
	constructor(props){
		super(props);
		this.handleCollapse = this.handleCollapse.bind(this);
		this.state={
			collapse:false
		}
	}
	componentDidMount() {
		this.props.fetchPanoramas();
	}

	handleCollapse(){
		this.setState({
			collapse: !this.state.collapse
		})
	}
	render() {
		const panoramas = this.props.panoramas.map(item=>{
			let isactive = this.props.mainPanoramaId===item.data.objectId?true:false
			return(
				<Panorama key={item.data.objectId} data={item.data} isactive={isactive}></Panorama>
			)
		})
		return (
			<div className="panoramas-list-container">
				<div className="panoramas-list-collapse">
					<i className={this.state.collapse?"fas fa-chevron-up":"fas fa-chevron-down"} onClick={this.handleCollapse}></i>
				</div>
				<div className="panoramas-list" style={{maxHeight:this.state.collapse?'0px':'500px', transition:'0.5s'}}>
					{panoramas}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	if(ownProps.match.params.id){
		return({ 
			panoramas: state.panoramas.itemsList,
			mainPanoramaId: ownProps.match.params.id, 
			assests: state.panoramas.itemsList 
		})
	}else{
		return({ 
			panoramas: state.panoramas.itemsList,
			mainPanoramaId: state.panoramas.mainPanoramaId, 
			assests: state.panoramas.itemsList })
	}
};

export default withRouter(connect(mapStateToProps, {fetchPanoramas})(PanoramasList));
