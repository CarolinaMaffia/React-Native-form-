import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ backgroundColor, onPress, text, disabled }) => {
	return (
		<TouchableOpacity
            onPress={onPress}
            disabled={disabled}
			style={[
				styles.buttonStyle,
				{
                    backgroundColor,
                    opacity: disabled ? 0.7 : 1
				}
			]}
		>
			<Text style={[styles.textStyle]}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 18,
		fontWeight: "600",
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: "center",
        color: "#ffff",
	},
	buttonStyle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
        width: "100%",
        borderRadius: 10,
    }
});

MyButton.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
};



export default MyButton;