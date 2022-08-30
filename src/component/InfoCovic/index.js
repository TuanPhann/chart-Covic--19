import { Grid } from "@mui/material";
import CardInfo from "./cardInfo";

function InfoCovic({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const infoCovic = [
    {
      title: "số ca mắc",
      count: data.Confirmed,
      type: "confirm",
    },
    {
      title: "số ca khỏi",
      count: data.Recovered,
      type: "successful",
    },
    {
      title: "số ca tử vong",
      count: data.Deaths,
      type: "error",
    },
  ];

  return (
    <div>
      <Grid container spacing={3}>
        {infoCovic.map((info, index) => {
          return (
            <Grid item sm={4} xs={12} key={index}>
              <CardInfo
                title={info.title}
                count={info.count}
                type={info.type}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default InfoCovic;
