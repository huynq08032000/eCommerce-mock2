import axios from 'axios'
import { refreshTokenApi, urlApi } from '../config/api';
import { access_token, access_token_time, deviceId, getLocalStrogageByKey, isExpried, refresh_token, refresh_token_time, setLocalStorageKey } from './ultis';

const axiosInstance = axios.create({
    baseURL: urlApi,
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosInstance.interceptors.request.use(async (req) => {
    const accessToken = getLocalStrogageByKey(access_token)
    const refreshToken = getLocalStrogageByKey(refresh_token)
    const accessTokenTime = getLocalStrogageByKey(access_token_time)
    const refreshTokenTime = getLocalStrogageByKey(refresh_token_time)
    const deviceId2 = getLocalStrogageByKey(deviceId)
    if (isExpried(accessTokenTime)) {
        req.headers.Authorization = `Bearer ` + accessToken
        return req
    }
    if (isExpried(refreshTokenTime)) {
        try {
            const res = await axios.post(refreshTokenApi, {
                "refreshToken": refreshToken,
                "deviceId": deviceId2
            })
            setLocalStorageKey(access_token, res.data.data.access.token)
            setLocalStorageKey(access_token_time, res.data.data.access.expires)
            setLocalStorageKey(refresh_token, res.data.data.refresh.token)
            setLocalStorageKey(refresh_token_time, res.data.data.refresh.expires)
            req.headers.Authorization = `Bearer ` + res.data.data.access.token
            return req
        } catch (error) {
            return Promise.reject(error);
        }
    } else {
        return req
    }
}
)
axiosInstance.interceptors.response.use((res) => {
    return res
}, err => {
    console.log(err.response.status)
    if (err.response.status === 401) {
        localStorage.clear()
        if (window.location.pathname === '/') return
        window.location.pathname = '/'
    }
    return Promise.reject(err);
}
);
export default axiosInstance;
