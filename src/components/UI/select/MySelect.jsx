import React from 'react';

function MySelect({
  options, defaultValue, value, onChange,
}) {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MySelect;
