import { NotFound } from "../Icons";

const NotProdcuts = ({ text }: { text: string }) => {
  return (
    <div className="NotProducts">
      <NotFound></NotFound>
      <h2>{text}</h2>
    </div>
  );
};
export default NotProdcuts;
