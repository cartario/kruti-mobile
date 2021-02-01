import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const InfoModal = ({visible, onCancel}) => {
  return (<Modal
    animationType="slide"
    transparent={true}
    visible={visible}    
  >
    
      <View style={styles.center}>
        <Text>Hello World!</Text>

        <TouchableHighlight
         
          onPress={() => {
            onCancel(false)
            
          }}
        >
          <Text >Hide Modal</Text>
        </TouchableHighlight>
      </View>
    
  </Modal>)
};

export default InfoModal;

const styles = StyleSheet.create({
  center: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
    backgroundColor: '#a1b2c3'
  }
})
