function RadioButton({ option, variant, setVariant }) {
  const id = `variant-${option}`;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name="variant"
        value={option}
        checked={option === variant}
        onChange={(event) => {
          setVariant(event.target.value);
        }}
      />
      {option}
    </label>
  );
}

export default RadioButton;
