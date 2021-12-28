import {Action} from "../actionType";
import {postApiWithoutToken} from "./api";

export async function PostForecastChartData(param){
        const action=Action.ForecastChartAPI;
        const response= await postApiWithoutToken(action,param);
        return response;
}