import {createStore} from "vuex";
import {PostForecastChartData} from "../api/outlook";

export default createStore({
    state() {
        return {
            basin: '',
            indices: '',
            periodicity: 'monthly',
            ensemble: ''
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
        setEnsemble(state, payload) {
            state.ensemble = payload;
        },
    },
    actions: {
        async ChartDataForecast(context, param) {
            let data = await PostForecastChartData(param);
            return data;
        },
    },
    modules: {},
});