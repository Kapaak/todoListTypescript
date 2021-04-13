import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Items from "./components/Items";

function App() {
	type ObjectD = {
		data: string;
		id: number;
	};
	const [data, setData] = useState<ObjectD[]>([]);
	// const [data, setData] = useState<ObjectD[]>([{ data: "", id: 0 }]);

	// const initialData: ObjectD[] = [{ data: "", id: 0 }];
	// const [data, setData] = useState<ObjectD[]>(initialData);

	const dataHandler = (
		// e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		obj: ObjectD
		// obj: {}
	) => {
		setData(prev => [...prev, obj]);
	};
	// const dataHandler = () => {
	// 	setData(prev => [...prev, obj]);
	// };

	const removeHandler = (id: number) => {
		const newData = [...data].filter(todo => todo.id !== id);
		setData(newData);
	};

	return (
		<div className="App">
			<h1>This is my ts todo</h1>
			<Form dataHandler={dataHandler} />
			<Items data={data} removeHandler={removeHandler} />
		</div>
	);
}

export default App;
