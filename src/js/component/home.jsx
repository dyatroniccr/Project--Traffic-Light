import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const[selectedColor, setSelectedColor] = useState("red");

	return (
		<>
		<div className="traffic-light bg-dark m-5 p-1 d-inline-block" >
			
			<div role="button" onClick={() => setSelectedColor("red")} className={"m-2 light bg-danger " + (selectedColor === "red" ? "glow" : "")}>
			</div>

			<div role="button" onClick={() => setSelectedColor("yellow")} className={"m-2 light bg-warning " + (selectedColor === "yellow" ? "glow" : "")}>
			</div>
			<div role="button" onClick={() => setSelectedColor("green")} className={"m-2 light bg-success " + (selectedColor === "green" ? "glow" : "")}>
			</div>
		</div>
		<div>
		    <button type="button" onClick={() =>{} }> Cambia Color </button>
		</div>
		
		</>
		
	);
};

export default Home;
