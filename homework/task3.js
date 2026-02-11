const users = [
    { id: 101, username: 'Alice', avatar: 'alice.jpg' },
    { id: 102, username: 'Bob', avatar: 'bob.jpg' },
    { id: 103, username: 'Charlie', avatar: 'charlie.jpg' },
];

const posts = [
    { id: 1, authorId: 101, text: 'Что нового в JavaScript? #js' },
    { id: 2, authorId: 102, text: 'Люблю готовить пасту! #рецепты' },
];

const comments = [
    { id: 1001, postId: 2, authorId: 101, text: 'Выглядит аппетитно!' },
    { id: 1002, postId: 1, authorId: 102, text: 'Жду async/await в примерах.' },
    { id: 1003, postId: 2, authorId: 103, text: 'Какой соус лучше использовать?' },
];
function enrichPosts(posts, users, comments) {
    const groupPosts = posts.reduce((acc, post) => {
    // Нахождение автора поста
    const author = users.find(user => user.id === post.authorId);

    // Нахождение комментариев к посту
    const commentsForPost = comments.filter(comment => comment.postId === post.id);

    // Изменение authorId на author с информацией об авторе
    const commentAuthorsForPost = commentsForPost.reduce((acc, comment) => {
        acc.push({ id: comment.id, postId: comment.postId, author: author, text: comment.text });
        return acc;
    }, []);
    acc.push({ id: post.id, text: post.text, author: author, comments: commentAuthorsForPost });

    return acc;
}, []);

return groupPosts;
}

console.log(JSON.stringify(enrichPosts(posts, users, comments), null, 2));