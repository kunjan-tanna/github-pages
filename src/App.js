import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "alertifyjs/build/css/alertify.css";

import "./App.css";
import Main from "./pages/Main";
import { apiCall } from "./utils/common";

function App() {
   const [username, setUsername] = useState("");
   const [userRepoName, setUserRepoName] = useState("");
   const [userData, setUserData] = useState({});
   const [userRepo, setUserRepo] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      if (username !== "" && username.length >= 2) {
         // To get the particular user API
         getUserData();
         // To get the All Repo
         getUserRepo();
      } else {
         setUserData({});
         setUserRepo([]);
         setLoading(false);
      }
   }, [username]);

   useEffect(() => {
      getUserRepo();
   }, [userRepoName]);

   const handleChange = (username) => {
      setUsername(username);
   };
   const handleChangeRepo = (userRepo) => {
      setUserRepoName(userRepo);
   };

   const getUserData = async () => {
      let res = await apiCall("GET", `users/${username}`);
      console.log("RESS", res);
      setUserData(res);
      setLoading(false);
   };

   const getUserRepo = async () => {
      if (username !== "") {
         let res = await apiCall(
            "GET",
            `users/${username}/repos?per_page=10&sort=updated`
         );
         if (res) {
            let filteredData = res.filter((data) => {
               return (
                  data?.name
                     ?.toLowerCase()
                     .indexOf(userRepoName?.toLowerCase()) !== -1
               );
            });
            setLoading(false);
            setUserRepo(filteredData);
         }
      }
   };
   return (
      <>
         <Main
            userData={userData}
            userRepo={userRepo}
            loading={loading}
            handleChange={handleChange}
            handleChangeRepo={handleChangeRepo}
         />
      </>
   );
}

export default App;
