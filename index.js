function try_inject_script(){
    ?>
    <form id="myformID" action="https://testapi.onecallnow.com/MarketingAPI/api/SendMessage">
        First name: <input type="text" name="FirstName" value="John"><br>
        Last name: <input type="text" name="LastName" value="Connor"><br>
        Phone: <input type="text" name="Phone" value="454546454"><br>
        Ext: <input type="text" name="Ext" value="154"><br>
        Email: <input type="text" name="Email" value="john@connor.com"><br>
        FromIp: <input type="text" name="FromIp" value="74.65.21.10"><br>
        MinutesToDelay: <input type="text" name="MinutesToDelay" value="0"><br>
        Language: <input type="text" name="Language" value="en-US"><br>
  <input type="submit" value="Submit">
</form>
<script>
    jQuery(document).ready(function($){
        $("form#myformID").on( "submit", function(event){
            event.preventDefault();
            event.stopPropagation();

            // Get some values from elements on the page:
            var $form = $( this ),
                $data = {
                     "stage":{
      "id":340,
      "title":"Leads",
      "is_trashed":false,
      "index":0,
      "is_deal_rotting":false,
      "rotting_days":null,
      "no_of_deals":60
   },
   "pipeline":102,
   "custom_fields":{
      "74":{
         "field_type":"select",
         "name":"ed",
         "key":"ed",
         "options":[
            "op1",
            "op2",
            "op3",
            "op4"
         ],
         "value":"op1"
      },
      "76":{
         "field_type":"radio",
         "name":"sdwd",
         "key":"sdwd",
         "options":[
            "o1",
            "o2",
            "o3",
            "o4"
         ]
      },
      "77":{
         "field_type":"checkbox",
         "name":"wedwd",
         "key":"wedwd",
         "options":{
            "ch1":false,
            "ch2":false,
            "ch3":false,
            "ch4":false
         },
         "value":{
            "ch1":false,
            "ch2":false,
            "ch3":false,
            "ch4":false
         }
      },
      "78":{
         "field_type":"date",
         "name":"wedwdwqdw",
         "key":"wedwdwqdw",
         "options":null
      }
   },
   "currency":194,
   "title":"abcd deal test",
   "deal_value":"23000",
   "expected_close":"2016-08-03"
                },
                url = $form.attr( "action" );

            // Send the data using post
            var posting = $.post( "https://app.goteamwave.com/api/crm/deals?api_key=dda0c7e8e1ed4231a2794c99d19be85b", $data );

            posting.done(function( data ) {
                //Do whatever you need with the returned data here.
                console.log(data);
                alert(data);
            });

        });
    });
</script>
<?php
}
add_action('wp_footer', 'try_inject_script');