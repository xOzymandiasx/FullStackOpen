const dummy = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item;

  const arrayLikes = [];
  blogs.forEach(item => arrayLikes.push(item.likes));

  return blogs.length === 1 
   ? blogs[0].likes
   : arrayLikes.reduce(reducer, 0);
}

module.exports = {dummy, totalLikes};