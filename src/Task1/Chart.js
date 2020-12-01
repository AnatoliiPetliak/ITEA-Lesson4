import React, { Component } from "react";
import Chart from "chart.js";

export default class ChartDemo extends Component {
  state = {
    dataSet1: [],
    dataSet2: [],
  };
  canvas = React.createRef();

  componentDidMount() {
    let ctx = this.canvas.current.getContext("2d");

    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Item1",
          "Item2",
          "Item 3",
          "Item 4",
          "Item 5",
          "Item 6",
          "Item 7",
        ],
        datasets: [
          {
            label: "One",
            data: [0, 10, 5, 2, 20, 30, 45], //default data or this.dataSet
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 4)",
          },
          {
            label: "Two",
            data: [14, 51, 38, 63, 12, 50, 63], //default data or this.dataSet
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
          },
        ],
      },
    });
  }

  randomize = () => {
    const { chart } = this.chart;
    chart.data.datasets[0].data = this.randomizeData(100, 500, 1000);
    chart.data.datasets[1].data = this.randomizeData(200, 700, 1200);
    this.setState({
      dataSet1: chart.data.datasets[0].data,
      dataSet2: chart.data.datasets[1].data,
    });
    chart.update();
  };

  randomizeData = (count, min, max) => {
    return Array.from(
      {
        length: count,
      },
      () => Math.floor(Math.random() * (max - min) + min)
    );
  };

  render() {
    return (
      <div>
        <h1> Chart </h1>
        <button onClick={this.randomize}> Randomize </button>
        <canvas ref={this.canvas} width="400" height="400" />
      </div>
    );
  }
}
