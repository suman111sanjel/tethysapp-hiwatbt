import {createStore} from "vuex";
import {getDataLatestHIWATInfo, getSlice, PostCurrentChartData} from '../api/current';

export default createStore({
    state() {
        return {
            basin: '',
            indices: 'Tair_f_tavg',
            periodicity: 'monthly',
            year: new Date().getFullYear() - 1,
            //hiwat app
            HIWATDate:''
        };
    },
    mutations: {
        setBasin(state, payload) {
            state.basin = payload;
        },
        setIndices(state, payload) {
            state.indices = payload;
        },
        setPeriodicity(state, payload) {
            state.periodicity = payload;
        },
        setYear(state, payload) {
            state.year = payload;
        },
        setHIWATDate(state, payload) {
            state.HIWATDate = payload;
        },
    },
    actions: {
        async SlicingThreddsCatalog(context, param) {
            let data=await getSlice(param);
            return data;
        },async ChartDataCurrent(context, param) {
            let data=await PostCurrentChartData(param);
            return data;
        },
        async getLatestHIWATInfo() {
            let data=await getDataLatestHIWATInfo();
            return data;
        },

    },
    modules: {},
});