import React, { createContext, useState } from "react";
import getSampleTypes from "../apple/AllHealthKitSampleTypes";
import SyncItem, { SyncItemProps } from "./SyncItem";
import Devices from "../self-sensored/Devices";

export interface SyncAllItemsProps {}

const SyncAllItems: React.FC<SyncAllItemsProps> = () => {
    const devices = new Devices();

    const allSampleTypes = getSampleTypes();
    const [selectedDatatype, setSelectedDatatype] = useState(allSampleTypes[4]);

    return (
        <>
            <SyncItem
                datatype={selectedDatatype}
                devices={devices}
                unit="pound"
            ></SyncItem>
        </>
    );
};

export default SyncAllItems;
