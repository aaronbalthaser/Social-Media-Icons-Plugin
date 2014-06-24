
;(function($) {

	var defaults = {		
		question: "Question",
		url: "",
		buttonText: "Button Text",
		categories: [
			"Categories", 
			"Categories"
		]
	};
	
	function Nupoll(element, options)
	{
		this.config = $.extend({}, defaults, options);
		this.element = element;
		this.init();
	}
	
	Nupoll.prototype.init = function()
	{
		$('<h1>', {
			text: this.config.question
		}).appendTo(this.element);
		
		var form = $('<form>').appendTo(this.element);
		
		var i;
		var len;
		
		for (i = 0, len = this.config.categories.length; i < len; i++) {
			$('<input>', {
				type: "radio",
				name: "categories",
				id: this.config.categories[i],
				value: this.config.categories[i]
			}).appendTo(form);
			
			$('<label>', {
				text: this.config.categories[i],
				"for": this.config.categories[i]
			}).appendTo(form);
		}
		
		$('<button>', {
			text: this.config.buttonText
		}).appendTo(form);
	}
	
	$.fn.nupoll = function(options)
	{
		new Nupoll(this, options);
		return this;
	};
	
}(jQuery));




/*
;(function ( $, window, document, undefined ) {

    var nupoll = 'nupoll',
        defaults = {
            propertyName: "value"
        };

    function Plugin( element, options ) {
        this.element = element;       
        this.options = $.extend( {}, defaults, options) ;       
        this._defaults = defaults;
        this._name = nupoll;       
        this.init();
    }

    Plugin.prototype.init = function () {
        
        $('<h1>', {
	        text: "Question"
        }).appendTo(this.element);
        
        var form = $('<form>').appendTo(this.element);
        
        var i;
		var len;
		var categories = ["jQuery", "ExtJs"];
		
		for (i = 0, len = categories.length; i < len; i++) {
			$('<input>', {
				type: "radio",
				name: "categories",
				id: categories[i],
				value: categories[i]
			}).appendTo(form);
			
			$('<label>', {
				text: categories[i],
				"for": categories[i]
			}).appendTo(form);
		}
		
		$('<button>', {
			text: "Answer"
		}).appendTo(form);
    };

    $.fn[nupoll] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + nupoll)) {
                $.data(this, 'plugin_' + nupoll, 
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );*/














