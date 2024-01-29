import { React, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useGetProductsQuery } from "../redux/api/productsApi.js";
import ProductItem from "./product/ProductItem.jsx";
import Loader from "./layout/loader.jsx";
import toast from "react-hot-toast";
import CustomPagination from "./layout/CustomPagination.jsx";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const params = { page, keyword };

  const { data, isLoading, error, isError } = useGetProductsQuery(params);
  // console.log(data);
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  const columnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader />;
  return (
    <>
      <MetaData title={"Buy Best Products Online"} />
      <div className="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <p>FILTERS</p>
          </div>
        )}
        <div className={keyword ? "col-6 col-md-9" : "col-6 col-md-12"}>
          <h1 id="products_heading" className="text-secondary">
            {keyword
              ? `${data?.products?.length} Products found with keyword: ${keyword}`
              : "Latest Products"}
          </h1>

          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem key={product?._id} product={product} columnSize={columnSize}/>
              ))}
            </div>
          </section>
          <CustomPagination
            restPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
