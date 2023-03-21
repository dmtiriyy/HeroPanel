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
function showModalByTime(selector, time) {
    setTimeout(function() {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden'
    }, time)
}
function calcScroll() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll'
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }
        
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })
        })
    })
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