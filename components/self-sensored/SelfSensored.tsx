import axios from "axios";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { refreshToken, SelfSensoredAPI } from "../apis/SelfSensored";

export interface SelfSensoredProps {}

const SelfSensored: React.FC<SelfSensoredProps> = () => {
    const getContextDetails = async () => {
        try {
            let results = await SelfSensoredAPI.getContextDetails();
            console.log(JSON.stringify(results, null, 2));
        } catch (error) {}
    };

    getContextDetails();

    return (
        <>
            <Text style={styles.text}>SelfSensored</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: "#FFF",
    },
    textDate: {
        fontSize: 10,
        color: "#FFF",
    },
});

export default SelfSensored;
