/* $('#myWorksBtn').on('click', function () {
    if ($('#myExp').css('display') != 'none') {
        $('#myWorks').show().siblings('div').hide();
        $('#myWorksBtn').text('Back');
    } else if ($('#myWorks').css('display') != 'none') {
        $('#myExp').show().siblings('div').hide();
        $('#myWorksBtn').text('My Works');
    }
}); */


$('#myWorksBtn').on('click', function () {
    $('#myExp').classList.toggle('show');
    $('#myWorks').classList.toggle('show');
});
