import { filtersSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const filtersAdapter = createEntityAdapter();
function bindActionToElems (event, elem, prop) {
    elem.forEach ((item, i) => {
    item.addEventListener(event, () => {
      switch (item.nodeName) {
        case 'SPAN' :
           state[prop] = i
            break;
        case 'INPUT':
            if(item.getAttribute('type') === 'checkbox') {
                i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
                elem.forEach((box, j) => {
                    box.checked = false;
                    if (i == j) {
                        box.checked = true
                    }
                })
            } else {
                state[prop] = item.value
            }
            break;
        })
    }
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