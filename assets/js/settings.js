(function( $, doc ) {
    "use strict";

    (function(){

        $(document).ready(function() {

            $("#gq-section").tabs();
            
        });

        $("input[type=radio][name=gq-design]").on('change', function(){
            
            var $quiz = $('.forminator-quiz');

            if (this.value === 'list') {

                $quiz.removeClass('forminator-design--grid');
                $quiz.addClass('forminator-design--list');

            }

            if (this.value === 'grid') {

                $quiz.removeClass('forminator-design--list');
                $quiz.addClass('forminator-design--grid');

            }
            
        });

    }());

}( jQuery, document ));