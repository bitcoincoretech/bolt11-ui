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

            $('#modal-extra-buttons').html(`<button onclick="invoiceComponent.encodeInvoice('${containerUUID}')" type="button" class="btn btn-info button120 float-left ">Encode</button>`);

            const privateKeyInput = `
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Private Key</span>
                    </div>
                    <input id="private-key-${containerUUID}" type="password" class="form-control">                      
                </div>
                <textarea id="encoded-invoice-${containerUUID}" readonly rows="10" style="width: 100%" class="mt-5"></textarea>`
            $('#modal-body').append(privateKeyInput);

        } catch (err) {
            console.error(err);
            openToasty('Encode BOLT 11 Invoice', err.message, true);
        }

        $('#modal-confirm-button').click(function () {});
    }

    function encodeInvoice(containerUUID) {
        const invoiceData = invoiceComponent.htmlToData(containerUUID);
        let encodedInvoice = lightningPayReq.encode(invoiceData);
       
        const privateKey = $(`#private-key-${containerUUID}`).val();
        if (privateKey) {
            encodedInvoice = lightningPayReq.sign(encodedInvoice, privateKey);
        }
        console.log('encodedInvoice', encodedInvoice);
        $(`#encoded-invoice-${containerUUID}`).val(encodedInvoice.paymentRequest);
    }

    function addRoutingNode(containerUUID, data) {
        const routingNodeUUID = uuidv4();
        const routingNodeHtml = routingNodeComponent.createNew({
            containerUUID: routingNodeUUID
        });
        $(`#routing-nodes-container-${containerUUID}`).append(`<div id="invoice-routing-node-${routingNodeUUID}" class="shadow mb-2 mt-2 mr-2">${routingNodeHtml}</div>`);
        if (data) {
            routingNodeComponent.dataToHtml(routingNodeUUID, data);
        }
    }

    const NETWORKS = {
        bc: {
            // default network is bitcoin
            bech32: 'bc',
            pubKeyHash: 0x00,
            scriptHash: 0x05,
            validWitnessVersions: [0]
        },

        tb: {
            bech32: 'tb',
            pubKeyHash: 0x6f,
            scriptHash: 0xc4,
            validWitnessVersions: [0]
        },
        sm: {
            bech32: 'sb',
            pubKeyHash: 0x3f,
            scriptHash: 0x7b,
            validWitnessVersions: [0]
        }
    }

    return {
        openDecodeInvoiceModal,
        openInvoiceEncodeModal,
        encodeInvoice,
        addRoutingNode,
        clear,
        NETWORKS
    }
}();