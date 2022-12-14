// BEGIN Temp navigation menu for development
// should be commented before production

$(document).ready(function ($) {
  pageWidget([
    'index',
    'how-it-works',
    'pricing',
    'sponsors',
    'contacts',
    'sign-up',
    'login',
    'new-password',
    'reset',
    'reset-confirm',
    'restore',
    'delete',
    'about',
    'search-no-reg',
    'sign-up-co',
    'sign-up-bo',
    'profile-co',
    'profile-co-no-ava',
    'edit-co',
    'requests',
    'request-bo',
    'profile-bo',
    'profile-bo-inform',
    'edit-bo',
    'requests-bo',
    'request-co',
    'request-co-wait',
    'request-co-accept',
    'request-co-review',
    'search-bo',
    'search-bo-res',
    'subscribe',
    'subscribe-edit',
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('' +
    '<style>' +
    'body {position:relative} ' +
    '.widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}' +
    '.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}' +
    '.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}' +
    '.widget_list{width:300px;list-style: none; margin: 0; padding: 0;display: flex; flex-wrap: wrap;}' +
    '.widget_item{padding:0 0 10px; width: 50%;}' +
    '.widget_link{color:#fff;text-decoration:none;font-size:15px;}' +
    '.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Temp navigation menu for development
// should be commented before production


//====== Begin Programmer code ======