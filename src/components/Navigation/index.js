import { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPen,
  faGem,
  faSuitcase,
  faLocationArrow,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import ScrollspyNav from "react-scrollspy-nav";

import "./style.scss";

const Navigation = () => {
  return (
    <ScrollspyNav
      scrollTargetIds={[
        "boxComponent",
        "timeLineComponent",
        "expertiseComponent",
        "skillsComponent",
        "portfolioComponent",
        "addressComponent",
        "feedbackComponent",
      ]}
      offset={-50}
      activeNavClass="is-active"
      scrollDuration="400"
    >
      <ul className="navigation">
        <li>
          <a
            className="navigation__item"
            href="#boxComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faUser} />{" "}
            <span>About me</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#timeLineComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faGraduationCap} />{" "}
            <span>Education</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#expertiseComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faPen} />{" "}
            <span>Experience</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#skillsComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faGem} /> <span>Skills</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#portfolioComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faSuitcase} />{" "}
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#addressComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faLocationArrow} />{" "}
            <span>Contacts</span>
          </a>
        </li>
        <li>
          <a
            className="navigation__item"
            href="#feedbackComponent"
            ref={createRef()}
          >
            <FontAwesomeIcon className="ico" icon={faComment} />{" "}
            <span>Feedbacks</span>
          </a>
        </li>
      </ul>
    </ScrollspyNav>
  );
};

export default Navigation;
