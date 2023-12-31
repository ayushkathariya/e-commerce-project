"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const [title, setTittle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [image, setImage] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [category, setCategory] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (fileReader.readyState === fileReader.DONE) {
          setImage(fileReader.result as string);
        }
      };
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price,
          image,
          quantity,
          category,
        }),
      });
      if (!res.ok) {
        throw new Error();
      }
      toast.success("Product created successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex w-full py-4 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border px-4 py-2 rounded flex flex-col gap-3 sm:px-10 sm:py-8"
      >
        <span>
          <img src={image} alt="Image" className="bg-contain sm:w-[550px]" />
          <input
            type="file"
            accept="image"
            height={300}
            onChange={handleImageChange}
            className="mt-1"
            required
          />
        </span>
        <span>
          <Label className="font-semibold ml-1">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            defaultValue={title}
            onChange={(e) => setTittle(e.target.value)}
            required
          />
        </span>
        <span>
          <Label className="font-semibold ml-1">Description</Label>
          <Textarea
            placeholder="Description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </span>
        <span>
          <Label className="font-semibold ml-1">Price</Label>
          <Input
            type="number"
            placeholder="Price"
            defaultValue={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
          />
        </span>
        <span>
          <Label className="font-semibold ml-1">Quantity</Label>
          <Input
            type="number"
            placeholder="Quantity"
            defaultValue={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
        </span>
        <span>
          <label className="text-sm mb-2 font-semibold block">
            Select Category:
          </label>
          <select
            className="px-4 py-1 text-base border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value={1}>Mobile</option>
            <option value={2}>Laptop</option>
          </select>
        </span>
        <span>
          <Button type="submit">Create</Button>
        </span>
      </form>
    </div>
  );
}
