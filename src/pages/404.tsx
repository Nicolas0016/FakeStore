import { NotFound } from "../components/Icons";
import Menu from "../components/Menu";

export default function Error404() {
  return (
    <>
      <Menu></Menu>
      <section className="h-[500px] grid place-content-center py-4 gap-3 ">
        <NotFound />
        <span>Oops, la página que buscas no existe.</span>
      </section>
    </>
  );
}
