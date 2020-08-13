var template1 = '<h1>{{firstname}} {{lastname}}<h1>';


var template2 = 
'<!-- CONTENT BODY -->' + 
       '<div id="contentBody" class="contentBody">' +
            
            '<!-- HEADER IMAGE -->' +
            '<div id="headerImage" class="headerImage"> </div>' +

            '<!-- CONTENT HEADER -->' +
            '<div class="contentHeader">' +

                '<!-- BILLING ADDRESS -->' +
                '<span class="billingAddress">' +

                    '<div class="billingAddress_contact">' +
                        '<p class="billingAddress_contact_salutation">{{billingAddress_contact_salutation}}</p>' +
                        '<br>' +
                        '<p class="billingAddress_contact_name1">{{billingAddress_contact_name1}}</p>' +
                        '<br>' +
                        '<p class="billingAddress_contact_name2">{{billingAddress_contact_name2}}</p>' +
                        '<br>' +
                    '</div>' +

                    '<br>' +

                    '<div class="billingAddress_location">' +
                        '<p class="billingAddress_location_street">{{billingAddress_location_street}}</p>' +
                        '<br>' +
                        '<p class="billingAddress_location_country">{{billingAddress_location_country}}</p>' +

                        '<p class="billingAddress_location_zipCode">{{billingAddress_location_zipCode}}</p>' +
                        '<p class="billingAddress_location_town">{{billingAddress_location_town}}</p>' +
                    '</div>' +

                '<!-- BILLING ADDRESS -->' +
                '</span>' +


    
    

                '<!-- DELIVERY ADDRESS -->' +
                '<span class="deliveryAddress">' +

                    '<p class="delieryAddress_header">{{deliveryAddress_header}}</p>' +

                    '<div class="deliveryAddress_contact">' +
                        '<p class="deliveryAddress_contact_saltution">{{deliveryAddress_contact_saltution}}</p>' +
                        '<br>' +
                        '<p class="deliveryAddress_contact_name1">{{deliveryAddress_contact_name1}}</p>' +
                        '<br>' +
                        '<p class="deliveryAddress_contact_name2">{{deliveryAddress_contact_name2}}</p>' +
                        '<br>' +
                    '</div>' +

                    '<br>' +

                    '<div class="deliveryAddress_location">' +
                        '<p class="deliveryAddress_location_street">{{deliveryAddress_location_street}}</p>' +
                        '<br>' +
                        '<p class="deliveryAddress_location_country">{{deliveryAddress_location_country}}</p>' +
    
                        '<p class="deliveryAddress_location_zipCode">{{deliveryAddress_location_zipCode}}</p>' +
                        '<p class="deliveryAddress_location_town">{{deliveryAddress_location_town}}</p>' +
                    '</div>' +

                '<!-- DELIVERY ADDRESS -->' +
                '</span>' +

            '<!-- CONTENT HEADER -->' +
            '</div>' +


            '<!-- ORDER CONFIRMATION HEADER -->' +
            '<div class="orderConfirmationHeader">' +
                
                '<p class="orderConfirmationHeader_text">{{orderConfirmationHeader_text}}</p>' +
                '<p class="orderConfirmationHeader_date">{{orderConfirmationHeader_date}}</p>' +
                
                '<br>' +
                
                '<p class="orderConfirmationHeader_collection">{{orderSummary_articles_collectionText}}: {{orderSummary_articles_collection}}</p>' +

                '<!-- ORDER DETAILS -->' +
                '<div class="orderDetails">' +

                    '<p class="orderDateils_orderNumberTitle">{{orderDateils_orderNumberTitle}}</p>' +
                    '<p class="orderDetails_orderNumber">{{orderDetails_orderNumber}}</p>' +

                    '<p class="orderDetails_orderDateTitle">{{orderDetails_orderDateTitle}}</p>' +
                    '<p class="orderDetails_orderDate">{{orderDetails_orderDate}}</p>' +

                    '<p class="orderDetails_customerNumberTitle">{{orderDetails_customerNumberTitle}}</p>' +
                    '<p class="orderDetails_customerNumber">{{orderDetails_customerNumber}}</p>' +

                '<!-- ORDER DETAILS -->' +
                '</div>' +

            '<!-- ORDER CONFIRMATION HEADER -->' +
            '</div>' + 
    
    
    
    
    
    
            '<!-- ORDERLINES -->' +
            '<div class="orderLines">' +

                '{{#orderLines}}' +
                '<!-- ORDERLINE -->' +
                '<div class="orderLine">' +

                    '<!-- ORDERLINE ARTICLE DETAILS -->' +
                    '<div class="orderLine_articleDetails">' +

                        '<p class="orderLine_articleDetails_model">{{orderLine_articleDetails_model}}</p>' +
                        '<p class="orderLine_articleDetails_description">{{orderLine_articleDetails_description}}</p>' +
                        
                        
                        '<div class="orderLine_articleDetails_price">' +
                            '<p class="orderLine_articleDetails_priceTitle">{{orderLine_articleDetails_priceTitle}}</p>' +
                            '<p class="orderLine_articleDetails_priceValue">{{orderLine_articleDetails_priceValue}}</p>' +
                            '<p class="orderLine_articleDetails_priceCurrency">{{orderLine_articleDetails_priceCurrency}}</p>' +
                        '</div>' +
                        
                        
                        '<!--<div class="orderLine_articleDetails_material">' + 
                            '<p class="orderLine_articleDetails_materialTitle">{{orderLine_articleDetails_materialTitle}}</p>' +
                            '<p class="orderLine_articleDetails_materialValue">{{orderLine_articleDetails_materialValue}}</p>' +
                        '</div>-->' +

                    '<!-- ORDERLINE ARTICLE DETAILS -->' +
                    '</div>' +



                    '<!-- ORDERLINE ARTICLE IMAGE -->' +
                    '<div class="orderLine_articleImage" style="background-image: url("{{orderLine_articleImagePath}}");"></div>' +



                    '<!-- ORDERLINE SIZE GRID -->' +
                    '<div class="orderLine_sizeGrid">' +

                        '<!-- ORDERLINE TABLE -->' +
                        '<table id="orderLine_sizeGrid_table" class="orderLine_sizeGrid_table">' +

                            '<!-- ORDERLINE HEADER ROW -->' +
                            '<tr class="orderLine_sizeGrid_tableHeader">' +

                                '<th class="orderLine_sizeGrid_tableHeader_color">{{orderLine_sizeGrid_tableHeader_color}}</th>' +

                                '<td></td>' +

                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size1}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size2}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size3}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size4}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size5}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size6}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size7}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size8}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size9}}</th>' +
                                '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size10}}</th>'+ 

                                '<td></td>'+

                                '<th class="orderLine_sizeGrid_tableHeader_amount">{{orderLine_sizeGrid_tableHeader_amount}}</th>'+

                            '<!-- ORDERLINE HEADER ROW -->'+
                            '</tr>'+



                            '{{#orderLine_sizeGrid_tableDataRows}}'+
                            '<!-- ORDERLINE CONTENT ROW -->' +
                            '<tr class="orderLine_sizeGrid_tableDataRow">' +

                                '<td class="orderLine_sizeGrid_tableDataRow_color">{{orderLine_sizeGrid_tableDataRow_color}}</td>' +

                                '<td></td>' +

                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size1}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size2}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size3}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size4}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size5}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size6}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size7}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size8}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size9}}</td>' +
                                '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size10}}</td>'+

                                '<td></td>' +

                                '<td class="orderLine_sizeGrid_tableDataRow_amount">{{orderLine_sizeGrid_tableDataRow_amount}}</td>' +

                            '<!-- ORDERLINE CONTENT ROW -->' +
                            '</tr>' +
                            '{{/orderLine_sizeGrid_tableDataRows}}' +
                            
                            
                            
                            '<!-- ORDERLINE FOOTER ROW -->' +
                            '<tr class="orderLine_sizeGrid_tableFooter">' +
                                
                                '<th class="orderLine_sizeGrid_tableFooter_color">{{orderLine_sizeGrid_tableFooter_color}}</th>' +
                                
                                '<td></td>' +
                                
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size1}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size2}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size3}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size4}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size5}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size6}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size7}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size8}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size9}}</th>' +
                                '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size10}}</th>'+
                                
                                '<td></td>' +
                                
                                '<th class="orderLine_sizeGrid_tableFooter_amount">{{orderLine_sizeGrid_tableFooter_amount}}</th>' +
                                
                                '<!-- ORDERLINE FOOTER ROW -->' +
                            '</tr>' +
                            
                        '<!-- ORDERLINE TABLE -->' +
                        '</table>' +
                        
                        
                        '<!-- ORDERLINE SIZE GRID SUBTOTAL -->' +
                        '<p class="orderLine_sizeGrid_subtotal">{{orderLine_sizeGrid_subtotalText}}: {{orderLine_sizeGrid_subtotalValue}} {{orderLine_sizeGrid_subtotalCurrency}}</p>' +
                        
                        
                    '<!-- ORDERLINE SIZE GRID -->' +
                    '</div>' +


                '<!-- ORDERLINE -->' +
                '</div>' +
                '{{/orderLines}}' +
                
                
                '<!-- LAST ORDERLINE -->' +
                '<div class="lastOrderLine">' +
                '</div>' +

            '<!-- ORDERLINES -->' +
            '</div>' +
    
    
    
    
    
    
    
    '<!-- ORDER SUMMARY -->' +
            '<div class="orderSummary">' +

                '<!-- DELIVERY CONDITIONS -->' +
                '<div class="deliveryConditions">' +
