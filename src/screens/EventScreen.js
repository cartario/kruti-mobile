import React from 'react';
import { Text, View, Image, StyleSheet, Button, Alert, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME } from '../theme';



const EventScreen = ({ route }) => {
  const eventId = route.params.eventId;
  const event = useSelector(({ events }) => events.items).find((item) => item.id === eventId);
  const [form, setForm] = React.useState(event);
  const [editMode, setEditMode] = React.useState(false);

  const handleCancel = () => {
    setForm(event);
    setEditMode(false)
  }

  const handleSave = () => {

    Alert.alert(
      'Сохранение',
      'Вы действительно хотите сохранить?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
          onPress: ()=>setForm(event)
        },
        {
          text: 'Сохранить',
          onPress: ()=>{
            setEditMode(false);            
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );    
  }

  const handleDelete = () => {
    Alert.alert(
      'Удаление',
      'Вы действительно хотите удалить?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => console.log('close'),
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View>
      <Image style={styles.img} source={{ uri: event.posterUrl }} />
      <View style={styles.textWrap}>
        <View style={styles.field}>
          <Text style={styles.label}>Название</Text>
          <TextInput
            style={editMode ? styles.input : {...styles.input, ...styles.inputDisabled}}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.title}
            onChangeText={(text)=>setForm({ ...form, title: text })}
            editable={editMode}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Дата</Text>
          <TextInput
            style={editMode ? styles.input : {...styles.input, ...styles.inputDisabled}}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.date}
            onChangeText={(text)=>setForm({ ...form, date: text })}
            editable={editMode}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Адрес</Text>
          <TextInput
            style={editMode ? styles.input : {...styles.input, ...styles.inputDisabled}}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.address}
            onChangeText={(text)=>setForm({ ...form, address: text })}
            editable={editMode}
          />
        </View>
        
        <View style={styles.field}>
          <Text style={styles.label}>Стоимость участия</Text>
          <TextInput
            style={editMode ? styles.input : {...styles.input, ...styles.inputDisabled}}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.price}
            onChangeText={(text)=>setForm({ ...form, price: text })}
            editable={editMode}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Ссылка</Text>
          <TextInput
            style={editMode ? styles.input : {...styles.input, ...styles.inputDisabled}}
            multiline
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.link}
            onChangeText={(text)=>setForm({ ...form, link: text })}
            editable={editMode}
          />
        </View>        
      </View>
      {editMode ? (
        <Button title="SAVE" onPress={handleSave} />
      ) : (
        <Button title="EDIT" onPress={() => setEditMode(true)} />
      )}
      <Button title="CANCEL" color={THEME.MAIN_COLOR} onPress={handleCancel} />
      <Button title="DELETE" color={THEME.DANGER_COLOR} onPress={handleDelete} />
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 90,
  },
  input: {
    width: '70%',
    padding: 10,
    borderColor: 'grey',
    borderBottomWidth: 2,
    color: '#fff',
    backgroundColor: 'black'
  },

  inputDisabled: {
    color: 'black',
    backgroundColor: 'transparent'
  }  
});
