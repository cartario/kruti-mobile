import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Clipboard from 'expo-clipboard';
import DatePicker from '../components/DatePicker';

const AppFieldsEvent = ({ editMode, form, setForm }) => {
  
  const copyToClipboard = async(value) => {
    await Clipboard.setString(value); 
  }

  return (
    <View>
      <View style={styles.textWrap}>
        {editMode && (
          <DatePicker
            initialDate={form.date}
            onDateChange={(date) => setForm({ ...form, date: date.toJSON() })}
          />
        )}

        <View style={styles.field}>
          <Text style={styles.label}>Название*</Text>
          <TextInput
            style={editMode ? styles.input : { ...styles.input, ...styles.inputDisabled }}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.title}
            onChangeText={(text) => setForm({ ...form, title: text })}
            editable={editMode}
          />
        </View>

        {!editMode && (
          <View style={styles.field}>
            <Text style={styles.label}>Дата</Text>
            <TextInput
              style={editMode ? styles.input : { ...styles.input, ...styles.inputDisabled }}
              placeholder="введите текст"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={64}
              defaultValue={new Date(form.date).toLocaleDateString()}
              onChangeText={(text) => setForm({ ...form, date: text })}
              editable={editMode}
            />
          </View>
        )}

        <View style={styles.field}>
          <Text style={styles.label}>Адрес</Text>
          <TextInput
            style={editMode ? styles.input : { ...styles.input, ...styles.inputDisabled }}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.address}
            onChangeText={(text) => setForm({ ...form, address: text })}
            editable={editMode}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Стоимость участия</Text>
          <TextInput
            style={editMode ? styles.input : { ...styles.input, ...styles.inputDisabled }}
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.price}
            onChangeText={(text) => setForm({ ...form, price: text })}
            editable={editMode}
          />
        </View>

        <View style={styles.field}>
          {/* <Text style={styles.label}>Ссылка*</Text> */}
          <TouchableOpacity
            style={styles.label}
            onPress={()=>copyToClipboard(form.link)} 
        >
          <Text style={styles.btnLink}>Скопировать ссылку</Text>
        </TouchableOpacity>
          <TextInput
            style={editMode ? styles.input : { ...styles.input, ...styles.inputDisabled }}
            multiline
            placeholder="введите текст"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            defaultValue={form.link}
            onChangeText={(text) => setForm({ ...form, link: text })}
            editable={editMode}
          />          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'black',
    backgroundColor: '#fff',
  },

  inputDisabled: {
    color: 'black',
    backgroundColor: 'transparent',
  },

  btnLink: {
    
  }
});

export default AppFieldsEvent;
