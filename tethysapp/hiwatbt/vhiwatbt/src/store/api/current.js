import {getApiWithoutToken,postApiWithoutToken} from './api';
import {Action} from '../actionType';
import {ThreddsServer} from '../../config';

export async function getSlice(params){
        const tdsURL=ThreddsServer+`/catalog/sldas/${params.periodicity}/catalog.xml`;
        const data_ext='.nc';
        const startDate=parseInt(params.year);
        const endDate=startDate+1;
        const action = Action.SliceCatalog+`?url=${tdsURL}&data_ext=${data_ext}&startDate=${startDate.toString()}-01-01&endDate=${endDate.toString()}-01-01&periodicity=${params.periodicity}`;
        const response = await getApiWithoutToken(action);
        let WMSList=[];
        response.data.forEach(function (x){
                const aa=tdsURL.replace('/catalog/','/wms/').replace('catalog.xml',x);
                WMSList.push(aa);
        });
        return WMSList;
}

export async function PostCurrentChartData(param){
        const action=Action.CurrentChartAPI;
        const response= await postApiWithoutToken(action,param);
        return response;
}

export async function getDataLatestHIWATInfo(){
        const action=Action.LatestHIWATInfo;
        const response= await getApiWithoutToken(action);
        return response;
}