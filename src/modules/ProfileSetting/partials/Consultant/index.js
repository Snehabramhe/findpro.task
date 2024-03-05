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
const disabledClassNameProps = { className: "Mui-disabled" };

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
    setFormData({
      ...formData,
      salaryType: value,
    });
  };

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
            FormHelperTextProps={edit ? disabledClassNameProps : undefined}
            onChange={onChangesHandler}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="standard-helperText"
            label="FIRST NAME"
            variant="standard"
            sx={styles.input}
            readOnly={edit}
            onChange={onChangesHandler}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="standard-helperText"
            label="JOB TITLE"
            variant="standard"
            sx={styles.input}
            readOnly={edit}
            onChange={onChangesHandler}
          />
        </Grid>
      </Grid>
      <Typography sx={styles.heading2}>Consultant OverView</Typography>
      <Box sx={styles.buttonWrapper}>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "Hourly" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("Hourly")}
        >
          Hourly
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "Monthly" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("Monthly")}
        >
          Monthly
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...styles.commonButton,
            ...(formData.salaryType === "Annual" ? styles.activeButton : {}),
          }}
          onClick={() => onChangesSalaryType("Annual")}
        >
          Annual
        </Button>
      </Box>
      <Typography sx={styles.heading2}>Expected Salary</Typography>
      <Typography sx={styles.heading2}>Salary value</Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Typography sx={styles.heading3}>Fixed rate</Typography>
          <Switch {...label} defaultChecked />
        </Box>

        <OutlinedInput
          id="outlined-adornment-weight"
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
        />
        <Typography sx={styles.heading3}>{formData.salaryType}</Typography>
      </Box>
    </Box>
  );
};

export default Consultant;
