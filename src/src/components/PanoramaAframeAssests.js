import React, { Component } from 'react'
import { connect } from 'react-redux'

class PanoramaAframeAssests extends Component {
	render(){
		const assests = this.props.assests.map((assest)=>{
				return(
					<img id={assest.data.objectId} key={assest.data.objectId} src={assest.data.desktopUrl} crossOrigin="anonymous" preload="true"/>
				)
			})
		return(
			<a-assets>
			{assests}
			</a-assets>
		)
	}
}

const mapStateToProps = (state, ownProps)=>{
	return {assests: state.panoramas.itemsList}
}

export default connect(mapStateToProps, null)(PanoramaAframeAssests)