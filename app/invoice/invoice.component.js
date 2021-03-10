const invoiceComponent = function () {

    function clear(containerUUID) {
        const container = $(`#invoice-container-${containerUUID}`);
        const parentContainerId = container.parent().attr('id');
        container.remove();

        $(`#${parentContainerId}`).html(invoiceComponent.createNew({
            containerUUID
        }));
        invoiceComponent.dataToHtml(containerUUID, {
            invoice: {}
        });
    }

    function openDecodeInvoiceModal(containerUUID) {
        $('#modal-title').text('Decode BOLT 11 Invoice');
        $('#modal-confirm-button').off();
        $('#modal-extra-buttons').empty();
        $('#modal-body').empty();

        $('#modal-body').append('<textarea id="invoiceText" rows="10" style="width: 100%"></textarea>');

        $('#modal-confirm-button').click(function () {
            try {
                const invoiceText = ($('#invoiceText').val() || '').trim();
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
                <div class="form-check-inline mt-3">
                    <label class="form-check-label">
                        <input id="add-defaults-${containerUUID}" type="checkbox" checked class="form-check-input">
                        Add Defaults (description, expire time, and min cltv)
                    </label>
                </div>
                <textarea id="encoded-invoice-${containerUUID}" readonly rows="10" style="width: 100%" class="mt-5"></textarea>`
            $('#modal-body').append(privateKeyInput);

        } catch (err) {
            console.error(err);
            openToasty('Encode BOLT 11 Invoice', err.message, true);
        }

        $('#modal-confirm-button').click(function () {
            const paymentRequest = $(`#encoded-invoice-${containerUUID}`).val();
            if (paymentRequest) {
                $(`#payment-request-${containerUUID}`).val(paymentRequest);
            }
        });
    }

    function encodeInvoice(containerUUID) {
        try {
            const invoiceData = invoiceComponent.htmlToData(containerUUID);
            const addDefaults = $(`#add-defaults-${containerUUID}`).prop('checked');
            let encodedInvoice = lightningPayReq.encode(invoiceData, addDefaults);

            const privateKey = $(`#private-key-${containerUUID}`).val();

            if (privateKey) {
                encodedInvoice = lightningPayReq.sign(encodedInvoice, privateKey);
            }
            $(`#encoded-invoice-${containerUUID}`).val(encodedInvoice.paymentRequest);
        } catch (err) {
            console.error(err);
            openToasty('Encode BOLT 11 Invoice', err.message, true);
        }
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

    const FEATUREBIT_ORDER = [
        'option_data_loss_protect',
        'initial_routing_sync',
        'option_upfront_shutdown_script',
        'gossip_queries',
        'var_onion_optin',
        'gossip_queries_ex',
        'option_static_remotekey',
        'payment_secret',
        'basic_mpp',
        'option_support_large_channel'
    ]

    const FEATUREBIT_DESCRIPTION = {
        'option_data_loss_protect': `option_data_loss_protect was added to allow a node, which has somehow fallen behind (e.g. has been restored from old backup), to detect that it's fallen-behind. A fallen-behind node must know it cannot broadcast its current commitment transaction — which would lead to total loss of funds — as the remote node can prove it knows the revocation preimage. The error returned by the fallen-behind node (or simply the invalid numbers in the channel_reestablish it has sent) should make the other node drop its current commitment transaction to the chain. This will, at least, allow the fallen-behind node to recover non-HTLC funds, if the my_current_per_commitment_point is valid. However, this also means the fallen-behind node has revealed this fact (though not provably: it could be lying), and the other node could use this to broadcast a previous state.`,
        'initial_routing_sync': ``,
        'option_upfront_shutdown_script': `The option_upfront_shutdown_script feature means that the node wanted to pre-commit to shutdown_scriptpubkey in case it was compromised somehow. This is a weak commitment (a malevolent implementation tends to ignore specifications like this one!), but it provides an incremental improvement in security by requiring the cooperation of the receiving node to change the scriptpubkey.`,
        'gossip_queries': ``,
        'var_onion_optin': ``,
        'option_static_remotekey': `option_static_remotekey removes the changing to_remote key, so the my_current_per_commitment_point is unnecessary and thus ignored (for parsing simplicity, it remains and must be a valid point, however), but the disclosure of previous secret still allows fall-behind detection. An implementation can offer both, however, and fall back to the option_data_loss_protect behavior if option_static_remotekey is not negotiated.`,
        'payment_secret': `The payment_secret feature prevents probing attacks from nodes along the path, but only if made compulsory: yet doing so will break older clients which do not understand the feature. It is compulsory for basic_mpp however, as that is also a recent feature, and makes nodes more vulnerable to probing attacks as there is no lower-bound on the amount sent.`,
        'basic_mpp': `An HTLC may be part of a larger "multi-part" payment: such "base" atomic multipath payments will use the same payment_hash for all paths.`,
        'option_support_large_channel': `The option_support_large_channel is a feature used to let everyone know this node will accept funding_satoshis greater than or equal to 2^24. Since it's broadcast in the node_announcement message other nodes can use it to identify peers willing to accept large channel even before exchanging the init message with them.`
    }

    return {
        openDecodeInvoiceModal,
        openInvoiceEncodeModal,
        encodeInvoice,
        addRoutingNode,
        clear,
        NETWORKS,
        FEATUREBIT_ORDER,
        FEATUREBIT_DESCRIPTION
    }
}();