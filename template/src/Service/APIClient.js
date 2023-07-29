import axios from "axios";
import Strings from "../util/Strings";

function getBaseUrl() {
    return Strings.Api_endpoints.BASE_URL
}

export async function get(url) {
    let finalUrl = getBaseUrl() + url
    return await axios.get(finalUrl)
}

export function post(url, payload = null, headers = null) {
    let finalUrl = getBaseUrl() + url

    return axios.post(finalUrl, payload, headers)
}