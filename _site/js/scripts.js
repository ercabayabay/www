// JavaScript for themezinho
(function($) {
$(document).ready(function() {
	"use strict";
	
	// FANCYBOX
		$(".fancybox").fancybox();
	
	// HAMBURGER MENU
		$('.hamburger-menu').on('click', function(e) {
		$("main").toggleClass("side-box-open");
		$("body").toggleClass("overflow-hidden");
		});
		
	// 	CLOSE SIDE BOX
		$('.close-side-box').on('click', function(e) {
		$("main").removeClass("side-box-open");
		$("body").removeClass("overflow-hidden");
		});	
		
	// SEARCH	
		$('.search-btn').on('click', function(e) {
		$(".search-box").toggleClass("search-box-open");
		});
		
	// TOOLTIP
		$('[data-toggle="tooltip"]').tooltip()
	
	// CUSTOM SELECT
		$('.selectpicker').selectpicker();
	
	// DATE PICKER
		$('.datepicker').datepicker()
	
	// MAIN SLIDER
		$('.main-slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  arrows:false,
		  fade: true,
		  autoplay: true,
		  cssEase: 'linear'
		});
	
	// CONTENT CAROUSEL
		$('.content-carousel').slick({
		dots: true,
		arrows:false,
		autoplay: true
		});
		
	// COUNTER
		$('.counter').counterUp({
			delay: 10,
		   time: 1000
		});
		$('.numbers').counterUp({
			delay: 1000,
		   time: 60000
		});
		
	// STELLAR PARALLAX
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
		});
		
	// TRANSITION OVERLAY
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("open");
	    });
		
	// TRANSITION DELAY
		$('.transition').on('click', function(e) {
    	e.preventDefault();                  
    	var goTo = this.getAttribute("href"); 
		setTimeout(function(){
         window.location = goTo;
    	},500);       
		});
		
	// SOFT TRANSTION
		$('.soft-transition').addClass('hide-me');
		});

	// MASONRY
		var $container = $('.masonry');
		$container.masonry({
		  columnWidth: 0,
		  itemSelector: '.masonry li'
		});
	
	// COMPUTATION MODAL
	$('#calculateBtn').click(function(){
		var dutiableValueUSD = parseFloat($('#inActualVal').val()) + parseFloat($('#inFreightCost').val()) + parseFloat($('#inInsuranceCost').val());
		var xRate = 50;
		var dutiableValuePeso = dutiableValueUSD * xRate;
		var rateOfDuty = 0.1; //10%
		var customsDuty = dutiableValuePeso * rateOfDuty;
		var brokersFee = dutiableValuePeso * .05;
		var docStamps = dutiableValuePeso * 0.16;
		var exciseTax = dutiableValuePeso * .2;
		var importProcessingFee = dutiableValuePeso > 700000 ? 1000 : 750;
		var landedCost = dutiableValuePeso + customsDuty + brokersFee + docStamps + importProcessingFee + exciseTax;
		var vatRate = .12;
		var vat = landedCost * vatRate;
		var totalTaxesAndDuties = customsDuty + vat + exciseTax + importProcessingFee;
		var dutyHandlingFee = totalTaxesAndDuties * .035;
		var informalEntryDec = totalTaxesAndDuties * .04;
		var storageFee = landedCost * .02;
		var collectorsClearance = 500;
		var totalFees = parseFloat(totalTaxesAndDuties + dutyHandlingFee + informalEntryDec + storageFee).formatMoney(2, '.', ',');

		$('#customsDuty').text(customsDuty.formatMoney(2, '.', ','));
		$('#vat').text(vat.formatMoney(2, '.', ','));
		$('#exciseTax').text(exciseTax.formatMoney(2, '.', ','));
		$('#importProcessingFee').text(importProcessingFee.formatMoney(2, '.', ','));
		$('#totalTaxesAndDuties').text(totalTaxesAndDuties.formatMoney(2, '.', ','));
		$('#dutyHandlingFee').text(dutyHandlingFee.formatMoney(2, '.', ','));
		$('#informalEntryDec').text(informalEntryDec.formatMoney(2, '.', ','));
		$('#storageFee').text(storageFee.formatMoney(2, '.', ','));
		$('#collectorsClearance').text(collectorsClearance.formatMoney(2, '.', ','));
		$('#totalFees').text(totalFees);

		$('#computation').modal();
	});
		
})(jQuery);

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };



