/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: week8.js
Date: 03/05/2018
Programmer: Breanna Smith
*/

// The line below is to test your link to the .js file. Please comment it out when it works.
// alert("the link to the .js file is correct!");

// The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
// if (window.jQuery) {alert("the link to the jQuery file is correct!"); }

// Enter your jQuery code below this line (put a blank line first).

$(document).ready(function () {
    
    // alert("jQuery code is running");
    
    var imageFolder = "images/";
    
    var imageSource;
    
    var photoCaption;
    
    $(".cross").hide();
    
    $(".menu").hide();
    
    $(".hamburger").show();
    
    $("h1").text("jQuery Photo Gallery and Menu");
    
    $("h2").text("Breanna Smith");
    
    $("#bigPhoto").attr("src", imageFolder + "pointe_ballerina_big.jpg");
    
   var thumbNames = ["pointe_ballerina.jpg", "break_dancer.jpg", "hula_dance.jpg", "interpretive_dance.jpg", "hip_hop.jpg", "lyrical_dance.jpg", "chinese_dance.jpg", "irish_dance.jpg"];
    
   // $.each(thumbNames, function (i) {
    // alert(thumbNames[i]);
//});
    
       $("img.thumbnail-inner").each(function (i) {
        
        (this).src = imageFolder + thumbNames[i];
        
    });
    
     $("img.thumbnail-inner").on("click", function () {
        // alert("You clicked an image!")
         
         $("img").css("opacity", "1");
         
         $(this).css("opacity", ".5");
        
         imageSource = $(this).attr("src");
         
         // alert(imageSource);
         
         imageSource = imageSource.replace("_small", "");
         
        $("#bigPhoto").attr("src", imageSource);
         
         photoCaption = imageSource.replace(".jpg", "");
         
         photoCaption = photoCaption.replace("images/", "");
         
         $("#caption").text(photoCaption);
         
     });
    
        $(".hamburger").on("click", function () {
        
        $(".menu").slideToggle("slow");
        
        $(".hamburger").hide();
        
        $(".cross").show();
        
    });
    
        $(".cross").on("click", function () {
        
        $(".menu").slideToggle("slow");
        
        $(".cross").hide();
        
        $(".hamburger").show();
        
    });


});