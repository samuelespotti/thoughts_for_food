





    /*----------------CHANGE_YEAR------------------*/


    /*------------------2030---------------------- */
    $(document).on ("click", "#2030", function () {
        $.getJSON( '2030.json', {
          format: "json"
        }).done(function( data ) {
          $("link[about^='change']").remove();
          $('head').append("<link rel='stylesheet' id='Normal' about='change' type='text/css' href='"
          + data.file + "' >");
          $("img[id^='image_background']").remove();
          $("#year").remove();
          $("#position").append(data.year);
    });
  })





    /*---------------OTHERS YEARS -----------------*/
    $("a[id^='anno-']").click(function(){

      if (this.id == "anno-normal") {
        location.reload();
      }
      var x = this.id;
      $.getJSON( 'css.json', {
        format: "json"
      }).done(function( data ) {
        let y = data[x];
        $("link[about^='change']").remove();
        $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
          + y.file + "' >");
        $("img[id^='image_background']").remove();
        $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
        $("#year").remove();
        $("#position").append(y.year);

  
    
    })

  })
    

    /*---------------1915--------------------*/
    $("#1915").click(function(){
          $.getJSON( 'css.json', {
            format: "json"
          }).done(function( data ) {
            let y = data["anno-1915"];
            $("img[id^='image_background']").remove();
            $('.big-box').append("<img id='image_background' src='"+ y.image + "' >");
            $("link[about^='change']").remove();
            $('head').append("<link rel='stylesheet' about='change' type='text/css' href='"
              + y.file + "' >");
            $("#year").remove();
            $("#position").append(y.year);
          });
        })
  

