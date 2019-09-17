 $(document).ready(function(){       
            $('#test').click(function(){  
                $.ajax({  
                    url: "/page/test.html",  
                    cache: false,  
                    success: function(html){  
                        $("#content").html(html);  
                    }  
                });  
            });  
        });  