import React  from "react";
import DateTimePicker from "react-native-modal-datetime-picker";


const DateTimePickerTester = ({ show, onCancel, onConfirm, mode }) => (
    <>
        <DateTimePicker
            isVisible={show}
            onConfirm={onConfirm}
            onCancel={onCancel}
            mode={mode}
        />
    </>
);

export default DateTimePickerTester;