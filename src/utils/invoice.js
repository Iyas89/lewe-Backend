const invoice = (invoiceData) => {
  const order = invoiceData[0].order;
  const articles = invoiceData[0].articles;

  const formattedDate = new Date(order.date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const invoiceBody = `</head>
  <body class="body">
   <div dir="ltr" class="es-wrapper-color">
    <!--[if gte mso 9]>
             <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                 <v:fill type="tile" color="#fafafa"></v:fill>
             </v:background>
         <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
     <tbody>
      <tr>
       <td class="esd-email-paddings" valign="top">
        <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe esd-synchronizable-module" align="center">
            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
             <tbody>
              <tr>
               <td class="esd-structure es-p20" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" class="esd-container-frame" align="center" valign="top">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-header" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe" align="center">
            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
             <tbody>
              <tr>
               <td class="esd-structure es-p20" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                       
                   <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                       <table cellpadding="0" cellspacing="0" width="100%">
                           <tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td>
                       </tr></tbody></table>
                   </td>
               
                       
               </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe" align="center">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
             <tbody>
              <tr>
               <td class="esd-structure es-p15t es-p20r es-p20l" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" class="esd-container-frame" align="center" valign="top">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="center" class="esd-block-image es-p10t es-p25b" style="font-size: 0px;"><a target="_blank"><img src="https://fcppxyi.stripocdn.email/content/guids/CABINET_e0de335fb58659891f74865fd4913f3a8deebe02297fdf605002c39f4a8aadb7/images/image_3gk.png" alt="" style="display:block" width="250" class="adapt-img"></a></td>
                      </tr>
                      <tr>
                       <td align="center" class="esd-block-text es-p10b es-m-txt-c"><h1 style="font-size: 46px; line-height: 100%;">Orden de Compra</h1></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe" align="center">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
             <tbody>
              <tr>
               <td class="esd-structure es-p20" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" class="esd-container-frame" align="center" valign="top">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="center" class="esd-block-text es-m-txt-c"><h2>Orden&nbsp;<a target="_blank">#${
                         order.id
                       }</a></h2></td>
                      </tr>
                      <tr>
                       <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l"><strong><p>${formattedDate}</p></strong></td>
                      </tr>
                      <tr>
                       <td align="center" class="esd-block-text es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l"><p>Este correo es para confirmar&nbsp;tu orden.</p></td>
                      </tr>
                      
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
              ${articles
                .map((article) => {
                  console.log(article.CategoryId);
                  console.log(article);
                  if (
                    article.CategoryId ===
                      "108312e1-bed1-4468-aaed-657307fb2267" ||
                    article.CategoryId ===
                      "4567773c-ab96-41aa-b9fa-ffa331fe4d7f" ||
                    article.CategoryId ===
                      "d5033fd4-8d56-4e02-b816-78b4f65ee660"
                  ) {
                    return `<tr>   
                <td class="esd-structure es-p10t es-p10b es-p20r es-p20l esdev-adapt-off" align="left">
                 <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                  <tbody>
                   <tr>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="70" class="es-m-p0r esd-container-frame" align="center">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="${article.image}" alt="" style="display: block;" width="70"></a></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>                                                   
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="265" class="esd-container-frame" align="center">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="left" class="esd-block-text"><p><strong>${article.name}</strong></p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="80" align="left" class="esd-container-frame">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="center" class="esd-block-text"><p>${article.quantity} Unidad/es</p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                      <tbody>
                       <tr>
                        <td width="85" align="left" class="esd-container-frame">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="right" class="esd-block-text"><p>$${article.price}</p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                   </tr>
                  </tbody>
                 </table></td>
               </tr>`;
                  }
                  return `<tr>   
                <td class="esd-structure es-p10t es-p10b es-p20r es-p20l esdev-adapt-off" align="left">
                 <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                  <tbody>
                   <tr>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="70" class="es-m-p0r esd-container-frame" align="center">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="${article.image}" alt="" style="display: block;" width="70"></a></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>                                                   
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="265" class="esd-container-frame" align="center">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="left" class="esd-block-text"><p><strong>${article.name}</strong></p></td>
                           </tr>
                           <tr>
                            <td align="left" class="esd-block-text es-p5t"><p>Talle: ${article.size}</p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                      <tbody>
                       <tr>
                        <td width="80" align="left" class="esd-container-frame">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="center" class="esd-block-text"><p>${article.quantity} Unidad/es</p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                    <td width="20"></td>
                    <td class="esdev-mso-td" valign="top">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                      <tbody>
                       <tr>
                        <td width="85" align="left" class="esd-container-frame">
                         <table cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                           <tr>
                            <td align="right" class="esd-block-text"><p>$${article.price}</p></td>
                           </tr>
                          </tbody>
                         </table></td>
                       </tr>
                      </tbody>
                     </table></td>
                   </tr>
                  </tbody>
                 </table></td>
               </tr>`;
                })
                .join("")}
              <tr>
               <td class="esd-structure es-p10t es-p20r es-p20l" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" class="es-m-p0r esd-container-frame" align="center">
                    <table cellpadding="0" cellspacing="0" width="100%" style="border-top: 2px solid #efefef; border-bottom: 2px solid #efefef;">
                     <tbody>
                      <tr>
                       <td align="right" class="esd-block-text es-m-txt-r es-p10t es-p20b"><p>Subtotal:&nbsp;<strong>$${
                         order.price
                       }</strong><br>Envío:&nbsp;<strong>$0.00</strong><br>Total:&nbsp;<strong>$${
    order.price
  }</strong></p></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
              <tr>
               <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]-->
                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                 <tbody>
                  <tr>
                   <td width="280" class="es-m-p0r esd-container-frame es-m-p20b" align="center">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="left" class="esd-block-text"><p>Email: <strong>${
                         order.customerMail
                       }</strong></p><p>Teléfono:&nbsp;<strong>${
    order.customerPhone
  }</strong></p><p>Fecha de Compra:&nbsp;<strong>${formattedDate}</strong></p><p>​</p></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table>
                <!--[if mso]></td><td width="0"></td><td width="280" valign="top"><![endif]-->
                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                 <tbody>
                  <tr>
                   <td width="280" class="es-m-p0r esd-container-frame" align="center">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="left" class="esd-block-text es-m-txt-l"><p>Dirección de envío:</p><p><strong>${
                         order.customerAddress
                       }</strong></p></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table>
                <!--[if mso]></td></tr></table><![endif]--></td>
              </tr>
              <tr>
               <td class="esd-structure es-p15t es-p10b es-p20r es-p20l" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" align="left" class="esd-container-frame">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size:0">
                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                         <tbody>
                          <tr>
                           <td align="center" valign="top" class="es-p40r es-m-p0r"><a target="_blank" href=""><img title="Facebook" src="https://fcppxyi.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" height="32" width="32"></a></td>
                           
                           <td align="center" valign="top" class="es-m-p0r es-p40r"><a target="_blank" href="https://www.instagram.com/leweargentina/"><img title="Instagram" src="https://fcppxyi.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" height="32" width="32"></a></td><td align="center" valign="top"><a target="_blank" href="https://wa.me/+5493516986262"><img title="Whatsapp" src="https://fcppxyi.stripocdn.email/content/assets/img/messenger-icons/logo-black/whatsapp-logo-black.png" alt="Whatsapp" height="32" width="32"></a></td>
                           
                          </tr>
                         </tbody>
                        </table></td>
                      </tr><tr>
                       <td align="center" class="esd-block-text es-p10t es-p10b"><p>​</p></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe esd-synchronizable-module" align="center">
            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
             <tbody>
              <tr>
               <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                       
                   <td width="600" class="esd-container-frame" align="left">
                       <table cellpadding="0" cellspacing="0" width="100%">
                           <tbody><tr><td align="center" class="esd-empty-container" style="display: none"></td>
                       </tr></tbody></table>
                   </td>
               
                       
               </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
         <tbody>
          <tr>
           <td class="esd-stripe esd-synchronizable-module" align="center">
            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
             <tbody>
              <tr>
               <td class="esd-structure es-p20" align="left">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tbody>
                  <tr>
                   <td width="560" class="esd-container-frame" align="center" valign="top">
                    <table cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                      <tr>
                       <td align="center" class="esd-block-text es-infoblock"><p><a target="_blank"></a>No longer want to receive these emails?&nbsp;<a href="" target="_blank">Unsubscribe</a>.<a target="_blank"></a></p></td>
                      </tr>
                     </tbody>
                    </table></td>
                  </tr>
                 </tbody>
                </table></td>
              </tr>
             </tbody>
            </table></td>
          </tr>
         </tbody>
        </table></td>
      </tr>
     </tbody>
    </table>
   </div>
  
 </body>`;
  return invoiceBody;
};

module.exports = { invoice };
