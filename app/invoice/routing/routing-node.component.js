const routingNodeComponent = function () {

    function remove(containerUUID) {
        $(`#routing-node-component-${containerUUID}`).remove();
    }

    return {
        remove
    }
}();