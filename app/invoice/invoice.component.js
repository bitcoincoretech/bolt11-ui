const invoiceComponent = function () {

    function clear(containerUUID) {
        const container = $(`#invoice-container-${containerUUID}`);
        const parentContainerId = container.parent().attr('id');
        container.remove();

        $(`#${parentContainerId}`).html(invoiceComponent.createNew({
            containerUUID
        }));
        invoiceComponent.initInOutLists(containerUUID);
    }

    function openInvoiceFromHexModal(containerUUID) {
        $('#modal-title').text('Transaction From Hex');
        $('#modal-confirm-button').off();
        $('#modal-extra-buttons').empty();
        $('#modal-body').empty();

        $('#modal-body').append('<textarea id="txHexEdit" rows="10" style="width: 100%"></textarea>');

        $('#modal-confirm-button').click(function () {
            try {
                // clean all fields first
                const txHexValue = $('#txHexEdit').val();
                populateTransactionFromHex(containerUUID, txHexValue)
            } catch (err) {
                console.error(err);
                openToasty('Transaction From Hex', err.message, true);
            }
        });
    }

    function openInvoiceToHexModal(containerUUID) {
        $('#modal-title').text('Transaction To Hex');
        $('#modal-confirm-button').off();
        $('#modal-extra-buttons').empty();
        $('#modal-body').empty();

        try {
            const tx = invoiceComponent.htmlToData(containerUUID);
            $('#modal-body').append('<textarea id="txHexView" readonly rows="10" style="width: 100%"></textarea>');
            $(`#txHexView`).val(tx.toHex());
        } catch (err) {
            console.error(err);
            openToasty('Transaction to Hex', err.message, true);
        }

        $('#modal-confirm-button').click(function () {});
    }


    return {
        openInvoiceFromHexModal,
        openInvoiceToHexModal,
        clear
    }
}();