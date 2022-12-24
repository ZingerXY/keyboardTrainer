import React from "react";
import StatisticsData from "../StatisticsData/StatisticsData";
import Graph from "../Graph/Graph";

const Statistics = () => {
    return (
        <div className="statistics">
            <StatisticsData />
            <Graph />
        </div>
    )
}

export default Statistics