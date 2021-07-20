

$(document).ready(main);

function main() {
  open_issues();

}



$("#open-button").click(function(){
    open_issues();
    
})
  

$("#metadata").click(function(){
  document.getElementById("container-metadata").style.height = "100vh";

})

$("#close-button-metadata").click(function(){
  document.getElementById("container-metadata").style.height = "0";

})

$("#open-articles").click(function(){
  document.getElementById("cover-page").style.height = "0";
  document.getElementById("image").style.height = "0";
  document.getElementById("open-articles").style.display = "none";

})

$(document).ready ( function () {
  $(document).on ("click", "input[id^='check_metadata']", function () {
    let s = $("." + this.className)
    if (s[0].checked) {
      let n = String(s[0].className)
      if (n.startsWith("check_metadata_1_")) {
        $("#left-article ." + s[0].value).css("background-color", s[1].value);
      } else if (n.startsWith("check_metadata_2_")) {
        $("#center-article ." + s[0].value).css("background-color", s[1].value);
      } else if (n.startsWith("check_metadata_3_")) {
        $("#right-article ." + s[0].value).css("background-color", s[1].value);
      }}
  
    else {
      let n = String(s[0].className)
      if (n.startsWith("check_metadata_1_")) {
        $("#left-article ." + s[0].value).css("background-color", 'transparent');
      } else if (n.startsWith("check_metadata_2_")) {
        $("#center-article ." + s[0].value).css("background-color", 'transparent');
      } else if (n.startsWith("check_metadata_3_")) {
        $("#right-article ." + s[0].value).css("background-color", 'transparent');
      }}
  });

  /* Function that change the color of the highlighter */
  $(document).on ("change", "input[id^='color_entites']", function () {
    let s = $("." + this.className);
    if (s[0].checked) {
      let n = String(s[0].className)
      if (n.startsWith("check_metadata_1_")) {
        $("#left-article ." + s[0].value).css("background-color", s[1].value);
      } else if (n.startsWith("check_metadata_2_")) {
        $("#center-article ." + s[0].value).css("background-color", s[1].value);
      } else if (n.startsWith("check_metadata_3_")) {
        $("#right-article ." + s[0].value).css("background-color", s[1].value);
      }}
  });


  /* FUNCTIONS FOR METADATA TOPICS */

  $(document).on ("click", "input[id^='check_topic']", function () {
    let s = $("." + this.className);
    if (s[0].checked) {
      let n = String(s[0].className)
      if (n.startsWith("check_topic_1_")) {
        $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      } else if (n.startsWith("check_topic_2_")) {
        $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      } else if (n.startsWith("check_topic_3_")) {
        $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      }} 
      
    else {
      let n = String(s[0].className);
      if (n.startsWith("check_topic_1_")) {
        $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
    } else if (n.startsWith("check_topic_2_")) {
        $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
    } else if (n.startsWith("check_topic_3_")) {
        $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", 'transparent');
      
      }
  }
  });

  $(document).on ("change", "input[id^='color_topic_']", function () {
    let s = $("." + this.className);
    if (s[0].checked) {
      let n = String(s[0].className)
      if (n.startsWith("check_topic_1_")) {
        $("#left-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      } else if (n.startsWith("check_topic_2_")) {
        $("#center-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      } else if (n.startsWith("check_topic_3_")) {
        $("#right-article [about~='" + s[0].getAttribute("about") + "']").css("background-color", s[1].value);
      }}
    });

    /* Cross comparison among all the three articles of one issue */
  $(document).on ("click", "button[class^='check_']", function () {
    let s = $("." + this.className);
    $(".article [about~='" + s[2].getAttribute("about") + "']").css("background-color", "yellow");
    $(".article ." + s[2].getAttribute("about") + "").css("background-color", "yellow");
  });

  $(document).on ("click", "button[id^='delete_']", function () {
    let s = $("." + this.className);
    $(".article [about~='" + s[3].getAttribute("about") + "']").css("background-color", "transparent");
    $(".article ." + s[2].getAttribute("about") + "").css("background-color", "transparent");
  });



    /*----------------CHANGE_YEAR------------------*/


    /*------------------2030---------------------- */
    $(document).on ("click", "#2030", function () {
      var x = document.getElementById("year").getAttribute("name");
      if (x !== "2030") {
        alert("Select on the top of the articles the modality of visualization");
        $.getJSON( '2030.json', {
          format: "json"
        }).done(function( data ) {
          var x = document.getElementById("number_of_issue").getAttribute("name");
          let y = data[x];
          $('#left-article').prepend("<div class='dev_tools'>" + "<div class='tool'>"+ y["Cirrus_1"] + "</div>" +
          "<div class='tool'>" + y["Trends_1"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_1"] + "</div>" + "</div>");
          $('#center-article').prepend("<div class='dev_tools_center'>" + "<div class='tool'>"+ y["Cirrus_2"] + "</div>" +
          "<div class='tool'>" + y["Trends_2"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_2"] + "</div>" + "</div>");
          $('#right-article').prepend("<div class='dev_tools'>" + "<div class='tool'>"+ y["Cirrus_3"] + "</div>" +
          "<div class='tool'>" + y["Trends_3"] + "</div>" + "<div class='tool'>" + y["Terms_Berry_3"] + "</div>" + "</div>");
          $('#left-article').prepend("<select class='button_2030' name='visualization_1' id='visualization_1'>" +
          "<option value='Normal_1'>Normal</option>" +
          "<option value='Dyslexia_1'>Dyslexia</option>" +
          "<option value='Fast_readings_1'>Fast readings</option>" +
          "</select>");
          $('#center-article').prepend("<select class='button_2030' name='visualization_2' id='visualization_1'>" +
          "<option value='Normal_2'>Normal</option>" +
          "<option value='Dyslexia_2'>Dyslexia</option>" +
          "<option value='Fast_readings_2'>Fast readings</option>" +
          "</select>");
          $('#right-article').prepend("<select class='button_2030' name='visualization_3' id='visualization_1'>" +
          "<option value='Normal_3'>Normal</option>" +
          "<option value='Dyslexia_3'>Dyslexia</option>" +
          "<option value='Fast_readings_3'>Fast readings</option>" +
          "</select>");
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' id='Normal' about='change' type='text/css' href='"
          + data.file + "' >");
          $("img[id^='image_background']").remove();
          $("#year").remove();
          $("#position").append(data.year);

      })};
    });

    /*---------------2030 SPECIAL BUTTONS -----------------*/
    $(document).on ("change", ".button_2030", function () {
      var x = this.value;
      var n = this.name;

        $.getJSON( 'css_2030.json', {
          format: "json"
        }).done(function( data ) {

          if (x.startsWith("Dyslexia")) {
            if (x == "Dyslexia_1") {
              $("#Fast_readings_1").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            } else if (x == "Dyslexia_2") {
              $("#Fast_readings_2").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            } else {
              $("#Fast_readings_3").remove();
              $("head").append("<link rel='stylesheet' class='Dyslexia' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["dislessia"] + "' >");
            };
            


          } else if (x.startsWith("Fast_readings")) {
            if (x == "Fast_readings_1") {
              $("#Dyslexia_1").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            } else if (x == "Fast_readings_2") {
              $("#Dyslexia_2").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            } else {
              $("#Dyslexia_3").remove();
              $("head").append("<link rel='stylesheet' class='Fast_readings' id='" + x + "' about='change' type='text/css' href='" + 
              data[n]["speed_readings"] + "' >");
            }

          } else {
            if (x == "Normal_1") {
              $("#Dyslexia_1").remove();
              $("#Fast_readings_1").remove();
            } else if (x == "Normal_2") {
              $("#Dyslexia_2").remove();
              $("#Fast_readings_2").remove();
            } else {
              $("#Dyslexia_3").remove();
              $("#Fast_readings_3").remove();
            }
            


          }});

    })





    /*---------------OTHERS YEARS -----------------*/
    $("a[id^='anno-']").click(function(){
      var y = document.getElementById("year").getAttribute("name");
      var n = document.getElementById("number_of_issue").getAttribute("name");
      var x = this.id;
      $.getJSON( 'css.json', {
        format: "json"
      }).done(function( data ) {
        if (y == "anno-1915") {
          let c = data[y];
          $("h1[about^='cancel']").remove();
          $("#left-article").prepend(c["title"][n]["normal-title"]["title-1"]);
          $("#center-article").prepend(c["title"][n]["normal-title"]["title-2"]);
          $("#right-article").prepend(c["title"][n]["normal-title"]["title-3"]);
        };
        if (x !== y) {
          let y = data[x];
          $(".dev_tools").remove();
          $(".dev_tools_center").remove();
          $(".button_2030").remove();
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
            + y.file + "' >");
          $("img[id^='image_background']").remove();
          $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
          $("#year").remove();
          $("#position").append(y.year);
        }
      })
    })


    

    /*---------------1915--------------------*/
    $("#1915").click(function(){
      var x = document.getElementById("number_of_issue").getAttribute("name");
      var n = document.getElementById("year").getAttribute("name");
      if (n != "anno-1915") {
        $.getJSON( 'css.json', {
          format: "json"
        }).done(function( data ) {
          let y = data["anno-1915"];
          $(".dev_tools").remove();
          $("h1[about^='cancel']").remove();
          $(".header1").prepend(y["title"][x]["other-title"]["title-1"]);
          $(".header2").prepend(y["title"][x]["other-title"]["title-2"]);
          $(".header3").prepend(y["title"][x]["other-title"]["title-3"]);
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
            + y.file + "' >");
          $("#year").remove();
          $("#position").append(y.year);
          $("img[id^='image_background']").remove();
          $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
      });
      }
    })

    $(document).on ("click", ".drop-nav", function(e) {
      e.preventDefault()
      // don't allow the event to fire horizontally or vertically up the tree
      e.stopImmediatePropagation()
      // switch the active class that you can use to display the child
      $(this).toggleClass('active')
    })


  }); /* close point of the ready document function */
  






/* load the issues from the JSON */

$("img[id^='issue-']").click(function(){
    var y = document.getElementById("number_of_issue").getAttribute("name");
    var x = this.id;
    if (y != x){
      $.getJSON( 'html_file.json', {
        format: "json"
      }).done(function( data ) {
        var n = data[x];
        $("#image").remove();
        $('#cover-page').append("<img src='" + n.image + "' id='image'>");
        $('#left-article').load(n.html1);
        $('#center-article').load(n.html2);
        $('#right-article').load(n.html3);
        $('#metadata-left-article').load(n.metadata1);
        $('#metadata-center-article').load(n.metadata2);
        $('#metadata-right-article').load(n.metadata3)
        $("a[id^='number_of_issue']").remove();
        $("div[id^='past_here']").append(n.position);
        $("#year").remove();
        $("#position").append("<a id='year' name='anno-2021'>2021</a>");
        $(".dev_tools").remove();
        $(".dev_tools_center").remove();
        $(".button_2030").remove();
        $("link[about^='change']").remove();
        $("img[id^='image_background']").remove();



      })}
      

    open_issues();
    if (document.getElementById("Navbar-issue").style.zIndex == "4" ||
    document.getElementById("Navbar-issue").style.zIndex == "") {
      setTimeout(function() {document.getElementById("Navbar-issue").style.zIndex = "2"}, 185);
  } else {
        document.getElementById("cover-page").style.height = "100vh";
        document.getElementById("image").style.height = "100vh";
        document.getElementById("open-articles").style.removeProperty("display") = "visible";
    };
  });







/*-------------------------------------------*/
/* ------------Ancillary funtion-------------*/
/*-------------------------------------------*/

function open_issues() {
  if (document.getElementById("Navbar-issue").style.height !== "80px"  &&
    document.getElementById("Navbar-issue").style.height !== "") {
      document.getElementById("Navbar-issue").style.height = "80px";

    }
    else {
      document.getElementById("Navbar-issue").style.height = "480px";
    }
  }
  
function load(file) {
  $.ajax({
    method: 'GET',
    url: file,
    success: function(d) {
      return file
    },
    error: function(d) {
      alert('Non ho potuto caricare il file '+file)
    }
  });
}