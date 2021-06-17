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
import Device from '../interfaces/Device';
import NativeToSelfMap from '../interfaces/NativeToSelfMap';
import ContextDetail from '../interfaces/ContextDetail';

export default class ContextDetailsManager {

    nativeToSelfMaps: { [key: string] : ContextDetail }[] | undefined = undefined;

    // 1. Get NativeToSelfMaps, skip if stored locally.
    // 2. Store them.
    
    getNativeMap = async (type: string): Promise<{ [key: string] : ContextDetail }[] | undefined> => {
        if(this.nativeToSelfMaps === undefined) {
            try {
                const maps = await SelfSensoredAPI.getNativeToSelfMap('apple');
                this.nativeToSelfMaps = maps.map(item =>  ( { [item.native_description.name]: item.context_details } ));
                return this.nativeToSelfMaps;
            } catch (err) {
                console.log(err);
            }
        }
        return this.nativeToSelfMaps;
    }
    
}