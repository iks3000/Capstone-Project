import { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Panel from "../../components/Panel";
import Box from "../../components/Box";
import TimeLine from "../../components/TimeLine";
import Expertise from "../../components/Expertise";
import Skills from "../../components/Skills";
import Portfolio from "../../components/Portfolio";
import Address from "../../components/Address";
import Feedback from "../../components/Feedback";
import ScrollToTop from "../../components/ScrollToTop";
import User1 from "../../assets/images/users/user1.png";
import User2 from "../../assets/images/users/user2.jpg";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducations } from "../../app/features/education/educationSlice";
import { fetchSkills } from "../../app/features/skills/skillsSlice";

const Content = () => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state?.educations.educations);
  const loading = useSelector((state) => state?.educations.loading);


  /* istanbul ignore next */
  useEffect(() => {
    dispatch(fetchEducations());
    dispatch(fetchSkills());
  }, [dispatch]);
  return (
    //passing real data to Expertise component instead of hardcoded
    <div className="content">
      <Box
        title="About me"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque."
      />
      <TimeLine data={educations} loading={loading} />
      <Expertise data={[
          {
            date: "2013-2014",
            info: {
              company: "Google",
              job: "Front-end developer / php programmer",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil",
            },
          },
          {
            date: "2012",
            info: {
              company: "Twitter",
              job: "Web developer",
              description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim",
            },
          },
        ]}
      />
      <Skills />
      <Portfolio />
      <Address />
      <Feedback data={[
          {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
            reporter: {
              photoUrl: User1,
              name: "John Doe",
              citeUrl: "https://www.citeexample.com",
            },
          },
          {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque.",
            reporter: {
              photoUrl: User2,
              name: "Smith Anderson",
              citeUrl: "https://www.citeexample.com",
            },
          },
        ]}
      />
    </div>
  );
};

const Inner = () => {
  const [isShow, toggle] = useReducer((isShow) => !isShow);

  return (
    <div className={`inner ${isShow && "show-hide-panel"}`}>
      <FontAwesomeIcon
        className="show-hide-btn"
        icon={faBars}
        onClick={toggle}
      />
      <Panel />
      <Content />
      <ScrollToTop />
    </div>
  );
};

export default Inner;

