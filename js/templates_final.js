var template_page = '<div id="page" class="a4_content_wrapper">' +
                        '<div class="header"></div>' +
                        '<div class="content"></div>' +
                        '<div class="footer"></div>' +
                    '</div>';

var template_page_a4_test =   '<div id="a4_test" class="a4_content_wrapper" style="background-color:#00d83a;">' +

                '</div>';

var template_header_big_image_address_headline = 

                        '<div class="image_header">' +
                            '<img src="img/Header.jpg">' +
                        '</div>' +
                            
                        '<div class="address">' +
                            
                            '<div class="address_left">' +
                                '<p>' +
                                    'Rechnungsadresse:' +
                                '</p>' +
                                '<p>' +
                                    '{{billingAddress_contact_salutation}} <br>' +
                                    '{{billingAddress_contact_name1}} <br>' +
                                    '{{billingAddress_contact_name2}}' +
                                '</p>' +
                                '<p>' +
                                    '{{billingAddress_location_street}} <br>' +
                                    '{{billingAddress_location_country}} - {{billingAddress_location_zipCode}} {{billingAddress_location_town}}' +
                                '</p>' +
                            '</div>' +
                            
                            '<div class="address_right">' +
                                '<p>' +
                                    'Lieferadresse:' +
                                '</p>' +
                                '<p>' +
                                    '{{deliveryAddress_contact_salutation}} <br>' +
                                    '{{deliveryAddress_contact_name1}} <br>' +
                                    '{{deliveryAddress_contact_name2}}' +
                                '</p>' +
                                '<p>' +
                                    '{{deliveryAddress_location_street}} <br>' +
                                    '{{deliveryAddress_location_country}} - {{deliveryAddress_location_zipCode}} {{deliveryAddress_location_town}}' +
                                '</p>' +
                            '</div>' +
                            
                            '<div class="clear_both"></div>' +
                            
                        '</div>' +

                        '<div class="content_header">' +
                            
                            '<div class="content_header_left">' +
                                '<p>' +
                                    'Order Kollektion: {{orderConfirmationHeader_text}}' +
                                '</p>' +
                                '<p>' +
                                    '{{orderDateils_orderNumberTitle}} {{orderDetails_orderNumber}} {{orderDetails_orderDateTitle}} {{orderDetails_orderDate}} / {{orderDetails_customerNumberTitle}} {{orderDetails_customerNumber}}' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="content_header_right">' +
                                '<p>' +
                                    '{{orderConfirmationHeader_date}}' +
                                '</p>' +
                                '<p>' +
                                    'Seite 01 von 20' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="clear_both"></div>' +
                            
                        '</div>';


var template_header_middle_image_headline =

                        '<div class="image_header">' +
                            '<img src="img/Header.jpg">' +
                        '</div>' +
                            
                        '<div class="address">' +
                            
                        '</div>' +

                        '<div class="content_header">' +
                            
                            '<div class="content_header_left">' +
                                '<p>' +
                                    'Order Kollektion: {{orderConfirmationHeader_text}}' +
                                '</p>' +
                                '<p>' +
                                    '{{orderDateils_orderNumberTitle}} {{orderDetails_orderNumber}} {{orderDetails_orderDateTitle}} {{orderDetails_orderDate}} / {{orderDetails_customerNumberTitle}} {{orderDetails_customerNumber}}' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="content_header_right">' +
                                '<p>' +
                                    '{{orderConfirmationHeader_date}}' +
                                '</p>' +
                                '<p>' +
                                    'Seite 01 von 20' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="clear_both"></div>' +
                            
                        '</div>';

