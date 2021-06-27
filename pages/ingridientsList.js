import Image from "next/image";

function IngridientsList({ ingridientData }) {
  const url = "https://spoonacular.com/cdn/ingredients_250x250/";

  const results =
    ingridientData.results &&
    ingridientData.results.map((ingridient) => {
      const myLoader = ({ src }) => {
        return `${url}${ingridient.image}`;
      };
      return (
        <div key={ingridient.id}>
          {ingridient.name}
          <Image
            alt="ingridientName"
            loader={myLoader}
            src={`${url}${ingridient.image}`}
            width={50}
            height={50}
          />
        </div>
      );
    });
  return (
    <div className="indridients">
      <ul>
        <li>
          <div className="result">{results}</div>
        </li>
      </ul>
    </div>
  );
}

export default IngridientsList;
