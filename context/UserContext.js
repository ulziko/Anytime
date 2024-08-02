import React, { useState } from "react";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [name, setName] = useState("Хэрэглэгч");
  const [weight, setWeight] = useState(60);
  const [bday, setBday] = useState('2000-01-01');
  const [height, setHeight] = useState(170);
  const [password, setPassword] = useState(null);
  const [questionAnswer,setQuestionAnswer]=useState(null);
  const questions_obj = [
    {key:'0', value:'Таны анхны хайрын нэр?'},
    {key:'1', value:'Та биеийнхээ аль хэсэгт хамгийн их дуртай вэ?'},
    {key:'2', value:'Хамгийн дуртай хичээл юу байсан бэ? '},
    {key:'3', value:'Хамгийн анхны үзсэн Анимэ хүүхэлдэйн нэр?'},
  ];
  const [questionKey, setQuestionKey]=useState(0);

  return (
    <UserContext.Provider
      value={{isLoggedIn,  SetIsLoggedIn, name, setName, weight, setWeight, bday, setBday, height, setHeight, password, setPassword, questions_obj, questionKey, setQuestionKey,questionAnswer,setQuestionAnswer}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
