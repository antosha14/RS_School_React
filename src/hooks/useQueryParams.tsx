import { useRouter } from "next/router";

const useQueryParams = () => {
  const router = useRouter();
  const { query, page, details } = router.query;

  const currentQuery = query ? String(query) : "";
  const currentPage = page ? Number(page) : 1;
  const currentDetails = details ? String(details) : null;

  return { currentQuery, currentPage, currentDetails };
};

export default useQueryParams;
