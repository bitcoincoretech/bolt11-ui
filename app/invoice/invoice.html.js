
invoiceComponent.createNew = function createNew(op) {
    return `

    <div id="invoice-container-${op.containerUUID}">
        <table class="table table-sm border-bottom">
            <tbody>
                <tr class="d-flex">
                    <td class="col-sm-2"><label>ID</label></td>
                    <td class="col-sm-10">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Hex</span>
                            </div>
                            <textarea id="id-${op.containerUUID}" disabled="true" rows="1" class="form-control asm"></textarea>
                        </div>
                    </td>
                </tr>

                <tr id="version-row-${op.containerUUID}" class="d-flex">
                    <td class="col-sm-2"><label>Version</label></td>
                    <td class="col-sm-10">
                        <div class="input-group w-25">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Int32</span>
                            </div>
                            <input type="number" id="version-${op.containerUUID}" value="1" class="form-control asm read-only-disable-${op.containerUUID}">
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
            <button type="button" onclick="invoiceComponent.openInvoiceFromHexModal('${op.containerUUID}')" class="btn btn-info ml-5 button120"
                data-toggle="modal" data-target="#modal-dialog">Import</button>
            </button>
            <button type="button" onclick="invoiceComponent.openInvoiceToHexModal('${op.containerUUID}')" class="btn btn-info ml-3 button120"
                data-toggle="modal" data-target="#modal-dialog">Export</button>
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
   
}