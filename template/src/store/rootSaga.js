import { all, takeLatest } from "@redux-saga/core/effects"
import {
    handleGetRandomUserApi
} from "../container/user/Saga"
import {
    getUserList
} from "../container/user/Slice"

function* watchAll() {
    yield all([
        takeLatest(getUserList.type, handleGetRandomUserApi),
    ])
}

export default watchAll;