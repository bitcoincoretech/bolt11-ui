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
                            <option value="mainnet">Mainnet</option>
                            <option value="testnet">Testnet</option>
                            <option value="simnet">Simnet</option>
                            <option value="regtest">Regtest</option>
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
    // $(`#network-${containerUUID}`).val(data.invoice.);
    
    const amount = data.invoice.millisatoshis;
    $(`#amount-${containerUUID}`).val(amount === undefined ? '' : amount);

    $(`#timestamp-${containerUUID}`).val(data.invoice.timestamp || 0);
    $(`#timestamp-string-${containerUUID}`).val(data.invoice.timestampString || '');
    $(`#expire-${containerUUID}`).val(data.invoice.timeExpireDate || 0);
    $(`#expire-string-${containerUUID}`).val(data.invoice.timeExpireDateString || '');
    $(`#payee-node-key-${containerUUID}`).val(data.invoice.payeeNodeKey || '');
    $(`#signature-${containerUUID}`).val(data.invoice.signature || '');
    $(`#recovery-flag-${containerUUID}`).val(data.invoice.recoveryFlag || 0);
    // $(`#xxx-${containerUUID}`).val(data.invoice.);

}