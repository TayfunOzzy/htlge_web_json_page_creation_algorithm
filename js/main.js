$( document ).ready(function() {

    // output Input Data Structure JSON
    $('#jsonPreview').html('<pre>' + JSON.stringify(inputData, undefined, 2) + '<pre>');
    
    //create document
    order_confirmation.create_document(inputData, "documentWrapper");
    
    var allPages = order_confirmation.get_all_final_a4_pages();
    var logMessages = order_confirmation.get_prepared_log_messages_for_html();
    
    // put out all log_messages on console
    $('#consoleLogMessages').append('<pre>' + JSON.stringify(logMessages, undefined, 2) + '<pre>');
    
    $("#creatPDFButton").click(function(){

        //hide all unwanted HTML elements for printing
        $('#leftWindow').css('display','none');
        $('#documentWrapper').css('border','0px');
        $('#rightWindow').css('display','none');
        $('#middleTop').css('display','none');
        $('#middleWindow').css('border','0px');
        $('#middleWindow').css('height','auto');
        $('#documentWrapper').css('height','auto');
        
        // open browser print window
        window.print();
        
        //show again all HTML elements
        $('#leftWindow').css('display','block');
        $('#documentWrapper').css('border','1px solid #333');
        $('#rightWindow').css('display','block');
        $('#middleTop').css('display','block');
        $('#middleWindow').css('border','1px solid #cbcbcb');
        $('#middleWindow').css('height','80%');
        $('#documentWrapper').css('height','1000px');
        
    });
    
});