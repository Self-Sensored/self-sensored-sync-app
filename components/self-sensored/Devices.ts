import ISelfSensoredDevice from "./ISelfSensoredDevice";
import {
    getUniqueId,
    getDeviceName,
    getBaseOs,
    getReadableVersion,
    getSerialNumber,
    getMacAddress
} from 'react-native-device-info';
import { Platform } from "react-native";

import { SelfSensoredAPI } from "../apis/SelfSensored";

export default class Devices {

    devices: { [key: string]: ISelfSensoredDevice } = {};

    constructor() {}

    getDevice = async () => {

    };

    storeDevice = async (deviceName: string, deviceId: string) => {
            try {

                // 1. Create the device object.
                // 2. Check if the device is cached locally, use it if so.
                // 3. If device not cached, check if it is store remotely, 
                //    if so, store it locally.
                // 4. If device not local or remote, store it remote and local.
                // 5. Return the device.

                // TODO: Below only adds device info for the connected device,
                //       not the actual observer of the sample.
                // const device = < ISelfSensoredDevice > {
                //     native_id: await getUniqueId(),
                //     platform: await Platform.OS,
                //     name: deviceName ? deviceName : await getDeviceName(),
                //     os: await getBaseOs(),
                //     os_version: await Platform.Version,
                //     serial_number: await getSerialNumber(),
                //     mac_address: await getMacAddress()
                // };

                // 1. 
                // Weird, but deviceName and deviceId are switched.
                // in React Native Health.
                const device = < ISelfSensoredDevice > {
                    native_id: deviceName,
                    platform: "",
                    name: deviceId,
                    os: "",
                    os_version: "",
                    serial_number: "",
                    mac_address: ""
                };

                // 2. 
                if(deviceId in this.devices) {
                    return;
                }

                // 3.
                console.log(deviceName)
                const results = await SelfSensoredAPI.getDevice(deviceId)
                console.log(results);


                this.devices[deviceId] = device;
                let test = await SelfSensoredAPI.storeDevice(device);
                console.log(test)
            } catch (err) {
                console.log(err);
            }
    }

};