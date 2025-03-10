import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../JS/Actions/UserActions';

const UserList = () => {

  const dispatch = useDispatch()

  const users = useSelector(state=> state.userReducer.users)

    const TABLE_HEAD = ["First name", "Last name", "Email", "Role"];

    const TABLE_ROWS = users


    useEffect(() => {
      dispatch(getUsers())
    }, [dispatch])
    
    console.log(users)
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-4">
      <h2 className="text-3xl py-6">User List</h2>

      <div className="bg-white min-w-3/5 min-h-2/6 p-12  rounded-xl">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <h1 className="text-xs text-gray-700 leading-none">
                      {head}
                    </h1>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ firstName, lastName, email, isAdmin }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={firstName}>
                    <td className={classes}>
                      <h3
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {firstName}
                      </h3>
                    </td>
                    <td className={classes}>
                      <h3
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lastName}
                      </h3>
                    </td>
                    <td className={classes}>
                      <h3
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </h3>
                    </td>
                    <td className={classes}>
                      <h3
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {isAdmin ? "Admin" : "Member"}
                      </h3>
                    </td>
                    <td className={classes}>
                      <h3
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList