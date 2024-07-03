import React from 'react'
import PropTypes from "prop-types";
import "./RecordHistory.style.css";

export const RecordHistory = ({msg}) => {

if(!msg) return null;

return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
        <div className="send font-weight-bold text-secondary">
            <div className="messageBy">{row.Sender}</div>
            <div className="updatedate">{row.SentAt && new Date(row.SentAt).toLocaleString()}</div>
        </div>
        <div className="message">{row.Message}</div>
    </div>));
};

RecordHistory.propTypes = {
    msg: PropTypes.array.isRequired,
};
