import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../../config/config";
function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/products`);
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
        <div className="col-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };
  const filterProduct = (input) => {
    if (input === "all") {
      setFilter(data);
    } else {
      const updateList = data.filter((x) => {
        return x.category === input;
      });
      setFilter(updateList);
    }
  };
  const filterSearchProduct = (input) => {
    const updateList = data.filter((x) => {
      return x.title.toLowerCase().includes(input);
    });
    setFilter(updateList);
  };

  const ProductsList = () => {
    const [inputsearch, setInputsearch] = useState("");
    const categories = [
      {
        id: 1,
        name: "All",
        data: "Tất cả",
      },

      {
        id: 3,
        name: "Clothe",
        data: "Quần áo",
      },
      {
        id: 4,
        name: "Jewelery",
        data: "Trang sức",
      },
      {
        id: 5,
        name: "electronic",
        data: "Điện tử",
      },
    ];

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        filterSearchProduct(inputsearch);
      }
    };

    return (
      <>
        <div className=" text-center mg-t2">
          <div className="products__search">
            <input
              className="search__input"
              type="text"
              value={inputsearch}
              onChange={(e) => setInputsearch(e.target.value.toLowerCase())}
              onKeyPress={handleKeyPress}
            />
            <FontAwesomeIcon
              className="search__icon"
              icon="fa-solid fa-magnifying-glass"
              onClick={() => filterSearchProduct(inputsearch)}
            />
          </div>
        </div>

        <ul className="products__list text-center mg-t mg-b3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                active === category.id
                  ? "products__tag products__tag--active"
                  : "products__tag"
              }
              id={category.id}
              onClick={(e) => {
                setActive(Number(e.target.id));
                filterProduct(category.name.toLowerCase());
              }}
            >
              {category.data}
            </button>
          ))}
        </ul>

        <div className="grid">
          <div className="row">
            {filter.length === 0 ? (
              <h3 className="mt-4 mg-b4"> Không tồn tải sản phẩm này ^-^</h3>
            ) : (
              <>
                {filter.map((product) => {
                  return (
                    <div key={product.id} className="col">
                      <div className="products__card text-center">
                        <div className="products__img">
                          <img src={product.imageUrl} alt={product.name}></img>
                        </div>
                        <div className="mg-t">
                          <p className="products__name">{product.name}</p>
                          <h5 className="products__price">
                            {new Intl.NumberFormat("vi-VN").format(
                              product.price
                            )}{" "}
                            VNĐ
                          </h5>
                          <Link
                            to={`/products/${product.id}`}
                            className="btn__buy"
                          >
                            Mua
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="products">
      <div className="container">
        <h1 className="products__title text-center">
          <b>Sản phẩm</b>
        </h1>
        <div className="grid">{loading ? <Loading /> : <ProductsList />}</div>
      </div>
    </div>
  );
}

export default Products;
