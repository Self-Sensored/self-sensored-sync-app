import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { refreshToken, SelfSensoredAPI } from "../apis/SelfSensored";
import IContextDetail from "../interfaces/IContextDetailType";

export interface SelfSensoredProps {}

const SelfSensored: React.FC<SelfSensoredProps> = () => {
    const [contextDetails, setContextDetails] = useState<IContextDetail[]>();
    const getContextDetails = async () => {
        try {
            let details = await SelfSensoredAPI.getContextDetails();
            console.log(JSON.stringify(details, null, 2));
            setContextDetails(details);
        } catch (error) {}
    };

    if (contextDetails === undefined) {
        getContextDetails();
    }

    useEffect(() => {}, [contextDetails]);

    const renderItems = (item: any) => <></>;

    return (
        <>
            {contextDetails ? (
                <FlatList
                    data={contextDetails}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.text}>{item.action}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                />
            ) : (
                <Text style={styles.text}>SelfSensored</Text>
            )}
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
    title: {
        fontSize: 24,
        color: "#FFF",
    },
    item: {
        fontSize: 10,
        color: "#FFF",
    },
});

export default SelfSensored;
