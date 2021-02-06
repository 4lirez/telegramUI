if(document.getElementsByClassName("im_history_messages_peer")[0] != undefined){
    var observer2 = new MutationObserver(function(mutationsList, observer2) {
        setrtlauto();
    });
    observer2.observe(document.getElementsByClassName("im_history_messages_peer")[0], {characterData: false, childList: true, attributes: false});
}


const observer = new MutationObserver(function(mutationsList, observer) {
    observer2 = new MutationObserver(function(mutationsList, observer2) {
        setrtlauto();
    });
    observer2.observe(document.getElementsByClassName("im_history_messages_peer")[0], {characterData: false, childList: true, attributes: false});
    setrtlauto();
});
observer.observe(document.getElementsByClassName("im_history_messages")[0], {characterData: false, childList: true, attributes: false});

    function setrtlauto(){
        [].forEach.call(document.querySelectorAll('.im_message_photo_caption,.im_message_document_caption'), function(el){
            el.setAttribute('dir','auto');
        })
    }