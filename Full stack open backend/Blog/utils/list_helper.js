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

module.exports = { dummy, totalLikes, favoriteBlog };
