import React,{useState} from 'react'
import convertJSONtoCSV from "json-csv-nested";
import './App.css';

function App() {

  const [Json,setJson] = useState();
  const [csvData,setCsvData] = useState();
  // const [htmlTable,sethtmlTable] = useState("");

  // function convertNestedJSONToCSV(arrayOfObject){
  //   let csvString = "";

  //   const flattenRows = arrayOfObject.map(object => flattenObject(object));

  //   const headers = Array.from(new Set(flattenRows.flatMap(row => Object.keys(row))));

  //   csvString += headers.join(",") + "\n";

  //   flattenRows.forEach((row) => {
  //     const values = headers.map((header) => row[header] !== undefined ? row[header] : "");
  //     csvString += values.join(",") + "\n";
  //   })

  //   function flattenObject(object){
  //     const result = {};

  //     recurse(object,"");

  //     function recurse(src,prop){
  //       if(Array.isArray(src)){
  //         src.forEach((item,index) => {
  //           recurse(item,`${prop}[${index}]`);
  //         })
  //       }else if(typeof src === "object"){
  //         for(const key in src){
  //           if(src.hasOwnProperty(key)){
  //             recurse(src[key],prop ? `${prop}.${key}` : key)
  //           }
  //         }
  //       }else{
  //         result[prop] = src;
  //       }
  //     }

  //     recurse(object,"");

  //     return result;
  //   }

  //    const rows = csvString.split("\n");
  //    const headerRow = rows[0].split(",");
  //    const dataRows = rows.slice(1);

  //    let htmlTable = '<table style="borderCollapse:collapse;">';
  //    htmlTable += '<thead><tr style="borderBottom:1px solid white">';
  //    headerRow.forEach((header) => {
  //     htmlTable += `<th style="padding:8px;border:1px solid white;">${header}</th>`;
  //    })
  //    htmlTable += '</tr></thead>';
  //    htmlTable += '<tbody>'

  //    dataRows.forEach((row) => {
  //     const columns = row.split(",");
  //     htmlTable += '<tr>'
  //     columns.forEach((column) => {
  //       htmlTable += `<td style="padding:8px;border:1px solid white;">${column}</td>`
  //     })
  //     htmlTable += '</tr>';
  //    })

  //     htmlTable += '</tbody>';
  //     htmlTable += '</table>';
  //     // sethtmlTable(htmlTable)

  //     document.getElementById("response").innerHTML = htmlTable;

  // }

  const object = [
    {
      "name":"mithun",
      "age" : 24,
      "gender" : "M"
    }
  ];

  

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

    console.log(csvData);
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