import React, { useEffect, useState } from "react";
import axios from "axios";

    

export const UserAdmin = (): JSX.Element => {

    const[users, setUsers] = useState([]);

    type User = {
        userId: number;
        isAdmin: boolean;
        userName: string;
        userPassword: string;
        userEmail: string;
    };

    const [newUser, setNewUser] = useState({
        userId: 0,
        isAdmin: false,
        userName: "",
        userPassword: "",
        userEmail: "",
    });
    const [updateUser, setUpdateUser] = useState({
        userId: 0,
        isAdmin: false,
        userName: "",
        userPassword: "",
        userEmail: "",
    });
    const [deleteUser, setDeleteUser] = useState({
        userId: 0,
        isAdmin: false,
        userName: "",
        userPassword: "",
        userEmail: "",
    });

    const [insertError, setInsertError] = useState("");
    const [updateError, setUpdateError] = useState("");
    const [deleteError, setDeleteError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get("http://localhost:8080/User/ReadAll")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Error fetching destinations:", error));
    };

    //INSERT
    const handleInsert = () => {
        if (
            !newUser.userName ||
            !newUser.userPassword ||
            !newUser.userEmail
        ) {
            setInsertError("All fields are required for insertion.");
            return;
        }

        axios
            .post("http://localhost:8080/User/Insert", newUser)
            .then(() => {
                fetchUsers();
                setNewUser({
                    userId: 0,
                    isAdmin: false,
                    userName: "",
                    userPassword: "",
                    userEmail: "",
                });
                setInsertError(""); 
            })
            .catch((error) => console.error("Error inserting destination:", error));
    };

    const handleUserSelection = (name: string) => {
        const selectedUser = users.find(
            (user: User) => user.userName === name
        );
        if (selectedUser) {
            setUpdateUser(selectedUser);
        }
    };

     //UPDATE

     const handleUpdate = () => {
        // Validation check
        if (!updateUser.userId) {
            setUpdateError("Please select a destination to update.");
            return;
        }

        axios
            .put("http://localhost:8080/User/Update", updateUser)
            .then(() => {
                fetchUsers();
                setUpdateUser({
                    userId: 0,
                    isAdmin: false,
                    userName: "",
                    userPassword: "",
                    userEmail: "",
                });
                setUpdateError(""); // Clear error message on successful update
            })
            .catch((error) =>
                console.error("Error updating destination:", error)
            );
    };

    //DELETE
    const handleUserSelectionForDelete = (name: string) => {
        const selectedUser = users.find(
            (user: User) => user.userName === name
        );
        if (selectedUser) {
            setDeleteUser(selectedUser);
        }
    };

    const handleDelete = () => {
        // Validation check
        if (!deleteUser.userId) {
            setDeleteError("Please select a destination to delete.");
            return;
        }

        axios
            .delete(`http://localhost:8080/User/Delete/${deleteUser.userId}`)
            .then(() => {
                fetchUsers();
                setDeleteUser({
                    userId: 0,
                    isAdmin: false,
                    userName: "",
                    userPassword: "",
                    userEmail: "",
                });
                setDeleteError(""); // Clear error message on successful delete
            })
            .catch((error) => console.error("Error deleting destination:", error));
    };

    return(
        <div>
            <h1>Users Administrative Page</h1>
            <h2>Add a User</h2>
            {insertError && <p style={{ color: "red" }}>{insertError}</p>}
            <form>
                <div>
                    <label>Admin User:</label>
                    <input
                        type="checkbox"
                        checked={newUser.isAdmin}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                isAdmin: e.target.checked,
                            })
                        }
                    />
                </div>
                <div>
                    <label>User Name:</label>
                    <input
                        type="text"
                        value={newUser.userName}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                userName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>User Email:</label>
                    <input
                        type="text"
                        value={newUser.userEmail}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                userEmail: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>User Password:</label>
                    <input
                        type="text"
                        value={newUser.userPassword}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                userPassword: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleInsert}>
                    Insert
                </button>
            </form>

            <h2>Update a Users Data</h2>
            {updateError && <p style={{ color: "red" }}>{updateError}</p>}
            <form>
                <div>
                    <label>Select a User to Update:</label>
                    <select
                        onChange={(e) => handleUserSelection(e.target.value)}
                        value={updateUser.userName}
                    >
                        <option value="">Select User</option>
                        {users.map((user: User) => (
                            <option key={user.userId} value={user.userName}>
                                {user.userName}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Updated Users Admin Status:</label>
                    <input
                        type="checkbox"
                        checked={updateUser.isAdmin}
                        onChange={(e) =>
                            setUpdateUser({
                                ...updateUser,
                                isAdmin: e.target.checked,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated Users Name:</label>
                    <input
                        type="text"
                        value={updateUser.userName}
                        onChange={(e) =>
                            setUpdateUser({
                                ...updateUser,
                                userName: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated User Email:</label>
                    <input
                        type="text"
                        value={updateUser.userEmail}
                        onChange={(e) =>
                            setUpdateUser({
                                ...updateUser,
                                userEmail: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>Updated User Password:</label>
                    <input
                        type="text"
                        value={updateUser.userPassword}
                        onChange={(e) =>
                            setUpdateUser({
                                ...updateUser,
                                userPassword: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>

            <h2>Delete a User</h2>
            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
            <form>
                <div>
                    <label>Select User to Delete:</label>
                    <select
                        onChange={(e) => handleUserSelectionForDelete(e.target.value)}
                        value={deleteUser.userName}
                    >
                        <option value="">Select User</option>
                        {users.map((user: User) => (
                            <option key={user.userId} value={user.userName}>
                                {user.userName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </form>

        </div>
    );
};