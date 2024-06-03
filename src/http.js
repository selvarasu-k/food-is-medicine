import axios from "axios";
import { toast } from "react-toastify";

// Users CRUD request operations...

export async function postRequest(enteredValues) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/users", {
    method: "POST",
    body: JSON.stringify(enteredValues),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send user data");
  }

  const resData = await response.json();
  return resData;
}

export async function getRequest(fetchUser) {
  const response = await fetch(fetchUser);

  if (!response.ok) {
    throw new Error("Failed to fetch users data");
  }

  const resData = await response.json();
  return resData;
}

export async function patchRequest(updateRequest, updateUser) {
  const response = await fetch(updateRequest, {
    method: "PATCH",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }

  const resData = await response.json();
  return resData;
}

export async function deleteRequest(getUserId) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/users/" + getUserId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user data");
  }

  const resData = await response.json();
  return resData;
}

export async function getIdRequest(getAuthId) {
  if (getAuthId !== null) {
    try {
      const checkAuthId = getAuthId !== "" ? "?email=" + getAuthId : "";
      const getUser = await getRequest(
        "https://json-server-deployment-uepg.onrender.com/users" + checkAuthId
      );
      let userobj = getUser[0];
      const user = userobj.email === getAuthId;
      if (user) {
        return userobj.id;
      } else {
        return;
      }
    } catch (error) {
      return toast.error(error);
      // return window.confirm("Failed to fetch user id");
    }
  } else {
    return;
  }
}

export async function roleBasedAccess(checkUserRole) {
  const response = await fetch(
    "https://json-server-deployment-uepg.onrender.com/roleaccess" + checkUserRole
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user role");
  }

  const resData = await response.json();
  return resData;
}

export async function postCloudnaryImageRequest(cloud_name, formData) {
  const getImageUrl = await axios
    .post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    )
    .then((res) => {
      return res.data.secure_url;
    })
    .catch((err) => {
      return window.confirm(err);
    });

  return getImageUrl;
}

// Articles CRUD request operations...

export async function postArticles(articles) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/articles", {
    method: "POST",
    body: JSON.stringify(articles),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send blog post articles");
  }

  const resData = await response.json();
  return resData;
}

export async function getArticles(fetchArticle) {
  const response = await fetch(fetchArticle);

  if (!response.ok) {
    throw new Error("Failed to fetch articles data");
  }

  const resData = await response.json();
  return resData;
}

export async function putArticles(getArticleId, articles) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/articles/" + getArticleId, {
    method: "PUT",
    body: JSON.stringify(articles),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update article data");
  }

  const resData = await response.json();
  return resData;
}

export async function deleteArticles(getArticleId) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/articles/" + getArticleId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete article data");
  }

  const resData = await response.json();
  return resData;
}

// Our newsletter, subscribers lists...

export async function postLetter(subscriber) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/subscribers", {
    method: "POST",
    body: JSON.stringify(subscriber),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send subscriber email");
  }

  const resData = await response.json();
  return resData;
}

// Contacts, submit users contact data...

export async function postContact(contact) {
  const response = await fetch("https://json-server-deployment-uepg.onrender.com/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send user contact data");
  }

  const resData = await response.json();
  return resData;
}