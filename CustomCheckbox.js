$(document).ready(function(){
    $flag = 0;
    $("#main input").click(function(){
        if($flag==0){
            $("#tie").animate({left: '115px', top: '50px'}, 200, function(){
                $("#tie").delay(600).animate({left: '115px', top: '-10px'}, 200, function(){
                    $("#tie").delay(200).css('transform', 'rotate(-120deg)');
                });
            });
            $flag = 1;
            $("#male").css('opacity', '0');
            $("#female").css('opacity', '1');
            $("#shadow").css('background', 'deeppink');
        }
        else{
            $("#tie").animate({left: '115px', top: '50px'}, 200, function(){
                $("#tie").delay(500).css('transform', 'rotate(0deg)');
                $("#tie").animate({left: '10px', top: '50px'}, 200);
            });
            $flag = 0;
            $("#male").css('opacity', '1');
            $("#female").css('opacity', '0');
            $("#shadow").css('background', 'aqua');
        }
    });
});