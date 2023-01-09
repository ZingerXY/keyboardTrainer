import React from "react";
import Style from "./Statistics.module.scss";
import StatisticsData from "../../components/StatisticsData/StatisticsData";
import GraphComponent from "../../components/GraphComponent/GraphComponent";

const Statistics = () => {
    return (
        <div className={`${Style["statistics"]} container`}>
            <StatisticsData />
            <GraphComponent />
        </div>
    )
}

export default Statistics