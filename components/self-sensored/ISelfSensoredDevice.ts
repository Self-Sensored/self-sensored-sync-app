export default interface SelfSensoredDevice {
    id?: number,
    native_id: string,
    platform: string,
    name: string,
    os: string,
    os_version: string,
    serial_number: string,
    mac_address: string
}