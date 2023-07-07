import React,{useState} from 'react'
import convertJSONtoCSV from "json-csv-nested";
import './App.css';

function App() {

  const [Json,setJson] = useState();
  const [csvData,setCsvData] = useState();
  

  function handleSubmit(e){
    e.preventDefault();
    let parseJSON = JSON.parse(Json)
    let csvString = convertJSONtoCSV(parseJSON);

       const rows = csvString.split("\n");
     const headerRow = rows[0].split(",");
     const dataRows = rows.slice(1);

      let htmlTable = '<table style="borderCollapse:collapse;">';
     htmlTable += '<thead><tr style="borderBottom:1px solid white">';
     headerRow.forEach((header) => {
      htmlTable += `<th style="padding:8px;border:1px solid white;">${header}</th>`;
     })
     htmlTable += '</tr></thead>';
     htmlTable += '<tbody>'

     dataRows.forEach((row) => {
      const columns = row.split(",");
      htmlTable += '<tr>'
      columns.forEach((column) => {
        htmlTable += `<td style="padding:8px;border:1px solid white;">${column}</td>`
      })
      htmlTable += '</tr>';
     })

      htmlTable += '</tbody>';
      htmlTable += '</table>';
      // sethtmlTable(htmlTable)

      document.getElementById("response").innerHTML = htmlTable;
    setCsvData(csvData)
  }

  function handleInput(e){
    const {value} = e.target;
    if(typeof value === "object"){
      setJson([value]);
    }else{
      setJson(value)
    }
  }

  return (
    <div className="App">
      <form action="">
        <textarea name="" id="" cols="30" rows="10" onChange={handleInput}></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div id='response'></div>
    </div>
    
  );
}

export default App;