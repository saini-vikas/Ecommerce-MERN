import { useEffect, useState } from "react";
import { Pagination, Box } from "@mui/material";
import Product from "./../components/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemPerPage] = useState(15);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    const response = await fetch(
      `http://127.0.0.1:3000/products?page=${page}&limit=${itemPerPage}`
    );
    const pro = await response.json();
    const countResposne = await fetch("http://127.0.0.1:3000/products/count");
    const count = await countResposne.json();
    setCount(Math.ceil(count.count / itemPerPage));
    setProducts(pro);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    fetchProducts();
  }, [page, itemPerPage]);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      padding={4}
      marginTop={7}
      gap={3}
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}

      <Box justifyContent="center" width="100%" display="flex" paddingY="20px">
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default Products;
