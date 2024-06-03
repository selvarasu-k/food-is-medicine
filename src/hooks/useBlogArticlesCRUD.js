import { useEffect, useState } from "react";
import {
  deleteArticles,
  getArticles,
  postArticles,
  putArticles,
} from "../http";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function useBlogArticlesCRUD() {

  const initialValues = {
    post_title: "",
    post_body: "",
    post_categories: "",
    post_tags: [],
    post_image: "",
    author: "",
    post_date: "",
  };

  const [articles, setArticles] = useState(initialValues); // Every article crud actions

  const [editMode, setEditMode] = useState(false); // create and update actions

  const navigate = useNavigate();

  const params = useParams();

  const getArticleId = params.postId; // Get current post id

  const location = useLocation();

  // Create Article, Post Request Method

  const callCreateArticle = async () => {
    if(!editMode) {
      try {
        postArticles(articles);
        setArticles(initialValues);
        setEditMode(false);
        navigate("/food-is-medicine/blog");
      } catch (error) {
        window.confirm(error);
      }
    }
  };

  // Read Article, Get Request Method

  useEffect(() => {
    const fetchArticles = async () => {
      if(getArticleId) {
        try {
          const getArticle = await getArticles(
            "https://json-server-deployment-uepg.onrender.com/articles/" + getArticleId
          );
          setArticles(getArticle);
          setEditMode(true);
        } catch (error) {
          navigate("/food-is-medicine/error");
        }
      } else {
        setArticles({
          post_title: "",
          post_body: "",
          post_categories: "",
          post_tags: "",
          post_image: "",
          author: "",
          post_date: "",
        });
        setEditMode(false);
      }
    };
    fetchArticles();
  }, [setArticles, setEditMode, getArticleId, navigate, location]);

  // Update Article, Put Request Method

  const callEditArticle = async () => {
    if(editMode) {
      if(getArticleId) {
        try {
          await putArticles(getArticleId, articles);
          navigate("/food-is-medicine/blog");
        } catch (error) {
          window.confirm(error);
        }
      } else {
        setArticles({ ...initialValues });
      }
    }
  };

  // Delete Article, Delete Request Method

  const callDeleteArticle = async () => {
    try {
      await deleteArticles(getArticleId);
      navigate("/food-is-medicine/blog");
      toast.success("Blog post " + articles.post_title + " is deleted successfully.");
    } catch (error) {
      window.confirm(error);
    }
  };

  return {
    // crud articles data
    articles,
    setArticles,
    editMode,
    // call crud functions, while submit form data
    callCreateArticle,
    callEditArticle,
    callDeleteArticle,
  };
}