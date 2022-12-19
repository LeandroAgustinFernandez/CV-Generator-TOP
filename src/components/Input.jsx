export const Input = ({ type, name, value, change }) => {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onChange={change}
    />
  );
};


