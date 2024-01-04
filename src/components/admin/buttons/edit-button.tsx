"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EditButton() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/admin/products/abc`);
  };
  return (
    <Button onClick={handleNavigate}>
      <Settings className="mr-2 h-4 w-4" /> Edit Product
    </Button>
  );
}
