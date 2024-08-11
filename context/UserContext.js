import React, { useState } from "react";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(60);
  const [bday, setBday] = useState('');
  const [height, setHeight] = useState(170);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [planId,setPlanId] = useState(null);
  const [plan, checkPlan] = useState(false);
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("f");

  return (
    <UserContext.Provider
      value={{isLoggedIn,  SetIsLoggedIn, name, setName, weight, setWeight, bday, setBday, height, setHeight, password, setPassword, plan, checkPlan, age, setAge, gender, setGender, email, setEmail, planId,setPlanId}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
