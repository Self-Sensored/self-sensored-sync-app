import React, { useState } from "react";
import getSampleTypes from "../apple/AllHealthKitSampleTypes";
import SyncItem, { SyncItemProps } from "./SyncItem";

export interface SyncAllItemsProps {}

const SyncAllItems: React.FC<SyncAllItemsProps> = () => {
    const allSampleTypes = getSampleTypes();

    const [selectedDatatype, setSelectedDatatype] = useState(allSampleTypes[0]);

    return (
        <>
            <SyncItem datatype={selectedDatatype} unit="pound"></SyncItem>
        </>
    );
};

export default SyncAllItems;
