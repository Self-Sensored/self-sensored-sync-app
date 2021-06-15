import React, { createContext, useState } from "react";
import getSampleTypes from "../apple/AllHealthKitSampleTypes";
import BuildObeservationContext from "../self-sensored/BuildObservationContext";
import SyncItem, { SyncItemProps } from "./SyncItem";

export interface SyncAllItemsProps {}

const SyncAllItems: React.FC<SyncAllItemsProps> = () => {
    const allSampleTypes = getSampleTypes();
    const [selectedDatatype, setSelectedDatatype] = useState(allSampleTypes[0]);

    const createContext = async () => {
        const obvy_context = new BuildObeservationContext();
        obvy_context.init();
        return;
    };

    createContext();

    return (
        <>
            <SyncItem datatype={selectedDatatype} unit="pound"></SyncItem>
        </>
    );
};

export default SyncAllItems;
