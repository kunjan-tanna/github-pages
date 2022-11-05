import { Box, Card, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Repo(props) {
   const { userRepo, handleChangeRepo } = props;
   console.log("UERR", userRepo);

   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
               <TextField
                  id="standard-basic"
                  label="Search Repo"
                  variant="standard"
                  fullWidth
                  onInput={(e) => handleChangeRepo(e.target.value)}
               />
            </Box>
            <Grid
               container
               spacing={{ xs: 2, md: 3 }}
               columns={{ xs: 4, sm: 8, md: 12 }}
            >
               {userRepo?.length > 0
                  ? userRepo?.map((item, index) => (
                       <Grid item xs={2} sm={4} md={4} key={index}>
                          <Box sx={{ display: "flex", gap: 2 }}>
                             <Typography
                                style={{
                                   fontSize: "20px",
                                   fontWeight: 600,
                                }}
                             >
                                {item?.name ? item?.name : "-"}
                             </Typography>

                             {item?.private ? (
                                <span
                                   style={{
                                      display: "inline-block",

                                      fontWeight: 500,

                                      whiteSpace: "nowrap",

                                      borderRadius: "2em",
                                   }}
                                >
                                   Private
                                </span>
                             ) : (
                                <span
                                   style={{
                                      display: "inline-block",

                                      fontWeight: 500,

                                      whiteSpace: "nowrap",

                                      borderRadius: "2em",
                                   }}
                                >
                                   Public
                                </span>
                             )}
                          </Box>
                          <br />

                          {item?.language ? (
                             <span
                                style={{
                                   backgroundColor: "green",

                                   borderRadius: "5px",
                                   color: "white",
                                }}
                             >
                                {item?.language}
                             </span>
                          ) : (
                             "-"
                          )}

                          <Stack alignItems={"flex-end"}>
                             <span>
                                {item?.stargazers_count
                                   ? item?.stargazers_count
                                   : "0"}{" "}
                                Stars
                             </span>
                             <span>
                                {item?.watchers_count
                                   ? item?.watchers_count
                                   : "0"}{" "}
                                Watchers
                             </span>
                          </Stack>
                       </Grid>
                    ))
                  : "-"}
            </Grid>
         </Box>
      </>
   );
}

export default Repo;
