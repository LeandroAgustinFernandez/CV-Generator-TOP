const Label = ({ value }) => {
  const capitalize = (string) => {
    return `${string[0].toUpperCase()}${string.substring(1)}`;
  };
  return (
    <label className="form-label" htmlFor={value}>
      {capitalize(value)}
    </label>
  );
};

export default Label;
