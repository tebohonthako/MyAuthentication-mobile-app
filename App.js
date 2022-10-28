import React, { useState } from 'react' ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const LoginScreen = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
}
export default function App() {
  return (
    <View style={styles.container}
    behavior="padding">

      <Text style={ {color:"black",fontWeight:'700',padding: 100}}>Welcome to Login Page !</Text>

      <View style={styles.loginform}></View>
           <Image style={styles.iglogo}
           source={require('./images/iglogo.jpg')}
           />
           <View>
            <View>
              
            </View>
            <TextInput 
            placeholder='Email'
            //value={email}
            //onChangeText={ text => setEmail(text)}
            style={styles.input}/>

            <TextInput 
            placeholder='Password'
            //value={ password}
            //onChangeText={ text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => { }}
                style={styles.button}
                >
              <Text style={styles.mybtn}>Login   </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={styles.button}
                >
                <Text style={styles.mybtn}>SignUp</Text>
                <Text style={styles.input}>                      Forgot Password?         </Text>
                  
              </TouchableOpacity>
              </View>
              </View>

             <View>
             <View style={{padding:150}}></View>
             <Text>Forgot Password?.</Text>
             </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    background: 'white',
    
  },
loginform: {},
iglogo: {
  width: 250,
  height: 80,
  resizemode: 'contain',
},
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundcolor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 18,
    },
    buttonContainer: {
     width: '60%',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 40, 
  },
  button: {
    color: 'blue',
    backgroundcolor: '#ghostwhite',
    width: '100%', 
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {  
    color: 'white',
    fontWeight: '350',
    fontSize: '16',
  },
  buttonOutline: {
    backgroundcolor: 'white',
    marginTop: 5, 
    borderColor: '#0782F9',
    borderwidth: 2,
  },
  buttonOutlineText: {
    color: 'blue',
    fontWeight: '700',
    fontSize: '16',
  },
  mybtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: 'violet',
    width: '100%', 
    paddingHorizontal: 130,
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 7,

  },

});