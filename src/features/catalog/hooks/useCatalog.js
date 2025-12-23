// Packages
import useSWR from "swr";

// App
import fetchGoogleBooksData from "features/catalog/api/googleBooks.api.js";

function useCatalog(config, swrOptions = {}) {
    const query = config?.query;
    const page = config?.page ?? 0;
    const pageSize = config?.pageSize;

    const { data, error, isLoading } = useSWR(
        ['catalog', "googleBooks", { query, page, pageSize }],
        ([, , args]) => fetchGoogleBooksData({ ...args }),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            ...swrOptions,
        }
    );

    return {
        books: data ?? [],
        isLoading,
        error,
    };
}

export default useCatalog;