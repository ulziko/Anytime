import React, { useState } from "react";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [name, setName] = useState("default name");
  const [weight, setWeight] = useState(60);
  const [bday, setBday] = useState('2000-01-01');
  const [height, setHeight] = useState(170);
  const [password, setPassword] = useState(null);

  return (
    <UserContext.Provider
      value={{isLoggedIn,  SetIsLoggedIn, name, setName, weight, setWeight, bday, setBday, height, setHeight, password, setPassword}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
