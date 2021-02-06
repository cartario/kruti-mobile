import React from 'react';
import { ScrollView, Image, StyleSheet, Button, Alert , Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { THEME } from '../theme';
import AppFieldsEvent from '../components/AppFieldsEvent';
import {Operations} from '../store/operations/events';

const EventScreen = ({ route }) => {
  const eventId = route.params.eventId;
  const event = useSelector(({ events }) => events.items).find((item) => item.id === eventId);
  const [form, setForm] = React.useState(event);
  const [editMode, setEditMode] = React.useState(false);
  const {isSuccessAdded} = useSelector(({events})=>events);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setForm(event);
    setEditMode(false);    
  };

  const handleSave = () => {
    Alert.alert(
      'Сохранение',
      'Вы действительно хотите сохранить и отправить на модерацию?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
          onPress: () => setForm(event),
        },
        {
          text: 'Сохранить',
          onPress: () => {
            setEditMode(false);
            dispatch(Operations.addEventToUpdateList(event))
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  const handleDelete = () => {
    Alert.alert(
      'Удаление',
      'Вы действительно хотите отправить заявку на удаление?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: ()=>{
            dispatch(Operations.addEventToRemoveList(event))
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  if (!event) {
    return null;
  }

  return (
    <ScrollView>
      <Image style={styles.img} source={{ uri: event.posterUrl }} />
      {isSuccessAdded && <Text style={styles.tost}>Успешно отправлено</Text>}
      {editMode&&<Text style={styles.editModeInfo}>Редактирование</Text>}
      <AppFieldsEvent event={event} editMode={editMode} form={form} setForm={setForm} />
      {editMode ? (
        <Button title="ОТПРАВИТЬ на модерацию" onPress={handleSave} />
      ) : (
        <Button title="EDIT" onPress={() => setEditMode(true)} />
      )}
      {editMode&&<Button title="CANCEL" color={THEME.MAIN_COLOR} onPress={handleCancel} />}
      <Button title="DELETE" color={THEME.DANGER_COLOR} onPress={handleDelete} />
    </ScrollView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  editModeInfo: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    backgroundColor: THEME.DANGER_COLOR
  },
  tost: {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
  }
});
