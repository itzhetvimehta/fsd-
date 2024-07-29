google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var table = google.visualization.ChartWrapper({
    chartType: 'Table',
    containerId: 'div_table',
    options: {allowHtml: true}
});}

document.getElementById("exportCSV").addEventListener("click", function () {
  var csvData = table.getDataTable(); //google visualization DataTable to download
  export_CSV("exportCSV", csvData);
});

function export_CSV(elementID, data) {

  var csvColumns;
  var csvContent;
  var downloadLink;

  // build column headings
  csvColumns = '';
  for (var i = 0; i < data.getNumberOfColumns(); i++) {
      csvColumns += data.getColumnLabel(i);
      if (i < data.getNumberOfColumns() - 1) {
          csvColumns += ',';
      }
  }
  csvColumns += '\n';

  // get data rows
  csvContent = csvColumns + google.visualization.dataTableToCsv(data);

  //New Download Link - works in chrome and mozilla
  downloadLink = document.getElementById(elementID);
  downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
  downloadLink.download = 'Teaching Staff.csv';
  downloadLink.target = '_blank';
}