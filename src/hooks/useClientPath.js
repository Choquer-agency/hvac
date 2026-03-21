import { useParams } from "react-router-dom";

export function useClientPath() {
  const { brandSlug } = useParams();
  return (path) => `/${brandSlug}${path}`;
}
