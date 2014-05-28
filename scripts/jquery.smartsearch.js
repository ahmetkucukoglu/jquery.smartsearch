/*
	Smart Search plugin for jQuery
	Copyright (c) 2014-2015 Ahmet KÜÇÜKOĞLU (ahmetkucukoglu.com)
	Version: 1.0
*/

(function ($) {
    var settings = null;

    var methods = {
        init: function (options) {
            var $this = $(this);
            settings = $.extend({}, options);

            $(settings.searchInput).keyup(function () {
                var keyword = $(this).val().toLowerCase();

                if (keyword) {
                    $.each($this, function (key, value) {
                        var tbody = $(this),
                            searchColumn = $(value).find(settings.searchColumn);

                        var foundCount = 0;
                        $.each(searchColumn, function (key1, value1) {
                            var column = $(value1),
                                value = column.data("override") || $(value1).html(),
                                isContains = value.toLowerCase().indexOf(keyword) >= 0;

                            if (isContains) {
                                column.addClass(settings.selectedClass);
                            }
                            else {
                                column.removeClass(settings.selectedClass);
                                foundCount++;
                            }
                        });

                        if (settings.endSearchRowEvent) {
                            settings.endSearchRowEvent(tbody, foundCount);
                        }
                    });
                }
                else {
                    $("." + settings.selectedClass).removeClass(settings.selectedClass);
                }

                if (settings.endSearch) {
                    settings.endSearch();
                }
            });
        }
    };

    $.fn.smartsearch = function (options) {
        if (methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + options + ' does not exist on jQuery.smartsearch');
        }
    };
}(jQuery));