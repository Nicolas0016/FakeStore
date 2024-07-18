import Filters from "../components/Home/Filters";
import ListProducts from "../components/Home/ListProducts";
import Menu from "../components/Menu";
import "../styles/App.css";
export default function Home() {
  return (
    <>
      <Menu></Menu>
      <div className="container-filters">
        <Filters></Filters>
        <ListProducts></ListProducts>
      </div>
    </>
  );
}
