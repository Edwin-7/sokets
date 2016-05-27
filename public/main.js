// google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(function() {

//       	function draw(info) {
//       		//console.log(info);
// 	        var data = google.visualization.arrayToDataTable(info);

// 	        var options = {
// 	          title: 'Company Performance',
// 	          curveType: 'function',
// 	          legend: { position: 'bottom' }
// 	        };

// 	        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
// 	        chart.draw(data, options);
      		
//       	}
      	
// 		var socket = io.connect('http://172.16.24.82:8080', { 'forceNew' : true});  

// 		socket.on('messages', function  (data) {
// 			var data2 = [['tiempo', 'calor']].concat(data.values);
//       		//console.log(data2);
// 			draw(data2);
// 		})

//       }
// );


			

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//datos = [['Year', 'Sales'],["0:00:0", 0], ["6:00:3", 3], ["6:00:20", 5], ["6:00:23", 1], ["6:00:25", 8]]


  function drawChart(datos) {
    var data = google.visualization.arrayToDataTable(datos.values);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
		  
var socket = io.connect('http://172.16.24.82:8080', { 'forceNew' : true});  
socket.on('messages', function  (data) {
	recibidos = data;
	drawChart(recibidos);
});

// function render (data){
// 	var html = $('.mensaje');
// 	// html.html("<h1>Id: "+data.id+"</h1><p>Mensaje: "+data.text+"<p/><p>Author :"+data.author+"<p/>");
// 	html.html("<h1>Id: "+data.frecuencia+"</h1>");
//  	x = data.tiempo;
//  	y = data.frecuencia;
    
// }