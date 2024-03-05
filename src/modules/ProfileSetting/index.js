import { Box } from "@mui/material";
import React, { useState } from "react";
import { getSx } from "./partials/Header/style";
import Header from "./partials/Header";
import Consultant from "./partials/Consultant";

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    salaryType: 'Hourly'
  });
  const [edit, setEdit] = useState(true);

  const styles = getSx();

  const onSaveChanges = () => {
    setEdit(false);
    console.log(formData, "formdata");
  };

  return (
    <Box sx={styles.wrapper}>
      <Header edit={edit} setEdit={setEdit} onSaveChanges={onSaveChanges}/>
      <Consultant edit={edit} formData={formData} setFormData={setFormData}/>
    </Box>
  );
};

export default ProfileSetting;
