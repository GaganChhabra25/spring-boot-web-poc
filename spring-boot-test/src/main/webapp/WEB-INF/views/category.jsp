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
<style>
    .control-label {
        margin-left: -90px;
    }

    .btn {
        margin-left: -85px;
    }

    hr {

        margin-top: 0.5em;
        margin-bottom: 2em;
        margin-left: auto;
        margin-right: auto;
        border-style: ridge;

    }
</style>

<div id="category" class="container">
    <h2>Add Category</h2>

    <hr>

    <c:if test="${not empty success}">
    <div class="alert alert-success">
        <strong>Success!</strong> User updated successfully.
    </div>
    </c:if>

    <c:if test="${not empty errors}">
    <div class="alert alert-danger">
        <strong>Error!</strong> Please provide valid user information.
    </div>
    </c:if>


    <form class="form-horizontal">

        <div class="form-group">
            <label class="control-label col-sm-3" for="name">Category name:</label>
            <div class="col-sm-8">
                <input type="text" size="70%" class="form-control" id="name" name="name">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="description">Description:</label>
            <div class="col-sm-8">
                <input type="text" size="70%" class="form-control" id="description" name="description">
            </div>
        </div>
        <div class="form-group">
            <label for="sel1" class="control-label col-sm-3">Select list (select one): </label>
            <div class="col-sm-8">
                <select class="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default" onclick=update()>Save</button>
            </div>
        </div>

    </form>
    <%--</div>

    </body>
    </html>--%>
