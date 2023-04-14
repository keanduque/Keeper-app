import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		const year = new Date().getFullYear();
		return (
			<footer>
				<p>Copyright &copy; {year}</p>
			</footer>
		);
	}
}
