import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();


  const updateProductFN = async (productBody: any) => {
    const formData = new FormData();
  
    Object.keys(productBody).forEach(key => {
        if (key !== 'id') {
            formData.append(key, productBody[key]);
        }
    });

    const { data } = await axios.put(
      `https://dummyjson.com/products/${productBody.id}`, formData,
      {headers: {'Content-Type': 'multipart/form-data'}}
    );
    return data;
  };

  return useMutation(updateProductFN, {
    onSuccess: (updatedProduct) => {
      if (!updatedProduct.images) {
        updatedProduct.images = ["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"];
      }
      queryClient.setQueryData("products", (oldData: any) => {
        if (!oldData?.products) {
          return { products: [updatedProduct] };
        }
        return {
          ...oldData,
          products: oldData.products.map((p: any) =>
            p.id === updatedProduct.id ? updatedProduct : p
          ),
        };
      });
    },
  });
};