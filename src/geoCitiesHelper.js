/* eslint-disable no-undef */
const geoCitiesHelper = () => {
  // source: https://geobytes.com/free-ajax-cities-jsonp-api/
  jQuery(() => {
    jQuery('#f_elem_city').autocomplete({
      source(request, response) {
        jQuery.getJSON(
          `https://secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&callback=?&q=${request.term}`,
          (data) => {
            response(data);
          },
        );
      },
      minLength: 3,
      select(event, ui) {
        const selectedObj = ui.item;
        jQuery('#f_elem_city').val(selectedObj.value);
        return false;
      },
      open() {
        jQuery(this).removeClass('ui-corner-all').addClass('ui-corner-top');
      },
      close() {
        jQuery(this).removeClass('ui-corner-top').addClass('ui-corner-all');
      },
    });
    jQuery('#f_elem_city').autocomplete('option', 'delay', 100);
  });
};

export default geoCitiesHelper;
