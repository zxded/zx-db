 SELECT
 	item_id,
 	operations.quantity AS q_doc,
 	items.quantity AS q_old
 FROM operations
 JOIN items
 ON operations.item_id=items.id
 WHERE doc_id=4;