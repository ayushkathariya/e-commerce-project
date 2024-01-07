import Product from "@/components/product";
import { toast } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    toast.error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
};

export default async function Page() {
  const products = await fetchProducts();

  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-around">
        {products?.products?.map((product: any) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
// Final message
