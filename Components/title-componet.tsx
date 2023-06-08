import { Component } from "react";
import { Text, StyleSheet } from "react-native";
interface Props{
    texto:string
}
export default class TitleComponent extends Component <Props> {

    render() {
        return (
            <Text style={styles.Title}>{this.props.texto}</Text>
        );
    }
}

const styles = StyleSheet.create({


    Title: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        width: 100,
        fontSize: 30,






    }
});