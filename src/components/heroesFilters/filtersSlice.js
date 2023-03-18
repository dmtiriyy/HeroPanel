import { filtersSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const filtersAdapter = createEntityAdapter();
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)
        updateClock()


    function updateClock() {
    
        if (true){
            days.textContent = '00'
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00'
        
        clearInterval(timeInterval);
        }
    }
    }
        const addZero = (num) => {
        if(num <=9) {
            return '0' + num;
        } else {
            return num
        }
    }
    setClock(id, deadline)
    const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

imgPopup.classList.add('popup');
workSection.appendChild(imgPopup)

imgPopup.style.justifyContent = 'center';
imgPopup.style.alignItems = 'center';
imgPopup.style.display = 'none';

workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;
    if(target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path)
    }
    if (target && target.matches('div.popup')) {
        imgPopup.style.display = 'none'
    }
})

imgPopup.appendChild(bigImage);
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