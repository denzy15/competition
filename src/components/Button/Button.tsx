import "./Button.scss";

const Button: React.FC<{ content: string; submit?: any }> = ({
  content,
  submit,
}) => {
  return (
    <button onClick={submit} className="btn">
      {content}
    </button>
  );
};

export default Button;
