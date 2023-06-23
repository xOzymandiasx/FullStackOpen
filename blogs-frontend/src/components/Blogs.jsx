
const Blogs = ({ blog }) => {
  const {title, author, id} = blog

  return (
    <p>{title} {author}</p>
  )
}

export default Blogs;