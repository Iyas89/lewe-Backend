const invoice = (invoiceData) => {
 // const {datosDelInvoice} = invoiceData;
  const invoiceBody = `
  <td
    align="center"
    class="esd-block-social es-p15t es-p15b"
    style="font-size:0"
  >
    <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
      <tbody>
        <tr>
          <td align="center" valign="top" class="es-p40r es-m-p0r">
            <a target="_blank" href="">
              <img
                title="Facebook"
                src="https://fcppxyi.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                alt="Fb"
                height="32"
                width="32"
              />
            </a>
          </td>

          <td align="center" valign="top" class="es-m-p0r es-p40r">
            <a target="_blank" href="https://www.instagram.com/leweargentina/">
              <img
                title="Instagram"
                src="https://fcppxyi.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                alt="Inst"
                height="32"
                width="32"
              />
            </a>
          </td>
          <td align="center" valign="top">
            <a target="_blank" href="https://wa.me/+5493517658536">
              <img
                title="Whatsapp"
                src="https://fcppxyi.stripocdn.email/content/assets/img/messenger-icons/logo-black/whatsapp-logo-black.png"
                alt="Whatsapp"
                height="32"
                width="32"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </td>`;
  return invoiceBody;
};

module.exports = { invoice };
