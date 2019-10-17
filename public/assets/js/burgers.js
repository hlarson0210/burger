// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $("#availableBurgers .change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $("#make-burger").on("submit", function (event) {
        event.preventDefault();
        var validName = true;
        var burger = $("#make-burger [name=burger_name]").val().trim();

        if (!burger){
            validName = false;
        }

        if (burger) {
            var newBurger = {
                burger_name: burger,
                devoured: 0
            };
    
            $.post("/api/burgers", newBurger
            ).then(
                function () {
                    location.reload();
                }
            );
        } else {
            alert("You need a burger name to add it to the menu.");
        }

    });

    $("#eatenBurgers .change-devoured").on("click", function (event) {
        var newBurger = {
            burger_name: $(this).data("burgername"),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
