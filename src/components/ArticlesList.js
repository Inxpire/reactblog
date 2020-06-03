import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesList = ({ articles }) => (
    <>
        <h1>Article List</h1>
        {articles.map((article, key) =>
            <div>
                <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                </Link>
                <p>{article.content[0].substring(0, 150)}...</p>
            </div>
        )}
    </>
);

export default ArticlesList;