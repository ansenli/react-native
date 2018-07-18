import React,{Component,PureComponent} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    AlertIOS,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

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
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset ="45" style = {styles.keyBoardContainer}>
                <View style = {styles.main}>
                    <Text style ={styles.loginTitle}>DTS足立方APP</Text>
                    <View style={styles.textInputContains} >
                        <TextInput style={styles.textInput} 
                            onChangeText = {this.getUserId}  value = {this.state.userId}
                            keyboardType ="default"
                            placeholder="请输入用户名"  
                            placeholderTextColor ="#fff" />
                        <TextInput style={styles.textInput}  secureTextEntry 
                            onChangeText = {this.getPassWard} value = {this.state.passWord}
                            placeholder="请输入密码" placeholderTextColor ="#fff" />
                    </View>
                    <View style={[styles.buttonStyle]}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.handlerSubmit}>
                                <Text style={styles.textButton}>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={this.handlerSubmit}>
                                <Text style={styles.textButton}>注册</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>          
        )
    }
}

const styles = StyleSheet.create({
    keyBoardContainer:{
        width:"80%",
    },
    main:{
        width:"100%",
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
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth:1,
        borderColor: "#fff",
        borderRadius: 5,
    },
    buttonStyle:{
        flex:1,
        flexDirection: 'row',
        borderWidth: 0,
        backgroundColor:"#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    
    },
    button:{
        flex:1,
        height:45,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 5,
    },
    textButton:{
        lineHeight:45,
        textAlign:"center",
        fontSize: 16,
        
    }
    


})

export default Index