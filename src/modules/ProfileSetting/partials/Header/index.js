import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { getSx } from "./style";

const Header = ({ edit, setEdit }) => {
  const styles = getSx();

  return (
    <Box sx={styles.header}>
      <Typography sx={styles.heading}>Profile Settings</Typography>
      <Box sx={styles.actIonButtons}>
        {edit ? (
          <>
            <Button
              variant="contained"
              sx={{ ...styles.commonButton, ...styles.cancelButton }}
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ ...styles.commonButton, ...styles.saveButton }}
            >
              Save Changes
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{ ...styles.commonButton, ...styles.editButton }}
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
