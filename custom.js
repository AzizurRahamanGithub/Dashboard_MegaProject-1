

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nob","Dec"],
      datasets: [{
        label: 'Earning:$',
        data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,35000],
        borderWidth: 1
      }]
    },
    options: {
        maintainAspectRatio: false,
      
    },
  });

  const cxt = document.getElementById('mychart');

  new Chart(cxt, {
    type: 'doughnut',
    data: {
      labels: ["Direct","Social","Referrat"],
      datasets: [{
        label: 'Earning:$',
        data: [30,55,15],
        borderWidth: 1
      }]
    },
     options :{
        maintainAspectRatio: false,
       
      },
    
  });



  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart('chart', {
    type: 'bar',
    options: options,
    data: data
  });
  

