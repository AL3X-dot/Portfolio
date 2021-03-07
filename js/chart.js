var ctx = document.getElementById('mychart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML+CSS', 'Javascript','Python','Java','C#','SQL'],
        datasets: [{
            data: [60, 60,80,85,82,70],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64,)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        tooltips:{
          titleFontColor:'black',
          backgroundColor:'white',
          bodyFontColor:'black'
        },
        title:{
          display:true,
          text:'Programming Languages',
          position:'bottom'
        },
        legend:{
          display:false
        },
        animation:{
          duration:4000
        }
    }
});
