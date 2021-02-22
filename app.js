new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [15,16,17,18,19,20,21,22,23,24],
      datasets: [{ 
          data: [8.6,11.4,10.6,10.6,10.7,11.1,13.3,22.1,7.3,2.8],
          label: "MaxTemp",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [2.82,3.50,4.11,5.02,6.35,8.09,9.47,14.02,3.7,5.67],
          label: "MinTemp",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [1.68,1.70,1.78,1.90,2.03,2.76,4.08,5.47,6.75,7.34],
          label: "MeanTemp",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [4.0,2.0,1.0,1.6,2.4,3.8,7.4,1.67,5.08,7.84],
          label: "crop water stress",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "windspeed",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        hover:true,
      title: {
        display: true,
        text: 'Abiotic stress in speciality fruit crops'
      }
    }
  });
  

