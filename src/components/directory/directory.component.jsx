import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  const categoriesList = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return <div className="categories-container">{categoriesList}</div>;
};

export default Directory;
