import { useState } from "react";

export const useInputChange = (defaultValue) => {
	const [input, setInput] = useState(defaultValue ? defaultValue : {});

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	return [input, handleInputChange];
};
