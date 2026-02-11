const posts = [
    { id: 10, title: 'Что нового в JavaScript?' },
    { id: 11, title: 'CSS трюки для начинающих' },
];

const comments = [
    { postId: 11, text: 'Отличная статья, спасибо!' },
    { postId: 10, text: 'Жду async/await в примерах.' },
    { postId: 11, text: 'Всегда забываю про flexbox, полезно.' },
    { postId: 10, text: 'Неплохо, но можно и подробнее.' },
];

const postComments = posts.reduce((acc, post) => {
    // Нахождение комментариев к посту
    const commentsForPost = comments.filter(comment => comment.postId === post.id);
    acc.push({id: post.id, title: post.title, comments: commentsForPost});
    return acc;
}, []);

console.log(JSON.stringify(postComments, null, 2));