/*
#	wow, console.doge()
#	 
#	@method console.doge	
#	@author J.Dettmar
*/


(function() {
  var root,
    __slice = [].slice;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.console = root.console || {};

  root.console.doge = function() {
    var args, color, expr, log, phrase, rand, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    rand = function(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    expr = ["wow,", "such", "very", "much", "so"];
    log = ["console", "log", "statement", "inspect", "values", "code", "javascript", "scripts"];
    color = Math.random().toString(16).slice(2, 8);
    phrase = "%c " + (rand(expr)) + " " + (rand(log)) + "!";
    args.unshift("color:#" + color + ";font-family:'Comic Sans MS','Comic Sans';font-size:larger;");
    args.unshift(phrase);
    return (_ref = root.console.log) != null ? _ref.apply(console, args) : void 0;
  };

}).call(this);
