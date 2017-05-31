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

    }
</script>
<div id="subcategory" class="container">
    <h2>Add Sub-Category</h2>

    <hr>
    <div id="messages"></div>

    <form class="form-horizontal" onload="getAllcategories()">

        <div class="form-group">
            <label class="control-label col-sm-3" for="name">Sub-category name:</label>
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
            <label for="multiple-checkboxes" class="control-label col-sm-3">Categories: </label>
            <div class="col-sm-8">
                <select id="multiple-checkboxes" multiple="multiple" class="form-control">
                    <c:forEach items="${categories}" var="category" varStatus="counter">
                        <option>${category.name}</option>
                    </c:forEach>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default" onclick=save(${categories.})>Save</button>
            </div>
        </div>


    </form>
</div>
<%--</div>

</body>
</html>--%>
