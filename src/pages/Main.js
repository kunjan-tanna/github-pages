import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import Loader from "../utils/Loader";
import Repo from "./Repo";
import SearchBoxUser from "./SearchBoxUser";

function Main(props) {
   const { userData, userRepo, handleChange, handleChangeRepo, loading } =
      props;

   return (
      <>
         <Box
            sx={{
               flexGrow: 1,
               padding: "20px",
               margin: "20px",
            }}
         >
            <Grid
               item
               xs={12}
               style={{ textAlign: "center", paddingBottom: "20px" }}
            >
               <SearchBoxUser handleChange={handleChange} />
            </Grid>

            <Grid container spacing={2}>
               {loading == true ? (
                  <Loader />
               ) : (
                  <>
                     <Grid item xs={4}>
                        <Card
                           sx={{
                              height: "auto",
                              // width: "60%",
                           }}
                        >
                           <img
                              src={
                                 userData?.avatar_url
                                    ? userData?.avatar_url
                                    : "./Images/default.png"
                              }
                              style={{
                                 display: "inline-block",
                                 overflow: "hidden",
                                 lineHeight: 1,
                                 verticalAlign: "middle",

                                 borderRadius: "50px",
                                 flexShrink: 0,
                              }}
                              alt="avtar"
                              width={"260px"}
                           />
                           <Typography style={{ fontSize: "24px" }}>
                              {userData?.name ? userData?.name : "-"}
                           </Typography>
                           <Typography
                              style={{ fontSize: "20px" }}
                              sx={{ color: "text.secondary", pb: 2 }}
                           >
                              {userData?.login ? userData?.login : "-"}
                           </Typography>
                           <Typography>
                              {userData?.bio ? userData?.bio : "-"}
                           </Typography>
                           <Typography sx={{ pt: 2 }}>
                              Created On :
                              {userData?.created_at
                                 ? moment(userData?.created_at).format(
                                      "DD/MM/YYYY"
                                   )
                                 : "-"}
                           </Typography>
                        </Card>
                     </Grid>
                     <Grid item xs={8}>
                        <Repo
                           userRepo={userRepo}
                           handleChangeRepo={handleChangeRepo}
                        />
                     </Grid>
                  </>
               )}
            </Grid>
         </Box>
      </>
   );
}

export default Main;
