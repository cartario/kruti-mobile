import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({initialDate, onDateChange}) => {
  const [date, setDate] = useState(new Date(initialDate)); 
  const [show, setShow] = useState(false);

  const toggleShowPicker = () => {
    setShow(!show)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;   
    setDate(currentDate);   
    setShow(Platform.OS === 'ios'); 
    onDateChange(currentDate);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={toggleShowPicker} title={show? 'Скрыть дату' : 'Редактировать дату'} />
      </View>
      {show && (<>
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
      </>)}
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
