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
<div class="container">
    <h2>Add product</h2>

    <hr>

    <form class="form-horizontal" action="">

        <div class="form-group">
            <label class="control-label col-sm-2" for="product">Product name:</label>
            <div class="col-sm-10">
                <input type="text" size="70%" class="form-control" id="product" placeholder="Enter product name"
                       name="product">
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-2" for="description">Description:</label>
            <div class="col-sm-10">
                <input type="text" size="70%" class="form-control" id="description"
                       placeholder="Enter product description"
                       name="description">
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-2" for="price">Price:</label>
            <div class="col-sm-10">
                <input type="text" size="70%" class="form-control" id="price" placeholder="Enter product description"
                       name="price">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default">Save</button>
            </div>
        </div>


    </form>
</div>
