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
    const response = await axios.get(`${URL_API}/category/recipes/${params.key}`)

    if (response.status === 200) {
        return await response.data
    }

    throw error(500, "Server bermasalah");
}