import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

export default function CatCard({ desc, title }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catcard">
        <span className="desc">{desc}</span>
        <span className="title">{title}</span>
      </div>
    </Link>
  );
}
