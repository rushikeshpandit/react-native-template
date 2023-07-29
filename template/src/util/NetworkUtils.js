import NetInfo from "@react-native-community/netinfo";

export default class NetworkUtils {
    static async isNetworkAvailable() {
        const response = await NetInfo.fetch();
        return response.isConnected
    }
}

export const ERR_NETWORK = {
    status: 404,
    message: 'Check your internet connection'
}