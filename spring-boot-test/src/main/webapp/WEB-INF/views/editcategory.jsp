<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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

<script>

    function save() {
        var name = $('#name').val();
        var description = $('#description').val();
        $.ajax({
            type: "POST",
            url: "/market/api/v1/category/update/" + localStorage.getItem('uuid'),
            data: {
                "name": name,
                "description": description
            },
            success: function (result) {
                $("#messages").html(result);
            },
            error: function (result) {
                $("#messages").html(result);
            }
        });
    }
</script>

<div id="category" class="container">
    <h2>Edit Category</h2>

    <hr>
    <div id="messages"></div>

    <form class="form-horizontal">

        <div class="form-group">
            <label class="control-label col-sm-3" for="name">Category name:</label>
            <div class="col-sm-8">
                <input type="text" size="70%" class="form-control" id="name" name="name" value="${category.name}">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="description">Description:</label>
            <div class="col-sm-8">
                <input type="text" size="70%" class="form-control" id="description" name="description"
                       value="${category.description}">
            </div>
        </div>
        <%--     <div class="form-group">
                 <label for="sel1" class="control-label col-sm-3">Select list (select one): </label>
                 <div class="col-sm-8">
                     <select class="form-control" id="sel1">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                     </select>
                 </div>
             </div>--%>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default" onclick=save()>Save</button>
            </div>
        </div>


    </form>
</div>
<%--</div>

</body>
</html>--%>
