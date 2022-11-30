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
import { useSelector } from "react-redux";

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
      display: true,
    },
  },
  //   plugins: ["chartjs-plugin-annotaion"],
  layout: {
    padding: 5,
  },
};

// data.datasets.forEach(function (dataset) {
//   //   dataset.borderColor = "pink";
//   //   dataset.backgroundColor = "yellow";
//   //   dataset.pointBorderColor = "red";
//   //   dataset.pointBackgroundColor = "green";
//   //   dataset.pointBorderWidth = 1;
// });

function PriceHistoryGraph() {
  const token = useSelector((state) => state.authToken);

  const pricesHistories = useSelector((state) => state.setGraphReducer);

  // const labels = ["6개월", "5개월", "4개월", "3개월", "2개월", "1개월"];
  var labels = [];
  pricesHistories.forEach((pricesHistory) => {
    var d = "";
    pricesHistory[0].recentPriceDtos.forEach((arr_date) => {
      d = arr_date.date;
      labels.push(d.slice(5, 7).replace(/(^0+)/, "") + "월");
    });
  });
  var arr_data = [];
  pricesHistories.map((pricesHistory) => {
    pricesHistory.map((history) => {
      var temp = [];
      history.recentPriceDtos.map((recentPrice) => {
        temp.push(recentPrice.price);
      });
      arr_data.push(temp);
    });
  });

  // 임의 처리.. 이렇게 안하곤 못하겠다~
  // 4개 까지만 처리
  let data = {};

  if (arr_data.length === 1) {
    data = {
      labels,
      datasets: [
        {
          label: pricesHistories[0][0].name + "/" + pricesHistories[0][0].unit,
          data: arr_data[0],
          borderColor: pointColor,
          backgroundColor: pointColor,
        },
      ],
    };
  } else if (arr_data.length === 2) {
    data = {
      labels,
      datasets: [
        {
          label: pricesHistories[0][0].name + "/" + pricesHistories[0][0].unit,
          data: arr_data[0],
          borderColor: pointColor,
          backgroundColor: pointColor,
        },
        {
          label: pricesHistories[0][1].name + "/" + pricesHistories[0][1].unit,
          data: arr_data[1],
          borderColor: "#FCDDB0",
          backgroundColor: "#FCDDB0",
        },
      ],
    };
  } else if (arr_data.length === 3) {
    data = {
      labels,
      datasets: [
        {
          label: pricesHistories[0][0].name + "/" + pricesHistories[0][0].unit,
          data: arr_data[0],
          borderColor: pointColor,
          backgroundColor: pointColor,
        },
        {
          label: pricesHistories[0][1].name + "/" + pricesHistories[0][1].unit,
          data: arr_data[1],
          borderColor: "#FCDDB0",
          backgroundColor: "#FCDDB0",
        },
        {
          label: pricesHistories[0][2].name + "/" + pricesHistories[0][2].unit,
          data: arr_data[2],
          borderColor: "#FF9F9F",
          backgroundColor: "#FF9F9F",
        },
      ],
    };
  } else if (arr_data.length === 4) {
    data = {
      labels,
      datasets: [
        {
          label: pricesHistories[0][0].name + "/" + pricesHistories[0][0].unit,
          data: arr_data[0],
          borderColor: pointColor,
          backgroundColor: pointColor,
        },
        {
          label: pricesHistories[0][1].name + "/" + pricesHistories[0][1].unit,
          data: arr_data[1],
          borderColor: "#FCDDB0",
          backgroundColor: "#FCDDB0",
        },
        {
          label: pricesHistories[0][2].name + "/" + pricesHistories[0][2].unit,
          data: arr_data[2],
          borderColor: "#FF9F9F",
          backgroundColor: "#FF9F9F",
        },
        {
          label: pricesHistories[0][3].name + "/" + pricesHistories[0][3].unit,
          data: arr_data[3],
          borderColor: "#E97777",
          backgroundColor: "#E97777",
        },
      ],
    };
  }

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

export default PriceHistoryGraph;
