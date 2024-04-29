// Создание элемента <p>, добавление класса и текста, и вставка его в конец <body>
$("<p>").addClass("wevdsxr").appendTo("body").text("hi cute");

var colors = ["pink", "white"];
var index = 0;
$(".wevdsxr").click(function () {
  $(this).css("color", colors[index]);
  index = (index + 1) % colors.length;
});

// Обработчик события клика для элемента с классом .wevdsxr
$("input").on("keyup", function (event) {
  $(".output").text($(this).val());
  $("a").attr("href", "https://www.google.com/search?q=" + event.target.value);
});

// Обработчики событий mouseover и mouseout для <h1>
$("h1").on({
  mouseover: function () {
    $(this).css("color", "green");
  },
  mouseout: function () {
    $(this).css("color", "");
  },
});

// Обработчик события click для кнопки с классом .b1
$(".b1").on("click", function () {
  $("h1").toggle();
});

// Обработчик события click для кнопки с классом .b2
$(".b2").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
