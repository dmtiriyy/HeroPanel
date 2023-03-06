import { filtersSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const filtersAdapter = createEntityAdapter();
const toggleAutoplay = () => {
    this.setState(({autoplay}) => ({
        autoplay: !autoplay
    }))
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters");
    }
);


const {actions, reducer} = filtersSlice;

export default reducer;

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filtersChanged
} = actions;