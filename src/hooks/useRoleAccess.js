import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLoader } from "../util/auth";
import { roleLoader } from "../util/roleaccess";

export function useRoleAccess(getRequest, roleBasedAccess) {
  
  const [haveadd, addchange] = useState(false);
  // const [haveview, viewchange] = useState(false);
  const [haveedit, editchange] = useState(false);
  const [havedelete, removechange] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    GetUserAccess();
  });

  const authId = authLoader();
  const roleAccess = roleLoader();

  const getAuthId = authId != null ? authId.toString() : "";

  const userrole = roleAccess != null ? roleAccess.toString() : "";

  const GetUserAccess = async () => {
    if (getAuthId !== null) {
      try {
        const checkAuthId = getAuthId !== '' ? "?email=" + getAuthId : '';
        const getUser = await getRequest(
          "https://json-server-deployment-uepg.onrender.com/users" + checkAuthId
        );
        let userobj = getUser[0];
        const user = userobj.email === getAuthId;
        if (user) {
          try {
            const checkUserRole = userrole !== '' ? "?role=" + userrole : "";
            const getRole = await roleBasedAccess(checkUserRole);
            if (getRole.length > 0) {
              // viewchange(true);
              let userobj = getRole[0];
              editchange(userobj.haveedit);
              addchange(userobj.haveadd);
              removechange(userobj.havedelete);
            }
          } catch (error) {
            navigate("/food-is-medicine");
            addchange(false);
            editchange(false);
            removechange(false);
            return window.confirm(error);
          }
        } else {
          addchange(false);
          editchange(false);
          removechange(false);
          return;
        }
      } catch (error) {
        addchange(false);
        editchange(false);
        removechange(false);
        return window.confirm(error);
      }
    } else {
      addchange(false);
      editchange(false);
      removechange(false);
      return;
    }
  };

  return {
    haveadd,
    haveedit,
    havedelete,
  };
}
