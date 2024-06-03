import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getArticles } from "../http";

export function useBlogReadArticles() {

  const [articleData, setArticleData] = useState([]); // Show all articles

  const [isItLoading, setIsItLoading] = useState(false);

  const { pathname } = useLocation();

  const orderArticle = articleData
    ?.map((article) => {
      return { ...article, post_date: new Date(article.post_date) };
    })
    .reverse(); // Every post article order by post date

  // Fetch all articles categories

  const blogCategories = [
    ...new Set(articleData?.map((val) => val.post_categories)),
  ];

  // Fetch all articles posts tagged

  const allTags = articleData?.map((tags) => tags.post_tags);

  const mergeTags = allTags.flat();

  const filteredTags = mergeTags.filter(
    (item, index) => mergeTags.indexOf(item) === index
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsItLoading(true);
        const getArticle = await getArticles("https://json-server-deployment-uepg.onrender.com/articles");
        setIsItLoading(false);
        setArticleData(getArticle);
      } catch (error) {
        window.confirm(error);
      }
    };
    fetchArticles();
  }, [setArticleData, pathname]);

  return {
    orderArticle,
    setArticleData,
    isItLoading,
    blogCategories,
    filteredTags,
  };
}