import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "../http";

export function useUsersReadProfile() {

    const { pathname } = useLocation();
    const [usersData, setUsersData] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    const usersDataLength = usersData && usersData.length === 0;
  
    // Read Profile, Get Request Method, Read Every And Filtered Users
  
    useEffect(() => {
      const GetUser = async () => {
        try {
          setIsLoading(true);
          const getUser = await getRequest("https://json-server-deployment-uepg.onrender.com/users");
          setIsLoading(false);
          setUsersData(getUser);
        } catch (error) {
          window.confirm(error);
        }
      };
  
      GetUser();
    }, [setUsersData, pathname]);
  
    const filteredUsersData =
      usersData &&
      usersData.filter((user) => {
        return user.role !== "User";
    });

    return {
        filteredUsersData,
        usersDataLength,
        isLoading
    }
}