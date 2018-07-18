import React,{Component,PureComponent} from 'react'
import { View,Text,StyleSheet,TextInput,Button,AlertIOS,KeyboardAvoidingView} from 'react-native';

class Index extends PureComponent {
    state ={
        userId:'',
        passWord:'',
    }
    getUserId = (userId)=>{
        this.setState({
            userId:userId,
        })
    }
    getPassWard = (passWord)=>{
        this.setState({
            passWord:passWord,
        })
    }
    handlerSubmit = ()=>{
        let result = this.state.userId + this.state.passWord
        AlertIOS.alert('你点击了提交功能',result);
    }
    render(){
        return (
          
<KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        
            <View style = {styles.main}>
            
                <Text style ={styles.loginTitle}>DTS足立方APP</Text>
                <View style={styles.textInputContains} >
                    <TextInput style={styles.textInput} 
                        onChangeText = {this.getUserId} autoFocus  value = {this.state.userId}
                        placeholder="请输入用户名"  placeholderTextColor ="#fff" />
                    <TextInput style={styles.textInput} type="passWard"
                        onChangeText = {this.getPassWard} value = {this.state.passWord}
                        placeholder="请输入密码" placeholderTextColor ="#fff" />
                </View>
               
                <View style={styles.buttonStyle}>
                    <Button title="确定"  color="#841584" onPress = {this.handlerSubmit} /> 
                </View>
              
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        width:"80%"
    },
    loginTitle:{
        fontSize: 22,
        fontWeight: "600",
        color:"#fff",
        textAlign:"center",
    },
    textInputContains:{
        lineHeight:20,
        marginTop: 15,
        marginBottom: 15,
    },
    textInput:{
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth:1,
        borderColor: "#fff",
        borderRadius: 5,
    },
    buttonStyle:{
        borderWidth: 1,
        backgroundColor:"#fff",
        borderRadius: 5,
    }


})

export default Index