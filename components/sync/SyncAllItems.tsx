import React, { createContext, useState } from "react";
import getSampleTypes from "../apple/AllHealthKitSampleTypes";
import SyncItem, { SyncItemProps } from "./SyncItem";
import DevicesManager from "../self-sensored/DevicesManager";
import ContextDetailsManager from "../self-sensored/ContextDetailsManager";

export interface SyncAllItemsProps {}

const SyncAllItems: React.FC<SyncAllItemsProps> = () => {
    const deviceManager = new DevicesManager();
    const contextDetailsManager = new ContextDetailsManager();
    const allSampleTypes = getSampleTypes();
    const [selectedDatatype, setSelectedDatatype] = useState(allSampleTypes[4]);

    return (
        <>
            <SyncItem
                datatype={selectedDatatype}
                devices={deviceManager}
                contextDetailsManager={contextDetailsManager}
                unit="pound"
            ></SyncItem>
        </>
    );
};

export default SyncAllItems;
