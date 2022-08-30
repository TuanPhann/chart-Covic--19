import { Card, CardContent, Typography } from "@mui/material";

function CardInfo({ title, count, type }) {
  return (
    <Card className={type}>
      <CardContent>
        <Typography component="p" variant="body2">
          {title}
        </Typography>
        <Typography component="span" variant="body2">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
