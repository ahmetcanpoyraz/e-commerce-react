import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, UserType } from "../types/Types";
import { setCurrentUser, setLoading, setProducts } from "../redux/appSlice";
import productService from "../services/ProductService";
import { toast } from "react-toastify";
import { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.app);

  const getAllProducts = async () => {
    try {
      dispatch(setLoading(true));
      const response: ProductType[] = await productService.getAllProducts();
      if (response) {
        console.log(response);
        dispatch(setProducts(response));
      }
    } catch (error) {
      toast.error("hata" + error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getAllProducts();
    const result = localStorage.getItem("currentUser");
    if (result) {
      const currentuser = JSON.parse(result) as UserType;
      dispatch(setCurrentUser(currentuser));
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {products &&
        products.map((product: ProductType, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  );
}

export default HomePage;
