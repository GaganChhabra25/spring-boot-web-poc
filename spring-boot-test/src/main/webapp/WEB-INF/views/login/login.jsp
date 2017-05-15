<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Spring Login Form</title>
</head>
<style>

    h2 {
        display: block;
        margin-left: 630px;
    }

    h3 {
        display: block;
        color: #f44336;
        text-align: center;
        font-size: 102%;
    }

    body {
        display: block;
        margin: 2px;
    }

    form {
        border: 3px solid #f1f1f1;
        width: 25%;
        margin: auto;
    }

    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        margin: 6px 0;
        border: none;
        cursor: pointer;
        width: 23%;
        margin-right: 86px;
    }

    button:hover {
        opacity: 0.8;
    }

    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    .container {
        padding: 16px;
    }

    span.psw {
        float: right;
        padding-top: 16px;
    }

    button {
        width: 100%;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }

        .cancelbtn {
            width: 50%;
        }
    }
</style>
<body>

<sec:authorize access="isAuthenticated()">
    <% response.sendRedirect("/market/homepage"); %>
</sec:authorize>


<h2>Login</h2>

<c:if test="${not empty error}">
    <h3 class="error">Invalid username/password</h3>
</c:if>

<form name="login_form" action="/market/login" method="POST">
    <%-- <div class="imgcontainer">
         <img src="img_avatar2.png" alt="Avatar" class="avatar">
     </div>--%>

    <div class="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required>

        <div class="container">
            <div>
                <button name="submit" type="submit">Login</button>
            </div>
            <div>
                <a href="/market/register">
                    <button class="psw" name="submit" type="button">Register</button>
                </a>
            </div>

        </div>

    </div>
</form>

</body>
</html>