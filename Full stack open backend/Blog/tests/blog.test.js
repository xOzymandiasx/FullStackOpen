const dummy = require("../utils/list_helper").dummy;
const totalLikes = require("../utils/list_helper").totalLikes;

test("Dummy return 1", () => {
  const blogs = [];

  const result = dummy(blogs);
  expect(result).toBe(1);
});

describe("total likes", () => {
  const blogs = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    expect(totalLikes(blogs)).toBe(5);
  });
});
