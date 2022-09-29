import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import getGraphData from "../../remote/GraphData";


function change_date(published_at) {
  var moment = require("moment");
  const publish_date = moment(published_at).format("YYYY년 MM월 DD일");
  return publish_date;
}


function getDateArr(){
  var now = new Date().getDate(); // 현재 날짜 및 시간
  var date = [];
  var i ;
  for(i = 0 ; i < 6;i++)
  {
    const nDate = change_date(new Date(new Date().setDate(now - 6 + i)));
    date.push(nDate);
  }
  return date;

}

function mapChartData(date, pointState)
{
  var chartdata = [];
  var i = 0;
  for(i=0; i<6; i++)
  {
    chartdata.push({
      date : date[i],
      point : pointState[i]
    });
  }
  return chartdata;
}



export default function PointGraph() {
  //날짜별 포인트 변화를 꺾은 선 그래프로 보여주는 컴포넌트
 
  
  var Today = change_date(new Date());

  const [pointState, setPointState] = useState([0,1,5,4,0,0]);
  const [TodayState, setTodayState] = useState(0);

  const date = getDateArr();

  const { account } = useWeb3React();
  useEffect(() => {
    return
    getGraphData(account,response => {
        console.log(response.data);
        const d = response.data[0];
        if(d !== null && d !== undefined)
        {
          setPointState(
            [d.Day_1, d.Day_2, d.Day_3, d.Day_4, d.Day_5, d.Day_6]
          );
          setTodayState(d.Today);
        }  
      });
  }, []);


  const chartdata = mapChartData(date,pointState);
  
  return (
    <ResponsiveContainer width="95%" height={210} debounce={1}>
      <LineChart
        data={chartdata}
        margin={{ top: 5, right: 30, left: 15, bottom: 2 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          itemStyle={{ fontSize: "5px" }}
          contentStyle={{ fontSize: "0px" }}
          wrapperStyle={{ padding: 0, border: "none" }}
        />
        <Line dot={true} type="line" dataKey="point" stroke="#4318ff" />
      </LineChart>
    </ResponsiveContainer>
  );
}