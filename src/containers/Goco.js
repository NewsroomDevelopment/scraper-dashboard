import React, {useState, useEffect} from 'react';
import LineChart from '../components/LineChart';
import '../App.css';


const Goco = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
	  regenerateData();
	}, []);
  
	function regenerateData() {
	  const chartData = [];
	  for (let i = 0; i < 20; i++) {
		const value = (Math.random() * i + 3)*0.1;
		chartData.push({
		  label: i,
		  value,
		  tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
		});
	  }
	  setData(chartData)
	}
	return (
	  <div className="App">
		<div>Go Columbia Lions</div>
		<button onClick={regenerateData}>Change Fake Data</button>
		<LineChart data={data} width={400} height={300} />
	  </div>
	);
};


export default Goco;
