"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CreateButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(`/admin/products/create`)}>
      Create
    </Button>
  );
}
