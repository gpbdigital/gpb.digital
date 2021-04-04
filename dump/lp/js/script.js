Vue.component("donutChart", {
  template: "#donutTemplate",
  name: 'donutChart',
  props: ["dataPoints"],
  data: function () {
    return {
      angleOffset: -190,
      chartData: [],
      colors: [],
      cx: 80,
      cy: 80,
      radius: 60,
      sortedValues: [],
      strokeWidth: 28
    };
  },
  computed: {
    // adjust the circumference to add small white gaps
    adjustedCircumference: function () {
      return this.circumference - 2;
    },
    circumference: function () {
      return 2 * Math.PI * this.radius;
    },
    dataTotal: function () {
      return this.sortedValues.reduce(function (acc, val) {
        return acc + val;
      });
    },
    calculateChartData: function () {
      for (i = 0; i < this.sortedValues.length; i++) {
        
        var _this$calculateTextCo = this.calculateTextCoords(this.sortedValues[i], this.angleOffset),
            x = _this$calculateTextCo.x,
            y = _this$calculateTextCo.y;
      
        var data = {
          degrees: this.angleOffset,
          textX: x,
          textY: y
        };
      
        this.chartData.push(data);
      
        this.angleOffset = this.dataPercentage(this.sortedValues[i]) * 360 + this.angleOffset;
      } 
      
    },
    sortInitialValues: function () {
      for (i = 0; i < this.dataPoints.length; i++) {

        if(this.dataPoints[i].value > 0 ){
          this.sortedValues.push(this.dataPoints[i].value);
          this.colors.push(this.dataPoints[i].color);
        }
        
      }
      console.log(this.sortedValues)
      return this.sortedValues;
    }
  },

  methods: {
    calculateStrokeDashOffset: function(dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference;
      return circumference - strokeDiff;
    },
    calculateTextCoords: function(dataVal, angleOffset) {
      // t must be radians
      // x(t) = r cos(t) + j
      // y(t) = r sin(t) + j

      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
      const radians = this.degreesToRadians(angle);

      const textCoords = {
        x: this.radius * Math.cos(radians) + this.cx,
        y: this.radius * Math.sin(radians) + this.cy
      };

      return textCoords;
    },
    degreesToRadians: function(angle) {
      return angle * (Math.PI / 180);
    },
    dataPercentage: function(dataVal) {
      return dataVal / this.dataTotal;
    },
    percentageString: function(dataVal) {
      //return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
      return (this.dataPercentage(dataVal) * 100) + "%";
    },
    returnCircleTransformValue: function(index) {
      //return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
      return "rotate("+this.chartData[index].degrees+", "+this.cx+", "+this.cy+")";
    },
    segmentBigEnough: function(dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    },
    greet: function(value) {
      console.log(value);
    }
  },

  mounted: function () {
    this.sortInitialValues;
    this.calculateChartData;
  }
});
