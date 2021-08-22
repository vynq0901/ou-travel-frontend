import React from 'react'

export default function InfoInput({ controlId, type, placeholder, value, name, onChange }) {
    return (
        <div className="user-input">
          <input
            className="input-field"
            id={controlId}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />
        </div>
      );
    }
