import { useState } from "react";
import Info from "../../components/Info";
import "./style.scss";

const Feedback = ({ data }) => {
  const [dataSeed] = useState(data);
  return (
    <div className="feedback" id="feedbackComponent">
      <h2 className="feedback__title">Feedbacks</h2>
      {dataSeed.map((dataFeedback, index) => (
        <div className="feedback__container" key={index}>
          <Info text={dataFeedback.feedback} />
          <div className="feedback__user-block">
            <img className="feedback__user-img" src={dataFeedback.reporter.photoUrl} alt="reporter icon" />
            <span className="feedback__user-name">{dataFeedback.reporter.name}</span>,&nbsp;
            <a className="feedback__user-link" href={dataFeedback.reporter.citeUrl} target="_blank" rel="noreferrer" >
              {dataFeedback.reporter.citeUrl.replace( /^(?:https?:\/\/)?(?:www\.)?/i, "")}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
