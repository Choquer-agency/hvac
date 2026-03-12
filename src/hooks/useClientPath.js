import { useParams } from "react-router-dom";

export function useClientPath() {
  const { clientSlug } = useParams();
  return (path) => `/${clientSlug}${path}`;
}
