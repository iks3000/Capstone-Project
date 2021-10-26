import { useState } from "react";
import Info from "../../components/Info";
import "./style.scss";

const Expertise = ({ data }) => {
  const [dataSeed] = useState(data);

  return (
    <div className="expertise" id="expertiseComponent">
      <h2 className="expertise__title">Experience</h2>
      <ul>
        {dataSeed.map((dataExperience, index) => (
          <li className="expertise__item" key={index}>
            <div className="expertise__item-date">
              <h3 className="expertise__content-title">
                {dataExperience.info.company}
              </h3>
              <p className="expertise__content-date">{dataExperience.date}</p>
            </div>
            <div className="expertise__item-info">
              <h3 className="expertise__content-title">
                {dataExperience.info.job}
              </h3>
              <Info text={dataExperience.info.description} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
