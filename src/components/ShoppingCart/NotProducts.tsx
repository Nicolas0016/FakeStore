import { NotFound } from "../Icons";

const NotProdcuts = ({ text }: { text: string }) => {
  return (
    <>
      <section className="flex flex-col h-[500px] gap-4 items-center justify-center">
        <NotFound></NotFound>
        <h2>{text}</h2>
      </section>
    </>
  );
};
export default NotProdcuts;
