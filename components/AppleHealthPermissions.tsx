import * as React from "react";
import { useState } from "react";
import AppleHealthKit, { HealthKitPermissions } from "react-native-health";
import getReadPermissions from "./AllHeallthKitPermissions";
import { StyleSheet, Text, View, Button } from "react-native";

export interface IAppleHealthPermissionsProps {
    setPermissionsGranted: (granted: boolean) => void;
}

const HealthPermissions: React.FC<IAppleHealthPermissionsProps> = ({
    setPermissionsGranted,
}) => {
    console.log(setPermissionsGranted);
    const [message, setMessage] = useState("Getting permissions");

    const permissions = {
        permissions: {
            read: getReadPermissions(),
            write: [],
        },
    } as HealthKitPermissions;

    AppleHealthKit.initHealthKit(permissions, (error: string) => {
        if (error) {
            setMessage("Failed to obtain needed permissions.");
            return;
        }
        setPermissionsGranted(true);
    });

    return (
        <>
            <Text>{message}</Text>
        </>
    );
};

export default HealthPermissions;
