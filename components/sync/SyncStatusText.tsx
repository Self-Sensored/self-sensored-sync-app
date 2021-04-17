import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface SyncStatusTextProps {
    datatype: string;
    startDate: Date;
    endDate: Date;
}

const SyncStatusText: React.FC<SyncStatusTextProps> = (
    props: SyncStatusTextProps
) => {
    const [dataValue, setDataValue] = useState(null);

    return (
        <>
            <Text style={styles.text}>{props.datatype}</Text>
            <Text style={styles.textDate}>
                Between: {props.startDate.toISOString().split("T")[0]} and{" "}
                {props.endDate.toISOString().split("T")[0]}
            </Text>
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

export default SyncStatusText;
