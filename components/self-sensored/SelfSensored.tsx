import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Card } from "react-native-ui-lib";
import { FlatList, StyleSheet } from "react-native";
import { SelfSensoredAPI } from "../apis/SelfSensored";
import ContextDetail from "../interfaces/ContextDetail";
import SyncAllItems from "../sync/SyncAllItems";

export interface SelfSensoredProps {}

const SelfSensored: React.FC<SelfSensoredProps> = () => {
    const [contextDetails, setContextDetails] = useState<ContextDetail[]>();
    const getContextDetails = async () => {
        try {
            let details = await SelfSensoredAPI.getContextDetails();
            // console.log(JSON.stringify(details, null, 2));
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
            <SyncAllItems />
            {/* {contextDetails ? (
                <FlatList
                    data={contextDetails}
                    renderItem={({ item }) => (
                        <View flex padding-page>
                            <Card height={100} center padding-card margin-s4>
                                <Text heading margin-s4r>
                                    {item.action}
                                </Text>
                            </Card>
                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                />
            ) : (
                <Text style={styles.text}>SelfSensored</Text>
            )} */}
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
