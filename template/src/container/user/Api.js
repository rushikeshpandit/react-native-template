import { get } from "../../Service/APIClient";

export function getRandomUserApi(url) {
    return get(url)
}
