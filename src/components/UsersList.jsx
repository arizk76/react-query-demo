import { useState } from "react";
import { useQuery } from "react-query";
import { fetchUsersList } from "../utils/fetchUsersList";
// import { User } from "./User";

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const url = `https://randomuser.me/api/?seed=dexi-interview?page=${page}&results=${limit}`;

  const { isLoading, data } = useQuery(["users/page", page, limit], () =>
    fetchUsersList({ url })
  );

  if (isLoading) {
    return <h2 className="loading">Loading....</h2>;
  }

  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <h5 style={{ fontSize: "16px" }}>
              Current page number
              <span>{page}</span>
            </h5>
          </div>
          <div>
            <h5 style={{ fontSize: "16px" }}>
              # of users per Page
              <span>{limit}</span>
            </h5>
          </div>
        </div>

        <div className="user-selection">
          <div>
            <label style={{ marginRight: 15 }}>Select Page</label>
            <select
              defaultValue={page}
              onChange={(evt) => {
                setPage(+evt.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <label style={{ marginRight: 15 }}>
              Select # of users per page
            </label>
            <select
              defaultValue={limit}
              onChange={(evt) => {
                setLimit(+evt.target.value);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            {/* <button onClick={() => setLimit((oldLimit) => oldLimit + 5)}>
            Load more
          </button> */}
          </div>
        </div>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Country</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {!data.data ? (
                <tr>
                  <td>
                    <h3 style={{ color: "red", fontSize: 16 }}>
                      Error:{" "}
                      <span style={{ color: "red", fontSize: 12 }}>
                        No data to display
                      </span>
                    </h3>
                  </td>
                </tr>
              ) : (
                data.data.results.map((user) => (
                  <tr key={user.email}>
                    <td className="user-name-cell">
                      <div className="user-img">
                        <img
                          src={user.picture.thumbnail}
                          alt={user.name.first}
                        />
                      </div>

                      <div>
                        <h5 className="user-name">
                          {user.name.first} {user.name.last}
                        </h5>
                        <h6 className="user-email">{user.email}</h6>
                      </div>
                    </td>
                    <td className="user-id">
                      <h6>{user.login.username}</h6>
                    </td>
                    <td className="user-age">
                      <h5>{user.dob.age}</h5>
                    </td>
                    <td className="user-phone">
                      <h4>
                        Phone: <span>{user.phone}</span>
                      </h4>
                      <h4>
                        Cell: <span>{user.cell}</span>
                      </h4>
                    </td>
                    <td className="user-country">{user.location.country}</td>
                    <td className="user-country">{user.location.city}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h4> Page {page} of 10</h4>
        <div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev Page
          </button>
          <button disabled={page === 10} onClick={() => setPage(page + 1)}>
            Next Page
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
