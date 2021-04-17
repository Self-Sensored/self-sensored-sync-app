import React from "react";
import { Text } from "react-native";

import SyncStatusText from "./SyncStatusText";
import { SyncStatusTextProps } from "./SyncStatusText";

import AppleHealthKit, {
    HealthKitPermissions,
    HealthUnitOptions,
    HealthValue,
} from "react-native-health";

// Date Health app was released.
const HEALTH_APP_RELEASE_DATE = new Date(2014, 6, 2);

export interface SyncItemProps {
    datatype: string;
    unit: string;
}

const SyncItem: React.FC<SyncItemProps> = (props: SyncItemProps) => {
    const today = new Date();

    const options = {
        unit: props.datatype,
        startDate: HEALTH_APP_RELEASE_DATE.toISOString(),
        endDate: today.toISOString(),
    } as HealthUnitOptions;

    AppleHealthKit.getWeightSamples(
        options,
        (callbackError: string, results: HealthValue[]) => {
            if (callbackError) {
                console.log(JSON.stringify(callbackError, null, 2));
            }
            console.log(JSON.stringify(results, null, 2));
        }
    );

    const status = {
        datatype: AppleHealthKit.Constants.Permissions.StepCount,
        startDate: HEALTH_APP_RELEASE_DATE,
        endDate: today,
    } as SyncStatusTextProps;

    return (
        <SyncStatusText
            datatype={status.datatype}
            startDate={status.startDate}
            endDate={status.endDate}
        ></SyncStatusText>
    );
};

export default SyncItem;
