import React from "react";
import { pointColor } from "../../styles/GlobalStyles";

import { Title } from "../../styles/styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  reponsive: false, // 크기 조정

  plugins: {
    legend: {
      display: false,
    },
  },
  //   plugins: ["chartjs-plugin-annotaion"],
  layout: {
    padding: 5,
  },
};

const labels = ["6개월", "5개월", "4개월", "3개월", "2개월", "1개월", "현재"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: pointColor,
      backgroundColor: pointColor,
    },
  ],
};

// data.datasets.forEach(function (dataset) {
//   //   dataset.borderColor = "pink";
//   //   dataset.backgroundColor = "yellow";
//   //   dataset.pointBorderColor = "red";
//   //   dataset.pointBackgroundColor = "green";
//   //   dataset.pointBorderWidth = 1;
// });

function priceHistoryGraph() {
  return (
    <div>
      <div>
        <Title style={{ padding: 5, fontSize: "18px" }}>
          내 매장의 {} 가격 추이는 어떨까?
        </Title>
      </div>
      <div
        style={{
          widht: "80vw",
          maxWidth: "375px",
          height: "auto",
          marginTop: "150px",
        }}
      >
        <Line
          options={options}
          data={data}
          width="80vw"
          maxwidth="375px"
          height="70"

          // style={{ width: "80vw", maxWidth: "370px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default priceHistoryGraph;
