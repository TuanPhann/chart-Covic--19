import CounTry from "./component/Country";
import InfoCovic from "./component/InfoCovic";
import Summary from "./component/Summary";
import { getCounTry, getReportCounTry } from "./Api";
import { useEffect, useState } from "react";
import { sortBy } from "lodash";
import "./app.css";

function App() {
  const [countries, setCountrie] = useState([]);
  const [selectedCoutrie, setSelectedCoutrie] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCounTry().then((res) => {
      const dataCountry = sortBy(res.data, "Country");
      setCountrie(dataCountry);
      setSelectedCoutrie("vn");
    });
  }, []);

  const handleOnchance = (e) => {
    setSelectedCoutrie(e.target.value);
  };

  useEffect(() => {
    if (selectedCoutrie) {
      const { Slug } = countries.find((countrie) => {
        return countrie.ISO2.toLowerCase() === selectedCoutrie;
      });

      getReportCounTry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCoutrie, countries]);

  return (
    <div className="App">
      <CounTry
        countries={countries}
        handleOnchance={handleOnchance}
        value={selectedCoutrie}
      />
      <InfoCovic report={report} />
      <Summary report={report} selectedCoutrie={selectedCoutrie} />
    </div>
  );
}

export default App;
