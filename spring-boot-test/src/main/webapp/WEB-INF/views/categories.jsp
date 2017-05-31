<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%--<script src="dist/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/sweetalert.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<link rel="stylesheet" href="node_modules/sweetalert/dist/sweetalert.css">--%>

<script>

    function edit(uuid) {
        $.ajax({
            type: "GET",
            url: "/market/editCategory/" + uuid,
            success: function (result) {
                $('#categories').html(result);
                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem('uuid', uuid);
                }
            }
        });
    }

    function deleteCategory(r, uuid) {
        $.ajax({
            type: "DELETE",
            url: "/market/api/v1/category/delete/" + uuid,
            success: function (result) {
                $('.modal').modal('hide');
                $.get("/market/api/v1/category/categories", function (data, status) {
                    $('#categories').html(data);
                });
                /*   // $('#userToDelete').html(result);
                 var i = r.parentNode.parentNode.rowIndex;
                 document.getElementById("table").deleteRow(i);
                 $('#messages').show();*/
            }
        });
    }

    function search() {
        var input, filter, table, tr, td, i, tableBody;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        console.log(filter);
        table = document.getElementById("table");
        console.log(table);
        tableBody = document.getElementById("body"); //table.getElementsByTagName("tr");
        console.log(tableBody);
        tr = tableBody.getElementsByTagName("tr");
        console.log(tr);

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            console.log(td);
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
</script>

<style>
    #search {
        background-position: 10px 10px;
        background-repeat: no-repeat;
        width: 30%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid #ddd;
        margin-bottom: 12px;
    }

    #table tr:hover {
        background-color: #f1f1f1;
    }

</style>


<div id="categories" class="container">
    <h2>Categories</h2>

    <input type="text" id="search" onkeyup="search()" placeholder="Search for category names.." title="Type in a name">

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

    <table id="table" class="table">
        <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody id="body">
        <c:forEach items="${categories}" var="category" varStatus="counter">
            <tr id="userToDelete">
                <td> ${counter.count}</td>
                <td>${category.name}</td>
                <td>
                        <%--  <button id="edit" type="button" class="btn btn-primary" onclick=edit('${user.uuid}')>Edit</button>--%>
                    <button id="edit" type="button" class="btn btn-default btn-sm" onclick="edit('${category.uuid}')"
                            data-toggle="tooltip" data-placement="top" title="Edit">
                        <span class="glyphicon glyphicon-edit"></span>
                    </button>

                    <button id="delete" type="button"
                            class="btn btn-default btn-sm" data-toggle="modal"
                            data-target="#confirm-delete-${category.uuid}"
                            data-toggle="tooltip" data-placement="top" title="Delete">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>

                    <div class="modal" id="confirm-delete-${category.uuid}" tabindex="-1" role="dialog"
                         aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">Confirm Delete</h4>
                                </div>

                                <div class="modal-body">
                                    <p>You are about to delete category.</p>
                                    <p>Do you want to proceed?</p>
                                    <p class="debug-url"></p>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary"
                                            onclick=" deleteCategory($(
                                                    '#delete'), '${category.uuid}')">Delete
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
