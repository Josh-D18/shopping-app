import "./Categories.styles.scss";

interface ICategory {
  id: number;
  imageUrl: string;
  title: string;
}

const CategoryItem = (props: ICategory) => {
  const { id, imageUrl, title } = props;
  return (
    <div className="category-container" key={id}>
      <img src={imageUrl} className="background-image" alt="category" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
