// const Form:React.FC<{hello:string}> = ({ hello }) => (
// 	<form action="">
// 		<input type="text" />
// 		<button>submit {hello}</button>
// 	</form>
// );

import { useState } from "react";

interface FormProps {
	dataHandler: (
		// e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		// obj: {}
		obj: { data: string; id: number }
	) => void;
}

const Form = ({ dataHandler }: FormProps) => {
	const [inputText, setInputText] = useState("");
	const [counter, setCounter] = useState(1);

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.currentTarget.value);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dataHandler({ id: counter, data: inputText });
		setCounter(prev => prev + 1);
		setInputText("");
	};

	return (
		<form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e)}>
			<input type="text" onChange={inputHandler} value={inputText} />
			{/* <input type="text" onChange={e => setInputText(e.currentTarget.value)} /> */}
			{/*taky moznost*/}
			<button>submit</button>
		</form>
	);
};

//   const Form = ({ hello }: {hello:string}) => <div>{hello}</div>;

export default Form;
