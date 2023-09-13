import React from "react";

import DetailsArrowIcon from "../../assets/detailsArrowIcon.svg";
import TicketArrowIcon from "../../assets/ticketArrowIcon.svg";
import Image from "next/image";

import "./tableRow.css";

interface TableRowProps {
  activeRows: number[];
  index: number;
  tableInfo: {
    DATE: string;
    CITY: string;
    VENUE: string;
    SUPPORTING_ACT: string;
  };
  toggleDetails: (index: number) => void;
}

export const TableRow: React.FC<TableRowProps> = ({
  activeRows,
  index,
  tableInfo,
  toggleDetails,
}) => {
  console.log();
  return (
    <div className={`row ${activeRows.includes(index) ? "row-active" : ""}`}>
      <div className="col">{tableInfo.DATE}</div>
      <div className="col">
        {tableInfo.CITY}

        <div
          className={`details-block ${
            activeRows.includes(index) ? "details-block-active" : ""
          }`}
        >
          <div>
            <p>Venue</p>
            {tableInfo.CITY}
          </div>
          <div>
            <p>Supporting Act</p>
            {tableInfo.SUPPORTING_ACT}
          </div>
        </div>
      </div>

      <div className="col is-mobile">{tableInfo.VENUE}</div>
      <div className="col is-mobile">{tableInfo.SUPPORTING_ACT}</div>

      <div
        className={`col details-col is-mobile-details  ${
          activeRows.includes(index) ? "details-col-active" : ""
        }`}
      >
        <button
          className="col details-col-btn"
          onClick={() => toggleDetails(index)}
        >
          Details
          <Image src={DetailsArrowIcon} alt="Arrow" />
        </button>

        <a
          className={`col ticket-col details-ticket-btn ${
            activeRows.includes(index) ? "details-ticket-btn-active" : ""
          }`}
          href="#"
        >
          Ticket
          <Image src={TicketArrowIcon} alt="Arrow" />
        </a>
      </div>
      <a className="col ticket-col is-mobile-ticket" href="#">
        Ticket
        <Image src={TicketArrowIcon} alt="Arrow" />
      </a>
    </div>
  );
};
