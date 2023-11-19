import {View, Text, StyleSheet, Pressable,  TouchableOpacity} from 'react-native'

export function ModalPassword({handleClose}){
  return(
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Modal Opened</Text>
        <Pressable style={styles.innerContent}>
          <Text style={styles.content}>123456</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text> Voltar </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    modalContainer:{
      width: "60%",
      height: "30%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#392de9",
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 10,
    },
    container:{
      backgroundColor: "rgba(24, 24, 24, 0.6)",
      flex:1
    },
    title:{
      fontSize: 20,
      fontWeight: "bold"
    },
    content:{
      fontSize: 15,
      paddingTop: 4,
      paddingBottom: 4,
      textAlign: "center"
    },
    innerContent:{
      width: "80%",
      backgroundColor: "#FFF",
      marginTop: 15,
    },
    buttonArea: {
      marginTop: 50,
      width: "100%",
      justifyContent: "center",
      height: 20
    }, 
    button:{
      backgroundColor: "#FFF",
      width: "50%",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: 5,
      alignItems: "center"

    }

  }
)