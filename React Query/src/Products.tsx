import { useState } from "react";
import { useFetchProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from "./API";

export default function Product() {
  const { data, isLoading } = useFetchProducts();
  const { mutate: mutatePost } = useCreateProduct();
  const { mutate: mutateDelete } = useDeleteProduct();
  const { mutate: mutateUpdate } = useUpdateProduct();
  const [inputValues, setInputValues] = useState({
    title: "",
    price: 0,
  });
  const [updatingProduct, setUpdatingProduct] = useState<any>(null);

  const onAddProductFN = async () => {
    await mutatePost({
      title: inputValues.title,
      price: inputValues.price,
    });
    setInputValues({ title: "", price: 0 });
  };

  const onUpdateProductFN = async (id: number) => {
    await mutateUpdate({
      title: inputValues.title,
      price: inputValues.price,
      id,
    });
    setInputValues({ title: "", price: 0 });
    setUpdatingProduct(null);
  };

  const onEditProduct = (product: any) => {
    setInputValues({ title: product.title, price: product.price });
    setUpdatingProduct(product);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedPrice = parseFloat(e.target.value);
    setInputValues({...inputValues, price: isNaN(parsedPrice) ? 0 : parsedPrice});
  };
  

  return (
    <div className="flex flex-col items-center gap-6 p-4 m-4 border border-gray-300 rounded-lg">
      <form
        className="flex flex-col gap-4 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          if (updatingProduct) {
            onUpdateProductFN(updatingProduct.id);
          } else {
            onAddProductFN();
          }
        }}
      >
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        value={inputValues.title}
        placeholder="Name of product"
        onChange={(e) =>
          setInputValues({ ...inputValues, title: e.target.value })
        }
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="number"
        placeholder="Price of product"
        value={inputValues.price}
        onChange={handlePriceChange}
      />
      <button className="p-2 rounded bg-slate-400 text-white" type="submit">
        {updatingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>

    {isLoading ? (<h1>Loading...</h1>) : (
      <div className="flex flex-col gap-4 w-full max-w-3xl">
        {data?.products?.map((product: any) =>
          !product.isDeleted && (
            <div
              className="flex items-center justify-around p-2 border border-gray-200 rounded"
              key={product.id}
            >
              <button
                className="w-16 h-16 rounded border border-gray-400 bg-blue-100 hover:bg-blue-200"
                onClick={() => onEditProduct(product)}
              >
                Update
              </button>
              <button
                className="w-16 h-16 rounded border border-gray-400 bg-red-100 hover:bg-red-200"
                onClick={() => mutateDelete(product.id)}
              >
                Delete
              </button>
              <div>
                <h2 className="font-semibold">{product.title}</h2>
                <p>${product.price}</p>
              </div>
              <img
                src={product.images[0]}
                alt={product.title}
                style={{
                  maxWidth: 100,
                  width: "auto",
                  height: "auto",
                  margin: 10,
                  objectFit: "contain",
                }}
              />
            </div>
          )
        )}
      </div>
    )}
  </div>
  );
}