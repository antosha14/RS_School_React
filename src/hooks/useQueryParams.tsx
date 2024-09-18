"use client";

import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const router = useSearchParams();

  const query = router.get("query");
  const page = router.get("page");
  const details = router.get("details");

  const currentQuery = query ? String(query) : "";
  const currentPage = page ? Number(page) : 1;
  const currentDetails = details ? String(details) : null;

  return { currentQuery, currentPage, currentDetails };
};

export default useQueryParams;
