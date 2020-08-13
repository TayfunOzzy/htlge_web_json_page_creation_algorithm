/*****************************************************************************/
/*                                                                           */
/*  Dynamic Document Creation                                                */
/*  Created by Tayfun Oezhoroz on 31.03.16.                                  */
/*                                                                           */
/*****************************************************************************/


var order_confirmation = {
    
    /*****************************************************************************/
    /*                          Object VARIBALES                                 */
    /*****************************************************************************/

    page_count: 0,
    orderlines_amount: 0,
    orderlines_count: 0,
    layout_data_of_each_page: { "pages":[] },
    last_inserted_page: { "page_id_number": 0, "page_id_string": ""},
    layout_data_of_each_orderline: { "orderlines":[] },
    last_inserted_orderline: { "orderline_id_number": 0, "orderline_id_string": ""},
    templated_orderlines_with_data_in_array: [],
    all_final_a4_pages: [],
    log_messages: [],
    log_messages_html_prepared: '',
    
    data_from_json: null,
    mainDivContainerID: "",

    /*****************************************************************************/
    
    create_document: function(data_json, mainDivID) {
    
        this.log_messages.push("");   
        this.log_messages.push("DYNAMIC DOCUMENT CREATION ALGORITHM");
        this.log_messages.push("developed by Tayfun Oezhoroz 2016");
        this.log_messages.push("");

        // 1.Step - get data and put them in a object instance variable
        this.data_from_json = data_json;
        
        // 2. Step - check existance of html container element
        this.check_existance_of_div_element_in_dom(mainDivID);
        
        // 3.Step - get all data and prepeare it
        this.analyze_inputData_and_get_templated_orderlines_with_data();
        
        // 4.Step - it starts with an empty html div container
        $(this.mainDivContainerID).html("");

        // 5.Step - after the input data is analized the document creation can start
        this.create_the_html_document();
        
        // 6.Step save all a4 pages in array
        this.save_all_final_a4_pages_seperated_in_array();
        
        this.prepare_log_messages_for_html();
        
        return true;
    },
    
    save_all_final_a4_pages_seperated_in_array: function() {
                
        for(var i=1; i <= this.page_count; i++){
            this.all_final_a4_pages.push($('#page' + i).html());
        }  
    },
    
    get_all_final_a4_pages: function() {
        return this.all_final_a4_pages;
    },
    
    get_log_messages: function() {
        return this.log_messages;
    },
    
    prepare_log_messages_for_html: function(){
            
        for(var i=0; i < this.log_messages.length; i++){
            console.log(this.log_messages[i]);
            this.log_messages_html_prepared += (this.log_messages[i] + '<br>');
        }  
        
        //console.log(this.log_messages);
        //console.log(this.log_messages_html_prepared);
    },
    
    get_prepared_log_messages_for_html: function(){
        return this.log_messages_html_prepared;
    },
    
    create_the_html_document: function() {
    
        // The insert_orderline_algorithm creates neccessary amount of pages to insert all orderlines
        this.insert_orderlines();
        this.insert_document_summery();
        this.insert_terms_of_use();
        this.insert_signature_area();
        this.insert_page_number_on_all_pages();
    },
    
    check_existance_of_div_element_in_dom: function(mainDivID) {
        if(typeof mainDivID !== 'undefined'){
            if (typeof mainDivID == 'string') {
                if(mainDivID !== ''){
                    if (document.getElementById(mainDivID)) {
                        //It does exist
                        this.mainDivContainerID = "#" + mainDivID;
                        //console.log("HTML DIV exsists");  
                        return true;
                    }else{
                        //console.log("HTML DIV doenst exsist");
                        throw "HTML DIV ID doesnt exist in DOM";
                    }
                }else{
                    throw "create_document(param1, param2) : param2 is an empty string";
                }
            }else{
                throw "create_document(param1, param2) : param2 is NOT a string";
            }
        }else{
            //console.log("undefined: default value body");
            throw "create_document(param1, param2) : param2 is NOT set";
        }
    },
    
    analyze_inputData_and_get_templated_orderlines_with_data: function (){

        // get all orderlines in html_template with data
        var orderlines_with_data = Mustache.render(template_article, this.data_from_json)

        // the orderline-template has a seperator on the end 
        // to split each orderline and keep them sperated in an array
        var seperated_orderlines_with_data_in_array = orderlines_with_data.split("//thespereator//");

        // due to the seperator arise an empty element on the end of the array
        // the last element must be deleted to get the right amount of orderlines
        seperated_orderlines_with_data_in_array = seperated_orderlines_with_data_in_array.slice(0, -1);

        // count of elements in array = amount of orderlines
        this.orderlines_amount = seperated_orderlines_with_data_in_array.length;

        // save orderlines in global array
        this.templated_orderlines_with_data_in_array = seperated_orderlines_with_data_in_array;

        // save log_messages
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("INPUT DATA JSON EVALUATION:");
        this.log_messages.push("Orderlines: " + this.orderlines_amount);
        this.log_messages.push("------------------------------------------------------------------------------");
    },
    
    calc_content_div_height: function(div_id) {
        
        // calculation of the content space of a page
        var page_id_string = $(div_id).attr('id');
        var page_height = $(div_id).height();
        var header_height = $(div_id).find('.header').height();
        var footer_height = $(div_id).find('.footer').height();
        var calc_content_height = (page_height - (header_height + footer_height + 5));

        // set the content-div-height of this page to the calculated height
        $(div_id).find('.content').css("height", calc_content_height);

        // save layout information in an object
        var index_of_object = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_string);
        this.layout_data_of_each_page.pages[index_of_object].header_div_height  = header_height;
        this.layout_data_of_each_page.pages[index_of_object].footer_div_height  = footer_height;
        this.layout_data_of_each_page.pages[index_of_object].content_div_height = calc_content_height;
        this.layout_data_of_each_page.pages[index_of_object].free_usable_content_div_height = calc_content_height;

        // save log_messages
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("CALCULATION OF CONTENT AREA: page_id: " + page_id_string + "");
        this.log_messages.push("header_height:        " + header_height);
        this.log_messages.push("footer_height:        " + footer_height);
        this.log_messages.push("page_height:          " + page_height);
        this.log_messages.push("entire minus height:  " + (header_height + footer_height) + "  (header_height + footer_height)");
        this.log_messages.push("calc_content_height:  " + calc_content_height + "  (page_height - (header_height + footer_height + 5)");
        this.log_messages.push("content div height has been set to: " + calc_content_height);
        this.log_messages.push("SUCCSESS: header and footer inserted, content_div_height calculation done");
        this.log_messages.push("------------------------------------------------------------------------------");

        return calc_content_height;
    },

    /*****************************************************************************/


    find_object_in_array_by_page_id_and_return_index: function (source, id) {
        
        for (var i = 0; i < source.length; i++) {
          if (source[i].page_id === id) {
            return i;
          }
        }
        throw "Couldn't find object with id: " + id;
        
    },

    does_any_page_exists_yet: function (){

        var body_content = $(this.mainDivContainerID).html();
        //console.log("body_content: " + body_content);
        if(body_content != ""){ 
            this.log_messages.push("Does any page exist yet? true");
            return true; 
        }else{
            this.log_messages.push("Does any page exist yet? false -> add page");
            return false; 
        };

    },
    
    does_the_current_page_contain_header_and_footer_content: function (page_id_with_hash_key){

        var header_content = $(this.mainDivContainerID + " > " + page_id_with_hash_key + " > .header").html();
        var footer_content = $(this.mainDivContainerID + " > " + page_id_with_hash_key + " > .footer").html();
        if(header_content != "" && footer_content != ""){
            this.log_messages.push("Does the current page contain header and footer content? true");
            return true;
        }else{
            this.log_messages.push("Does the current page contain header and footer content? false");
            return false;
        }

    },
    
        
    add_first_page: function (){

        // prepare page_count and id
        this.page_count++;
        var only_the_id_string = "page" + this.page_count;

        // get the empty default page-template and add an id on it
        var page_with_count_id = template_page.replace("page", only_the_id_string);

        // insert page into mainDiv
        $(this.mainDivContainerID).html(page_with_count_id);

        // add an object to the global array
        // every created page has his own object in this array
        this.layout_data_of_each_page.pages.push({
                                              "page_id" : only_the_id_string,
                                              "content_div_height" : 0,
                                              "header_div_height" : 0,
                                              "footer_div_height" : 0,
                                              "already_used_content_div_height" : 0,
                                              "free_usable_content_div_height" : 0
                                            }); 

        // save the id of the last created page
        this.last_inserted_page.page_id_string = only_the_id_string;
        this.last_inserted_page.page_id_number = this.page_count;

        // output on console for quick and easy overview
        this.log_messages.push("ADD FIRST PAGE: page_id: " + only_the_id_string);
    },
    
    append_next_page: function (){

        // prepare page_count and id
        this.page_count++;
        var only_the_id_string = "page" + this.page_count;

        // get the empty default page-template and add an id on it
        var page_with_count_id = template_page.replace("page", only_the_id_string);

        // insert page into mainDiv
        $(this.mainDivContainerID).append(page_with_count_id);

        // add an object to the global array
        // every created page has his own object in this array
        this.layout_data_of_each_page.pages.push({
                                              "page_id" : only_the_id_string,
                                              "content_div_height" : 0,
                                              "header_div_height" : 0,
                                              "footer_div_height" : 0,
                                              "already_used_content_div_height" : 0,
                                              "free_usable_content_div_height" : 0
                                            }); 

        // save the id of the last created page
        this.last_inserted_page.page_id_string = only_the_id_string;
        this.last_inserted_page.page_id_number = this.page_count;

        // output on console for quick and easy overview
        this.log_messages.push("APPANED NEXT PAGE: page_id: " + only_the_id_string);
    },
    
    insert_header_and_footer_with_data: function (page_id, page_setting){

        var page_id_without_hash_key = page_id;
        var page_id_with_hash_key = "#" + page_id;
        var page_id               = page_id_with_hash_key;

        this.log_messages.push("Inserting header and footer content into current page");

        switch (page_setting) {
            case "big":
                $( page_id + " > .header").html(Mustache.render(template_header_big_image_address_headline, this.data_from_json));
                $( page_id + " > .footer").html(footer_big_image);
                this.calc_content_div_height(page_id);         
                break;

            case "middle":
                $( page_id + " > .header").html(Mustache.render(template_header_middle_image_headline, this.data_from_json));
                $( page_id + " > .footer").html(Mustache.render(template_footer_short_text_dynamic, this.data_from_json));
                this.calc_content_div_height(page_id);
                break;

            case "short":
                $( page_id + " > .header").html(Mustache.render(template_header_short_text_headline, this.data_from_json));
                $( page_id + " > .footer").html(Mustache.render(template_footer_short_text_dynamic, this.data_from_json));
                this.calc_content_div_height(page_id);
                break;

            default: 
                $( page_id + " > .header").html(header_short_text_headline);
                $( page_id + " > .footer").html(footer_short_text);
                this.calc_content_div_height(page_id);
                break;
        }
    },
    
    insert_orderlines: function() {
    
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("         ORDERLINE INSERT ALGORITHM - START BEGIN                             ");
        this.log_messages.push("------------------------------------------------------------------------------");

        do{
            this.log_messages.push("ORDERLINE INSERT ALGORITHM:");

            if(this.does_any_page_exists_yet()){

                // get information of current page
                var page_id_without_hash_key = this.last_inserted_page.page_id_string;
                var page_id_with_hash_key    = "#" + this.last_inserted_page.page_id_string;
                var index_of_object          = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_without_hash_key);

                if(this.does_the_current_page_contain_header_and_footer_content(page_id_with_hash_key)){

                    // get information of page space
                    var min_orderline_div_height = 160;
                    var free_space         = this.layout_data_of_each_page.pages[index_of_object].free_usable_content_div_height;
                    var already_used_space = this.layout_data_of_each_page.pages[index_of_object].already_used_content_div_height;

                    if(free_space > min_orderline_div_height){
                        this.log_messages.push("Is enough content div height available to insert orderline? true");

                        // prepare orderline template
                        var only_the_id_string = "orderline" + (this.orderlines_count +1);
                        var only_the_id_string_with_hash_key = "#orderline" + (this.orderlines_count +1);
                        var article_with_count_id = this.templated_orderlines_with_data_in_array[this.orderlines_count].replace("orderline", only_the_id_string);

                        // insert orderline into current page
                        $( page_id_with_hash_key + " > .content").append(article_with_count_id);
                        this.log_messages.push("Insert orderline into content div!");

                        // save information about last inserted orderline
                        this.last_inserted_orderline.orderline_id_number = (this.orderlines_count +1);
                        this.last_inserted_orderline.orderline_id_string = only_the_id_string;

                        // get available content height of current page
                        var orderline_div_height = $( page_id_with_hash_key + " > .content > " + only_the_id_string_with_hash_key).height();

                        // add orderline height to current used content height
                        this.layout_data_of_each_page.pages[index_of_object].already_used_content_div_height  += orderline_div_height;

                        // calculation of free usable div height
                        var temp_content_div_height = this.layout_data_of_each_page.pages[index_of_object].content_div_height;
                        var temp_already_used_content_div_height = this.layout_data_of_each_page.pages[index_of_object].already_used_content_div_height;
                        var temp_free_usable_content_div_height  = temp_content_div_height - temp_already_used_content_div_height;

                        // save free usable div height in object variable
                        this.layout_data_of_each_page.pages[index_of_object].free_usable_content_div_height = temp_free_usable_content_div_height;
                        this.log_messages.push("Calculate remaining useable content space on current page: " + temp_free_usable_content_div_height + " px");

                        // save orderline layout data
                        this.layout_data_of_each_orderline.orderlines.push({
                                                          "orderline_id" : only_the_id_string,
                                                          "orderline_div_height" : orderline_div_height
                                                        }); 

                        this.log_messages.push("How many orderlines have been inserted yet?  " + this.layout_data_of_each_orderline.orderlines.length);
                        this.log_messages.push("------------------------------------------------------------------------------");

                        // one orderline was added - increment amount of inserted orderlines
                        this.orderlines_count++

                    }else{
                        this.log_messages.push("Is enough content div height available to insert orderline? false -> append next page");
                        this.append_next_page();
                    } 

                }else{
                    // The current page doesn't contain header and footer content
                    // inserting different header and footer on first page than the others
                    if(this.page_count === 1){
                        this.insert_header_and_footer_with_data(page_id_without_hash_key, "big");
                    }else{
                        this.insert_header_and_footer_with_data(page_id_without_hash_key, "short");
                    }
                } 
            }else{
                // Does any page exists yet? NO -> add a page
                this.add_first_page();
            } 

        }
        while(this.orderlines_count <= (this.orderlines_amount -1));
        
        this.log_messages.push("                   ORDERLINE INSERT ALGORITHM - FINISHED                      ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("");
        this.log_messages.push("");
    },
    
    insert_document_summery: function() { 
        
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   ORDERLINE DOCUMENT SUMMERY - START BEGIN                   ");
        this.log_messages.push("------------------------------------------------------------------------------");

        // get information of current page
        var page_id_without_hash_key = this.last_inserted_page.page_id_string;
        var page_id_with_hash_key    = "#" + this.last_inserted_page.page_id_string;
        var index_of_object          = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_without_hash_key);

        // get information of page space
        var min_document_summery_div_height = 315;
        var free_space         = this.layout_data_of_each_page.pages[index_of_object].free_usable_content_div_height;
        var already_used_space = this.layout_data_of_each_page.pages[index_of_object].already_used_content_div_height;
        var max_space          = this.layout_data_of_each_page.pages[index_of_object].content_div_height;

        if(free_space > min_document_summery_div_height){
            this.log_messages.push("Is enough content div height available to insert the document summery?");

            $( page_id_with_hash_key + " > .content").append(template_order_summary_signature);
            this.log_messages.push("Insert document summery into content div!");
        }else{
            this.log_messages.push("Is enough content div height available to insert the document summery? false");
            this.append_next_page();

            // get information of current page
            var page_id_without_hash_key = this.last_inserted_page.page_id_string;
            var page_id_with_hash_key    = "#" + this.last_inserted_page.page_id_string;
            var index_of_object          = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_without_hash_key);
            this.insert_header_and_footer_with_data(page_id_without_hash_key, "short");

            $( page_id_with_hash_key + " > .content").append(template_order_summary_signature);
            this.log_messages.push("Insert document summery into content div!");
        }
        
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   ORDERLINE DOCUMENT SUMMERY - FINISHED                      ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("");
        this.log_messages.push("");
    },
    
    insert_terms_of_use: function() {

        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   INSERT TERMS OF USE - START BEGIN                      ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("Insert term-of-use - it always comes on a new page");
        
        this.append_next_page();

        // get information of current page
        var page_id_without_hash_key = this.last_inserted_page.page_id_string;
        var page_id_with_hash_key    = "#" + this.last_inserted_page.page_id_string;
        var index_of_object          = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_without_hash_key);
        this.insert_header_and_footer_with_data(page_id_without_hash_key, "short");

        $( page_id_with_hash_key + " > .content").html(template_agb);
        
        this.log_messages.push("                   INSERT TERMS OF USE - FINISHED                             ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("");
        this.log_messages.push("");
    },
    
    insert_signature_area: function() {
        
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   INSERT SIGNATURE AREA PAGE - START BEGIN                   ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("Signature always comes on a new page");
        
        this.append_next_page();

        // get information of current page
        var page_id_without_hash_key = this.last_inserted_page.page_id_string;
        var page_id_with_hash_key    = "#" + this.last_inserted_page.page_id_string;
        var index_of_object          = this.find_object_in_array_by_page_id_and_return_index(this.layout_data_of_each_page.pages, page_id_without_hash_key);

        this.insert_header_and_footer_with_data(page_id_without_hash_key, "short");

        $( page_id_with_hash_key + " > .content").html(template_document_signature);
        
        this.log_messages.push("Insert signature area into content div!");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   INSERT SIGNATURE AREA PAGE - FINISHED                      ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("");
        this.log_messages.push("");
    },
    
    insert_page_number_on_all_pages: function() {
        
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   INSERT PAGE NUMBER ON ALL PAGES - START BEGIN              ");
        this.log_messages.push("------------------------------------------------------------------------------");

        var amount_of_page = this.page_count
        this.log_messages.push("The document contains: " + amount_of_page + " pages");

        for(var i=0; i < amount_of_page; i++){

            var page_id_with_hash_key = "#page" + (i+1);
            var page_numeration_string = "Seite " + (i+1) + " von " + amount_of_page;
            $(page_id_with_hash_key).find('.content_header_right p:nth-child(2)').html(page_numeration_string);
            
            this.log_messages.push("PAGE_ID: " + page_id_with_hash_key + "   " +page_numeration_string);
        }
        
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("                   INSERT PAGE NUMBER ON ALL PAGES - FINISHED                 ");
        this.log_messages.push("------------------------------------------------------------------------------");
        this.log_messages.push("");
        this.log_messages.push("");
    },
        
}










