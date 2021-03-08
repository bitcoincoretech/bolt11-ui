const invoiceComponent = function () {

    function clear(containerUUID) {
        const container = $(`#invoice-container-${containerUUID}`);
        const parentContainerId = container.parent().attr('id');
        container.remove();

        $(`#${parentContainerId}`).html(invoiceComponent.createNew({
            containerUUID
        }));
    }

    function openDecodeInvoiceModal(containerUUID) {
        $('#modal-title').text('Decode BOLT 11 Invoice');
        $('#modal-confirm-button').off();
        $('#modal-extra-buttons').empty();
        $('#modal-body').empty();

        $('#modal-body').append('<textarea id="invoiceText" rows="10" style="width: 100%"></textarea>');

        $('#modal-confirm-button').click(function () {
            try {
                const invoiceText = $('#invoiceText').val();
                const invoice = lightningPayReq.decode(invoiceText);
                console.log('invoice', invoice);
                invoiceComponent.dataToHtml(containerUUID, {
                    invoice
                });
                ///dataToHTML
            } catch (err) {
                console.error(err);
                openToasty('Decode BOLT 11 Invoice', err.message, true);
            }
        });
    }

    function openInvoiceEncodeModal(containerUUID) {
        $('#modal-title').text('Encode BOLT 11 Invoice');
        $('#modal-confirm-button').off();
        $('#modal-extra-buttons').empty();
        $('#modal-body').empty();

        try {
            const invoice = invoiceComponent.htmlToData(containerUUID);
            $('#modal-body').append('<textarea id="invoiceText" readonly rows="10" style="width: 100%"></textarea>');
            $(`#invoiceText`).val(invoice.toHex());
        } catch (err) {
            console.error(err);
            openToasty('Encode BOLT 11 Invoice', err.message, true);
        }

        $('#modal-confirm-button').click(function () {});
    }


    return {
        openDecodeInvoiceModal,
        openInvoiceEncodeModal,
        clear
    }
}();