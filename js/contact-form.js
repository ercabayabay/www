---
---
jQuery(document).ready(function($) {
	"use strict";
// Contact form
	$(function() {
	$("#contact").validate({
    	rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
			message: {
                required: true
            }
        },
		messages: {
            name: {
                required: "Please type your name",
                minlength: "Please type your name correctly"
            },
            email: {
                required: "Please type your e-mail correctly"
            },
			 message: {
                required: "Please type your message",
                minlength: "To short message"
            }
        },
		submitHandler: function(form) {

        var vEmail = $('#contact .email').val();
        var vMessage = $('#contact .message').val();
        var vName =  $('#contact .name').val();
        var vNum = $('#contact .number').val();

        var vSubject = "Inquiry from:" + vName +" [" +vNum +"]";
            $(form).ajaxSubmit({
                type:"POST",
                data: {
                            email: vEmail,
                            message: vMessage,
                            name: vName,
                            _subject: vSubject
                },
                url:"http://formspree.io/{{ site.gmail }}",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});
});