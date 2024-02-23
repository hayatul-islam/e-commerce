import CartView from "../components/addToCart/CartView";
import MainLayout from "./layout/mainLayout";

export default function CartViewPage() {
  return (
    <MainLayout>
      <div className="container py-8 mt-6 mx-auto shadow">
        <CartView />
      </div>
    </MainLayout>
  );
}
