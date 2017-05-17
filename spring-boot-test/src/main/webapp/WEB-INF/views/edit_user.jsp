<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
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
--%>
<script>

    function update(uuid) {
        alert(uuid);
        $.post("/market/api/v1/user/update/" + uuid, function (data, status) {
            $('#editUserForm').html(data);
        });

    }

</script>

<div id="editUserForm" class="container">
    <h2>Edit user</h2>

    <c:if test="${not empty success}">
    <div class="alert alert-success">
        <strong>Success!</strong> User updated successfully.
    </div>
    </c:if>

    <c:if test="${not empty errors}">
    <div class="alert alert-danger">
        Error in updating user information.
    </div>
    </c:if>


    <form class="form-horizontal">
        
        <div class="form-group">
            <label class="control-label col-sm-2" for="fname">First name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="fname" value="${user.fname}" name="fname">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="lname">Last name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="lname" value="${user.lname}" name="lname">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="email" value="${user.email}" name="email">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="phone">Phone number:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="phone" value="${user.phone}" name="phone">
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
                <button type="button" class="btn btn-default" onclick=update('${user.uuid}')>Save</button>
            </div>
        </div>

    </form>
    <%--</div>

    </body>
    </html>--%>
