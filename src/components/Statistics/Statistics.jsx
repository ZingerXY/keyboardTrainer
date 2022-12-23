import React from "react";
import StatisticsData from "./components/StatisticsData";
import Graph from "./components/Graph";

const Statistics = () => {
    return (
        <div className="statistics">
            <StatisticsData />
            <Graph />
        </div>
    )
}

export default Statistics