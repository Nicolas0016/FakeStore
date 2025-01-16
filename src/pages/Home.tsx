import Filters from "../components/Home/Filters";
import ListProducts from "../components/Home/ListProducts";
import Menu from "../components/Menu";
export default function Home() {
  return (
    <>
      <Menu />
      <div className="w-full flex relative  py-6">
        <Filters></Filters>
        <ListProducts></ListProducts>
      </div>
    </>
  );
}
