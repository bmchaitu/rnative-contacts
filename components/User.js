import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const User = (props) => {
    return(
        <View style={styles.screen}>
            <Text>
                I am fucking
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        marginTop:50,
        paddingLeft:20
    }
});

export default User;