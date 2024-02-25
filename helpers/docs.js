// helpers/docs.js

function getDocs(req, res) {
    const docs = {
        "GET /users": {
            "description": "Fetch all users",
            "parameters": "None",
        },
        "GET /users/new": {
            "description": "Create a new user",
            "parameters": "None",
        },
        "GET /users/:id": {
            "description": "Fetch a user by ID",
            "parameters": "id",
            "example": "/users/65c9189957f22131b37218aa",
        },
        "GET /users/:id/update": {
            "description": "Update a user by ID",
            "parameters": "id",
            "example": "/users/65c9189957f22131b37218aa/update",
        },
        "POST /users": {
            "description": "Create a new user",
            "parameters": "None"
        },
        "PUT /users/:id": {
            "description": "Replace a user by ID",
            "parameters": "id",
            "example": "/users/65c9189957f22131b37218aa",
        },
        "PATCH /users/:id": {
            "description": "Update a user by ID",
            "parameters": "id",
            "example": "/users/65c9189957f22131b37218aa",
        },
        "DELETE /users/:id": {
            "description": "Delete a user by ID",
            "parameters": "id",
            "example": "/users/65c9189957f22131b37218aa",
        }
    }
    const htmlLinks = `
        <a href="/" style="text-decoration: none; color: #007bff; margin-right: 10px;">Home page</a>
        <a href="/users" style="text-decoration: none; color: #007bff; margin-right: 10px;">Users list</a>
    `;
    const response = htmlLinks + JSON.stringify(docs, null, 4);
    res.send(response);
}

module.exports = getDocs;
