import React from 'react'
import PropTypes from "prop-types";
import "./RecordHistory.style.css";

export const RecordHistory = ({msg}) => {

 if(!msg) return null;

  return msg.map((row, i)=>
<div key={i} className="message-history mt-3">
        <div className="send font-weight-bold text-secondary">
            <div className="updatedate">{row.date}</div>
            <div className="messageBy">{row.messageBy}</div>
        </div>
         <div className="message">{row.message}</div>
    </div>)
};


RecordHistory.propTypes = {
    msg: PropTypes.array.isRequired,
};
