import React, { useState } from 'react';

// our settings context singleton from which we can derive/ get access to our Provider
export const SettingsContext = React.createContext();

function Settings(props) {

  let [state] = useState({
    numberOfItems: 4,
    completed: false,
    defaultSortField: 'difficulty',
  });

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
