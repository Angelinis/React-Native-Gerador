import { useState } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import * as Clipboard from 'expo-clipboard';
import { ModalPassword } from '../../../components/modal';
import useStorage from '../../hooks/useStorage';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){
  const {saveItem} = useStorage();
  const [numberCharacters, setNumberCharacters] = useState(10);
  const [finalPassword, setFinalPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  function generatePassword(){
    let password = "";
    for(let i=0, n = charset.length; i < numberCharacters; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    };
    setFinalPassword(password);
    setModalVisible(true);
  }
  
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(finalPassword);
    alert("Password copied!")
  };

  const savePassword = async () => {
    await saveItem("@pass", finalPassword);
    alert("Password saved in storage!")
  };



  return(
    <View style={styles.container}>
      <Image 
      source={require("../../assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>
        {numberCharacters} characters
      </Text>
      <View style={styles.area}>
        <Slider
        style={{height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        value={numberCharacters}
        onValueChange={(value) => setNumberCharacters(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Generate Password</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword handleClose={() => setModalVisible(false)} 
        password = {finalPassword} 
        handleClipboard={copyToClipboard}
        handlePassword={savePassword}
        
        />
      </Modal>
      
    </View>
  ) 


}

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      backgroundColor: "#F3F3FF",
      justifyContent: "center",
      alignItems: "center"
    },
    logo:{
      marginBottom: 60
    },
    area:{
      marginTop:14,
      marginBottom:14,
      width: "80%",
      backgroundColor: "#FFF",
      borderRadius: 8,
      padding: 8
    },
    button: {
      backgroundColor: "#392de9", 
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginBottom: 18
    },
    buttonText:{
      color: "#FFF",
      fontSize: 20
    }, 
    title:{
      fontSize: 30,
      fontWeight: 'bold'
    },
    password:{
      fontSize: 14,
      color: "#FFF",
      justifyContent: "center"
    },
    passwordView:{
      justifyContent: "space-between",
      gap: 10,
      width: "80%",
      marginTop: 5,
      alignItems: "center"
    }

  }
)