import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getRequest, roleBasedAccess } from "../http";
import { useRoleAccess } from "../hooks/useRoleAccess";
import ScrollToTop from "./ScrollToTop";
import { useUsersAuthCRUD } from "../hooks/useUsersAuthCRUD";
import { useUsersReadProfile } from "../hooks/useUsersReadProfile";
import { useBlogArticlesCRUD } from "../hooks/useBlogArticlesCRUD";
import { useBlogReadArticles } from "../hooks/useBlogReadArticles";

const RootLayout = () => {

  const { haveadd, haveedit, havedelete } = useRoleAccess(
    getRequest,
    roleBasedAccess
  );

  const { filteredUsersData, usersDataLength, isLoading } =
    useUsersReadProfile();

  const {
    addUsersData,
    setAddUsersData,
    updateUsersData,
    setUpdateUsersData,
    callCreateProfile,
    callEditProfile,
    callDeleteProfile,
    isLoadToSubmitting,
    checkEmail,
  } = useUsersAuthCRUD(getRequest);

  const { orderArticle, setArticleData, isItLoading, blogCategories, filteredTags } =
    useBlogReadArticles();

  const {
    articles,
    setArticles,
    editMode,
    callCreateArticle,
    callEditArticle,
    callDeleteArticle,
  } = useBlogArticlesCRUD();

  return (
    <>
      <Header updateUsersData={updateUsersData} />
      <Outlet
        context={{
          // role based users to access
          haveadd,
          haveedit,
          havedelete,
          // show all filtered users data
          filteredUsersData,
          usersDataLength,
          isLoading,
          // users data profile to crud actions
          addUsersData,
          setAddUsersData,
          updateUsersData,
          setUpdateUsersData,
          callCreateProfile,
          callEditProfile,
          callDeleteProfile,
          isLoadToSubmitting,
          checkEmail,
          // show all articles data
          orderArticle,
          setArticleData,
          isItLoading,
          blogCategories,
          filteredTags,
          // blog post article to crud actions
          articles,
          setArticles,
          editMode,
          callCreateArticle,
          callEditArticle,
          callDeleteArticle,
        }}
      />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;