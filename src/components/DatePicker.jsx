import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({initialDate, onDateChange}) => {
  const [date, setDate] = useState(new Date(initialDate)); 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;   
    setDate(currentDate);    
    onDateChange(currentDate);
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'date'}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.dateItem}
      />
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {    
  },
  dateItem: {
    marginBottom: 10,
  }
})
