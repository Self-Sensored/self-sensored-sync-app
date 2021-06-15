import { Platform } from 'react-native';
import {
    getUniqueId,
    getDeviceName,
    getBaseOs,
    getReadableVersion,
    getSerialNumber,
    getMacAddress
} from 'react-native-device-info';

import {
    SelfSensoredAPI
} from '../apis/SelfSensored';
import ISelfSensoredDevice from './ISelfSensoredDevice';

export default class BuildObeservationContext {

    device: ISelfSensoredDevice | undefined = undefined;

    // 1. Login user.
    // 2. Create / Get Device.
    // 3. Get ContextDetails
    // 4.

    constructor() {}

    init = async () => {

        if (this.device === undefined) {
            try {
                this.device = < ISelfSensoredDevice > {
                    native_id: await getUniqueId(),
                    platform: await Platform.OS,
                    name: await getDeviceName(),
                    os: await getBaseOs(),
                    os_version: await Platform.Version,
                    serial_number: await getSerialNumber(),
                    mac_address: await getMacAddress()
                };
                console.log(JSON.stringify(this.device, null, 2));
            } catch (err) {
                console.log(err);
            }
        }

    }
}