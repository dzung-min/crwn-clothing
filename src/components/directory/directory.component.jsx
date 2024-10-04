import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  const categoriesList = categories.map((category) => (
    <CategoryItem category={category} />
  ));

  return <div className="categories-container">{categoriesList}</div>;
};

export default Directory;
