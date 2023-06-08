import { Component } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
interface Props{
    buttonTroca:any;
}
export default class ButtonComponent extends Component <Props>{

    render() {
        return (
            <TouchableHighlight style={styles.button}
                onPress={() => {this.props.buttonTroca() }}
            >
                <Text style={styles.buttonText}>click</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 50,
        bottom: '1%',

    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',

    },

});