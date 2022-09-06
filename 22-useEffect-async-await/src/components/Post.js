import './post.css';

function Post(props) {
  const { userId, id, title, body } = props.value;
  return (
    <div className="post">
      <h2>
        <span>({id}) </span>User: {userId}:
      </h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
