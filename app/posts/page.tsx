import CardList from "../components/Post/CardList";
import ViewUserButton from "../components/Post/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  Id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url);
  const posts: Iposts[] = await response.json();
  return (
    <>
      <h1 className="text-fuchsia-500">POST PAGE</h1>
      {posts.map((post) => {
        
        return (
          <CardList>
            <p>{post.Id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
