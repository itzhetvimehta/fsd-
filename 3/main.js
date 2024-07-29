google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart1);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Designation', 'Strength'],
  ['Professor', 10],
  ['Assistant Professor', 15],
  ['Associate Professor', 63],
]);

var options = {'title':'Teaching Staff', 'width':550, 'height':400};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}

function drawChart1() {
  var data1 = google.visualization.arrayToDataTable([
  ['Designation', 'Strength'],
  ['Engineer', 7],
  ['Lab Assistant', 15],
  ['Peon', 11],
  ['Sr. Engineer', 1],
  ['Senior Executive', 1],
  ['Executive - Program Office', 2],
  ['Executive - Administrative', 1],
  ['Tech Assistant', 1]
]);

 
  var options = {'title':'Non Teaching Staff', 'width':550, 'height':400};

  var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart1.draw(data1, options);
}
