import {
    URL_API
} from '$env/static/private'
import {
    error
} from "@sveltejs/kit";
import axios from "axios";

export const load = async () => {
    const [recipe, category] = await Promise.all([
        axios.get(`${URL_API}/recipes`),
        axios.get(`${URL_API}/category/recipes`)
    ])

    if (recipe.status === 200 && category.status === 200) {
        const recipes = await recipe.data;
        const categories = await category.data

        return {
            recipes,
            categories
        }
    }

    throw error(500, "Server bermasalah");
}