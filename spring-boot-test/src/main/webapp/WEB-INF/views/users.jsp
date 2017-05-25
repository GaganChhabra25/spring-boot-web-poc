<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%--<script src="dist/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/sweetalert.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<link rel="stylesheet" href="node_modules/sweetalert/dist/sweetalert.css">--%>

<script>

    function edit(uuid) {
        $.get("/market/api/v1/user/" + uuid, function (data, status) {
            $('#users').html(data);
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('uuid', uuid);
            }
        });
    }

    function deleteUser(r, uuid) {
        $.ajax({
            type: "DELETE",
            url: "/market/api/v1/user/delete/" + uuid,
            success: function (result) {
                $('.modal').modal('hide');
                $.get("/market/api/v1/user/users", function (data, status) {
                    $('#users').html(data);
                });
                /*   // $('#userToDelete').html(result);
                 var i = r.parentNode.parentNode.rowIndex;
                 document.getElementById("table").deleteRow(i);
                 $('#messages').show();*/
            }
        });
    }
</script>


<div id="users" class="container">
    <h2>Users</h2>

    <c:if test="${not empty success}">
        <div class="alert alert-success">
            <strong>Success!</strong> User deleted successfully.
        </div>
    </c:if>

    <c:if test="${not empty errors}">
        <div class="alert alert-danger">
            Unable to delete user. Please try again later.
        </div>
    </c:if>

    <p></p>
    <%--    <p>The length of the companies collection is : ${fn:length(usersList)}</p>
        <c:when test="${fn:length(usersList) gt 0}">--%>
    <table id="table" class="table">
        <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>

        </tr>
        </thead>
        <tbody>
        <c:forEach items="${usersList}" var="user" varStatus="counter">
            <tr id="userToDelete">
                <td> ${counter.count}</td>
                <td>${user.fname} ${user.lname}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
                <td>
                        <%--  <button id="edit" type="button" class="btn btn-primary" onclick=edit('${user.uuid}')>Edit</button>--%>
                    <button id="edit" type="button" class="btn btn-default btn-sm" onclick=edit('${user.uuid}')
                            data-toggle="tooltip" data-placement="top" title="Edit">
                        <span class="glyphicon glyphicon-edit"></span>
                    </button>

                    <button id="delete" type="button"
                            class="btn btn-default btn-sm" data-toggle="modal"
                            data-target="#confirm-delete-${user.uuid}"
                            data-toggle="tooltip" data-placement="top" title="Delete">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>

                    <div class="modal" id="confirm-delete-${user.uuid}" tabindex="-1" role="dialog"
                         aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">Confirm Delete</h4>
                                </div>

                                <div class="modal-body">
                                    <p>You are about to delete user.</p>
                                    <p>Do you want to proceed?</p>
                                    <p class="debug-url"></p>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary"
                                            onclick=" deleteUser($(
                                                    '#delete'), '${user.uuid}')">Delete
                                    </button>
                                        <%--  <a class="btn btn-danger btn-ok" data-dismiss="modal"
                                             onclick="deleteUser($('#delete'), '${user.uuid}')">Delete</a>--%>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        $('#confirm-delete-${user.uuid}').on('show.bs.modal', function (e) {
                            $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
                        });
                    </script>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
    <%--    </c:when>
        <c:otherwise>
            <h1>No user exist</h1>
        </c:otherwise>--%>
</div>

<%--</body>
</html>--%>
