import Info from "../../components/Info";
import Spinner from "../Spinner";
import ErrorMessage from '../ErrorMessage';
import "./style.scss";


const TimeLine = ({ data, loading }) => {
  return (
    <div className="time-line" id="timeLineComponent">
      <h2 className="time-line__title">Education</h2>
      {loading ? (<Spinner />
      ) : (
        <>
          {!data ? (<ErrorMessage/>
          ) : (
            <ul className="time-line__list">
              {data?.map((dataTimeLine, index) => (
                /* istanbul ignore next */
                <li className="time-line__item" key={index}>
                  <div className="time-line__date">{dataTimeLine.date}</div>
                  <div className="time-line__content">
                    <h3 className="time-line__content-title">
                      {dataTimeLine.title}
                    </h3>
                    <Info text={dataTimeLine.text} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default TimeLine;