var template_header_short_text_headline = 

                        '<div class="headertext_header">' +
                            '<p>' +
                                'HTL Ganz Einfach - Für die Freude am Lernen' +
                            '</p>' +
                        '</div>' +

                        '<div class="content_header">' +
                            
                            '<div class="content_header_left">' +
                                '<p>' +
                                    'Order Kollektion: {{orderConfirmationHeader_text}}' +
                                '</p>' +
                                '<p>' +
                                    '{{orderDateils_orderNumberTitle}} {{orderDetails_orderNumber}} {{orderDetails_orderDateTitle}} {{orderDetails_orderDate}} / {{orderDetails_customerNumberTitle}} {{orderDetails_customerNumber}}' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="content_header_right">' +
                                '<p>' +
                                    '{{orderConfirmationHeader_date}}' +
                                '</p>' +
                                '<p>' +
                                    'Seite 01 von 20' +
                                '</p>' +

                            '</div>' +
                            
                            '<div class="clear_both"></div>' +
                            
                        '</div>';


var template_article = '{{#orderLines}}' +
                            '<div id="orderline" class="article">' +
                            '<div class="article_left">' +
                                '<p>' +
                                    '{{orderLine_articleDetails_model}}' +
                                '</p>' +
                                '<table>' +
                                    '<tr>' +
                                        '<td class="table_cell_key">{{orderLine_articleDetails_priceTitle}}</td>' +
                                        '<td class="table_cell_data">{{orderLine_articleDetails_priceValue}} {{orderLine_articleDetails_priceCurrency}}</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td class="table_cell_key">UVP:</td>' +
                                        '<td class="table_cell_data">10000 EUR</td>' +
                                    '</tr>' +                               
                                '</table>' +
                                
                            '</div>' +
                            '<div class="article_middle">' +
                                '<img src="img/ich.jpg">' +
                            '</div>' +
                            '<div class="article_right">' +
                                '<table id="orderLine_sizeGrid_table" class="orderLine_sizeGrid_table">' +

                                    
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
                                        '<th class="orderLine_sizeGrid_tableHeader_size">{{orderLine_sizeGrid_tableHeader_size10}}</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_amount">{{orderLine_sizeGrid_tableHeader_amount}}</th>' +
                                    
                                    '</tr>' +
    
                                    '{{#orderLine_sizeGrid_tableDataRows}}' +
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
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">{{orderLine_sizeGrid_tableDataRow_size10}}</td>' +
                                        '<td></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_amount">{{orderLine_sizeGrid_tableDataRow_amount}}</td>' +
                                    
                                    '</tr>' +
                                    '{{/orderLine_sizeGrid_tableDataRows}}' +

                                        '<tr class="orderLine_sizeGrid_tableFooter">' +
                                        '<th class="orderLine_sizeGrid_tableFooter_color">Total</th>' +
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
                                        '<th class="orderLine_sizeGrid_tableFooter_size">{{orderLine_sizeGrid_tableFooter_size10}}</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_amount">{{orderLine_sizeGrid_tableFooter_amount}}</th>' +
                                        
                                    '</tr>' +

                                
                                '</table>' +
                            '</div>' +
                            '<div class="clear_both"></div>' +
                        '</div>' +
                        '//thespereator//' +
                        '{{/orderLines}}';


var template_article_test = '<div id="orderline" class="article">' +
                            '<div class="article_left">' +
                                '<p>' +
                                    '{{orderlines.orderLine_articleDetails_model}}' +
                                '</p>' +
                                '<table>' +
                                    '<tr>' +
                                        '<td class="table_cell_key">Single Price:</td>' +
                                        '<td class="table_cell_data">63 EUR</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td class="table_cell_key">UVP:</td>' +
                                        '<td class="table_cell_data">10000 EUR</td>' +
                                    '</tr>' +                               
                                '</table>' +
                                
                            '</div>' +
                            '<div class="article_middle">' +
                                '<img src="img/ich.jpg">' +
                            '</div>' +
                            '<div class="article_right">' +
                                '<table id="orderLine_sizeGrid_table" class="orderLine_sizeGrid_table">' +

                                    
                                    '<tr class="orderLine_sizeGrid_tableHeader">' +
                                        '<th class="orderLine_sizeGrid_tableHeader_color">Color</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">UNI</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">XXS</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">XS</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">S</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">M</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">L</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">XL</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">XXL</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">3XL</th>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_size">4XL</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableHeader_amount">Qty</th>' +
                                    
                                    '</tr>' +


                                    
                                    '<tr class="orderLine_sizeGrid_tableDataRow">' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_color">BLACK</td>' +
                                        '<td></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size"></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size"></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size">1</td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size"></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_size"></td>' +
                                        '<td></td>' +
                                        '<td class="orderLine_sizeGrid_tableDataRow_amount">6</td>' +
                                    
                                    '</tr>' +



                                    
                                    '<tr class="orderLine_sizeGrid_tableFooter">' +
                                        '<th class="orderLine_sizeGrid_tableFooter_color">Total</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">0</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">0</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">3</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">0</th>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_size">0</th>' +
                                        '<td></td>' +
                                        '<th class="orderLine_sizeGrid_tableFooter_amount">18</th>' +
                                        
                                    '</tr>' +

                                
                                '</table>' +
                            '</div>' +
                            '<div class="clear_both"></div>' +
                        '</div>';

