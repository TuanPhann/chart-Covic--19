import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import HightMap from "./chart/HighMap";
import LineChart from "./chart/lineChart";

function Summary({ report, selectedCoutrie }) {
  const [mapdata, setMapData] = useState({});

  useEffect(() => {
    if (selectedCoutrie) {
      import(
        `@highcharts/map-collection/countries/${selectedCoutrie}/${selectedCoutrie}-all.geo.json`
      ).then((res) => {
        setMapData(res);
      });
    }
  }, [selectedCoutrie]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HightMap mapData={mapdata} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Summary;
