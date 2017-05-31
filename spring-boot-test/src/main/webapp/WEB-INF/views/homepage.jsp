<!DOCTYPE html>
<html lang="en">

<head>

    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../static/homepage-left-panel.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <%--    <script>
            $(document).ready(function () {
                $("products_link").click(function () {
                    $.ajax({
                        url: "/market/api/v1/product/products", success: function (result) {
                            $("#div1").html(result);
                        }
                    });
                });
            });
        </script>--%>
    <style>
        /* Remove the navbar's default margin-bottom and rounded borders */
        .navbar {
            margin-bottom: 0;
            border-radius: 0;
        }

        /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
        .row.content {
            height: 803px;
        }

        /* Set gray background color and 100% height */
        .sidenav {
            padding-top: 20px;
            background-color: #f1f1f1;
            height: 100%;
        }

        /* Set black background color, white text and some padding */
        footer {
            background-color: #555;
            color: white;
            padding: 15px;
        }

        /* On small screens, set height to 'auto' for sidenav and grid */
        @media screen and (max-width: 767px) {
            .sidenav {
                height: auto;
                padding: 15px;
            }

            .row.content {
                height: auto;
            }
        }

        .wraper {
            position: relative;
            min-height: 100vh;
            position: relative;

        }

        .footer {
            padding-bottom: 0px;
            margin-top: 5px;
        }

        .btn-primary {
            color: #fff;
            background-color: #337ABE;
        }

    </style>
</head>

<body>

<script>
    $(document).ready(function () {
        $("#products_link").click(function () {
            $.get("/market/api/v1/user/users", function (data, status) {
                $('#welcome').html(data);
            });
        });

        $("#add").click(function () {
            $.get("/market/product", function (data, status) {
                $('#welcome').html(data);
            });
        });

        $("#addCateory").click(function () {
            $.get("/market/category", function (data, status) {
                $('#welcome').html(data);
            });
        });


        $("#subCategory").click(function () {
            $.get("/market/subcategory", function (data, status) {
                $('#welcome').html(data);
            });
        });


        /*  $("#editCategory").click(function () {
         $.get("/market/editcategory", function (data, status) {
         $('#welcome').html(data);
         });
         });*/

        $("#viewCategories").click(function () {
            $.get("/market/categories", function (data, status) {
                $('#welcome').html(data);
            });
        });
    });
</script>

<div class=wraper>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/market/homepage">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/market/logout"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid text-center">
        <div class="row content">
            <div class="col-sm-2 sidenav">

                <div id="products_link"><p><a href="javascript:void(0);">Users</a></p></div>

                <p><a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false"
                      aria-controls="collapseExample">
                    Product
                </a></p>

                <div class="collapse" id="collapseExample">
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">

                            <div class="card-header" role="tab">
                                <h5 class="mb-0">
                                    <a id="add" data-toggle="collapse" data-parent="#accordion"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Add
                                    </a>
                                </h5>
                            </div>

                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Edit
                                    </a>
                                </h5>
                            </div>

                        </div>
                    </div>
                </div>

                <p><a class="btn btn-primary" data-toggle="collapse" href="#categorycollapse" aria-expanded="false"
                      aria-controls="collapseExample">
                    Category
                </a></p>

                <div class="collapse" id="categorycollapse">
                    <div id="categoryList" role="tablist" aria-multiselectable="true">
                        <div class="card">

                            <div class="card-header" role="tab">
                                <h5 class="mb-0">
                                    <a id="addCateory" data-toggle="collapse" data-parent="#accordion"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Add Category
                                    </a>
                                </h5>
                            </div>

                            <div class="card-header" role="tab">
                                <h5 class="mb-0">
                                    <a id="subCategory" data-toggle="collapse" data-parent="#accordion"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Add subcategory
                                    </a>
                                </h5>
                            </div>

                            <div class="card-header" role="tab">
                                <h5 class="mb-0">
                                    <a id="viewCategories" data-toggle="collapse" data-parent="#accordion"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        View Categories
                                    </a>
                                </h5>
                            </div>

                            <div class="card-header" role="tab">
                                <h5 class="mb-0">
                                    <a id="editCategory" data-toggle="collapse" data-parent="#accordion"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Edit category
                                    </a>
                                </h5>
                            </div>

                        </div>
                    </div>
                </div>
                <%--   <div id="category"><p><a>Category</a></p></div>--%>
            </div>


            <div id="welcome" class="col-sm-8 text-left">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi
                    ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="col-sm-2 sidenav">
                <div class="well">
                    <p>ADS</p>
                </div>
                <div class="well">
                    <p>ADS</p>
                </div>
            </div>

        </div>
    </div>
    <div class="footer">
        <footer class="container-fluid text-center">
            <p>Footer Text</p>
        </footer>
    </div>
</div>
</body>
</html>