var template_agb =               '<div class="agb">' +
                            '<p class="agb_headline">' +
                                'Verkaufs-, Liefer- und Zahlungsbedingungen (AGB)' +
                            '</p>' +
                                 
                            '<p class="agb_headline2">' +
                                '1. Geltungsbereich' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Der Kaufvertrag kommt durch den schriftlichen Auftrag zustande. Diese AGB bilden jeweils einen untrennbaren Bestandteil des Kaufvertrages. Nebenabreden und allfällige Geschäftsbedingungen des Käufers bedürfen zu ihrer Gültigkeit unserer schriftlichen Bestätigung bzw. Anerkennung.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '2. Angebote, Bestellungen' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Unsere Angebote gelten freibleibend. Die in Katalogen, Prospekten etc. enthaltenen Angaben sind für den Kaufvertrag nur maßgeblich, wenn sie von uns im Auftrag ausdrücklich bestätigt werden.' +
'Aufträge des Käufers können wir innerhalb von zwei Wochen ohne Angabe eines Grundes schriftlich ablehnen.' +
                            '<p class="agb_headline2">' +
                                '3. Preise, Zahlungsbedingungen' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Unsere Rechnungen sind sofort zur Zahlung fällig, sofern keine abweichende Vereinbarungen oder Zahlungsziele vereinbart werden. Die Mehrwertsteuer wird in der jeweils gesetzlichen Höhe in der Rechnung gesondert ausgewiesen und ist vom Käufer zu bezahlen.' +
