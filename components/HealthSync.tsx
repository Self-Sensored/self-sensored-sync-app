import React from "react";
import { Text } from "react-native";

import SyncStatusText from "./SyncStatusText";
import { SyncStatusTextProps } from "./SyncStatusText";

import AppleHealthKit from "react-native-health";

// Date Health app was released.
const HEALTH_APP_RELEASE_DATE = new Date(2014, 6, 2);

export interface HealthSyncProps {}

const HealthSync: React.FC<HealthSyncProps> = () => {
    // const dataTypes =

    const status = {
        datatype: AppleHealthKit.Constants.Permissions.StepCount,
        startDate: HEALTH_APP_RELEASE_DATE,
        endDate: new Date(),
    } as SyncStatusTextProps;

    return (
        <SyncStatusText
            datatype={status.datatype}
            startDate={status.startDate}
            endDate={status.endDate}
        ></SyncStatusText>
    );
};

export default HealthSync;
