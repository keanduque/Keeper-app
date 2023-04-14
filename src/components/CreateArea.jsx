import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
	const [inputNotes, setInputNotes] = useState({
		title: "",
		content: "",
	});
	const [isExpanded, setExpanded] = useState(false);

	const handleShow = (e) => setExpanded(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputNotes((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	const submitNotes = (e) => {
		props.onAdd(inputNotes);
		setInputNotes({
			title: "",
			content: "",
		});
		e.preventDefault();
	};

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={inputNotes.title}
					/>
				)}
				<textarea
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? "3" : "1"}
					value={inputNotes.content}
					onClick={handleShow}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNotes}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
};

export default CreateArea;
