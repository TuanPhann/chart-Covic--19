import {
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";

function CounTry({ value, handleOnchance, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="selected-country" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnchance}
        inputProps={{
          name: "Country",
          id: "selected-country",
        }}
      >
        {countries.map((countrie, index) => {
          return (
            <option key={index} value={countrie.ISO2.toLowerCase()}>
              {countrie.Country}
            </option>
          );
        })}
      </NativeSelect>

      <Typography component="p">Chọn quốc gia</Typography>
    </FormControl>
  );
}

export default CounTry;
