import './Form.css';

const Form = ({ cityName, setCityName, searchLocation }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };

  return (
    <form className="form-container">
      <input
        type="text"
        defaultValue={cityName}
        onKeyDown={searchLocation}
        onChange={handleChange}
        placeholder="Enter City Name"
      ></input>
      <label role="none">
        For more accurate results, search by{' '}
        <span className="form-spans">City Name</span>,{' '}
        <span className="form-spans">State Code</span>, and{' '}
        <span className="form-spans">Zip Code</span> together. <br></br>
      </label>
    </form>
  );
};

export default Form;
