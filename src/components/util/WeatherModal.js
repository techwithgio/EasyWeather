import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const WeatherModal = ({children, modalVisible,setModalVisible}) => {
    return ( 
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
              setModalVisible(!modalVisible);
              }}
          > 
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <View style={{alignSelf:"flex-end"}}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <MaterialCommunityIcons name={"close"} size={30} color={"black"} />
                    </TouchableOpacity>
                  </View> 
                      {children}
                  </View>
                </View>
          </Modal>
    )
}

export default WeatherModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        // margin: 20,
        backgroundColor: "white",
        width : "98%",
        height: "60%",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
})
