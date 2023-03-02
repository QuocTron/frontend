import * as httpRequestd from "../util/httpRequest";
import httpRequest from "../util/httpRequest"

console.log("httpRequestd", httpRequestd.default);
console.log("httpRequest", httpRequest);

export const search = async(q, type = "less") => {
    try {
        const res = await httpRequestd.get(`users/search`, {
            params: {
                q,
                type
            }
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
}