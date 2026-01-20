import axios from "axios";
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key: '058a56fd5e8f439aa22ba43488052b6f'
    }
})