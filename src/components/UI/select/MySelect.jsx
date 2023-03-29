import React from 'react'

// option это массив который будет добовлять option`ы внутри select
const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value=''>
                {defaultValue}
            </option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default MySelect
