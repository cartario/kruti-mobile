import React from 'react';
import {Text, View, ScrollView, Button, StyleSheet, Alert, Keyboard} from 'react-native';
import AppFieldsEvent from '../components/AppFieldsEvent';
import { THEME } from '../theme';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreators} from '../store/actions/events';
import {Operations} from '../store/operations/events';

const initialData = {
  date: new Date(),
  title: '',
  address: '',
  price: '',
  link: ''
}

const CreateScreen = ({navigation}) => {
  const [form, setForm] = React.useState(initialData);
  const {isLoaded, isSuccessAdded} = useSelector(({events})=>events);
  const dispatch = useDispatch();  

  const isValid = form.title.length<=3 || form.link.length <=3;

  const handleSave = () => {
    Alert.alert(
      'Сохранение',
      'Вы действительно хотите сохранить и отправить на модерацию?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
          onPress: () => setForm(initialData),
        },
        {
          text: 'Сохранить',
          onPress: () => {                    
            dispatch(Operations.addEvent(form));
            setForm(initialData);            
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };



  return (<View style={styles.center}>
     <Text style={styles.header}>Добавить новое мероприятие</Text>
    <Button title='вернуться назад' onPress={()=>navigation.goBack()}/>
    <AppFieldsEvent editMode={!isLoaded} form={form} setForm={setForm}/>
    {isSuccessAdded && <Text style={styles.tost}>Успешно отправлено</Text>}
    <Button title={isLoaded ? 'Добавление...' : 'Добавить'} onPress={handleSave} disabled={isValid || isLoaded}/>
    <Button title='Очистить' color={THEME.DANGER_COLOR} onPress={()=>setForm(initialData)}/>
  
  </View>  
 )
};

export default CreateScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    fontSize: 20,
    fontFamily: 'open-bold'
  },
  tost: {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
  }
});
