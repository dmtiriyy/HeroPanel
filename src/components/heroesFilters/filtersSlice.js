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
const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)
    
        useEffect(() => {
            setSlide(getData());
        }, [])
    
        function changeSlide(i) {
            setSlide(slide => slide + i);
        } 

    return <BaseComponent 
    {...props}
    slide={slide}
     autoplay={autoplay}
    changeSlide= {changeSlide}
    setAutoplay={setAutoplay}/>
    }
}
const getDataFromFirstFetch = () => {return 10};
    const getDataFromSecondFetch = () => {return 20};
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

  state={
            name:'',
            salary:''
        }
    
        const {name, salary, onDelete, onToggleProp, increase, rise} = props;
       

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }
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