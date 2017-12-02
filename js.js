function toCSV(){
	const rows = [["Tax", document.getElementById("tax").value], 
				["Interest", document.getElementById("interest").value],
				["Rent", document.getElementById("rent").value],
				["Loan", document.getElementById("loan").value],
				["Salary", document.getElementById("salary").value],
				["Expenses", document.getElementById("expenses").value]];
	let csvContent = "data:text/csv;charset=utf-8,";
	rows.forEach(function(rowArray){
   let row = rowArray.join(",");
   csvContent += row + "\r\n"; // add carriage return
	});
	
	var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
}