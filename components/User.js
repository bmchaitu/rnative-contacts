import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const User = (props) => {
    return(
        <View>
            <Text>
                {props.user}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default User;