import React from 'react';
import styles from "./FlexBox.css";

let Row = React.createClass({ 
	getInitialState: function() {
		return {
			className: new Set(['Row'])
		};
	},
	render() {
		let className = this.state.className;
		let props = this.props;
		if(props.reverse) {
			className = new Set(['Row-reverse'])
		}
		if(props.valign) {
			className.add("Grid-valign-"+ props.valign);
		}
		if(props.align) {
			className.add("Grid-align-"+ props.align);
		}
		className = Array.from(className).map(function(style) {
		  	return styles[style];
		});
		className.push(this.props.className);
		return (
			<div className={...className}>
				{this.props.children}
			</div>
		);
	}
});

let Column = React.createClass({ 
	getInitialState: function() {
		return {
			className: new Set(['Column'])
		};
	},
	render() {
		let className = this.state.className;
		let props = this.props;
		if(props.reverse) {
			className = new Set(['Column-reverse'])
		}
		if(props.valign) {
			className.add("Grid-align-"+ props.valign);
		}
		if(props.align) {
			className.add("Grid-valign-"+ props.align);
		}
		className = Array.from(className).map(function(style) {
		  	return styles[style];
		});
		className.push(this.props.className);
		return (
			<div className={...className}>
				{this.props.children}
			</div>
		);
	}
});

let Cell = React.createClass({ 
	getInitialState: function() {
		return {
			className: new Set(['Cell'])
		};
	},
	render() {
		let className = this.state.className;
		let inlineStyle = {};
		let props = this.props;
		if(props.valign) {
			className.add("Cell-valign-"+ props.valign);
		}
		if(props.align) {
			className.add("Cell-valign-"+ props.align);
		}
		if(props.size) {
			className.add("Cell-"+ props.size);
		}
		className = Array.from(className).map(function(style) {
		   	return styles[style];
		});
		className.push(this.props.className);
		if(props.order) {
			inlineStyle.order = props.order;
		}
		return (
			<div className={...className} style={inlineStyle}>
				{this.props.children}
			</div>
		);
	}
});

let FlexBox = {Row: Row, Column: Column, Cell: Cell};
export default FlexBox;