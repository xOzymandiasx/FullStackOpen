const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item;

  const arrayLikes = [];
  blogs.forEach((item) => arrayLikes.push(item.likes));

  return blogs.length === 0
    ? 0
    : blogs.length === 1
    ? blogs[0].likes
    : arrayLikes.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const blogWithMoreLikes = blogs.reduce((max, shot) => {
    return shot.likes >= max.likes ? shot : max;
  });
  delete blogWithMoreLikes.__v;
  delete blogWithMoreLikes.url;
  delete blogWithMoreLikes._id;

  return blogWithMoreLikes;
};

const mostBlogs = (blogs) => {

  const arrayAuthros = [];
  blogs.forEach(item => arrayAuthros.push(item.author))
  const authorLikes = arrayAuthros.reduce((acumulador, pasada) => {
    return ({...acumulador, [pasada]: (acumulador[pasada] || 0) + 1})
  }, {});
  const finalArray = [];
for (let values in authorLikes) {
  finalArray.push({author: values, blogs: authorLikes[values]});
};

  const finalArrayReducer = finalArray.reduce((acumulador, pasada) => {
    return pasada.blogs >= acumulador.blogs ? pasada :acumulador
  });

  return finalArrayReducer;
};

const mostLikes = (blogs) => {
  const authorLikes = blogs.reduce((acumulador, item) => {
    return ({...acumulador, [item.author]: (acumulador[item.author] || 0) + item.likes})
  }, {});

  const arrayAuthorsLikes = [];
  for (let value in authorLikes) {
    arrayAuthorsLikes.push({author: value, likes: authorLikes[value]});
  };

  const result = arrayAuthorsLikes.reduce((acumulador, item) => {
    return item.likes >= acumulador.likes ?item :acumulador;
    });

  return result;
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
