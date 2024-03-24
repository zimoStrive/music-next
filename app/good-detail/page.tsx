"use client";
import React, { memo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GoodDetail = memo(() => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      <h1>路径：{pathname}</h1>
      <h2>id：{searchParams.get("id")}</h2>
      <h2>q：{searchParams.get("q")}</h2>
    </div>
  );
});

export default GoodDetail;
