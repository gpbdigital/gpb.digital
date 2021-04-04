var angleOffset = -195,
    hartData = [],
    colors = [],
    cx = 80,
    cy = 80,
    radius = 60,
    sortedValues = [],

    strokeWidth = 28,
    searchValue = 50,
    displayValue = 0,
    youtubeValue = 20,
    shoppingValue = 30,

    dataPoints = [{
      label: "Search campaigns",
      value: searchValue,
      color: "#2d83fc"
    },
    {
      label: "Display campaigns",
      value: displayValue,
      color: "#00ac47"
    },
    {
      label: "Youtube campaigns",
      value: youtubeValue,
      color: "#fe2c25"
    },
    {
      label: "Shopping ads",
      value: shoppingValue,
      color: "#ffbb00"
    }];

  function adjustedCircumference(){
    return circumference() - 2;
  }

  function circumference(){
    return 2 * Math.PI * radius;
  }

  function dataTotal(){
    return sortedValues.reduce(function (acc, val) {
      return acc + val;
    });
  }

  function calculateChartData(){
    sortedValues.forEach((dataVal, index) => {
      const { x, y } = calculateTextCoords(dataVal, angleOffset);
      const data = {
        degrees: angleOffset,
        textX: x,
        textY: y
      };

      chartData.push(data);
      angleOffset = dataPercentage(dataVal) * 360 + angleOffset;
    });
  }
