import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            password:'',
            confirmPassword:'',
            contact:'',
            emailId:''
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                <Text style = {styles.title}>
                    My Study App
                </Text>
                <Image source = {require('../assets/study.png')} style = {{width:200,height:200,marginLeft:20}}/>
                </View>
                <View style={{ flex: 0.45 }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ isModalVisible: true })}
            >
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:40,
        fontWeight:'bold'
    },
    titleContainer:{
        marginTop:'2%'
    },
    loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10)
      },
      button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20)
      },
      TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
      }
})