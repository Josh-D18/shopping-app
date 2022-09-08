import CategoryItem from "../Category/CategoryItem/CategoryItem";
import "./Directory.styles.scss";

interface IDirectory {
  data: { id: number; title: string; imageUrl: string }[];
}

const Directory = (props: IDirectory) => {
  const { data } = props;

  return (
    <div className="directory-container">
      {data.map(({ id, title, imageUrl }) => (
        <CategoryItem id={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
