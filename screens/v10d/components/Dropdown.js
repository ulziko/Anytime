import React, { useState , useContext} from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import UserContext from "../../../context/UserContext";

const Dropdown = () => {
  const User=useContext(UserContext);
  const [category, setCategory] = useState("");

  const categories = [
    {key:'1', value:'Таны анхны хайрын нэр?'},
    {key:'2', value:'Та биеийнхээ аль хэсэгт хамгийн их дуртай вэ?'},
    {key:'3', value:'Хамгийн дуртай хичээл тань юу байсан бэ? '},
    {key:'4', value:'Хамгийн анхны үзсэн Анимэ хүүхэлдэйн  нэр?'},
  ];

  return(
    <View className='h-full w-full border-none text-gray-700'>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"> */}
        {/* <View >  */}
      <SelectList
        setSelected={User.setQuestionKey}
        data={User.questions_obj}
        placeholder={" "}
        defaultOption={User.questions_obj[0]}
        boxStyles={{ backgroundColor: 'white', borderRadius: 15, height: 60 }}
        inputStyles={{ color: 'black', fontSize: 18, textAlign: 'center', paddingTop: 4}}
        dropdownStyles={{ backgroundColor: 'white', height: 240}}
        dropdownTextStyles={{ color: 'black', fontSize: 16 }}
      />
      {/* </View> */}
      {/* </ScrollView> */}
    </View>
  )
};
export default Dropdown;