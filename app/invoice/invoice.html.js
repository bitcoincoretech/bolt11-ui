invoiceComponent.createNew = function createNew(op) {
    return `

    <div id="invoice-container-${op.containerUUID}">
        <table class="table table-sm border-bottom">
            <tbody>
                <tr id="payment-request-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Payment Request</label></td>
                    <td class="col-sm-10">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Bech32</span>
                            </div>
                            <input type="text" id="payment-request-${op.containerUUID}" disabled="true" class="form-control asm">
                        </div>
                    </td>
                </tr>

                <tr id="payee-node-key-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Payee Pub Key</label></td>
                    <td class="col-sm-10">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Bech32</span>
                            </div>
                            <input type="text" id="payee-node-key-${op.containerUUID}" class="form-control asm">
                        </div>
                    </td>
                </tr>

                <tr id="is-complete-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Is Complete</label></td>
                    <td class="col-sm-3">
                        <select class="form-control" id="is-complete-${op.containerUUID}">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </td>
                    <td class="col-sm-7"> </td>
                </tr>

                <tr id="prefix-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Prefix</label></td>
                    <td class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Text</span>
                            </div>
                            <input type="text" id="prefix-${op.containerUUID}" class="form-control asm">
                        </div>
                    </td>
                    <td class="col-sm-7"> </td>
                </tr>

                <tr id="network-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Network</label></td>
                    <td class="col-sm-3">
                        <select class="form-control" id="network-${op.containerUUID}">
                            <option value="bc">Mainnet</option>
                            <option value="tb">Testnet</option>
                            <option value="sb">Simnet</option>
                        </select>
                    </td>
                    <td class="col-sm-7"> </td>
                </tr>

                <tr id="amount-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Amount</label></td>
                    <td class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Int32</span>
                            </div>
                            <input type="number" id="amount-${op.containerUUID}" value="0" min="0" class="form-control asm">
                        </div>
                    </td>
                    <td class="col-sm-7">
                        <span class="asm">(millisats)</span> 
                    </td>
                </tr>


                <tr id="timestamp-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Timestamp (sec)</label></td>
                    <td class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Int32</span>
                            </div>
                            <input type="number" id="timestamp-${op.containerUUID}" value="0" min="0" class="form-control asm">
                        </div>
                    </td>
                    <td class="col-sm-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Date</span>
                            </div>
                            <textarea id="timestamp-string-${op.containerUUID}" disabled="true" rows="1" class="form-control asm"></textarea>
                        </div>
                    </td>
                    <td class="col-sm-3"></td>
                </tr>

                <tr id="expire-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Expire Date (sec)</label></td>
                    <td class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Int32</span>
                            </div>
                            <input type="number" id="expire-${op.containerUUID}" value="3600" min="0" class="form-control asm">
                        </div>
                    </td>
                    <td class="col-sm-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Date</span>
                            </div>
                            <textarea id="expire-string-${op.containerUUID}" disabled="true" rows="1" class="form-control asm"></textarea>
                        </div>
                    </td>
                    <td class="col-sm-3"></td>
                </tr>

                <tr id="recovery-flag-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Recovery Flag</label></td>
                    <td class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Int32</span>
                            </div>
                            <input type="number" id="recovery-flag-${op.containerUUID}"  min="0" class="form-control asm">
                        </div>
                    </td>
                    <td class="col-sm-7">
                       
                    </td>
                </tr>

                <tr id="signature-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Signature</label></td>
                    <td class="col-sm-10">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Bech32</span>
                            </div>
                            <input type="text" id="signature-${op.containerUUID}" disabled="true" class="form-control asm">
                        </div>
                    </td>
                </tr>

                <tr id="words-temp-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Words Temp</label></td>
                    <td class="col-sm-10">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Text</span>
                            </div>
                            <input type="text" id="words-temp-${op.containerUUID}" disabled="true" class="form-control asm">
                        </div>
                    </td>
                </tr> 

                <tr id="tags-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Tags</label></td>
                    <td class="col-sm-10">
                        <table class="table table-sm border-left border-bottom shadow p-4 mb-4">
                            <thead class="thead-light">
                                <tr class="d-flex">
                                    <th class="col-sm-2">Number</th>
                                    <th class="col-sm-3">Name</th>
                                    <th class="col-sm-7">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-payment-hash-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-payment-hash-number-${op.containerUUID}" value="1" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-payment-hash-name-${op.containerUUID}" value="payment_hash"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7">
                                        <textarea id="tag-payment-hash-data-${op.containerUUID}" rows="2" class="form-control asm"></textarea>
                                    </td>
                                </tr>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-description-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-description-number-${op.containerUUID}" value="13" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-description-name-${op.containerUUID}" value="description"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7">
                                        <textarea id="tag-description-data-${op.containerUUID}" rows="3" class="form-control asm"></textarea>
                                    </td>
                                </tr>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-payee-node-key-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-payee-node-key-number-${op.containerUUID}" value="19" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-payee-node-key-name-${op.containerUUID}" value="payee_node_key"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7">
                                        <textarea id="tag-payee-node-key-data-${op.containerUUID}" rows="3" class="form-control asm"></textarea>
                                    </td>
                                </tr>

                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-purpose-commit-hash-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-purpose-commit-hash-number-${op.containerUUID}" value="23" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-purpose-commit-hash-name-${op.containerUUID}" value="purpose_commit_hash"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7">
                                        <textarea id="tag-purpose-commit-hash-data-${op.containerUUID}" rows="2" class="form-control asm"></textarea>
                                    </td>
                                </tr>

                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-expire-time-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-expire-time-number-${op.containerUUID}" value="6" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-expire-time-name-${op.containerUUID}" value="expire_time"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-4">
                                        <input id="tag-expire-time-data-${op.containerUUID}" type="number" min="0"  class="form-control asm">
                                    </td>
                                    <td class="col-sm-3"></td>
                                </tr>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-min-final-cltv-expiry-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-min-final-cltv-expiry-number-${op.containerUUID}" value="24" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-min-final-cltv-expiry-name-${op.containerUUID}" value="min_final_cltv_expiry"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-4">
                                        <input id="tag-min-final-cltv-expiry-data-${op.containerUUID}" type="number" min="0" class="form-control asm">
                                    </td>
                                    <td class="col-sm-3"></td>
                                </tr>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-fallback-address-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-fallback-address-number-${op.containerUUID}" value="9" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-fallback-address-name-${op.containerUUID}" value="fallback_address"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7"> </td>
                                </tr>
                                <tr class="d-flex mr-2 mt-2">
                                    <td class="col-sm-2"> </td>
                                    <td class="col-sm-10 small background-grey shadow p-4 mb-4">
                                        <div class="row">
                                            <div class="col-sm-2">Address</div>
                                            <div class="col-sm-10">
                                                <input type="text" id="tag-fallback-address-data-value-${op.containerUUID}" class="form-control asm">
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-sm-2">Address Hash</div>
                                            <div class="col-sm-10">
                                                <input type="text" id="tag-fallback-address-data-hash-${op.containerUUID}" class="form-control asm">
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-sm-2">Code</div>
                                            <div class="col-sm-4">
                                                <input type="number" id="tag-fallback-address-data-code-${op.containerUUID}" min="0" class="form-control asm">
                                            </div>
                                            <div class="col-sm-6"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="d-flex">
                                    <td class="col-sm-2"> 
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input id="tag-routing-info-selected-${op.containerUUID}" type="checkbox" class="form-check-input" value="">
                                            </label>
                                            <input id="tag-routing-info-number-${op.containerUUID}" value="3" disabled="true" class="form-control asm">
                                        </div>
                                    </td>
                                    <td class="col-sm-3">
                                        <input type="text" id="tag-routing-info-name-${op.containerUUID}" value="routing_info"  disabled="true" class="form-control asm">
                                    </td>
                                    <td class="col-sm-7"></td>
                                </tr>

                                <tr class="d-flex mr-2 mt-2">
                                    <td class="col-sm-2"> </td>
                                    <td class="col-sm-10">
                                        <div id="routing-nodes-container-${op.containerUUID}" class="col-sm-12">
                                        </div>
                                        <div class="col-sm-12"> 
                                            <button onclick="invoiceComponent.addRoutingNode('${op.containerUUID}')" type="button"
                                                class="btn btn-info  float-right ">Add Routing Node</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="d-flex">
                                    
                                </tr>

                            </tbody>
                        </table>

                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
    `;
}