'<!--' +
                    '<div class="orderSummary_paymentConditions">' +
                        '<p class="orderSummary_paymentConditions_header">{{orderSummary_paymentConditions_header}}</p>' +
                        '<p class="orderSummary_paymentConditions_details">{{orderSummary_paymentConditions_details}}</p>' +
                    '</div>' +
'-->' +
                    
                    
                    '<div class="orderSummary_deliveryConditions">' +
                        '<p class="orderSummary_deliveryConditions_header">{{orderSummary_deliveryConditions_header}}</p>' +
                        '<p class="orderSummary_deliveryConditions_details">{{orderSummary_deliveryConditions_details}}</p>' +
                    '</div>' +


                    '<div class="orderSummary_shipmentConditions">' +
                        '<p class="orderSummary_shipmentConditions_header">{{orderSummary_shipmentConditions_header}}</p>' +
                        '<p class="orderSummary_shipmentConditions_details">{{orderSummary_shipmentConditions_details}}</p>' +
                    '</div>' +


                    '<div class="orderSummary_details">' +

                        '<p class="orderSummary_details_priceTitle">{{orderSummary_details_priceTitle}}</p>' +
                        '<p class="orderSummary_details_currency">{{orderSummary_details_currency}}</p>' +
                        '<p class="orderSummary_details_includingTax">{{orderSummary_details_includingTax}}</p>' +
                        '<p class="orderSummary_details_tax">{{orderSummary_details_tax}}</p>' +

                        '<br>' +

                        '<p class="orderSummary_details_seasonTitle">{{orderSummary_details_seasonTitle}}</p>' +
                        '<p class="orderSummary_details_season">{{orderSummary_details_season}}</p>' +
                        
                        '<br>' +
                        
                        '<p class="orderSummary_details_salesmanTitle">{{orderSummary_details_salesmanTitle}}</p>' +
                        '<p class="orderSummary_details_salesman">{{orderSummary_details_salesman}}</p>' +
                        
                        '<br>' +
                        
                        '<p class="orderSummary_details_salesmanTitle">{{orderSummary_details_collectionTitle}}</p>' +
                        '<p class="orderSummary_details_salesman">{{orderSummary_details_collection}}</p>' +

                    '</div>' +
                    
                    '<div class="orderSummary_articles">' +
                        '<p class="orderSummary_articles_header">{{orderSummary_articles_header}}</p>' +
                        '<p class="orderSummary_articles_numberOfArticles">{{orderSummary_articles_articleText}}: {{orderSummary_articles_articleValue}}</p>' +
                        '<p class="orderSummary_articles_grandTotal">{{orderSummary_articles_priceText}}: {{orderSummary_articles_priceValue}} {{orderSummary_articles_priceCurrency}}</p>' +
                        '<p class="orderSummary_articles_userComment">{{orderSummary_articles_userCommentText}}: {{orderSummary_articles_userComment}}</p>' +
                    '</div>' +

                '<!-- DELIVERY CONDITIONS -->' +
                '</div>' +



                '<!-- COMPANY DETAILS -->' +
                '<div class="companyDetails">' +

                    '<!--<div class="companyDetails_line1">' +

                        '<div class="companyDetails_line1Section1">' +
                            '<p class="companyDetails_name1">{{companyDetails_name1}}</p>' +
                            '<p class="companyDetails_name2">{{companyDetails_name2}}</p>' +
                        '</div>' +

                        '<div class="companyDetails_line1Section2">' +
                            '<p class="companyDetails_bankName">{{companyDetails_bankName}}</p>' +
                            '<p class="companyDetails_accountNumberTitle">{{companyDetails_accountNumberTitle}}</p>' +
                            '<p class="companyDetails_accountNumber">{{companyDetails_accountNumber}}</p>' +
                            '<p class="companyDetails_accountBankCodeTitle">{{companyDetails_accountBankCodeTitle}}</p>' +
                            '<p class="companyDetails_accountBankCode">{{companyDetails_accountBankCode}}</p>' +
                        '</div>' +

                    '</div>' +

                    '-->' +

                    '<div class="companyDetails_line2">' +

                        '<div class="companyDetails_line2Section1">' +
                            '<p class="companyDetails_jurisdictionTitle">{{companyDetails_jurisdictionTitle}}</p>' +
                            '<p class="companyDetails_jurisdictionTown">{{companyDetails_jurisdictionTown}}</p>' +
                            '<br>' +
                            '<p class="companyDetails_legalNotice">{{companyDetails_legalNotice}}</p>' +
                        '</div>' +

                        '<!--<div class="companyDetails_line2Section2">' +
                            '<p class="companyDetails_uidTitle">{{companyDetails_uidTitle}}</p>' +
                            '<p class="companyDetails_uidNumber">{{companyDetails_uidNumber}}</p>' +
                            '<p class="companyDetails_fnTitle">{{companyDetails_fnTitle}}</p>' +
                            '<p class="companyDetails_fnNumber">{{companyDetails_fnNumber}}</p>' +
                        '</div>-->' +

                    '</div>' +

                    '<div class="companyDetails_line3">' +

                        '<div class="customerSignature" style=" background-image: url("{{orderID}}_signature.png"); ">' +
                            '<p class="customerSignature_text">{{customerSignature_text}}, {{customerSignature_date}} </br> {{customerSignature_comment}}</p>' +
                        '</div>' +

                    '</div>' +

                '<!-- COMPANY DETAILS -->' +
                '</div>' +
                
                '<!-- FOOTER IMAGE -->' +
                '<div id="footerImage" class="footerImage"> </div>' +
                
                '<!-- CUSTOMER SIGNATURE -->' +
                '<div class="customerSignature2" style=" background-image: url("{{orderID}}_signature.png"); ">' +
                    '<p class="customerSignature_text">{{customerSignature_text}}, {{customerSignature_date}} </br> {{customerSignature_comment}}</p>' +
                '</div>' +


            '<!-- ORDER SUMMARY -->' +  
            '</div>' +
            
        '<!-- CONTENT BODY -->' +
        '</div>' +
        
    '</body>' +
    
'</html>' +
    

'';