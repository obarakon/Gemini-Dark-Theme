// ==UserScript==
// @name         Gemini - Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A dark theme for Gemini Tracking
// @author       Oliver Barakon
// @match        http://issues.rowriter.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("body { color: black; font-weight: bold; background-color: gray; }");
GM_addStyle('td { color: black; font-weight: bold; background-color: darkgray;}');
//GM_addStyle('div { color: black; font-weight: bold;');
GM_addStyle('span { color: black; font-weight: bold;');
GM_addStyle('#view-item .touch-info { color: black; font-weight: bold;');
GM_addStyle('tr { color: black; background-color: darkgray;}');
GM_addStyle('th { color: black; background-color: darkgray;}');


(function() {
    'use strict';

    var oldName = document.getElementsByClassName('open-profile')[0].innerText;
    var newName = oldName.bold().italics().big().fontcolor("blue");
    var reg = new RegExp(oldName , "g");
    var table = document.getElementById('tabledata');

    if(table != null){
        table.tBodies[0].innerHTML = table.tBodies[0].innerHTML.replace(reg, newName);
    }

    var t = document.getElementsByClassName('touch-info');

    if (t !=null){
        t[0].innerHTML = t[0].innerHTML.replace(reg, newName);
        t[1].innerHTML = t[1].innerHTML.replace(reg, newName);
    }

    var resource = document.getElementById('AssignedTo');

    if(resource !=null){
        resource.innerHTML = resource.innerHTML.replace(reg, newName);
    }

})();
