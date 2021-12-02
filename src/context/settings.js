import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  let [state, setState] = useState({
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