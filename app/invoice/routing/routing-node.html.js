routingNodeComponent.createNew = function createNew(op) {
    return `
    <table id="routing-node-component-${op.containerUUID}" class="table table-sm small background-grey shadow p-4 mb-4">
        <thead class="thead-light">
            <tr class="d-flex">
                <th class="col-sm-4">Routing Node</th>

                <th class="col-sm-8">
                    <button onclick="routingNodeComponent.remove('${op.containerUUID}')" type="button" 
                        class="btn btn-danger btn-sm float-right" >
                        <i class="fas fa-trash-alt "></i>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="d-flex">
                <td class="col-sm-3">Public Key</td>
                <td class="col-sm-9">
                    <input type="text" id="tag-routing-pubkey-${op.containerUUID}" class="form-control asm">
                </td>
            </tr>
            <tr class="d-flex">
                <td class="col-sm-3">Short Channel ID</td>
                <td class="col-sm-9">
                    <input type="text" id="tag-routing-short-channel_id-${op.containerUUID}" class="form-control asm">
                </td>
            </tr>
            <tr class="d-flex">
                <td class="col-sm-3">Fee Base MSat</td>
                <td class="col-sm-4">
                    <input type="number" id="tag-routing-fee-base-msat-${op.containerUUID}" min="0"
                        class="form-control asm">
                </td>
                <td class="col-sm-5"></td>
            </tr>
            <tr class="d-flex">
                <td class="col-sm-3">Fee Proportional Millionths</td>
                <td class="col-sm-4">
                    <input type="number" id="tag-routing-fee-proportional-millionths-${op.containerUUID}" min="0"
                        class="form-control asm">
                </td>
                <td class="col-sm-5"></td>
            </tr>
            <tr class="d-flex">
                <td class="col-sm-3">CLTV Expiry Delta</td>
                <td class="col-sm-4">
                    <input type="number" id="tag-routing-cltv-expiry-delta-${op.containerUUID}" min="0"
                        class="form-control asm">
                </td>
                <td class="col-sm-5"></td>
            </tr>
        </tbody>
    </table>
    `
}

routingNodeComponent.dataToHtml = function dataToHtml(containerUUID, data) {
    if (!data) {
        return;
    }
    $(`#tag-routing-pubkey-${containerUUID}`).val(data.pubkey || '');
    $(`#tag-routing-short-channel_id-${containerUUID}`).val(data.short_channel_id || '');
    $(`#tag-routing-fee-base-msat-${containerUUID}`).val(data.fee_base_msat || '');
    $(`#tag-routing-fee-proportional-millionths-${containerUUID}`).val(data.fee_proportional_millionths || '');
    $(`#tag-routing-cltv-expiry-delta-${containerUUID}`).val(data.cltv_expiry_delta || '');
}