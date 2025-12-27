function getRandomPrice (max, min) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function normalizeGoogleBooksData(item) {
    const book = item?.volumeInfo ?? {};
    return {
        authors: book.authors ?? [],
        categories: book.categories ?? [],
        description: book.description ?? '',
        id: item.id,
        pageCount: book.pageCount ?? 0,
        price: item?.saleInfo?.listPrice?.amount ?? getRandomPrice(100000, 1000),
        printType: book.printType ?? '',
        publishedDate: book.publishedDate ?? '',
        publisher: book.publisher ?? '',
        thumbnail: book.imageLinks?.thumbnail || '',
        title: book.title,
    };
};

async function fetchGoogleBooksData({ query = '', page = 0, pageSize = 20 }) {
    const params = new URLSearchParams({
        q: query, // Búsqueda por título "intitle:harry"
        startIndex: page,
        maxResults: pageSize,
    });

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${params.toString()}`);
    const data = await response.json();
    return (data.items || []).map(normalizeGoogleBooksData);
};

export default fetchGoogleBooksData;