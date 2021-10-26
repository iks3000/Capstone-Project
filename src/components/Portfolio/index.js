/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef, useEffect } from "react";
import Info from "../../components/Info";
import Isotope from "isotope-layout";
import "./style.scss";

export const IsotopeContent = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <div className="isotope-content">
      <div className="isotope-content__filter">
        <span className={filterKey === "*" ? "is-active" : "in-active"}
          onClick={handleFilterKeyChange("*")}>All</span>
        /
        <span className={filterKey === "code" ? "is-active" : "in-active"}
          onClick={handleFilterKeyChange("code")}>Code</span>
        /
        <span className={filterKey === "ui" ? "is-active" : "in-active"}
          onClick={handleFilterKeyChange("ui")}>UI</span>
      </div>

      <ul className="filter-container">
        <div className="filter-item code">
          <div className="info-block">
            <h3>Some text</h3>
            <Info
              text={
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis"
              }
            />
            <a href="#">View resource</a>
          </div>
        </div>
        <div className="filter-item ui">
          <div className="info-block">
            <h3>Some text</h3>
            <Info text={"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis"}/>
            <a href="#">View resource</a>
          </div>
        </div>
        <div className="filter-item code">
          <div className="info-block">
            <h3>Some text</h3>
            <Info text={"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis"}/>
            <a href="#">View resource</a>
          </div>
        </div>
        <div className="filter-item ui">
          <div className="info-block">
            <h3>Some text</h3>
            <Info text={"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis"}/>
            <a href="#">View resource</a>
          </div>
        </div>
      </ul>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolioComponent">
      <h2 className="portfolio__title">Portfolio</h2>
      <IsotopeContent />
    </div>
  );
};

export default Portfolio;
