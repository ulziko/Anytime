import React, { useState } from "react";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [name, setName] = useState("default name");
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(18);
  const [height, setHeight] = useState(170);
  return (
    <UserContext.Provider
      value={{isLoggedIn,  SetIsLoggedIn, name, setName, weight, setWeight, age, setAge, height, setHeight}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
