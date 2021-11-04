import "./styles.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { UsersList } from "./components/UsersList";

export default function App() {
  return (
    <div className="App">
      <h1>react-query demo</h1>
      <h2>Start learing react-query</h2>
      <h5>
        The API takes <strong>page</strong> and <strong>results</strong> as
        query string{" "}
      </h5>
      <code>eg: `?page=3&results=10`</code>
      {/* 
        Fetch 5 users from the api
        https://randomuser.me/api/?seed=dexi-interview and display them in a
        table. A table-example.png has been provided for guidance on styling.
        Pay close attention to empty and loading states The table should also
        have a Load More button that fetches the next page of the API and
        appends the results to the existing users.
      
      
        hint: the API takes page and results as query string eg:
        `?page=3&results=10`
      */}
      <UsersList />
      <ReactQueryDevtools position="bottom-right" />
    </div>
  );
}
