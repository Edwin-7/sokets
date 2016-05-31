// google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(function() {

//        function draw(info) {
//          //console.log(info);
//          var data = google.visualization.arrayToDataTable(info);

//          var options = {
//            title: 'Company Performance',
//            curveType: 'function',
//            legend: { position: 'bottom' }
//          };

//          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//          chart.draw(data, options);
          
//        }
        
//    var socket = io.connect('http://172.16.24.82:8080', { 'forceNew' : true});  

//    socket.on('messages', function  (data) {
//      var data2 = [['tiempo', 'calor']].concat(data.values);
//          //console.log(data2);
//      draw(data2);
//    })

//       }
// );


var socket = io.connect('http://172.16.24.82:8080', { 'forceNew' : true});  
  
  socket.on('messages', function  (data) {
        recibidos = data.values;
  
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(recibidos);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }

})

// function render (data){
//  var html = $('.mensaje');
//  // html.html("<h1>Id: "+data.id+"</h1><p>Mensaje: "+data.text+"<p/><p>Author :"+data.author+"<p/>");
//  html.html("<h1>Id: "+data.frecuencia+"</h1>");
//    x = data.tiempo;
//    y = data.frecuencia;
    
// }