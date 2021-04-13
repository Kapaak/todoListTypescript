//styles
import { styled } from "@stitches/react";

const DataContainer = styled("div", {
	background: "#e6e6e6",
	padding: "2rem",

	p: {
		border: "1px solid black",
		"&:hover": {
			backgroundColor: "deeppink",
			cursor: "pointer",
		},
	},
	variants: {
		color: {
			lightblue: { background: "lightblue" },
			lightred: { background: "lightred" },
		},
	},
});

type ObjectD = {
	data: string;
	id: number;
};

interface ItemsProps {
	data?: ObjectD[];
	removeHandler: (id: number) => void;
}

const Items = ({ data, removeHandler }: ItemsProps) => {
	return (
		<DataContainer color="lightblue">
			{data
				? data.map(el => (
						<p onClick={() => removeHandler(el.id)} key={el.id}>
							{el.data}
						</p>
				  ))
				: null}
		</DataContainer>
	);
};

export default Items;
