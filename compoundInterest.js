// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  let html = document.getElementById("input").innerHTML;

  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
  
amount = document.getElementById("deposit").value;
var amt = parseFloat(amount);
rate = document.getElementById("rate").value;
var rte = parseFloat(rate);
rte = 1 + (rte / 100);
years = document.getElementById("years").value;
var yrs = parseFloat(years);
var result = amt*rte*yrs;
document.querySelector("result").value = `${result}`;

var tableHTML = "<table>";
<table id="abc" >
    <tr>
      <th>Year</th>
      <th>Starting Value</th> 
    <th>Interest Earned</th>
    <th>Ending Value</th>
    </tr>
    <tr>
    <th><input type="text" id="amountt" value = {eamount} /></th>
    <th><input type="text" id="interest" value={erate} /></th>
    <th><input type="text" id="year" value={erate} /></th>
    <th><input type="text" id="result" value={erate} /></th>
    
    </tr>;
  </table>

  document.getElementById("result").innerHTML = tableHTML;
// ---> Write your code here to generate the table and show it in the page

} // end generateTable
