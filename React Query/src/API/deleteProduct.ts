import { useQueryClient, useMutation } from "react-query";
import axios from "axios";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const deleteFN = async (productId: number) => {
    const { data } = await axios.delete(`https://dummyjson.com/products/${productId}`);
    return data; 
  };

  return useMutation(deleteFN, {
    onSuccess: (deletedProduct) => {
      queryClient.setQueryData("products", (oldData: any) => {
        if (!oldData?.products) return { products: [] };
        return {
          ...oldData, products: oldData.products.filter((p: any) => p.id !== deletedProduct.id)
        };
      });
    },
  });
};