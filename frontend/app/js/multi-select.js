jQuery(document).ready(function($)
											{
												$("#multi-select").multiSelect({
													afterInit: function()
													{
														// Add alternative scrollbar to list
														this.$selectableContainer.add(this.$selectionContainer).find('.ms-list').perfectScrollbar();
													},
													afterSelect: function()
													{
														// Update scrollbar size
														this.$selectableContainer.add(this.$selectionContainer).find('.ms-list').perfectScrollbar('update');
													}
												});
											});