invoiceComponent.createExternalMenu = function createExternalMenu(op) {
    return `
            <button type="button" onclick="invoiceComponent.openDecodeInvoiceModal('${op.containerUUID}')" class="btn btn-info ml-5 button120"
                data-toggle="modal" data-target="#modal-dialog">Decode</button>
            </button>
            <button type="button" onclick="invoiceComponent.openInvoiceEncodeModal('${op.containerUUID}')" class="btn btn-info ml-3 button120"
                data-toggle="modal" data-target="#modal-dialog">Encode</button>
            </button>
    
            <button type="button" onclick="invoiceComponent.clear('${op.containerUUID}')" class="btn btn-secondary ml-5 button120">
                Clear
                <i class="fas fa-eraser"></i>
            </button>
    `;
}

invoiceComponent.htmlToData = function htmlToData(containerUUID) {
    const invoice = {}


    return invoice;
}


invoiceComponent.dataToHtml = function dataToHtml(containerUUID, data) {
    if (!data || !data.invoice) {
        return;
    }


    $(`#payment-request-${containerUUID}`).val(data.invoice.paymentRequest || '');
    $(`#is-complete-${containerUUID}`).val(`${data.invoice.complete || false}`);
    $(`#prefix-${containerUUID}`).val(data.invoice.prefix || '');
    $(`#words-temp-${containerUUID}`).val(data.invoice.wordsTemp || '');

    const network = data.invoice.network;
    $(`#network-${containerUUID}`).val(network ? network.bech32 : 'bc');

    const amount = data.invoice.millisatoshis;
    $(`#amount-${containerUUID}`).val(amount === undefined ? '' : amount);

    const timestamp = data.invoice.timestamp;
    $(`#timestamp-${containerUUID}`).val(timestamp === undefined ? '' : timestamp);
    $(`#timestamp-string-${containerUUID}`).val(data.invoice.timestampString || '');

    const expire = data.invoice.timeExpireDate;
    $(`#expire-${containerUUID}`).val(expire === undefined ? '' : expire);
    $(`#expire-string-${containerUUID}`).val(data.invoice.timeExpireDateString || '');

    $(`#payee-node-key-${containerUUID}`).val(data.invoice.payeeNodeKey || '');
    $(`#signature-${containerUUID}`).val(data.invoice.signature || '');

    const recoveryFlag = data.invoice.recoveryFlag;
    $(`#recovery-flag-${containerUUID}`).val(recoveryFlag === undefined ? '' : recoveryFlag);

    const tags = data.invoice.tags;

    const paymentHash = tags.find(t => t.tagName === 'payment_hash');
    $(`#tag-payment-hash-selected-${containerUUID}`).prop('checked', !!paymentHash);
    $(`#tag-payment-hash-data-${containerUUID}`).val(paymentHash ? paymentHash.data : '');

    const description = tags.find(t => t.tagName === 'description');
    $(`#tag-description-selected-${containerUUID}`).prop('checked', !!description);
    $(`#tag-description-data-${containerUUID}`).val(description ? description.data : '');

    const payeeNodeKey = tags.find(t => t.tagName === 'payee_node_key');
    $(`#tag-payee-node-key-selected-${containerUUID}`).prop('checked', !!payeeNodeKey);
    $(`#tag-payee-node-key-data-${containerUUID}`).val(payeeNodeKey ? payeeNodeKey.data : '');

    const purposeCommitHash = tags.find(t => t.tagName === 'purpose_commit_hash');
    $(`#tag-purpose-commit-hash-selected-${containerUUID}`).prop('checked', !!purposeCommitHash);
    $(`#tag-purpose-commit-hash-data-${containerUUID}`).val(purposeCommitHash ? purposeCommitHash.data : '');

    const expireTime = tags.find(t => t.tagName === 'expire_time');
    $(`#tag-expire-time-selected-${containerUUID}`).prop('checked', !!expireTime);
    $(`#tag-expire-time-data-${containerUUID}`).val(expireTime ? expireTime.data : '');

    const minCltv = tags.find(t => t.tagName === 'min_final_cltv_expiry');
    $(`#tag-min-final-cltv-expiry-selected-${containerUUID}`).prop('checked', !!minCltv);
    $(`#tag-min-final-cltv-expiry-data-${containerUUID}`).val(minCltv ? minCltv.data : '');


    const fallbackAddr = tags.find(t => t.tagName === 'fallback_address');
    $(`#tag-fallback-address-selected-${containerUUID}`).prop('checked', !!fallbackAddr);
    $(`#tag-fallback-address-data-value-${containerUUID}`).val((fallbackAddr && fallbackAddr.data) ? fallbackAddr.data.address : '');
    $(`#tag-fallback-address-data-hash-${containerUUID}`).val((fallbackAddr && fallbackAddr.data) ? fallbackAddr.data.addressHash : '');
    $(`#tag-fallback-address-data-code-${containerUUID}`).val((fallbackAddr && fallbackAddr.data) ? fallbackAddr.data.code : '');

    const routingInfo = tags.find(t => t.tagName === 'routing_info');
    $(`#tag-routing-info-selected-${containerUUID}`).prop('checked', !!routingInfo);
    $(`#routing-nodes-container-${containerUUID}`).empty();
    if (routingInfo && routingInfo.data){
        routingInfo.data.forEach(routingNode => {
            invoiceComponent.addRoutingNode(containerUUID, routingNode);
        });
    }
    

}