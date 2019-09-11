import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";

class Categorytwo extends Component {
    render() {
        return (
            <View style={{ height: 175, width: 293, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <ImageBackground 
                        source={this.props.imageUri}
                        style={{ flex: 1,width: null, height: null }}
                        imageStyle={{resizeMode: 'contain'}}
                    >
                    <View style={{flexDirection:"row"}}>
                    <Text style={{position: "absolute",color:"#FFF",fontSize: 25, fontWeight: "500", paddingHorizontal: 22,paddingVertical:25}}>Wallets </Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 40, fontWeight: "700", paddingHorizontal: 23,paddingVertical:50}}>{this.props.ivey} </Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 20, fontWeight: "600", paddingHorizontal: 55,paddingVertical:65}}>IVEY</Text>
                    </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
export default Categorytwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});