import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import moment from "moment";
const generateOptions = (data) => {
  const categories = data.map((item) => {
    return moment(item.Date).format("DD/MM/YYYY");
  });

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};

function LineChart({ data }) {
  const [option, setOption] = useState({});
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    let customData = [];
    switch (selectedOption) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(data.length - 30);
        break;
      case "7":
        customData = data.slice(data.length - 7);
        break;
      default:
        // eslint-disable-next-line no-unused-vars
        customData = data;
        break;
    }
    setOption(generateOptions(customData));
  }, [data, selectedOption]);

  return (
    <div>
      <ButtonGroup style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setSelectedOption("all")}>All</Button>
        <Button onClick={() => setSelectedOption("30")}>30 ngày</Button>
        <Button onClick={() => setSelectedOption("7")}>7 ngày</Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
}

export default LineChart;
