// Checking page title

//$("body").append('Test');

var hidden = [];

if ( $(".js-discussion .timeline-comment-wrapper").length ) {
    alert("The number of comments is " + $(".js-discussion .js-comment-container").length);
    $(".js-discussion .js-comment-container").each(function() {
    	if (($(this).find(".js-comment-body").text().replace(/\s/g,'').length) <= 2) {
    		//alert($(this).find(".js-comment-body").text());
    		//alert($(this).find(".js-comment-body").text());
    		//$(this).css({"border-color": "#FF0000", "border-style":"solid"});
    		hidden.push($(this));
    		$(this).hide();
    	}
    })
} 
else {
	alert ("Cant find any comment");
}

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	console.log(msg, sender, sendResponse);
    /* If the received message has the expected format... */
    if (msg.greeting) {
        alert('Received a msg from bg...')
        //sendResponse('hey_bp');
        for (var i = 0; i < hidden.length; i++) {
        	alert("looking at");
    		(hidden[i]).show();
    	//Do something
		}
		//location.reload();
    }
});

chrome.tabs.executeScript(null,
        {code:"console.log(\"does this work\")"});