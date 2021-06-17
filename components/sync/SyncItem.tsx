import React, { useEffect } from "react";
import { Text } from "react-native";

import AppleHealthKit, {
    HealthKitPermissions,
    HealthUnitOptions,
    HealthValue,
} from "react-native-health";

import SyncStatusText from "./SyncStatusText";
import { SyncStatusTextProps } from "./SyncStatusText";
import { getData, IQuery } from "./Query";
import ContextDetailsManager from "../self-sensored/ContextDetailsManager";
import DevicesManager from "../self-sensored/DevicesManager";

// Date Health app was released.
const HEALTH_APP_RELEASE_DATE = new Date(2014, 6, 2);

export interface SyncItemProps {
    datatype: string;
    unit: string;
    devices: DevicesManager;
    contextDetailsManager: ContextDetailsManager;
}

const SyncItem: React.FC<SyncItemProps> = (props: SyncItemProps) => {
    const today = new Date();

    useEffect(() => {
        const runQuery = async () => {
            try {
                const result = await getData(
                    props.devices,
                    props.contextDetailsManager,
                    props.datatype,
                    props.unit,
                    HEALTH_APP_RELEASE_DATE,
                    today
                );
                console.log(JSON.stringify(result, null, 2));
            } catch (error) {}
        };
        runQuery();
    }, []);

    const createContext = async () => {
        const obvy_context = new ContextDetailsManager(props.datatype);
        try {
            await obvy_context.init();
            return;
        } catch (error) {
            console.log(error);
        }
    };

    createContext();

    return (
        <SyncStatusText
            datatype={props.datatype}
            startDate={HEALTH_APP_RELEASE_DATE}
            endDate={today}
        ></SyncStatusText>
    );
};

export default SyncItem;
