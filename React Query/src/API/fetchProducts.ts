import { useQuery } from "react-query";
import axios from "axios";

export const useFetchProducts = () => {
    const fetchProducts = async () => {
        const { data } = await axios.get("https://dummyjson.com/products")
        return data
    }

    return useQuery('products', fetchProducts);
}
