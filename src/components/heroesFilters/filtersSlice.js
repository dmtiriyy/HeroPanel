import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
});

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters");
    }
);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {state.filtersLoadingStatus = 'loading'})
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                filtersAdapter.setAll(state, action.payload);
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});
const buttons = buttonsData.map(({name, label})=>{
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : "btn btn-outline-light"
    return (
        <button type="button"
        className={`btn ${clazz}`}
        key = {name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
</button>
    )
})
const {actions, reducer} = filtersSlice;

export default reducer;

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filtersChanged
} = actions;