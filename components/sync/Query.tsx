import AppleHealthKit, {
    HealthInputOptions,
    HealthUnitOptions,
    HealthValue,
} from "react-native-health";

import IObvy from "../interfaces/Obvy";
import DevicesManager from "../self-sensored/DevicesManager";
import { SelfSensoredAPI } from "../apis/SelfSensored";
import ContextDetailsManager from "../self-sensored/ContextDetailsManager";

export interface IQuery {
    success: boolean;
    deviceInfo: string;
    datatype: string;
    values: string[];
}

export async function getData(
    devices: DevicesManager,
    contextDetailsManager: ContextDetailsManager,
    datatype: string,
    unit: string,
    startDate: Date,
    endDate: Date
): Promise<IObvy> {
    return new Promise((resolve, reject) => {
        switch (datatype) {
            case "BiologicalSex":
                AppleHealthKit.getBiologicalSex(
                    { unit: unit } as HealthUnitOptions,
                    (err: Object, results: Object) => {
                        if (err) {
                            reject({
                                success: false,
                            } as IQuery);
                        }

                        // 1. Gather device info.
                        // 2. Save device.
                        // 3. Get ContextDetails.
                        // 4.
                        // 5. Query the sample.
                        // 6. Store the sample.

                        console.log(results);
                        // devices.storeDevice(device)

                        const obv = {
                            observer: "iPhone",
                            observed: "Thomas Brittain",
                            action: "inspect",
                            type: "biological_sex",
                            start: startDate,
                            end: endDate,
                            unit: "",
                            value: Object(results)["value"],
                        } as IObvy;

                        resolve(obv);
                    }
                );
                break;
            case "BloodType":
                break;
            case "DateOfBirth":
                break;
            case "LatestWeight":
                break;
            case "WeightSamples":
                const options = {
                    unit: "pound",
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                } as HealthInputOptions;

                AppleHealthKit.getWeightSamples(
                    options,
                    async (callbackError: string, results: any[]) => {
                        if (callbackError) {
                            console.log(JSON.stringify(callbackError, null, 2));
                        }

                        for (let index = 0; index < results.length; index++) {
                            const element = results[index];

                            // 1. Gather device info.
                            // 2. Save device.
                            // 3. Get ContextDetails.
                            // 4.
                            // 5. Query the sample.
                            // 6. Store the sample.

                            try {
                                let device = await devices.getDevice(
                                    element["sourceId"],
                                    element["sourceName"]
                                );
                            } catch (error) {
                                console.log(error);
                            }

                            try {
                                let contextDetails =
                                    await contextDetailsManager.getNativeMap(
                                        "apple"
                                    );
                            } catch (err) {
                                console.log(err);
                            }
                        }
                    }
                );
                break;
            case "LatestHeight":
                break;
            case "HeightSamples":
                break;
            case "LatestBmi":
                break;
            case "LatestBodyFatPercentage":
                break;
            case "LatestLeanBodyMass":
                break;
            case "StepCount":
                console.log("Landed here");
                break;
            case "Samples":
                break;
            case "AnchoredWorkouts":
                break;
            case "DailyStepCountSamples":
                break;
            case "DistanceWalkingRunning":
                break;
            case "DailyDistanceWalkingRunningSamples":
                break;
            case "DistanceCycling":
                break;
            case "DailyDistanceCyclingSamples":
                break;
            case "FlightsClimbed":
                break;
            case "DailyFlightsClimbedSamples":
                break;
            case "EnergyConsumedSamples":
                break;
            case "ProteinSamples":
                break;
            case "Water":
                break;
            case "HeartRateSamples":
                break;
            case "RestingHeartRate":
                break;
            case "WalkingHeartRateAverage":
                break;
            case "ActiveEnergyBurned":
                break;
            case "BasalEnergyBurned":
                break;
            case "AppleExerciseTime":
                break;
            case "AppleStandTime":
                break;
            case "Vo2MaxSamples":
                break;
            case "BodyTemperatureSamples":
                break;
            case "BloodPressureSamples":
                break;
            case "RespiratoryRateSamples":
                break;
            case "HeartRateVariabilitySamples":
                break;
            case "RestingHeartRateSamples":
                break;
            case "BloodGlucoseSamples":
                break;
            case "CarbohydratesSamples":
                break;
            case "SleepSamples":
                break;
            case "Info":
                break;
            case "MindfulSession":
                break;
            case "Workout":
                break;
            case "AuthStatus":
                break;
            case "LatestBloodAlcoholContent":
                break;
            case "BloodAlcoholContentSamples":
                break;
            case "DistanceSwimming":
                break;
            case "DailyDistanceSwimmingSamples":
                break;
            case "OxygenSaturationSamples":
                break;
            default:
                break;
        }
    });
}
