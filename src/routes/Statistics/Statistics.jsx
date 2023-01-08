import React from "react";
import StatisticsData from "../../components/StatisticsData/StatisticsData";
import GraphComponent from "../../components/GraphComponent/GraphComponent";

const Statistics = () => {
    return (
        <div className="statistics">
            <StatisticsData />
            <GraphComponent />
        </div>
    )
}

export default Statistics