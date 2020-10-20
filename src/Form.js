import React from "react";
import { useInputChange } from "./helpers/useInputChange";

const Form = (props) => {
	const [input, handleInputChange] = useInputChange({
		date: "Not Answered",
		instructor: "Not Answered",
		"student-name": "Not Answered",
		"student-age": "Not Answered",
		"student-skill-level": "Not Answered",
		"skill-worked-on": "Not Answered",
		"skill-improved": "Not Answered",
		"why-or-why-not": "Not Answered",
		"additional-notes": "Not Answered",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(e, input);
	};

	return (
		<form onSubmit={handleSubmit} className="flex">
			<div>
				<label>Date:</label>
				<input type="text" name="date" onChange={handleInputChange} />
			</div>
			<div>
				<label>Instructor:</label>
				<input type="text" name="instructor" onChange={handleInputChange} />
			</div>
			<div>
				<label>Student Name:</label>
				<input type="text" name="student-name" onChange={handleInputChange} />
			</div>
			<div>
				<label>Student Age:</label>
				<input type="text" name="student-age" onChange={handleInputChange} />
			</div>
			<div>
				<label>Student Skill Level:</label>
				<input
					type="text"
					name="student-skill-level"
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label>Skill Worked On:</label>
				<input
					type="text"
					name="skill-worked-on"
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<label>Skill Improved?</label>
				<input type="text" name="skill-improved" onChange={handleInputChange} />
			</div>
			<div>
				<label>Why or Why Not?</label>
				<input type="text" name="why-or-why-not" onChange={handleInputChange} />
			</div>
			<div>
				<label>Additional Notes:</label>
				<input
					type="text"
					name="additional-notes"
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input type="submit" />
			</div>
		</form>
	);
};

export default Form;
