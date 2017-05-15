<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
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
    <h2>Create user</h2>

    <c:if test="${not empty success}">
        <div class="alert alert-success">
            <strong>Success!</strong> User created
        </div>
    </c:if>

    <c:if test="${not empty errors}">
        <div class="alert alert-danger">
            Please enter valid data.
        </div>
    </c:if>


    <form class="form-horizontal" action="/market/api/v1/user/create" method="POST">
        <div class="form-group">
            <label class="control-label col-sm-2" for="fname">First name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="fname" placeholder="Enter first name" name="fname">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="lname">Last name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="lname" placeholder="Enter last name" name="lname">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="password">Password:</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="phone">Phone number:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="phone" placeholder="Enter phone number" name="phone">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2">Gender:</label>
            <div>
                <label class="radio-inline">
                    <input type="radio" name="gender" value="M">Male
                </label>
                <label class="radio-inline">
                    <input type="radio" name="gender" value="F">Female
                </label>
            </div>

        </div>
        <%--
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label><input type="checkbox" name="remember"> Remember me</label>
                        </div>
                    </div>
                </div>--%>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
        </div>
    </form>
</div>

</body>
</html>
