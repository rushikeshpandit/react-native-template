import { call, put } from "redux-saga/effects";
import NetworkUtils, { ERR_NETWORK } from "../../util/NetworkUtils";
import Strings from "../../util/Strings";
import {
    getRandomUserApi
} from "./Api";
import {
    apiError,
    setUserList
} from "./Slice";

export function* handleGetRandomUserApi(action) {
    const isConnected = yield NetworkUtils.isNetworkAvailable()
    if (isConnected) {
        try {
            let url = Strings.Api_endpoints.USER_LIST
            const response = yield call(getRandomUserApi, url)
            const { data } = response
            const { results } = data

            yield put(setUserList(results))
        } catch (error) {
            yield put(apiError({ ...new Error(error.message) }))
        }
    } else {
        yield put(apiError({ ...ERR_NETWORK }))
    }
}
