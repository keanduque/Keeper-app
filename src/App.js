import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import "./App.css";
// import notes from "./notes";

const App = () => {
	const [notes, setNotes] = useState([]);

	const addNote = (inputNotes) => {
		setNotes((prevValue) => [
			...prevValue,
			{
				id: Math.random(),
				title: inputNotes.title,
				content: inputNotes.content,
			},
		]);
	};
	const deleteNote = (id) => {
		setNotes((prevVal) => {
			return prevVal.filter((note) => note.id !== id);
		});
	};
	return (
		<>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((note) => {
				return (
					<Note
						key={note.id}
						id={note.id}
						title={note.title}
						content={note.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default App;
