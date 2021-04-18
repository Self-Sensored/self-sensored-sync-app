import AppleHealthKit, {
    HealthUnitOptions,
    HealthValue,
} from "react-native-health";
import IObvy from "../interfaces/Obvy";

export interface IQuery {
    success: boolean;
    deviceInfo: string;
    datatype: string;
    values: string[];
}

export async function getData(
    datatype: string,
    startDate: Date,
    endDate: Date
): Promise<IObvy> {
    return new Promise((resolve, reject) => {
        switch (datatype) {
            case "BiologicalSex":
                AppleHealthKit.getBiologicalSex(
                    { unit: undefined } as HealthUnitOptions,
                    (err: Object, results: Object) => {
                        if (err) {
                            reject({
                                success: false,
                            } as IQuery);
                        }

                        const obv = {
                            observer: "iPhone",
                            observed: "Thomas Brittain",
                            action: "inspect",
                            type: "biological_sex",
                            start: startDate,
                            end: endDate,
                            unit: undefined,
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
                    startDate: startDate,
                    endDate: endDate,
                } as HealthUnitOptions;

                AppleHealthKit.getWeightSamples(
                    options,
                    (callbackError: string, results: HealthValue[]) => {
                        if (callbackError) {
                            console.log(JSON.stringify(callbackError, null, 2));
                        }
                        console.log(JSON.stringify(results, null, 2));
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
