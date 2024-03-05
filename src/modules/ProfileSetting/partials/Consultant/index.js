import React from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { getSx } from "./style";

const label = { inputProps: { "aria-label": "Switch demo" } };

const salaryTypesDefaultRates = [
  {
    type: "hourly",
    fixedRate: 24,
    range: {
      min: 24,
      max: 32,
    },
  },
  {
    type: "monthly",
    fixedRate: 3600,
    range: {
      min: 2600,
      max: 3600,
    },
  },
  {
    type: "annual",
    fixedRate: 80000,
    range: {
      min: 70000,
      max: 90000,
    },
  },
];

const Consultant = ({ edit, formData, setFormData }) => {
  const styles = getSx();

  const onChangesHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangesSalaryType = (value) => {
    if (edit) {
      setFormData({
        ...formData,
        salaryType: value,
        salaryValue: 0,
      });
    }
  };

  const getDefault = () => {
    const output = salaryTypesDefaultRates.find(
      (item) => item.type === formData.salaryType
    );
    return output;
  };

  console.log(formData, "formData", edit);

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.heading}>Consultant OverView</Typography>
      <Grid container spacing={2} marginTop="0.5rem">
        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="standard-helperText"
            label="LAST NAME"
            variant="standard"
            sx={styles.input}
            onChange={onChangesHandler}
            inputProps={{ readOnly: !edit }}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="standard-helperText"
            label="FIRST NAME"
            variant="standard"
            sx={styles.input}
            onChange={onChangesHandler}
            inputProps={{ readOnly: !edit }}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="standard-helperText"
            label="JOB TITLE"
            variant="standard"
            sx={styles.input}
            onChange={onChangesHandler}
            inputProps={{ readOnly: !edit }}
          />
        </Grid>
      </Grid>
      <Typography sx={styles.heading2}>Expected Salary</Typography>
      <Typography sx={styles.subheading}>Select Salary Type</Typography>
      <Box sx={styles.buttonWrapper}>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "hourly" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("hourly")}
        >
          hourly
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "monthly" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("monthly")}
        >
          monthly
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "annual" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("annual")}
        >
          annual
        </Button>
      </Box>
      <Typography sx={styles.subheading}>Salary value</Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Typography sx={styles.subheading}>Fixed rate</Typography>
          <Switch
            {...label}
            checked={formData.range}
            disabled={!edit}
            onChange={(e) =>
              setFormData({
                ...formData,
                range: e.target.checked ? true : false,
              })
            }
          />
          <Typography sx={styles.heading3}>Set range</Typography>
        </Box>
        <Box sx={{ display: "flex", columnGap: "1rem", alignItems: "center" }}>
          {formData.range ? (
            <>
              <OutlinedInput
                readOnly={!edit}
                id="outlined-adornment-weight"
                value={formData.salaryValueMin || getDefault().range.min}
                startAdornment={
                  <InputAdornment position="end" sx={styles.inputAdornment}>
                    $
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end" sx={styles.inputAdornment}>
                    min
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                type="number"
                name="salaryValueMin"
                onChange={onChangesHandler}
              />
              <OutlinedInput
                readOnly={!edit}
                id="outlined-adornment-weight"
                value={formData.salaryValueMax || getDefault().range.min}
                startAdornment={
                  <InputAdornment position="end" sx={styles.inputAdornment}>
                    $
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end" sx={styles.inputAdornment}>
                    max
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                type="number"
                name="salaryValueMax"
                onChange={onChangesHandler}
              />
            </>
          ) : (
            <OutlinedInput
              readOnly={!edit}
              id="outlined-adornment-weight"
              value={formData.salaryValue || getDefault().fixedRate}
              startAdornment={
                <InputAdornment position="end" sx={styles.inputAdornment}>
                  $
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              type="number"
              name="salaryValue"
              onChange={onChangesHandler}
            />
          )}
          <Typography sx={styles.heading3}>
            {" "}
            {formData.range
              ? `Per ${formData.salaryType}`
              : formData.salaryType}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Consultant;
