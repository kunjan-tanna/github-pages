import { TextField } from "@mui/material";
import React from "react";

function SearchBoxUser(props) {
   const { handleChange } = props;
   return (
      <>
         <TextField
            id="standard-basic"
            label="Search User"
            variant="standard"
            fullWidth
            onInput={(e) => handleChange(e.target.value)}
         />
      </>
   );
}

export default SearchBoxUser;
