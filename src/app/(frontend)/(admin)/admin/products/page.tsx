import CreateButton from "@/components/admin/buttons/create-button";
import Product from "@/components/admin/product";

export default function Page() {
  return (
    <div>
      <div className="ml-4 mt-6">
        <CreateButton />
      </div>
      <div className="flex flex-wrap justify-between">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
