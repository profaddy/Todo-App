import React, {Component}  from "react";
import DateTimePicker from "react-native-modal-datetime-picker";


class DateTimePickerTester extends Component {
 render() {
    const { show, onCancel, onConfirm, mode } = this.props
     return (
     <>
        <DateTimePicker
            isVisible={show}
            onConfirm={onConfirm}
            onCancel={onCancel}
            mode={mode}
        />
    </>
);
}}

export default DateTimePickerTester;