'Über den vereinbarten Leistungsumfang hinausgehende Lieferungen oder Leistungen können von uns gesondert in Rechnung gestellt werden.' +
'Gerät der Käufer in Zahlungsverzug, sind wir berechtigt, Verzugszinsen in Höhe von 9,2% über dem Basiszinssatz zu verlangen. Durch den Zahlungsverzug verursachte Mahnkosten sind vom Käufer zu bezahlen.Aufrechnungs- und Zurückbehaltungsrechte stehen dem Käufer nur zu, wenn seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder von uns anerkannt sind.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '4. Lieferung' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Der Liefertermin ist in den Auftrag aufzunehmen. Wir sind jedoch berechtigt, die im Auftrag vereinbarte Lieferzeit um maximal 12 Werktage zu überschreiten. Weiteres können wir unsere Lieferverpflichtung nachVerfügbarkeit der Waren in Teillieferungen erfüllen. Wir sind berechtigt, nach Verfügbarkeit der Ware Bestellmengen zu unterschreiten, wenn wir aus Gründen, die nicht von uns zu vertreten sind, von unserem Lieferanten nicht vollständig beliefert werden. Wenn wir von unseren Lieferanten aus Gründen, die wir nicht zu vertreten haben, zur Gänze nicht beliefert werden, können wir vom Vertrag mit dem Käufer zurücktreten. Kommt der Käufer in Annahmeverzug oder verletzt er schuldhaft sonstige Mitwirkungspflichten, können wir nach Ablauf einer angemessenen Nachfrist vom Vertrag zurücktreten und vom Käufer 25 % des Kaufpreises als pauschalen Schadenersatz (Konventionalstrafe) fordern. Weitergehende (Schadenersatz-)Ansprüche bleiben uns vorbehalten.' +
'Dem Käufer steht das Recht zu, bei Vorliegen besonders wichtiger Gründe (Zahlungsunfähigkeit, höhere Gewalt) vom Vertrag zurückzutreten, wenn er 25 % des Kaufpreises als pauschalen Schadenersatz an uns bezahlt.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '5. Versand und Gefahrtragung' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Versandart und Versandweg werden, soweit keine anderslautende schriftliche Vereinbarung getroffen wurde, von uns bestimmt. Die Lieferung und der Versand der Ware erfolgt auf Gefahr des Käufers. Soweit schriftlich nichts anderes vereinbart wurde, geht die Preisgefahr mit Absendung der Ware – Bei Annahmeverzug des Käufers mit unserer Versandbereitschaft – auf den Käufer über.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '6. Mängel' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Mängel der Ware, die nicht unverzüglich, spätestens jedoch innerhalb von 5 Werktagen nach Ankunft der Ware am Bestimmungsort unter genauer Bezeichnung schriftlich vom Käufer geltend gemacht werden, gelten als genehmigt. Ausgenommen hiervon sind nur Mängel, die trotz sorgfältiger Prüfung nicht innerhalb obigerFrist entdeckt werden können. Diese Mängel gelten als genehmigt, wenn sie nicht unverzüglich nach Entdeckung in obiger Weise geltend gemacht werden. Gleichzeitig mit der Geltendmachung von Mängeln sind Muster der mangelhaften Ware sowie Belege an uns zu übersenden. Soweit ein Mangel der Ware vorliegt, sind wir zur Nacherfüllung berechtigt. Schlägt die Nacherfüllung fehl, so ist der Käufer nach seiner Wahl berechtigt, vom Vertrag zurückzutreten oder Minderung des Kaufpreises zu verlangen.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '7. Eigentumsvorbehalt' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Die gelieferte Ware bleibt bis zur vollständigen Erfüllung der Verpflichtung des Käufers, insbesondere Bezahlung des Kaufpreises samt Nebenkosten und Zinsen, Gebühren, Spesen etc. unser Eigentum. Bei Pfän- dungen der Vorbehaltsware hat uns der Käufer unverzüglich davon zu informieren und uns bei der Sicherung unserer Rechte zu unterstützen sowie uns sämtliche diesbezüglich erwachsenden Kosten zu ersetzen.' +
                            '</p>    ' +
                            '<p class="agb_headline2">    ' +
                                '8. Namen- und Markenaufdruck, Urheberrechte' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Wir sind zum Aufdruck eines Firmen- oder Markennamens auf die gelieferten Waren auch ohne ausdrückliche Bewilligung des Käufers berechtigt und behalten uns sämtliche Rechte an den Waren und von uns verwendeten Entwürfen, Zeichnungen, Maßbildern etc. vor.' +
                            '</p>' +
                            '<p class="agb_headline2">' +
                                '9. Schadenersatz' +
                            '</p>' +
                            '<p class="agb_headline_text">' +
'Soweit in diesen AGB nichts anderes vorgesehen wurde, bleibt unsere Haftung in allen Fällen auf jene Schäden beschränkt, die an der Ware entstanden sind. Jeder darüber hinausgehende Schadenersatz, ins- besondere für Mangelfolgeschäden ist ausgeschlossen, sofern uns nicht grobes Verschulden vorzuwerfen ist. 10. Gerichtsstand, Erfüllungsort, Recht Gerichtsstand für alle Streitigkeiten zwischen uns und dem Käufer ist 1010 Wien. Erfüllungsort ist unser Geschäftssitz. Es gilt das Recht der Republik Österreich. Die Geltung des UN-Kaufrechts ist ausgeschlossen.' + 
                            '</p>' +
                    '</div>';


