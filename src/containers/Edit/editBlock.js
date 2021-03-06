import React from "react";
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");

const editBlock = (props) => {
    let customStyle = {
        background: props.color
    }

    return (
        <div className="editBlock" style={customStyle}>
            <h1>{props.name}</h1>
            <h1>{props.time > 59 ? moment.duration(props.time, "seconds").format("mm:ss") : props.time + " Seconds"}</h1>
        </div>
    )
}

export default editBlock;