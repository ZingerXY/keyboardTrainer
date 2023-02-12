import React from "react";
import { useSelector } from "react-redux";
import Style from "./Statistics.module.scss";
import StatisticsData from "../../components/StatisticsData/StatisticsData";
import GraphComponent from "../../components/GraphComponent/GraphComponent";

const Statistics = () => {
    const id = useSelector((state) => state.UserReducer.id);
    return (
        <div className={`${Style["statistics"]} container`}>
            <StatisticsData id={id} />
            <GraphComponent id={id} />
        </div>
    )
}

export default Statistics