var template_order_summary_signature =      '<div class="content_footer">' +
                            '<div class="content_footer_left">' +
                                '<p>' +
                                    'Delivery Date' +
                                '</p>' +
                                '<p>' +
                                    '01.07.2016 - 31.08.2016' +
                                '</p>' +
                            '</div>' +
                            '<div class="content_footer_middle">' +
                                '<p>' +
                                    'Frachtkosten' +
                                '</p>' +
                                '<p>' +
                                    '2% v. Lieferwert' +
                                '</p>' +
                            '</div>' +
                            '<div class="content_footer_right">' +
                                '<p>' +
                                    'Summary' +
                                '</p>' +
                                '<p>' +
                                    'Items: 160' +
                                '</p>' +
                                '<p>' +
                                    'Grand Total: 9327 EUR' +
                                '</p>' +
                                '<p>' +
                                    'Bemerkung: Eine Bemerkung' +
                                '</p>' +
                                '<p>' +
                                    'Vorname Nachname , 14.02.2016' +
                                '</p>' +
                            '</div>' +
                            '<div class="clear_both"></div>' +
                        '</div>';

var template_document_signature =   '<div class="content_footer">' +
                            '<div class="content_footer_right">' +
                                '<p>' +
                                    
                                '</p>' +
                                '<p>' +
                                    
                                '</p>' +
                                '<p>' +
                                    
                                '</p>' +
                                '<p>' +
                                    
                                '</p>' +
                                '<p>' +
                                    'Vorname Nachname , 14.02.2016' +
                                '</p>' +
                            '</div>' +
                            '<div class="clear_both"></div>' +
                        '</div>' +
                    '</div>';


var template_footer_big_image = 
                        '<div class="image_footer">' +
                                '<img src="img/Footer.jpg">' +
                        '</div>' ;


var template_footer_short_text_static = 
                        '<div class="footertext_footer">' +
                                '<p>' +
                                    'Wiedner & Ilter KG, Schönbrunner Alle 2-6 / Top 8 2331 Vösendorf bei Wien - Austria, Telefon: +43/(0)1 214 52 14, Telefon: +43/(0)1 545 78 77, Fax: +43/(0)1 214 52 14 77, info@wieder-iltar.com , www.wieder-iltar.com , DETAILS: KONTO: Bank Austria Creditanstalt AG, IBAN EURO: AT75 1200 0518 4700 0701, IBAN USD: AT75 1200 0518 4700 0702, BIC: BKAUATWW, FIRMENBUCHNUMMER: FN249633H, UID: ATU58097017 , GERICHTSSTAND: Wien , EIGENTUMSVORBEHALT: Zahlbar und klagbar in Wien. Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum. Es gelten die umseitigen allgemeinen Verkaufs- und Lieferbedingungen<br>' +
                                '</p>' +
                        '</div>' ;

var template_footer_short_text_dynamic = 
                        '<div class="footertext_footer">' +
                                '<p>' +
                                    'Firma: {{companyDetails_name1}} {{companyDetails_name2}}, Adress: {{companyDetails_address}}, ' +
                                    'Telefon: {{companyDetails_telephone1}}, Telefon: {{companyDetails_telephone2}}, ' +
                                    'Fax: {{companyDetails_fax}}, Email: {{companyDetails_email}}, {{companyDetails_webiste}}, ' +
                                    'DETAILS: KONTO: {{companyDetails_bankName}}, IBAN EURO: {{companyDetails_accountNumberTitle}}, ' +
                                    'IBAN USD: {{companyDetails_accountNumber}}, BIC: {{companyDetails_accountBankCodeTitle}}, ' + 
                                    'Bank Code: {{companyDetails_accountBankCode}}, {{companyDetails_jurisdictionTitle}}: ' +
                                    '{{companyDetails_jurisdictionTown}}, {{companyDetails_legalNotice}} ' +
                                    'UID: {{ATU58097017}}, FIRMENBUCHNUMMER: {{companyDetails_fnNumber}}, ' +
                                    'EIGENTUMSVORBEHALT: Zahlbar und klagbar in Wien. Es gelten die umseitigen allgemeinen Verkaufs- und Lieferbedingungen. ' +
                                    '{{customerSignature_text}}' +
                                '</p>' +
                        '</div>' ;




