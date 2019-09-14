import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Button} from 'native-base';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import { Dropdown } from 'react-native-material-dropdown';
import Category from './Category';
import Categorytwo from './Categorytwo';
import urlCall from '../api';
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      totalSupply:0,
      balance:0,
      modalStatus: false,
      amount:0,
      address:"0x062d8259bdc485bca82f2a962dc3245136ca5c38",
      potentialReciver:["0x062d8259bdc485bca82f2a962dc3245136ca5c38", "0x3989c22fc18e1d7b79a6d3190b9a53566d33ff88"],
      receiver: "",   
    }
  };
  getTotalSupply = () => {
    urlCall.getTotalSupply().then((data)=>{
      this.setState({totalSupply:data})
    },((err)=> console.log(err)))
  }
  alert = (title,msg) =>{
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  }
  mineToken = (amount) =>{
    urlCall.mineToken(amount).then((data) => {
      var content = ""
      if (data){
        content = "successfully mined" + amount.toString()
      } else {
        content = "failed to mine"
      }
      this.alert(content)
    },(err)=>{
      this.alert(err)
    })
  }
  getBalance = () =>{
    urlCall.getBalance(this.state.address).then((data)=>{
      this.setState({balance:data})
    },(err)=>{
      this.alert(err)
    })
  }
  sendToken = () =>{
    urlCall.sendToken(this.state.address,this.state.receiver,this.state.amount).then((data)=>{
      if (data == false){
        this.alert('Send Token','unsuccessful')
      } else{
        this.alert('Send Token','successful')
      }
    })
  }
  onClose = () =>{
    this.setState({modalStatus:false})
  }
  onOpen = () =>{
    this.setState({modalStatus:true})
  }
  render(){
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={[
            styles.container,
            {
              borderLeftColor: "#ccc",
              borderLeftWidth: StyleSheet.hairlineWidth
            }
          ]}>
              <ScrollView
                  scrollEventThrottle={16}
                >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                  <Text style={{ color:"#0e254e",fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Wallets</Text>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                          <Category
                          supply={this.state.totalSupply}
                          own={this.state.balance}
                          imageUri={require('../assets/bitcoin.jpg')}
                          name="Home"
                          />
                          <Categorytwo 
                          ivey = {0}
                          imageUri={require('../assets/litcoin1.jpg')}
                          name="Experiences"
                          />
                      </ScrollView>
                    </View>
                      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ color:"#0e254e",fontSize: 24, fontWeight: '700' }}>
                            Transactions
                        </Text>
                      </View>
                    </View>
                </ScrollView>
                <Modal
                  ref={"modal3"}
                  backdrop={true}
                  style={[styles.modal, styles.modal3]}
                  isOpen={this.state.modalStatus}
                  onClosed={() =>{
                    this.setState({modalStatus:false})
                  }}
                >
                  <View>
                    <Dropdown
                        label='Sender'
                        data={[{
                          value: '0x062d8259bdc485bca82f2a962dc3245136ca5c38',
                        }]}
                        onChangeText={(value) => {
                          this.setState({address:value})
                        }}
                      />
                      <Dropdown
                        label='Receiver'
                        data={[{
                          value: this.state.potentialReciver[0],
                        }, {
                          value: this.state.potentialReciver[1],
                        }]}
                        onChangeText={(value) => {
                          this.setState({recerver:value})
                        }}
                      />
                      <Text>
                        Amount
                      </Text>
                      <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        keyboardType = 'numeric'
                        onChangeText={text=>{this.setState({amount:text})}}
                      >
                      </TextInput>
                  </View>
                  <Button Primary><Text>Send</Text></Button>
                  <Button Primary onPress={()=>{this.onClose()}}><Text>Cancel</Text></Button>
                </Modal>
            <View style={{flexDirection: 'row'}}>
              <Button Info style={styles.buttonAddr} onPress={()=>{this.setState({address:'0x062d8259bdc485bca82f2a962dc3245136ca5c38'});this.setState({isDisabled:true})}}><Text style={styles.buttonText}>0x062d8259bdc485bca82f2a962dc3245136ca5c38</Text></Button>
              <Button Info style={styles.buttonAddr} onPress={()=>{this.setState({address:'0x3989c22fc18e1d7b79a6d3190b9a53566d33ff88'})}}><Text style={styles.buttonText}>0x3989c22fc18e1d7b79a6d3190b9a53566d33ff88</Text></Button>            
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button Primary style={styles.buttonBottom} onPress={()=>{this.onOpen()}}><Text style={styles.buttonText}>Send</Text></Button>
              <Button Primary style={styles.buttonBottom} onPress={()=>{this.mineToken(5)}}><Text style={styles.buttonText}>Mine</Text></Button>
              <Button Primary style={styles.buttonBottom} onPress={()=>{this.getTotalSupply();this.getBalance()}}><Text style={styles.buttonText}>Refresh</Text></Button>
            </View>
          </View>    
      </SafeAreaView>
    );
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#F5F8FA"
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  buttonAddr:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  buttonBottom:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%'
  },
  buttonText:{
    fontSize:13,
    color:"#FFF"
  },
  modal3: {
    height: 300,
    width: 300,
  }
});
