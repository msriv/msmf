import { API_ROUTES } from "./apiRoutes";
import useSWR from "swr";
import axios from "axios";

const fetcher_get = (url) => axios.get(url).then((res) => res.data);

export const useFacilities = (id = null) => {
  let route = "";

  if (id === null) {
    route = API_ROUTES.FACILITIES;
  } else {
    route = API_ROUTES.FACILITY + id;
  }

  const { data, error, mutate, isValidating } = useSWR(`${route}`, fetcher_get);

  return {
    facilities: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
    isValidating,
  };
};

export const useAssets = (id = null) => {
  let route = "";

  if (id === null) {
    route = API_ROUTES.GET_ALL_ASSETS;
  } else {
    route = API_ROUTES.FACILITY + id;
  }

  const { data, error, mutate, isValidating } = useSWR(`${route}`, fetcher_get);

  return {
    assets: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
    isValidating,
  };
};
