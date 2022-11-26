import {
    URL_API
} from '$env/static/private'
import {
    error
} from "@sveltejs/kit";
import axios from "axios";

export const load = async ({
    params
}) => {
    const response = await axios.get(`${URL_API}/recipe/${params.key}`);

    if (response) {
        return await response.data;
    }

    throw error(500, "Server bermasalah");
}

export const csr = false;