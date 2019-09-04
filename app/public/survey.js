$(document).ready(function () {
    $("#submitHere").on("click", function () {

        function validateForm() {
            var isValid = true;
            $('.validate').each(function () {
                if ($(this).val() === '') {
                    isValid = false;
                }
            });
            $('.browser-default').each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        if (validateForm() == true) {

            var newFriend = {
                name: $('#name').val().trim(),
                profilePic: $('#photo').val().trim(),
                scores: [
                    $('#question11').val(),
                    $('#question12').val(),
                    $('#question13').val(),
                    $('#question14').val(),
                    $('#question15').val(),
                    $('#question16').val(),
                    $('#question17').val(),
                    $('#question18').val(),
                    $('#question19').val(),
                    $('#question110').val(),
                ]
            };

            var currentURL = window.location.origin;

            $.post(currentURL + "/api/friends", newFriend, function (data) {

                $("#matchName").text(data.name);
                $("#matchPic").attr("src", data.profilePic);
            });

            $('.modal').modal();

            $('#name').val("");
            $('#photo').val("");
            $('#question1').val("");
            $('#question2').val("");
            $('#question3').val("");
            $('#question4').val("");
            $('#question5').val("");
            $('#question6').val("");
            $('#question7').val("");
            $('#question8').val("");
            $('#question9').val("");
            $('#question10').val("");
        } else {
            alert("Please fill out ALL fields before submitting survey.")
        }

    });
});