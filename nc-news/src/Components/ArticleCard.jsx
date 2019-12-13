import React from "react";
import {Link} from '@reach/router'
import {StyledArticleCard} from './Styles/StyledArticleCard'

const ArticleCard = ({ article }) => {
  return (
    
    <StyledArticleCard>
      <Link to = {`/articles/${article.article_id}`}>
      <h3>{article.title}</h3>
      <p>{article.author}</p></Link>
    </StyledArticleCard>
  );
};

export default ArticleCard;
