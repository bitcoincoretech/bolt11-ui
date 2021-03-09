
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function openToasty(title = '', message = '', isError) {
    $('#toast-title').text(title);
    $('#toast-message').text(message);
    if (isError) {
        $('#toast-message-type').removeClass('alert-success');
        $('#toast-message-type').addClass('alert-danger');
    } else {
        $('#toast-message-type').removeClass('alert-danger');
        $('#toast-message-type').addClass('alert-success');
    }
    $('#toasty').show();
    $('#toasty').toast('show');
    setTimeout(() => {
        $('#toasty').hide();
    }, 5000);
}

function syncHexValue(targetId, value = 0) {
    $(`#${targetId}`).text('0x' + (+value).toString(16));
}


function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}