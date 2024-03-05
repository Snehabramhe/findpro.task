export const getSx = () => {
  return {
    wrapper: {
      width: "100%",
      marginTop: "1rem",
      marginLeft: "1rem",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "600",
    },
    inputFields: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: "100%",
    },
    heading2: {
      fontSize: "20px",
      fontWeight: "600",
    },
    heading3: {
      fontSize: "18px",
      fontWeight: "500",
    },
    inputAdornment: {
      "& p": {
        fontSize: "20px",
        fontWeight: "600",
        olor: "#000000",
        marginRight: '10px'
      },
    },
    buttonWrapper: {
      margin: "1.5rem 0",
      columnGap: "1.5rem",
      display: "flex",
      alignItems: "center",
    },
    commonButton: {
      height: "40px",
      boxShadow: "none !important",
      color: "#0B0E1E",
      background: "transparent",
      "&:hover": {
        color: "#0B0E1E",
        background: "transparent",
      },
    },
    activeButton: {
      width: "100px",
      color: "#1E5DFF",
      background: "#F4F8FF",
      "&:hover": {
        color: "#1E5DFF",
        background: "#F4F8FF",
      },
    },
  };
};