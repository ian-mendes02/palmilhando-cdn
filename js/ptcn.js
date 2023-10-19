$(document).ready(function () {
    var pageID = document.documentElement.getAttribute("pageID");
    if (localStorage.getItem("pageID") == null) {
        localStorage.setItem("pageID", pageID);
    };
    $('#subscribe').submit(function (e) {
        e.preventDefault();
        let input1 = $("#user_name").val();
        let input2 = $("#user_email").val();
        let warning = document.createElement("span");
        if (input1 == "" || input2 == "") {
            if ($("#subscribe").find("#warning").length > 0){ 
                warning.remove()
            } else {
                $("#subscribe").append(warning);
                warning.style.color = "tomato";
                warning.style.fontSize = "0.8rem";
                warning.style.textAlign = "center";
                warning.setAttribute("id","warning");
                warning.innerHTML = "Parece que há um ou mais campos em branco. Por favor, tente novamente";
            }
        } else {
            $("#submit").html("<img src='public/img/loading.gif'>");
            warning.remove();
            var userData = {
                pageID: pageID,
                user_name: input1,
                user_email: input2
            };
            $.ajax({
                type: 'POST',
                url: 'cadastro.php',
                data: userData,
                success: function () {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: {
                            user_name: input1,
                            user_email: input2
                        }
                    });
                    $("#submit").html("QUERO GARANTIR A MINHA INSCRIÇÃO");
                    document.location = "obrigado";
                }
            });
        }
    });
});
