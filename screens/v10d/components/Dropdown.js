import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Dropdown = () => {

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const categories = [
    {key:'1', value:'Tmp'},
    {key:'2', value:'v10d'},
    {key:'3', value:'Lztgs'},
    {key:'4', value:'ttt'},
    {key:'5', value:'kkkk'},
  ];

  return(
    <View className='h-full w-full border-none text-gray-700'>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled"> */}
        {/* <View >  */}
      <SelectList
        setSelected={setCategory}
        data={categories}
        placeholder={"Tmp"}
        defaultOption={{key:'1', value:'Tmp'}}
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