'use strict';

chrome.runtime.onInstalled.addListener(function() {
  const request = "http://api.timezonedb.com/v2.1/get-time-zone?key=76H3QRXQU56M&format=xml&by=zone&zone=America/Chicago"
  const Http = new XMLHttpRequest();
  const url='http://api.timezonedb.com/v2.1/get-time-zone?key=76H3QRXQU56M&format=xml&by=zone&zone=America/Chicago';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  };
});