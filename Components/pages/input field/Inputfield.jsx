import "../input field/inputfield.css";

const Inputfield = ({
  type = "",
  placeholder = "",
  value = "",
  className,
  required,
  onChange,
  username = "",
  password = "",
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
        value={value}
        onChange={onChange}
        username={username}
        password={password}
      />
    </div>
  );
};
export default Inputfield;
