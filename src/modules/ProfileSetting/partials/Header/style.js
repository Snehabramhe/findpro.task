export const getSx = () => {
  return {
    wrapper: {
      padding: "5%",
      width: "100%",
      boxSizing: "border-box",
    },
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    heading: {
      fontSize: '30px',
      fontWeight: '600'
    },
    actIonButtons: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      columnGap: "10px",
    },
    commonButton: {
      height: "40px",
      boxShadow: 'none !important',
    },
    cancelButton: {
      width: "100px",
      color: "#0B0E1E",
      background: "#EDEDED",
      "&:hover": {
        color: "#0B0E1E",
        background: "#EDEDED",
      },
    },
    editButton: {
      width: "150px",
      color: "#0B0E1E",
      background: "#EDEDED",
      "&:hover": {
        color: "#0B0E1E",
        background: "#EDEDED",
      },
    },
    saveButton: {
      width: "150px",
      color: "#FFFFFF",
      background: "#0B0E1E",
      "&:hover": {
        color: "#FFFFFF",
        background: "#0B0E1E",
      },
    },
  };
};
