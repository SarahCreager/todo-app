import React, { useState } from 'react';

// our settings context singleton from which we can derive/ get access to our Provider
export const SettingsContext = React.createContext();

function Settings(props) {

  // In order for context behaviors to hook into our react application, we need to define them with useState hook
  const [numberOfItems, setNumberOfItems] = useState(4);
  const [showCompleted, setCompleted] = useState(false);

  const state = {
    numberOfItems,
    showCompleted,
    setNumberOfItems:(number) => {
      setNumberOfItems(number);
    },
    setCompleted:(boolean) => {
      setCompleted(boolean);
    }
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
