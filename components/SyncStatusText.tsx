import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppleHealthKit, {
    HealthKitPermissions,
    HealthUnitOptions,
    HealthValue,
} from "react-native-health";

export interface SyncStatusTextProps {
    datatype: string;
    startDate: Date;
    endDate: Date;
}

const SyncStatusText: React.FC<SyncStatusTextProps> = (
    props: SyncStatusTextProps
) => {
    const [dataValue, setDataValue] = useState(null);

    // AppleHealthKit.initHealthKit(permissions, (error: string) => {
    //   /* Called after we receive a response from the system */
    //   if (error) {
    //     console.log("[ERROR] Cannot grant permissions!");
    //   }

    //   /* Can now read or write to HealthKit */
    //   const options = {
    //     unit: "pound",
    //     startDate: props.startDate.toISOString(),
    //     endDate: props.endDate.toISOString(),
    //   } as HealthUnitOptions;

    //   AppleHealthKit.getWeightSamples(
    //     options,
    //     (callbackError: string, results: HealthValue[]) => {
    //       if (callbackError) {
    //         console.log(JSON.stringify(callbackError, null, 2));
    //       }
    //       console.log(JSON.stringify(results, null, 2));
    //     }
    //   );
    // });

    return (
        <>
            <Text style={styles.text}>{props.datatype}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#FFF",
    },
});

export default SyncStatusText;
