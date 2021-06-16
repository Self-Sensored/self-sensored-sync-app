import ISelfSensoredDevice from "./ISelfSensoredDevice";
import {
    getUniqueId,
    getDeviceName,
    getBaseOs,
    getReadableVersion,
    getSerialNumber,
    getMacAddress
} from 'react-native-device-info';
import {
    Platform
} from "react-native";

import {
    SelfSensoredAPI
} from "../apis/SelfSensored";

export default class Devices {

    devices: {
        [key: string]: ISelfSensoredDevice
    } = {};

    constructor() {}

    getDevice = async (deviceName: string, deviceId: string): Promise<ISelfSensoredDevice | undefined> =>  {
        
        // 1. Check if the device is cached locally, use it if so.
        // 2. Create the device object.
        // 3. If device not cached, check if it is stored remotely, 
        //    if so, store it locally.
        // 4. If device not local or remote, store it remote and local.
        // 5. Return the device.

        // 1. 
        if (deviceId in this.devices) {
            return this.devices[deviceId]
        }

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

        // 3.
        try {
            const device = await SelfSensoredAPI.getDevice(deviceName)
            if(device) {
                this.devices[deviceId] = device;
                return device;
            }
        } catch (err) {
            console.log('here3')
            console.log(err)
        }
        
        // 4. 
        try {
            const device = < ISelfSensoredDevice > {
                native_id: deviceName,
                platform: "",
                name: deviceId,
                os: "",
                os_version: "",
                serial_number: "",
                mac_address: ""
            };
            this.devices[deviceId] = device;
            console.log('here4')
            const savedDevice = await SelfSensoredAPI.storeDevice(device);
            if(savedDevice) {
                console.log('here5')
                // return savedDevice;
            } else {
                throw "Unable to store device."
            }
            return undefined;
        } catch (err) {
            console.log(err)
            return undefined;
        }
    }

};