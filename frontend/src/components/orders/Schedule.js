import React, {useState} from 'react';
import Select from 'react-tailwindcss-select';

function Schedule() {

const options = [
    {value: "fox", label: "? Fox"},
    {value: "Butterfly", label: "? Butterfly"},
    {value: "Honeybee", label: "? Honeybee"},
];

const [animal, setAnimal] = useState(null);
    
    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
    };

  return (
    <div>
        <Select
            value={animal}
            onChange={handleChange}
            options={options}
        />
    </div>
  )
}

export default Schedule