import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 175, width: 293, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <ImageBackground 
                        source={this.props.imageUri}
                        style={{ flex: 1,width: null, height: null }}
                        imageStyle={{resizeMode: 'cover'}}
                        
                    >   
                    <View style={{flexDirection:"row"}}>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 25, fontWeight: "600", paddingHorizontal: 20,paddingVertical:25}}>UWO</Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 20, fontWeight: "500", paddingHorizontal: 40,paddingVertical:50}}>Total Supply:</Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 20, fontWeight: "500", paddingHorizontal: 170,paddingVertical:50}}>{this.props.supply}</Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 20, fontWeight: "500", paddingHorizontal: 40,paddingVertical:70}}>Own:</Text>
                        <Text style={{position: "absolute",color:"#FFF",fontSize: 20, fontWeight: "500", paddingHorizontal: 170,paddingVertical:70}}>{this.props.own}</Text>
                    </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});