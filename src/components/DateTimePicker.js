import React, {useState} from "react";
import {View, Button} from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker";


const DateTimePickerDefault = ({type, buttonTitle, dateKey, setValue}) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const showDatePicker = ()=>{
        setIsDatePickerVisible(true);
    }
    const hideDatePicker = ()=>{
        setIsDatePickerVisible(false);
    }

    const handleConfirm = (date)=>{
        if(type ==="time"){
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const formattedTime = `${hour}:${minutes}`;
            setValue((prevState)=> ({...prevState, [dateKey]: formattedTime}) );
        }else{
        // const day = date.getDays();
        // const month = date.getMonth();
        // const year = date.getYears();
        // const formattedDate = `${year}-${month}-${day}`;
        setValue((prevState)=> ({...prevState, [dateKey]: date}) );
    }
    hideDatePicker();
    }


    return (
        <View>
            <Button title={buttonTitle} onPress={showDatePicker} color="#980637"/>
            <DateTimePicker 
            isVisible={isDatePickerVisible}
            mode={type}
            locale="pt_BR"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            pickerContainerStyleIOS={{backgroundColor:"#fff"}}
            textColor="#000"
            />
        </View>
    )
}
export default DateTimePickerDefault;