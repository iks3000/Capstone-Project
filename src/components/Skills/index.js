import { useEffect, useState } from "react";
import Button from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postSkills } from "../../app/features/skills/skillsSlice";
import PenLine from '../../assets/images/icons/penLine.svg';
import "./style.scss";


const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem("skills");
    const initialValue = JSON.parse(savedSkills);
    return initialValue || [];
  });

  const dispatch = useDispatch();

  //validation schema for skill name and range
  const SkillsSchema = Yup.object().shape({
    title: Yup.string().required("Skill title is a required field"),
    range: Yup.number()
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100")
      .required("Skill range is a required field"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      range: "",
    },
    validationSchema: SkillsSchema,
    onSubmit: (values, { resetForm }) => {
      setSkills((prev) => [...prev, values]);
      dispatch(postSkills(values));
      resetForm();
    },
  });

  useEffect(() => {
    //saving skills to local storage
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const handleOpenEdit = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="skills" id="skillsComponent">

      <div className="skills__header33">
        <h2 className="skills__title">Skills</h2>
        <Button
          icon={<img className="skills__button-ico" src={PenLine} alt="Pen with Line" />}
          text="Open edit"
          onClick={handleOpenEdit}
        />
      </div>
      {isOpen && (
        <form className="skills__form" onSubmit={formik.handleSubmit}>
          <div className="skills__inputs">
            <label htmlFor="title">Skill name:</label>
            <input
              className={formik.errors.title && "error"}
              name="title"
              placeholder="Enter skill name"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && (
              <div className="errors">{formik.errors.title}</div>
            )}
          </div>

          <div className="skills__inputs">
            <label htmlFor="range">Skill range:</label>
            <input
              className={formik.errors.range && "error"}
              name="range"
              placeholder="Enter skill range"
              value={formik.values.range}
              onChange={formik.handleChange}
            />
            {formik.errors.range && (
              <div className="errors">{formik.errors.range}</div>
            )}
          </div>
          <Button
            type="submit"
            text="Add skill"
            disabled={!(formik.dirty && formik.isValid)}
          />
        </form>
      )}
      <div className="skills__content">
        {skills?.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ width: `${item.range}%` }}
              className="skills__content-value">
              <p className="skills__content-value-title">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="skills__progress">
        <div className="skills__progress-value"></div>
        <div className="skills__progress-value"></div>
      </div>
      <div className="skills__levels">
        <div className="skills__levels-title">
          <p>Beginner</p>
          <p>Proficient</p>
        </div>
        <div className="skills__levels-title">
          <p>Expert</p>
          <p>Master</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
