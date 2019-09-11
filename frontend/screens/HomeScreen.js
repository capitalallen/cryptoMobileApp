import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Button} from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  styleSheet,
  SafeAreaView,
  Dimensions,
  TextInput
} from 'react-native';
import Category from './Category';
import Categorytwo from './Categorytwo';
import { MonoText } from '../components/StyledText';
import urlCall from '../api';
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      totalSupply:0,
      own:0,
      isLoad:false,
      address:"enter address"     
    }
  };
  getTotalSupply = () => {
    urlCall.getTotalSupply().then((data)=>{
      this.setState({totalSupply:data})
    },((err)=> console.log(err)))
  }
  alert = (msg) =>{
    console.log(msg)
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
    urlCall.getBalance("0x062d8259bdc485bca82f2a962dc3245136ca5c38").then((data)=>{
      this.setState({own:data})
    },(err)=>{
      this.alert(err)
    })
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
                          own={this.state.own}
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
            <View>
              <TextInput
                onChangeText={text => this.setState({address:text})}
              >
              </TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button Info style={styles.buttonBottom} onPress={()=>{}}><Text style={styles.buttonText}>Send</Text></Button>
              <Button Info style={styles.buttonBottom} onPress={()=>{this.mineToken(5)}}><Text style={styles.buttonText}>Mine</Text></Button>
              <Button Info style={styles.buttonBottom} onPress={()=>{this.getTotalSupply();this.getBalance()}}><Text style={styles.buttonText}>Refresh</Text></Button>
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
  buttonBottom:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%'
  },
  buttonText:{
    fontSize:13,
    color:"#FFF"
  }
});
