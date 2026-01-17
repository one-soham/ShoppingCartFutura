const url =
  "https://dummyjson.com/products?limit=45&skip=35&sortBy=tags&order=asc";

const getData = async function () {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Something went wrong!");

  const result = await response.json();
  return result;
};

const processData = async function () {
  try {
    const data = await getData();

    // return data;
    return data.products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating,
      tags: product.tags,
      brand: product.brand,
      thumbnail: product.thumbnail,
      images: product.images,
      reviews: product.reviews,
    }));
  } catch (err) {
    console.log(err);
  }
};

export default processData;
