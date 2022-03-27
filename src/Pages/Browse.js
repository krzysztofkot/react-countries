import useHttp from "../hooks/use-http";
import Card from "../components/UI/Card";
import CardContainer from "../components/UI/CardContainer";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import Options from "../components/Options/Options";
import Filters from "../components/Filters/Filters2";
import { useEffect } from "react";
import Placeholder from "../components/UI/Placeholder";

const Browse = () => {
  const { getData, data, error, status } = useHttp();

  useEffect(() => {
    getData();
  }, [getData]);

  let content;

  if (status === "loading") {
    content = (
      <>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </>
    );
  } else if (error) {
    content = <p>Sorry error occured, please try again later</p>;
  } else if (data) {
    content = data.map((data, index) => (
      <Card
        key={index}
        country={data.name.official}
        url={data.flags.png}
        capital={data.capital}
        area={data.area}
        population={data.population}
        region={data.region}
        commonName={data.name.common}
      />
    ));
  }

  return (
    <>
      <Options>
        <Breadcrumbs />
        <Filters />
      </Options>
      <CardContainer>{content}</CardContainer>
    </>
  );
};

export default Browse;
