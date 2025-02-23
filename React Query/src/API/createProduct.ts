import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const createProductFN = async (productBody: any) => {
    const bodyWithDefaults = {
      ...productBody,
      images: productBody.images 
      || ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"], 
    };
    const { data } = await axios.post("https://dummyjson.com/products/add", bodyWithDefaults);
    return data;
  };

  return useMutation(createProductFN, {
    onSuccess: (newProduct) => {
      if (!newProduct.images) newProduct.images = ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"];
      queryClient.setQueryData("products", (oldData: any) => {
        if (!oldData?.products){
          return { products: [newProduct] };
        }
        return {...oldData, products: [newProduct, ...oldData.products]};
      });
    },
  });
};