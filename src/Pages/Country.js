import { useEffect } from "react";
import Options from "../components/Options/Options";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import useHttp from "../hooks/use-http";

const Country = () => {
  const { getData, error, status, data } = useHttp();

  useEffect(() => {
    getData();
  }, [getData]);
  console.log(error, status, data);
  return (
    <Options>
      <Breadcrumbs />
    </Options>
  );
};

export default Country;
