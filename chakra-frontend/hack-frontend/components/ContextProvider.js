import { createContext, useContext } from "react";

const AppContext = createContext({userId: ""});

const AppWrapper = ({ userId, children }) => {
  let sharedState = { userId };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
}


export { AppWrapper, useAppContext };