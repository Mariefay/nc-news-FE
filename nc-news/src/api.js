import axios from "axios";

const baseUrl = "https://nc-news-api-marie.herokuapp.com/api";

export const getArticles = (topic, sortBy) => {
  return axios.get(`${baseUrl}/articles`, {
    params: {
      topic,
      sortBy

  }} ).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = articleId => {
  return axios.get(`${baseUrl}/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};
export const getUser = username => {
  return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const getCommentsByID = articleId => {
  return axios.get(`${baseUrl}/articles/${articleId}/comments`).then(({data}) => {
    return data.comments;
  })
}

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then(({ data }) => {
    return data.topics;
  })
}

export const updateVotes = (articleId, votes) => {
  return axios.patch(`${baseUrl}/articles/${articleId}`, { inc_votes: votes }).then(({ data }) => {
    return data.article.votes;
  })
}

export const updateVotesComments = (commentId, votes) => {
  return axios.patch(`${baseUrl}/comments/${commentId}`, { inc_votes: votes }).then(({ data }) => {
    return data.comment.votes;
  })
}