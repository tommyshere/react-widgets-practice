import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  // get the html ref of the element it's on
  // line 44
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true });

    // Normally the return fn is called every time the component re-renders, and the next useEffect needs to be invoked
    // **Don't think as a call before, it is a CLEAN UP fn**
    // It can also be invoked whenever the Dropdown component itself is not rendered
    // so useEffect return will clean up everything
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true
      });
    }
  }, []);

  const renderedOptions = options.map((option) => {
    // doesn't show selected value
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div 
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;