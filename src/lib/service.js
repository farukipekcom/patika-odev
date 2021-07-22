import axios from "axios";

async function getData(user_id) {
  const user = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const user_post = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  );
  console.log(user.data);
  console.log(user_post.data);
}

export default getData;
