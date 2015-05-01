// Begin: Remove list items 
var $removeButton = $("button.close"),
	$confirmDeleteDialog = $("#confirm-friend-delete"),
	$deleteBtn = $confirmDeleteDialog.find("#delete-btn");

$removeButton.on("click", function() {
	var $this = $(this).closest("li");
	
	$deleteBtn.on("click", function() {
		TweenMax.to($this, 0.3, {
			opacity: 0,
			onCompleteParams: [$this],
			onComplete: moveRestUp
		});
  });
});

function moveRestUp(item) {
	var h = item.outerHeight(),
			itemMarginBottom = parseInt($(item).css("margin-bottom"), 10),
			$following = item.nextAll();

	TweenMax.to($following, 0.8, {
		ease: Elastic.easeOut.config(0.6, 0.85),
		y: -(h - 15),
    onCompleteParams: [item, $following],
    onComplete: function(item2, following2) {
      // remove clicked list item
      item2.remove();
      // clear transforms on clicked list item
      TweenMax.set(following2, { clearProps:"all" });
    }        
  });
}
// End: Remove list items 

// Begin: Add new items
$("button.add-item").on("click", function() {
	
});

// End: Add new items