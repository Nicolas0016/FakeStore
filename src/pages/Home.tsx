import Filters from "../components/Home/Filters";
import ListProducts from "../components/Home/ListProducts";
import Menu from "../components/Menu";
import "../styles/App.css";
export default function Home() {
  return (
    <>
      <Menu></Menu>
      <Filters></Filters>
      <ListProducts></ListProducts>
    </>
  );
}
