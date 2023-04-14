import React, { Component } from "react";
import LockIcon from "@mui/icons-material/Lock";

export default class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>
						<LockIcon />
						Keeper
					</h1>
				</header>
			</div>
		);
	}
}
