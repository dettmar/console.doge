###
#	wow, console.doge()
#	 
#	@method console.doge	
#	@author J.Dettmar
###

root = exports ? @

root.console = root.console or {}

root.console.doge = (args...) ->
	
	rand = (arr) -> arr[ Math.floor( Math.random() * arr.length ) ]
	expr = ["wow,", "such", "very", "much", "so"]
	log = ["console", "log", "statement", "inspect", "values", "code", "javascript", "scripts"]
	color = Math.random().toString(16).slice(2, 8)
	phrase = "%c #{rand(expr)} #{rand(log)}!"
	
	args.unshift "color:##{color};font-family:'Comic Sans MS','Comic Sans';font-size:larger;"
	args.unshift phrase

	root.console.log?.apply(console, args)