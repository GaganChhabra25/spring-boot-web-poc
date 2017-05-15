<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
    <h2>Users</h2>
    <p></p>
    <table class="table">
        <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${usersList}" var="user" varStatus="counter">
            <tr>
                <td> ${counter.count}</td>
                <td>${user.fname} ${user.lname}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>

</body>
</html>
