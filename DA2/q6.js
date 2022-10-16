

$(document).ready(function () {
    $("#btn").on("click", function () {
        var s = $("#str").val();
        // alert(num - 8);
        var sum = 0;
        const numer = new Map([
            ["A", 1],
            ["B", 2],
            ["C", 3],
            ["D", 4],
            ["E", 5],
            ["F", 8],
            ["G", 3],
            ["H", 5],
            ["I", 1],
            ["J", 1],
            ["K", 2],
            ["L", 3],
            ["M", 4],
            ["N", 5],
            ["O", 7],
            ["P", 8],
            ["Q", 1],
            ["R", 2],
            ["S", 3],
            ["T", 4],
            ["U", 6],
            ["V", 6],
            ["W", 6],
            ["X", 5],
            ["Y", 1],
            ["Z", 7],
        ]);

        for (var i = 0; i < s.length; i++) {
            var num = numer.get(s[i].toUpperCase());
            sum += parseInt(num);
        }
        // alert(sum);
        var tot = 0;
        // var copy1 = sum;
        var t = sum;
        while (t > 9 || t == 11 || t == 22 || t == 33) {
            var copy1 = t;
            while (copy1 > 0) {
                var d = parseInt(copy1 % 10);
                tot += parseInt(d);
                copy1 = parseInt(copy1 / 10);

            }
            t = tot;
        }
        // alert(t);
        switch (t) {
            case 1:
                $("#res").html("<h4>" + t + "</h4>");
                break;
            case 1:
                $("#res").html("<h4>You radiate with a dynamic and efficient energy.</h4>");
                break;
            case 2:
                $("#res").html("<h4>You appear friendly and unpretentious.</h4>");
                break;
            case 3:
                $("#res").html("<h4>You are uplifting, inspiring, and charming.</h4>");
                break;
            case 4:
                $("#res").html("<h4>You love the intimacy, consistency, and the security a family provides.</h4>");
                break;
            case 5:
                $("#res").html("<h4>You are a stimulating person.</h4>");
                break;
            case 6:
                $("#res").html("<h4>You radiate understanding and compassion.</h4>");
                break;
            case 7:
                $("#res").html("<h4>You seem mysterious and different.</h4>");
                break;
            case 8:
                $("#res").html("<h4>You appear strong and powerful.</h4>");
                break;
            case 9:
                $("#res").html("<h4>You have an impressive and aristocratic bearing.</h4>");
                break;
            case 11:
                $("#res").html("<h4>You have worked hard to gain confidence and overcome, at least to some extent, an in -born shyness.</h4>");
                break;
            case 22:
                $("#res").html("<h4>You radiate reliability and consistency.</h4>");
                break;
            case 33:
                $("#res").html("<h4>You inspire confidence.</h4>");
                break;

            default:
                break;
        }

        // $("#res").html("<h4>" + t + "</h4>");



    })
})