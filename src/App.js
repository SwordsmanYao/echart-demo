import React, { Component } from 'react';
import echarts from 'echarts';

class App extends Component {

  componentDidMount() {
    this.init();
  }

  init = () => {
    const myChart = echarts.init(this.container);

    myChart.setOption({
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    });

    window.onresize = function() {
      myChart.resize();
    }
  }
  render() {
    return (
      <div className="App">
        <div ref={container => this.container = container} style={{width: '100%', height: '200px'}}></div>
      </div>
    );
  }
}

export default App;
