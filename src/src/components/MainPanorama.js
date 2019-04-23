import React, { Component } from "react";
import { connect } from 'react-redux';
import 'aframe';
import './MainPanorama.css';
import {Entity, Scene} from 'aframe-react';
import { withRouter } from 'react-router';
import PanoramaAframeAssests from './PanoramaAframeAssests';
import Loader from 'react-loader-spinner';

class MainPanorama extends Component{
	constructor(props) {
	    super(props);
	    this.entity = React.createRef();
	    this.state = {loading: true}
	}
	componentDidUpdate(){
		if(this.props.mainPanoramaId!==null && this.props.mainPanoramaId!==undefined){
			document.getElementById(this.props.mainPanoramaId).addEventListener('load', (e)=>{
				//image loaded
				this.setState({loading:false})
			})
		}
	}
	render(){
		const loading = this.state.loading;
		return(
			<div className='container'>
				{ loading? (<Loader 
					         type="Grid"
					         color="#00BFFF"
					         height="100"	
					         width="100"
						  />)
						: null
				}  
				<Scene>
					<PanoramaAframeAssests />
					{ loading? null: <Entity src={'#'+this.props.mainPanoramaId} id='main-panorama' primitive='a-sky'/>}
			    </Scene>
		    </div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	if(ownProps.match.params.id){
		return({ mainPanoramaId: ownProps.match.params.id, assests: state.panoramas.itemsList })
	}else{
		return({ mainPanoramaId: state.panoramas.mainPanoramaId, assests: state.panoramas.itemsList })
	}
}
export default withRouter(connect(mapStateToProps, null)(MainPanorama))
