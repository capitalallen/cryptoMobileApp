import React from 'react';
import { ScrollView, StyleSheet,  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Modal from 'react-native-modalbox';
import { Dropdown } from 'react-native-material-dropdown';
export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalStatus: true,
      value:null
    }
  }
  onChangeHandler = (value) => {
    console.log(`Selected value: ${value}`);
  }
  render(){
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    let d = "null";
    return (
      <Dropdown
        label='Favorite Fruit'
        data={data}
        onChangeText={(value) => {
          this.setState({value:value})
          console.log(this.state.value);
        }}
      />
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },modalFooter: {
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: 54,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    marginBottom:50
  },
  modal: {
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    zIndex: 4,
    elevation: 4,
    height: Dimensions.get("window").height - Expo.Constants.statusBarHeight,
    marginTop: Expo.Constants.statusBarHeight / 2
  }
});
