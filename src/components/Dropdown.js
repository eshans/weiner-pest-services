import '../App.css';

export default function DropDown() {
  function onChange(e) {
    window.location.href = `/${e.target.value}`;
  };
  /*keeps current path selected*/
  let currentPath = window.location.pathname.substring(1);

  return (
    <div className="select-container">
      <label htmlFor="pests">Select a pest from the dropdown </label>
      <div className="select-dropdown">
        <select onChange={onChange} defaultValue={currentPath}>
          <option value="ants">Ants</option>
          <option value="wasps">Wasps</option>
          <option value="mice">Mice</option>
          <option value="bedbugs">Bedbugs</option>
          <option value="bees">Bees</option>
          <option value="mice">Mice</option>
          <option value="Roaches">Roaches</option>
        </select>
      </div>
    </div>
  );
}


