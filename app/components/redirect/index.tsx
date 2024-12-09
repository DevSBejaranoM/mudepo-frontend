"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectComponent = ({ slug }: { slug: string }) => {
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      router.push(`/eventos/${slug}`);
    }
  }, [slug]);

  return <div className="text-center mt-40">Loading...</div>;
};

export default RedirectComponent;
