import { createContext, useContext, useState } from 'react';


// create the context - like an empty bucket
const UserContext = createContext();

// create Provider component - takes in children prop so it can be used as a wrapper
export const UserProvider = ({ children }) => {
  // state to manage
  const [user, setUser] = useState({});

  return (
    // value prop is where you share your state
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
} 

// create custom hook to use the context so we don't have to import UserContext and useContext in our login file

export const useUser = () => useContext(UserContext);

// could do this
// export const useUser = () => {
//   const context = useContext(UserContext);

//   if (context === undefinied) {
//     throw new Error('useUser must be used within a UserProvider');
//   }

//   return context;
// }