window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Atividade Física Mensal"
        },
        axisY: {
            title: "Distância percorrida em - Km",
            valueFormatString: "#.##",
            suffix: "km",
            stripLines: [{
                value: 10,
                label: ""
            }]
        },
        data: [{
            yValueFormatString: "#.## km",
            xValueFormatString: "MMM",
            type: "spline",
            dataPoints: [

                { x: new Date(2021, 4), y: 2.3 },
                { x: new Date(2021, 5), y: 3.2 },
                { x: new Date(2021, 6), y: 4.5 },
                { x: new Date(2021, 7), y: 5.3 },
                { x: new Date(2021, 8), y: 3.9 },
                { x: new Date(2021, 9), y: 5.2 },
                { x: new Date(2021, 10), y: 4.5 },
                { x: new Date(2021, 11), y: 5.0 },
                { x: new Date(2021, 12), y: 5.8 },
                { x: new Date(2022, 1), y: 5.8 },
                { x: new Date(2022, 2), y: 3.6 },
            ]
        }]
    });
    chart.render();
}

