import "./style.scss";

const Button = ({ icon, text = "Click", onClick, disabled, type }) => {
  return (
    <button
      className={disabled ? "button-disabled" : "button"}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
