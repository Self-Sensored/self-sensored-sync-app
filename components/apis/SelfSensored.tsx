import axios, { AxiosResponse } from "axios";
import IContextDetailType from "../interfaces/IContextDetailType";

import {
    REACT_APP_SELF_SENSORED_USER_EMAIL,
    REACT_APP_SELF_SENSORED_USER_PASSWORD,
} from "@env";
import SelfSensoredDevice from "../self-sensored/ISelfSensoredDevice";

const BASE_URL = "https://self-sensored.com/api/";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

let token = "";

// TODO: Add automatic token renewal.
// let token_exp = "";

// Add a request interceptor
instance.interceptors.request.use(async function (config) {
    if (token === "") {
        try {
            token = await refreshToken();
        } catch (error) {
            console.log(error);
        }
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const refreshToken = async (): Promise<string> => {
    // TODO: Change to request user enter.

    try {
        const result = await axios.post(BASE_URL + "/login", {
            email: REACT_APP_SELF_SENSORED_USER_EMAIL,
            password: REACT_APP_SELF_SENSORED_USER_PASSWORD,
        });
        return result.data["token"];
    } catch (error) {
        return "";
    }
};

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) =>
        instance.get(url).then(responseBody).catch(responseBody),
    post: (url: string, body: {}) =>
        instance.post(url, body).then(responseBody).catch(responseBody),
    put: (url: string, body: {}) =>
        instance.put(url, body).then(responseBody).catch(responseBody),
    delete: (url: string) =>
        instance.delete(url).then(responseBody).catch(responseBody),
};

export const SelfSensoredAPI = {
    getContextDetails: (): Promise<IContextDetailType[]> =>
        requests.get("/context/detail/self"),
    storeDevice: (device: SelfSensoredDevice): Promise<SelfSensoredDevice> =>
        requests.post("/device", device),
    getDevice: (deviceId: string): Promise<SelfSensoredDevice> =>
        requests.get(`/device/${deviceId}`),
};
