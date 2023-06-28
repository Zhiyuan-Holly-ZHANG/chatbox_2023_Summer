function bmb_createEyecatcher(text) {
  let bmb_eyecatcher_body = document.createElement("div");
  document.getElementById("bmbchatbotbubble").appendChild(bmb_eyecatcher_body);
  bmb_eyecatcher_body.classList.add("bmb_chat_bubble_body");

  let bmb_eyecatcher = document.createElement("div");
  bmb_eyecatcher_body.prepend(bmb_eyecatcher);

  let bmb_chat_bubble_textbody = document.createElement("div");
  bmb_eyecatcher.prepend(bmb_chat_bubble_textbody);
  bmb_chat_bubble_textbody.classList.add("bmb_chat_bubble_textbody");

  let bmb_chat_bubble_text = document.createElement("div");
  bmb_chat_bubble_textbody.prepend(bmb_chat_bubble_text);
  bmb_chat_bubble_text.classList.add("bmbchatbotbubble_text");

  bmb_chat_bubble_text.innerHTML = `<span> ${text} </span>`;
  if (sessionStorage.iframeside === "Left") {
    bmb_eyecatcher.classList.add("bmb_chat_bubble_left");
  } else {
    bmb_eyecatcher.classList.add("bmb_chat_bubble");
  }

  bmb_eyecatcher.addEventListener("click", function () {
    document
      .getElementById("chatbotiframe")
      .contentWindow.postMessage("chatwindowOpened");
  });

  let close = document.createElement("div");
  bmb_eyecatcher_body.prepend(close);

  close.classList.add("bmb_chat_bubble_close");
  close.innerHTML = `<img src='https://bmbuiassetsprod.blob.core.windows.net/images/nudge_close.png'  alt='Close' width='100%' height='100%' ></img>`;

  if (sessionStorage.iframeside === "Left") {
    close.style.float = "right";
    close.style.marginRight = "10%";
  }
  if (document.documentElement.clientWidth < 700) {
    close.classList.add("showbutton");
  } else {
    bmb_eyecatcher_body.addEventListener("mouseenter", function () {
      close.classList.add("showbutton");
    });
    bmb_eyecatcher_body.addEventListener("mouseleave", function () {
      close.classList.remove("showbutton");
    });
  }
  close.addEventListener("mouseenter", function () {
    close.style.color = "rgba(0,0,0,0.9)";
  });
  close.addEventListener("mouseleave", function () {
    close.style.color = "rgba(0,0,0,0.5)";
  });
  close.onclick = function (event) {
    event.stopPropagation();
    bmb_eyecatcher_body.innerHTML = "";
  };
}

function bmb_createNudgeText(text, botSettings) {
  var bmb_nudge = document.createElement("div");
  // document.getElementById("bmb_chat_nudges_container").appendChild(bmb_nudge);
  document.getElementById("bmb_chat_nudge_body").appendChild(bmb_nudge);

  try {
    var md = window.markdownit();
    var result = md.render(text);
    result = result.replace(/<p>/g, '<p class="bmb_chat_nudge_text">');
    bmb_nudge.innerHTML = result;
  } catch (err) {
    text = text.replace(/<p>/g, '<p class="bmb_chat_nudge_text">');
    bmb_nudge.innerHTML = text;
  }

  if (sessionStorage.iframeside === "Left") {
    bmb_nudge.classList.add("bmb_chat_nudge_left");
  } else {
    bmb_nudge.classList.add("bmb_chat_nudge");
  }

  bmb_nudge.addEventListener("click", function () {
    document
      .getElementById("chatbotiframe")
      .contentWindow.postMessage("chatwindowOpened", "*");
  });
}

function bmb_createNudgeOptions(text, options, botSettings) {
  //Avtar
  let bmb_chat_nudges_container = document.getElementById(
    "bmb_chat_nudges_container"
  );

  let bmb_chat_nudge_body = document.createElement("div");
  document
    .getElementById("bmb_chat_nudges_container")
    .appendChild(bmb_chat_nudge_body);
  bmb_chat_nudge_body.classList.add("bmb_chat_bubble_body");
  bmb_chat_nudge_body.setAttribute("id", "bmb_chat_nudge_body");
  let close = document.createElement("div");
  bmb_chat_nudge_body.prepend(close);

  close.classList.add("bmb_chat_nudge_close");
  close.innerHTML = `<img src='https://bmbuiassetsprod.blob.core.windows.net/images/nudge_close.png'  alt='Close' width='100%' height='100%'></img>`;
  if (document.documentElement.clientWidth < 700) {
    close.classList.add("showbutton");
  } else {
    bmb_chat_nudge_body.addEventListener("mouseenter", function () {
      close.classList.add("showbutton");
    });
    bmb_chat_nudge_body.addEventListener("mouseleave", function () {
      close.classList.remove("showbutton");
    });
  }
  close.addEventListener("mouseenter", function () {
    close.style.color = "rgba(0,0,0,0.9)";
  });
  close.addEventListener("mouseleave", function () {
    close.style.color = "rgba(0,0,0,0.5)";
  });
  close.onclick = function (event) {
    event.stopPropagation();
    bmb_chat_nudges_container.innerHTML = "";
  };

  let bmb_nudge_option_container = document.createElement("div");
  bmb_nudge_option_container.classList.add("bmb_chat_nudge_option_container");

  bmb_createNudgeText(text, botSettings);

  for (var i = 0; i < options.length; i++) {
    let optionDisplay = options[i].text ? options[i].text : options[i];
    let optionMessage = options[i].value ? options[i].value : options[i];

    let bmb_nudge_option_outer = document.createElement("div");
    if (sessionStorage.iframeside === "Left") {
      bmb_nudge_option_outer.classList.add("bmb_nudge_option_outer_left");
    } else {
      bmb_nudge_option_outer.classList.add("bmb_nudge_option_outer");
    }

    let bmb_nudge_option = document.createElement("div");
    bmb_nudge_option.innerHTML = optionDisplay;

    bmb_nudge_option.classList.add("bmb_chat_nudge_option");

    bmb_nudge_option.addEventListener("click", function () {
      document
        .getElementById("chatbotiframe")
        .contentWindow.postMessage("message:" + optionMessage, "*");
    });
    bmb_nudge_option_outer.appendChild(bmb_nudge_option);
    bmb_nudge_option_container.appendChild(bmb_nudge_option_outer);
  }
  document
    .getElementById("bmb_chat_nudge_body")
    .appendChild(bmb_nudge_option_container);
  document
    .getElementById("chatbotiframe")
    .contentWindow.postMessage("nudgepopup:opened", "*");
}

function bmb_showWebView(webviewData) {
  document.getElementById("bmb_webview_frame").src = webviewData.url;
  document.getElementById("bmb_webview_header").style.backgroundColor =
    webviewData.styling.colours.header;
  document.getElementById("bmb_webview_header").style.color =
    webviewData.styling.colours.headerText;
  document.getElementById("bmb_webview_header").style.fill =
    webviewData.styling.colours.headerText;
  document.getElementById("bmb_webview_header_text").innerText =
    webviewData.title;

  if (webviewData.hideHeader) {
    document.getElementById("bmb_webview_header").style.display = "none";
    document.getElementById("bmb_webview_frame").style.height = "100%";
    document.getElementById("bmb_webview_frame").style.borderRadius = "10px";
  } else {
    document.getElementById("bmb_webview_header").style.display = "visible";
    document.getElementById("bmb_webview_frame").style.height =
      "calc(100% - 64px)";
    document.getElementById("bmb_webview_frame").style.borderRadius = "default";
  }
  bmb_removeClass("bmb_webview", "bmb_close");
}

function bmb_showWebViewMode(webviewData) {
  document.getElementById("bmb_webview_frame").src = webviewData.url;
  document.getElementById("bmb_webview_header").style.backgroundColor =
    webviewData.styling.colours.header;
  document.getElementById("bmb_webview_header").style.color =
    webviewData.styling.colours.headerText;
  document.getElementById("bmb_webview_header").style.fill =
    webviewData.styling.colours.headerText;
  document.getElementById("bmb_webview_header_text").innerText =
    webviewData.title;

  if (webviewData.hideHeader) {
    document.getElementById("bmb_webview_header").style.display = "none";
    document.getElementById("bmb_webview_frame").style.height = "100%";
    document.getElementById("bmb_webview_frame").style.borderRadius = "10px";
  } else {
    document.getElementById("bmb_webview_header").style.display = "visible";
    document.getElementById("bmb_webview_frame").style.height =
      "calc(100% - 64px)";
    document.getElementById("bmb_webview_frame").style.borderRadius = "default";
  }

  if (webviewData.mode === "Small") {
    bmb_addClass("bmb_webview", "bmb_webview_small");
  } else if (webviewData.mode === "Medium") {
    bmb_addClass("bmb_webview", "bmb_webview_medium");
  } else if (webviewData.mode === "Normal") {
    //Nothing to do
    bmb_removeClass("bmb_webview", "bmb_webview_small");
    bmb_removeClass("bmb_webview", "bmb_webview_medium");
    bmb_removeClass("bmb_webview", "bmb_webview_large");
  } else {
    bmb_addClass("bmb_webview", "bmb_webview_large");
  }

  bmb_removeClass("bmb_webview", "bmb_close");
}

function bmb_hideWebView() {
  bmb_addClass("bmb_webview", "bmb_close");
  document
    .getElementById("chatbotiframe")
    .contentWindow.postMessage("closeWebView", "*");
}

function bmb_resizeFullWebView() {
  bmb_addClass("bmb_webview", "bmb_webview_resize");
  bmb_addClass("bmb_webview", "bmb_webview_resize_animation_full");
  document.getElementById("webview-resize").style.display = "none";
  document.getElementById("webview-resize-actual").style.display = "inline";
  document
    .getElementById("chatbotiframe")
    .contentWindow.postMessage("resizeFullWebView", "*");
}
function bmb_resizeActualWebView() {
  bmb_removeClass("bmb_webview", "bmb_webview_resize");
  bmb_removeClass("bmb_webview", "bmb_webview_resize_animation_full");
  bmb_addClass("bmb_webview", "bmb_webview_resize_animation_actual");
  document.getElementById("webview-resize").style.display = "inline";
  document.getElementById("webview-resize-actual").style.display = "none";
  document
    .getElementById("chatbotiframe")
    .contentWindow.postMessage("resizeActualWebView", "*");
}
function bmb_serviceView(serviceViewData) {
  let div_service = document.getElementById("bmb_service_view");
  let div = document.getElementById("bmb_service_iframe");
  if (div === null) {
    let bmb_service_iframe = document.createElement("iframe");
    bmb_service_iframe.setAttribute("id", "bmb_service_iframe");
    bmb_service_iframe.src = serviceViewData;
    bmb_service_iframe.style.border = "0";
    bmb_service_iframe.style.right = "0";
    bmb_service_iframe.style.margin = "0";
    if (document.documentElement.clientWidth < 700) {
      bmb_service_iframe.style.height = "100%";
      bmb_service_iframe.style.width = "100%";
    } else {
      bmb_service_iframe.style.height = "100%";
      bmb_service_iframe.style.width = "450px";
    }
    bmb_service_iframe.style.zIndex = "9999999";
    bmb_service_iframe.style.position = "fixed";
    div_service.append(bmb_service_iframe);
  }
  if (document.documentElement.clientWidth < 450) {
    bmb_addClass("bmb_service_view", "service_view_mobile_width");
    bmb_addClass("spinner", "service_view_mobile_width");
  } else {
    bmb_removeClass("bmb_service_view", "service_view_mobile_width");
    bmb_removeClass("spinner", "service_view_mobile_width");
  }
  setTimeout(() => {
    bmb_removeClass("bmb_service_view", "bmb_close");
  }, 100);
  setTimeout(() => {
    bmb_addClass("spinner", "bmb_close");
  }, 1000);
}
function bmb_hideServiceView() {
  var bmb_service_view = document.getElementById("bmb_service_view");
  bmb_service_view.classList.add("bmb_close");
  bmb_removeClass("spinner", "bmb_close");
  document.getElementById("bmb_service_iframe").remove();
  document
    .getElementById("chatbotiframe")
    .contentWindow.postMessage("close_ServiceView", "*");
}
function bmb_addClass(elementID, className) {
  document.getElementById(elementID).classList.add(className);
}

function bmb_removeClass(elementID, className) {
  document.getElementById(elementID).classList.remove(className);
}

function bmb_createEyecatcherImage(url) {
  var bmb_eyecatcher = document.createElement("div");
  document.getElementById("bmbchatbotbubble").appendChild(bmb_eyecatcher);

  bmb_eyecatcher.style.backgroundImage = `url('${url}')`;
  bmb_eyecatcher.style.backgroundSize = "cover";
  bmb_eyecatcher.style.width = "250px";
  bmb_eyecatcher.style.height = "110px";
  bmb_eyecatcher.classList.add("bmb_chat_bubble");
  bmb_eyecatcher.classList.add("bmb_chat_bubble_img");

  // Calculate height
  var bmb_actualImage = new Image();
  bmb_actualImage.src = url;
  bmb_actualImage.addEventListener("load", function () {
    let ratio = this.width / this.height;
    bmb_eyecatcher.style.height = 250 / ratio;
  });

  bmb_eyecatcher.addEventListener("click", function () {
    document
      .getElementById("chatbotiframe")
      .contentWindow.postMessage("chatwindowOpened");
  });

  let close = document.createElement("div");
  bmb_eyecatcher.prepend(close);

  close.innerHTML = `X`;
  close.classList.add("bmb_chat_bubble_close");
  close.classList.add("bmb_chat_bubble_close_image");
  close.style.width = 20;

  close.addEventListener("mouseenter", function () {
    close.style.color = "rgba(0,0,0,0.9)";
  });
  close.addEventListener("mouseleave", function () {
    close.style.color = "rgba(0,0,0,0.5)";
  });
  close.onclick = function (event) {
    event.stopPropagation();
    bmb_eyecatcher.innerHTML = "";
  };
}

function calculateTime() {
  var currentTime = new Date();
  var expiryTime = new Date(sessionStorage.hidebotshow);
  //console.log("currentDate:",currentTime,"</br> expiry Time:",expiryTime);
  if (currentTime > expiryTime) {
    return true;
  } else {
    return false;
  }
}
var delayTiming = 30000;
if (
  typeof Storage !== "undefined" &&
  sessionStorage.hidebotshow !== undefined
) {
  setInterval(() => {
    if (sessionStorage.hidebotshow !== undefined) {
      var botshow = calculateTime();
      if (botshow === true) {
        sessionStorage.removeItem("hidebotshow");
        LoadChatBot();
      }
    }
  }, delayTiming);
} else {
  setTimeout(() => {
    LoadChatBot();
  }, 1000);
}
// Inserts an iframe containing the chat
function LoadChatBot() {
  var groupId = "";
  var propertyId = "";
  var integrationId = "";
  var indexPage = "";

  var loadIframe = true;
  if (document.getElementById("chatbotiframe")) {
    // To avoid Siteminder to add again when events fired
    loadIframe = false;
  }

  if (window.digitalPartner !== undefined) {
    // SiteMinder
    console.log(
      "group_id",
      window.digitalPartner.bmb.config.propertyKeys.group_id
    );
    console.log(
      "integration_id",
      window.digitalPartner.bmb.config.propertyKeys.integration_id
    );
    groupId = window.digitalPartner.bmb.config.propertyKeys.group_id; // Need to get from siteminder config
    integrationId =
      window.digitalPartner.bmb.config.propertyKeys.integration_id; // Need to get from siteminder config
    indexPage = "https://bmbuichatprod.z13.web.core.windows.net/index.html";
    console.log("SiteminderEvent Event", window.digitalPartner.bmb.event);
    if (window.digitalPartner.bmb.event === "impression") {
      //document.getElementById('chatbotiframe').contentWindow.postMessage('siteminder:' + window.digitalPartner.bmb.impressionData, '*');
      console.log("Event Data", window.digitalPartner.bmb.impressionData);
    } else if (window.digitalPartner.bmb.event === "loyalty") {
      //document.getElementById('chatbotiframe').contentWindow.postMessage('siteminder:' + window.digitalPartner.bmb.loyaltyData, '*');
      console.log("Event Data", window.digitalPartner.bmb.loyaltyData);
    } else if (window.digitalPartner.bmb.event === "conversion") {
      //document.getElementById('chatbotiframe').contentWindow.postMessage('siteminder:' + window.digitalPartner.bmb.conversionData, '*');
      console.log("Event Data", window.digitalPartner.bmb.conversionData);
    }
  } else if (typeof AKO_BOT_iid !== "undefined") {
    // OLD bmb Integration - Backward Compatibility
    groupId = AKO_BOT_gid;
    integrationId = AKO_BOT_iid;
    propertyId = AKO_BOT_pid;
    indexPage = AKO_BOT_botHTMLPath;
  } else if (typeof BMB_BOT_iid !== "undefined") {
    // NEW BMB Integration
    groupId = BMB_BOT_gid;
    integrationId = BMB_BOT_iid;
    propertyId = BMB_BOT_pid;
    indexPage = BMB_BOT_botHTMLPath;
  }

  if (loadIframe) {
    var botPosition = "right";
    try {
      botPosition = AKO_BOT_position;
    } catch (err) {}
    var botPreview = false;
    try {
      botPreview = BMB_BOT_preview;
    } catch (err) {}

    // if (groupId === "f49d1df2-f9b3-416e-a366-adf7ef6e7c63") {
    //   var AKO_GA_script = document.createElement("script");
    //   setTimeout(function () {
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag() {
    //       dataLayer.push(arguments);
    //     }
    //     gtag("js", new Date());
    //     gtag("config", "151161701-1");
    //     console.log("Loaded Google Analytics!");
    //   }, 2000);
    //   AKO_GA_script.type = "text/javascript";
    //   AKO_GA_script.src =
    //     "https://www.googletagmanager.com/gtag/js?id=151161701-1";
    //   document.getElementsByTagName("head")[0].appendChild(AKO_GA_script);
    // }

    var BMB_BOT_frame = document.createElement("div");
    BMB_BOT_frame.onload = function () {};
    var BMB_markdown = document.createElement("script");
    BMB_markdown.type = "text/javascript";
    BMB_markdown.src =
      "https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js";
    document.getElementsByTagName("head")[0].appendChild(BMB_markdown);
    document.getElementsByTagName("body")[0].appendChild(BMB_BOT_frame);
    var BMB_BOT_eyeCatcher = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(BMB_BOT_eyeCatcher);

    BMB_BOT_chatOpen = false;
    var messenger = false;
    
    if (typeof BMB_MYMA_MESSENGER !== "undefined") {
      messenger = true;
    }

    BMB_BOT_eyeCatcher.innerHTML = `<div id="bmb_webview" class="bmb_webview bmb_close">\
		<div class="bmb_webview_header" id="bmb_webview_header"> <span id="bmb_webview_header_text"> </span> \
			\
		</div> \
    <div class="bmb_webview_header_resize">
      <a id="webview-resize"  onclick="bmb_resizeFullWebView()" style="display: inline;"></a>
      <a id="webview-resize-actual"  onclick="bmb_resizeActualWebView()" style="display: none;"></a>
    </div>
		<div class="bmb_webview_header_close" onclick="bmb_hideWebView()"> \
		<a id="webview-close" style="display: inline;"></a>\
		</div> \
	<iframe id="bmb_webview_frame" class="bmb_webview_frame" src="" title='bmbview'></iframe>\
	</div>\
  <div id='bmb_service_view' class="bmb_service_view bmb_close">
    <div id="spinner" class="loadercontainer">
      <div class="loading"></div>
    </div>
  </div>
	<div id='bmbchatbotbubble' class='bmb_chat_bubbles_container ${botPosition}'>\			
			\
		</div>
		<div id="bmb_chat_nudges_container" class="bmb_chat_nudges_container ${botPosition}">\
			\
		</div>\
		<style>
				@keyframes bmb_fadeIn {
					from {
						opacity: 0;
            transform: translateY(60%);
					}
				}
        body{        
         transform: none !important;
        }
        .loadercontainer {
          align-items: center;
          background:none;
          display: flex;
          height: 100vh;
          justify-content: center;
          width: 420px;
         }
        .loading {
            -webkit-animation: sk-scaleout 1s infinite ease-in-out;
            animation: sk-scaleout 1s infinite ease-in-out;
            background-color: black;
            border-radius: 100%;
            height: 6em;
            width: 6em;
        }
        .service_view_mobile_width{
          width:100% !important;
        }
        @keyframes sk-scaleout {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          }
      
          100% {
            -webkit-transform: scale(1.0);
            opacity: 0;
            transform: scale(1.0);
          }
        }
        #webview-resize{
          position: absolute;
          top: 0px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: #f8f9fa url(https://bmbuiassetsprod.blob.core.windows.net/images/resize1.png);
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: center;
          cursor: pointer;
          z-index: 9999999;
          display: none;
          border: 1px;
          border-style: solid;
          border-radius: 15px;
          color:#000
        }
        #webview-resize-actual{
          display:inline;
          position: absolute;
          top: 0px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: #f8f9fa url(https://bmbuiassetsprod.blob.core.windows.net/images/resize2.png);
          background-repeat: no-repeat;
          background-size: 15px;
          background-position: center;
          cursor: pointer;
          z-index: 9999999;
          border: 1px;
          border-style: solid;
          border-radius: 15px;
          color:#000
        }
				#webview-close {
					position: absolute;
					top: 0px;
					right: 0px;
					width: 30px;
					height: 30px;
					background: transparent url('https://bmbuiassetsprod.blob.core.windows.net/images/close_view.png');
          background-repeat: no-repeat;
          background-size: 25px;
          cursor: pointer;
					z-index: 9999999;
					display: none;
				}
				.bmb_webview { \
          max-height: 725px;
					box-sizing: border-box; \
					width: 400px; \
          height: 100%;
					//height: 570px; \
					position: fixed; \
					bottom: 6px; \
					//bottom: 20px; \
					right: 370px; \
					z-index: 100000; \
					background-color: white; \
					box-shadow: 0 0 10px 5px rgba(0,0,0, 0.3);\
					border-radius: 10px; \
				} \
				.bmb_webview_medium {
					width: 800px !important; \					
				}
				.bmb_webview_small {
					width: 640px !important; \					
				}
				.bmb_webview_large {
					width: 960px !important; \					
				}
				.bmb_webview_header { \
					box-sizing: border-box; \
					height: 64px; \
					width: 100%; \
					padding: 20px; \
					font-size: 20px; \
					border-top-left-radius: 10px; \
					border-top-right-radius: 10px; \
					font-family: "Open sans", Verdana, Geneva, sans-serif; \
					box-shadow: 0 2px 4px -2px rgba(0,0,0,.32); \
					z-index: 100001; \
				}\
        .bmb_webview_header_resize { \
					position: absolute; \
          top: 3px; \
          right: 20px; \
					width: 30px; \
					text-align: center; \
					height: 20px; \
					border-radius: 4px; \
					float: right; \
					cursor: pointer; \
				}\
        .bmb_webview_resize {
          width: 544px;
          max-height: 100%;
          border-radius: 0px;
          bottom: 0px;
        }
        .bmb_webview_resize_animation_full{
          transition: all .2s ease-out;
        }
        .bmb_webview_resize_animation_actual{
          transition: all .2s ease-in;
        }
				.bmb_webview_header_close { \
					position: absolute; \
          top: 3px; \
          right: 0px; \
					width: 30px; \
					height: 30px; \
					text-align: center; \
					height: 20px; \
					border-radius: 4px; \
					float: right; \
					cursor: pointer; \
				}\
				.bmb_webview_header_close_svg { \
					height: 20px; \
					margin-top: 3px; \
					float: right; \
				}\
				.bmb_webview_header_close:hover { \
					opacity: 0.7; \
				}\
				.bmb_webview_frame { \
					width: 100%; \
					height: calc(100% - 64px); \
					border: 0; \
					border-bottom-left-radius: 10px; \
					border-bottom-right-radius: 10px; \
				} \
				.bmb_chat_bubbles_container	{
					position: fixed;				
					bottom: 100px;	
					z-index:9999;	
					line-height:1.25 !important;	
          ${messenger === true ? "display:none" : ""}
				}
				.left{
					left: 20px;
				}
				.right{
					right: 20px;
				}
				.bmb_chat_nudges_container	{\
					position: fixed;\
					bottom: 100px;\
					z-index: 1000000;\
          margin-bottom:30px;
          ${messenger === true ? "display:none" : ""}
				}\
				.bmb_chat_nudge_avtar{\
					background-position-x: 0%;
					background-position-y: 0%;
					background-repeat: repeat;
					background-size: auto;
				  width: 30px;
				  height: 30px;
				  background-size: 110%;
				  background-position: center;
				  background-repeat: no-repeat;
				  border-radius: 50%;
				  box-shadow: 0 2px 6px rgba(0,0,0,.32);
				  float: left;
				}\
				.bmb_chat_nudge	{\
					margin-bottom: 5px;\
					max-width: 190px;\
					padding: 7px;\
					padding-left: 10px;\
					padding-right: 10px;\
					font-family: \"Segoe UI\", Segoe, \"Segoe WP\", \"Helvetica Neue\", Helvetica, sans-serif;\
					cursor: pointer;\
					color: #000000;\
					font-size: 15px;\
					background-color: white;\
					border-radius: 8px;\
					animation-name: bmb_fadeIn;\
					animation-duration: 1s;\
					z-index: 1000000;\
					box-shadow: 0 2px 4px rgba(0,0,0,.32);\
					margin-left:10px;\

				}\
        .bmb_chat_nudge_left	{\
					margin-bottom: 5px;\
					max-width: 190px;\
					padding: 7px;\
					padding-left: 10px;\
					padding-right: 10px;\
					font-family: \"Segoe UI\", Segoe, \"Segoe WP\", \"Helvetica Neue\", Helvetica, sans-serif;\
					cursor: pointer;\
					color: #000000;\
					font-size: 15px;\
					background-color: white;\
					border-radius: 8px;\
					animation-name: bmb_fadeIn;\
					animation-duration: 1s;\
					z-index: 1000000;\
					box-shadow: 0 2px 4px rgba(0,0,0,.32);\
				}\
        .bmb_chat_nudge_close	{
					float: ${botPosition};
					margin-top: -50px;
					color: rgba(0,0,0,0.5);
          padding: 5px 0px 5px 5px;
          border-radius: 20px;
          width: 29px;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          opacity:0;
          border: 0;
				}
				.bmb_chat_nudge_text {\
					display: inline;\
          font-family:Calibri, \"Helvetica Neue\", Arial, \"sans-serif"\;\
          font-size: 14px;\
          color: #000;\
          margin:0px;
				}\
				.bmb_chat_nudge_option_container {\
					margin-top: 10px;\
					max-width: 250px;\					
				}\
				.bmb_chat_nudge_option {\
					display: inline-block;\
					max-width: 250px;\
					padding: 5px;\
					padding-left: 10px;\
					padding-right: 10px;\				
					margin-bottom: 5px;\
					font-family: Calibri, \"Helvetica Neue\", Arial, \"sans-serif"\;\
					background-color: white;\
					animation-name: bmb_fadeIn;\
					animation-duration: 1s;\
					z-index: 1000000;\
					border-radius: 8px;\
					box-shadow: 0 2px 4px rgba(0,0,0,.32);\
					white-space: nowrap;\
					cursor: pointer;\
					font-size:14px;\
				}\
				.bmb_chat_nudge_option:hover {\					
					background-color: lightgrey;\
				}\
				.bmb_nudge_option_outer{\
					width:100%;\
					text-align:right;\
				}\
        .bmb_nudge_option_outer_left{
          width:100%;
          text-align:left;
        }
        .bmb_chat_bubble_textbody {
          line-height: 1.25;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.85);
          background-color: rgb(255, 255, 255);
          font-size: 15px;
        }
				.bmb_chat_bubble	{
          align-self: flex-end;
          float: ${botPosition};
          margin-bottom: 30px;
          overflow: hidden;
          box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
          max-width: 250px;
          border-radius: 8px;
          animation-name: bmb_fadeIn;
					animation-duration: 1s;
				}
        .bmb_chat_bubble_left {
          align-self: flex-end;
          float: left;
          margin-bottom: 30px;
          overflow: hidden;
          box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;
          max-width: 250px;
          border-radius: 8px;
          animation-name: bmb_fadeIn;
          animation-duration: 1s;
          margin-left: 20px;
        }
        .bmb_chat_bubble_body{
          background: rgba(0, 0, 0, 0);
          padding: 0px;
          text-align: center;
        }
        .bmbchatbotbubble_text {
          padding:16px 18px;
        }
        .bmbchatbotbubble_text span {
          font-family: Calibri, \"Helvetica Neue\", Arial, \"sans-serif"\;\
        }
				.bmb_chat_bubble_close	{
					float: right;
					margin-top: -45px;
					color: rgba(0,0,0,0.5);
          //background: rgba(243,243,243);
          padding: 5px 0px 5px 5px;
          border-radius: 20px;
          width: 29px;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          opacity:0;
          border: 0;
				}
        .showbutton{
          opacity:1;
        }
				.bmb_chat_bubble_close_image	{
					box-shadow: 0 0px 10px rgba(255,255,255,.32);
					background-color: rgba(255,255,255,.32);
					border-radius: 50%;
					text-align: center;
					margin-right: -6px;
					width: 20px;
				}
				.bmb_frame_big	{
					height: 100% !important;
					width: 369px !important;
          max-height: 750px !important;
				}
        .resize{
					height: 100% !important;
					width: 513px !important;
          max-height: 100% !important;
        }
				.bmb_frame_big_mobile	{
					height: 100% !important;
					width: 100% !important;
				}
				.bmb_bot_frame_default	{
					height: 100px;
					width: 100px;
				}
				.bmb_close {\
					display: none; \
				}\
				.bmb_chat_scrollanimation {
					top: 89% !important;
				}
				.bmb_chat_scroll {
				top: 65px !important;
				}
        .bmb_service_view{
          position: fixed;
          bottom: 0px;
          right: 0px;
          z-index: 9999999;
					box-sizing: border-box; \
					width: 420px; \
          height: 100%;
					background-color: white; \
					box-shadow: 0 0 10px 5px rgba(0,0,0, 0.3);\ 
          animation: slideleft 0.5s ease;
        }
        @keyframes slideleft {
          0% {
            transform: translateX(250px);
          }
        
          100% {
            transform: translateX(0);
          }

				@media only screen and (max-width: 1680px){
				.bmb_chat_scrollanimation {
   						 top: 88% !important;
				}
				.bmb_chat_scroll {
					top: 65px !important;
				}
				}

				@media only screen and (max-width: 1440px){
				.bmb_chat_scrollanimation {
   						 top: 87% !important;
				}
				.bmb_chat_scroll {
					top: 65px !important;
				}
				}
				@media only screen and (max-width: 1366px){
				.bmb_chat_scrollanimation {
   						 top: 84% !important;
				}
				.bmb_chat_scroll {
					top: 65px !important;
				}
				}
				@media only screen and (max-width: 1060px){
				.bmb_chat_scrollanimation {
   						 top: 87% !important;
				}
				.bmb_chat_scroll {
					top: 65px !important;
				}
				}
				@media only screen and (max-width: 800px){
				.bmb_chat_scrollanimation {
   						 top: 89% !important;
				}
				.bmb_chat_scroll {
					top: 66px !important;
				}
				}

				@media only screen and (max-width: 680px){
				.bmb_chat_scrollanimation {
							top: 110px !important;
							right:-9px !important;
							
				}
				.bmb_chat_scroll {
					top: 110px !important;
					right:-9px !important;
				}
			}			
				
			</style>
		`;

    if (document.documentElement.clientWidth < 700) {
      var BMB_BOT_mobile = true;
    }
    if (typeof BMB_MOBILE !== "undefined") {
      BMB_BOT_mobile = BMB_MOBILE;
    }
    var serviceview = false;
    if (typeof BMB_SERVICE_VIEW !== "undefined") {
      serviceview = true;
    }
    //console.log(BMB_SERVICE_VIEW);

    var BMB_BOT_queryString =
      `?location=${encodeURIComponent(
        window.location.href
      )}&title=${encodeURIComponent(
        document.title
      )}&referrer=${encodeURIComponent(document.referrer)}` +
      `${integrationId ? "&iid=" + encodeURIComponent(integrationId) : ""}${
        groupId ? "&gid=" + encodeURIComponent(groupId) : ""
      }${propertyId ? "&pid=" + encodeURIComponent(propertyId) : ""}${
        BMB_BOT_mobile ? "&mobile=true" : "&mobile=false"
      }&position=${botPosition}&preview=${botPreview}&serviceview=${serviceview}${
        messenger?'&messenger=true':''}`;

    indexPage += BMB_BOT_queryString;

    BMB_BOT_frame.innerHTML = `<iframe frameborder='0' class='bmb_bot_frame_default' style='position: fixed; bottom: 0; ${botPosition}: 0; margin: 0; z-index: 9999998;' id='chatbotiframe' src="${indexPage}" title='bmb'></iframe>`;
  }

  if (typeof BMB_MYMA_MESSENGER === "undefined") {
    window.parent.addEventListener("scroll", function (event) {
      //Animate the iframe bubble when scroll
      if (sessionStorage.scrollanimation && BMB_BOT_chatOpen == false) {
        var body = window.parent.document.body; //IE 'quirks'
        var parentDocument = window.parent.document.documentElement; //IE with doctype
        parentDocument = parentDocument.clientHeight ? parentDocument : body;
        if (parentDocument.scrollTop == 0) {
          document.getElementById("chatbotiframe").style.top =
            sessionStorage.postiontop;
          document
            .getElementById("chatbotiframe")
            .classList.remove("bmb_chat_scroll");
          sessionStorage.setItem("top", "1");
        } else {
          document.getElementById("chatbotiframe").style.top =
            sessionStorage.animationtop;
          document
            .getElementById("chatbotiframe")
            .classList.add("bmb_chat_scroll");
          sessionStorage.setItem("top", "0");
        }
      }
    });
  }

  window.addEventListener(
    "message",
    function (event) {
      //console.log("Chat",event.data);
      if (event.data === "chatbotwindowOpen") {
        document.getElementById("bmbchatbotbubble").innerHTML = "";
        document.getElementById("bmb_chat_nudges_container").innerHTML = "";
        document.getElementById("bmb_chat_nudges_container").style.background =
          "none";
        BMB_BOT_chatOpen = true;
        if (typeof BMB_MYMA_MESSENGER === "undefined") {
          if (BMB_BOT_mobile) {
            document
              .getElementById("chatbotiframe")
              .classList.add("bmb_frame_big_mobile");
          } else {
            document
              .getElementById("chatbotiframe")
              .classList.add("bmb_frame_big");
          }
        }
        document.getElementById("chatbotiframe").style.bottom = 0;
        document.getElementById("chatbotiframe").style.zIndex = 9999999;
        //Reset Iframe Positions to Bottom and Right When Chat Window Open
        if (sessionStorage.iframeside) {
          if (sessionStorage.iframeside === "Left") {
            document.getElementById("chatbotiframe").style.left = 0;
          } else if (sessionStorage.iframeside === "Right") {
            document.getElementById("chatbotiframe").style.right = 0;
          }
        }
        //Reset Iframe Top Position When Chat Window Open
        if (sessionStorage.scrollanimation) {
          document.getElementById("chatbotiframe").style.top = null;
          document
            .getElementById("chatbotiframe")
            .classList.remove("bmb_chat_scrollanimation");
          document
            .getElementById("chatbotiframe")
            .style.setProperty("right", "0px", "important");
          document
            .getElementById("chatbotiframe")
            .classList.remove("bmb_chat_scroll");
        }
      }

      if (event.data === "chatbotwindowClose") {
        BMB_BOT_chatOpen = false;
        setTimeout(function () {
          document
            .getElementById("chatbotiframe")
            .classList.remove("bmb_frame_big");
          document
            .getElementById("chatbotiframe")
            .classList.remove("bmb_frame_big_mobile");
        }, 1000);
        document.getElementById("chatbotiframe").style.zIndex = 9999998;
        //Reset Iframe Position as per Integration Settings When Chat Window Closed
        if (sessionStorage.iframebottom) {
          document.getElementById("chatbotiframe").style.bottom =
            sessionStorage.iframebottom;
        }
        if (sessionStorage.iframeside) {
          if (sessionStorage.iframeside === "Left") {
            document.getElementById("chatbotiframe").style.left =
              sessionStorage.iframeposition;
          } else if (sessionStorage.iframeside === "Right") {
            document.getElementById("chatbotiframe").style.right =
              sessionStorage.iframeposition;
          }
        }
        if (sessionStorage.top) {
          if (sessionStorage.top === "1") {
            if (sessionStorage.postiontop) {
              document.getElementById("chatbotiframe").style.top =
                sessionStorage.postiontop;
            }
          } else if (sessionStorage.top === "0") {
            if (sessionStorage.animationtop) {
              document.getElementById("chatbotiframe").style.top =
                sessionStorage.animationtop;
            }
          }
        }
        if (sessionStorage.scrollanimation) {
          document
            .getElementById("chatbotiframe")
            .classList.add("bmb_chat_scrollanimation");
        }
      }

      if (event.data === "chatbotHide") {
        var time = 900000;
        var currentTime = new Date();
        var expiryTime = new Date(currentTime.getTime() + time);
        if (typeof Storage !== "undefined") {
          sessionStorage.setItem("hidebotshow", expiryTime);
          let botshow = calculateTime();
          if (botshow === false) {
            setTimeout(() => {
              if (document.getElementById("chatbotiframe")) {
                document.getElementById("chatbotiframe").style.display = "none";
                document.getElementById("bmbchatbotbubble").style.display =
                  "none";
                document.getElementById(
                  "bmb_chat_nudges_container"
                ).style.display = "none";
              }
            }, 1000);
          }
        }
        setInterval(() => {
          if (sessionStorage.hidebotshow !== undefined) {
            let botShow = calculateTime();
            if (botShow === true) {
              sessionStorage.removeItem("hidebotshow");
              if (document.getElementById("chatbotiframe")) {
                document.getElementById("chatbotiframe").style.display =
                  "block";
                document.getElementById("bmbchatbotbubble").style.display =
                  "block";
                document.getElementById(
                  "bmb_chat_nudges_container"
                ).style.display = "block";
              }
            } else {
              if (document.getElementById("chatbotiframe")) {
                document.getElementById("chatbotiframe").style.display = "none";
                document.getElementById("bmbchatbotbubble").style.display =
                  "none";
                document.getElementById(
                  "bmb_chat_nudges_container"
                ).style.display = "none";
              }
            }
          }
        }, delayTiming);
      }

      if (event.data.toString().includes("chatbotalign:")) {
        //Set Iframe & Nudges Position as per Integration Settings and saved in Session Storage
        var positionData = event.data.split("|");
        var align = positionData[0].split(":");
        var side = positionData[1].split(":");
        var bottom = positionData[2].split(":");

        if (align[1] === "Left") {
          document.getElementById("chatbotiframe").style.left = side[1] + "px";
          document.getElementById("bmbchatbotbubble").classList.remove("right");
          document.getElementById("bmbchatbotbubble").classList.add("left");
          document
            .getElementById("bmb_chat_nudges_container")
            .classList.remove("right");
          document
            .getElementById("bmb_chat_nudges_container")
            .classList.add("left");
          if (document.documentElement.clientWidth < 700) {
            document.getElementById("bmbchatbotbubble").style.left =
              (98 + parseFloat(side[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.right =
              "";
            document.getElementById("bmb_chat_nudges_container").style.left =
              (98 + parseFloat(side[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmbchatbotbubble").style.marginRight =
              "23px";
            document.getElementById(
              "bmb_chat_nudges_container"
            ).style.marginRight = "23px";
          } else {
            document.getElementById("bmbchatbotbubble").style.left =
              parseFloat(side[1].replace("px", "")).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.right =
              "";
            document.getElementById("bmb_chat_nudges_container").style.left =
              (20 + parseFloat(side[1].replace("px", ""))).toString() + "px";
          }
        } else if (align[1] === "Right") {
          document.getElementById("chatbotiframe").style.right = side[1] + "px";
          document.getElementById("bmbchatbotbubble").classList.remove("left");
          document.getElementById("bmbchatbotbubble").classList.add("right");
          document
            .getElementById("bmb_chat_nudges_container")
            .classList.remove("left");
          document
            .getElementById("bmb_chat_nudges_container")
            .classList.add("right");
          if (document.documentElement.clientWidth < 700) {
            document.getElementById("bmbchatbotbubble").style.right =
              (22 + parseFloat(side[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.left =
              "";
            document.getElementById("bmb_chat_nudges_container").style.right =
              (22 + parseFloat(side[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmbchatbotbubble").style.marginLeft =
              "23px";
            document.getElementById(
              "bmb_chat_nudges_container"
            ).style.marginLeft = "23px";
          } else {
            document.getElementById("bmbchatbotbubble").style.right =
              (20 + parseFloat(side[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.left =
              "";
            document.getElementById("bmb_chat_nudges_container").style.right =
              (20 + parseFloat(side[1].replace("px", ""))).toString() + "px";
          }
        }

        if (document.documentElement.clientWidth < 700) {
          if (window.digitalPartner !== undefined) {
            document.getElementById("chatbotiframe").style.bottom = "50px";
            document.getElementById("bmbchatbotbubble").style.bottom =
              (68 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.bottom =
              (68 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
          } else {
            document.getElementById("chatbotiframe").style.bottom =
              bottom[1] + "px";
            document.getElementById("bmbchatbotbubble").style.bottom =
              (82 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
            document.getElementById("bmb_chat_nudges_container").style.bottom =
              (82 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
          }
        } else {
          document.getElementById("chatbotiframe").style.bottom =
            bottom[1] + "px";
          document.getElementById("bmbchatbotbubble").style.bottom =
            (75 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
          document.getElementById("bmb_chat_nudges_container").style.bottom =
            (75 + parseFloat(bottom[1].replace("px", ""))).toString() + "px";
        }

        if (typeof Storage !== "undefined") {
          sessionStorage.setItem("iframebottom", bottom[1]);
          sessionStorage.setItem("iframeside", align[1]);
          sessionStorage.setItem("iframeposition", side[1]);
        }
      }

      if (event.data.toString().includes("chatbotscrollanimation")) {
        //Set Iframe Animation as per Integration Settings and saved in Session Storage
        var animationData = event.data.split("|");
        if (typeof Storage !== "undefined") {
          sessionStorage.setItem("scrollanimation", "1");
          sessionStorage.setItem("postiontop", animationData[1]);
          sessionStorage.setItem("animationtop", animationData[2]);
        }
        document.getElementById("chatbotiframe").style.top = animationData[1];
        document.getElementById("chatbotiframe").style.transition =
          "all .6s ease-out";
        document.getElementById("chatbotiframe").style.opacity =
          "1 !important%";
        document.getElementById("bmbchatbotbubble").style.display = "none";
        document
          .getElementById("chatbotiframe")
          .classList.add("bmb_chat_scrollanimation");
      }

      if (event.data.toString().includes("chatbotremoveposition")) {
        sessionStorage.removeItem("iframebottom");
        sessionStorage.removeItem("iframeside");
        sessionStorage.removeItem("iframeposition");
        if (document.documentElement.clientWidth < 700) {
          document.getElementById("bmbchatbotbubble").style.right = "110px";
          document.getElementById("bmbchatbotbubble").style.marginLeft = "23px";
          document.getElementById("bmbchatbotbubble").style.bottom = "18px";
          if (window.digitalPartner !== undefined) {
            document.getElementById("chatbotiframe").style.bottom = "50px";
            document.getElementById("bmbchatbotbubble").style.bottom = "68px";
          }
        } else {
          document.getElementById("bmbchatbotbubble").style.right = "20px";
          document.getElementById("bmbchatbotbubble").style.marginLeft = "";
          document.getElementById("bmbchatbotbubble").style.bottom = "100px";
        }
      }

      if (event.data.toString().includes("removeiframemode")) {
        document.getElementById("chatbotiframe").style.display = "none";
      }
      
      if (event.data.toString().startsWith("openWebView:")) {
        // Opens external webview
        if (document.documentElement.clientWidth < 1140) {
          // Too small screen so we tell chatui to open an internal webview
          document
            .getElementById("chatbotiframe")
            .contentWindow.postMessage("fallbackWebView", "*");
        } else {
          bmb_showWebView(JSON.parse(event.data.substring(12)));
        }
      }

      if (event.data.toString().startsWith("WebViewMode:")) {
        // Opens external webview
        if (document.documentElement.clientWidth < 1140) {
          // Too small screen so we tell chatui to open an internal webview
          document
            .getElementById("chatbotiframe")
            .contentWindow.postMessage("fallbackWebView", "*");
        } else {
          bmb_showWebViewMode(JSON.parse(event.data.substring(12)));
        }
      }

      if (event.data.toString().startsWith("totalnudges:")) {
        sessionStorage.setItem("nudgeCount", event.data.substring(12));
      }

      if (event.data === "closeWebView") {
        // Closes external webview
        bmb_hideWebView();
      }

      if (event.data === "resizeFullWebView") {
        bmb_resizeFullWebView();
      }
      if (event.data === "resizeFullWebView") {
        bmb_resizeActual();
      }
      if (event.data.toString().startsWith("openServiceView:")) {
        bmb_serviceView(JSON.parse(event.data.substring("16")));
      }
      if (event.data === "close_ServiceView") {
        bmb_hideServiceView();
      }
      if (event.data.toString().startsWith("eyecatcher:")) {
        if (!BMB_BOT_chatOpen) {
          if (typeof Storage !== "undefined") {
            if (sessionStorage.nudgeProcessed && sessionStorage.nudgeCount) {
              if (
                parseInt(sessionStorage.nudgeProcessed) !==
                parseInt(sessionStorage.nudgeCount)
              ) {
                sessionStorage.setItem(
                  "nudgeProcessed",
                  parseInt(sessionStorage.nudgeProcessed) + 1
                );
                Nudge(event);
              } else {
                // sessionStorage.removeItem("nudgeProcessed");
              }
            } else {
              sessionStorage.setItem("nudgeProcessed", 1);
              Nudge(event);
            }
          } else {
            Nudge(event);
          }
        }
      }

      if (event.data.toString().startsWith("nudgebutton:")) {
        // if (!BMB_BOT_chatOpen) {
        //   NudgeButton(event);
        // }
        if (!BMB_BOT_chatOpen) {
          if (typeof Storage !== "undefined") {
            if (sessionStorage.nudgeProcessed && sessionStorage.nudgeCount) {
              if (
                parseInt(sessionStorage.nudgeProcessed) !==
                parseInt(sessionStorage.nudgeCount)
              ) {
                sessionStorage.setItem(
                  "nudgeProcessed",
                  parseInt(sessionStorage.nudgeProcessed) + 1
                );
                NudgeButton(event);
              } else {
                // sessionStorage.removeItem("nudgeProcessed");
              }
            } else {
              sessionStorage.setItem("nudgeProcessed", 1);
              NudgeButton(event);
            }
          } else {
            NudgeButton(event);
          }
        }
      }

      if (event.data.toString().startsWith("nudgeminimized")) {
        document.getElementById("bmb_chat_nudges_container").innerHTML = "";
      }

      if (event.data.toString().startsWith("openUrl:")) {
        //window.location.href = event.data.substring(8);
        window.open(
          event.data.substring(8),
          "_blank" // <- This is what makes it open in a new window.
        );
      }

      if (event.data === "resizeactual") {
        document.getElementById("chatbotiframe").classList.remove("resize");
        document.getElementById("bmb_webview").style.right = "";
      }
      if (event.data === "resizefull") {
        document.getElementById("chatbotiframe").classList.add("resize");
        document.getElementById("bmb_webview").style.right = "505px";
      }
      function NudgeButton(event) {
        document.getElementById("bmb_chat_nudges_container").innerHTML = "";
        document.getElementById("bmbchatbotbubble").innerHTML = "";
        let nudgeData = JSON.parse(event.data.substring("12"));
        bmb_createNudgeOptions(
          nudgeData.text[0],
          nudgeData.buttons,
          nudgeData.botSettings
        );
      }

      function Nudge(event) {
        document.getElementById("bmbchatbotbubble").innerHTML = "";
        document.getElementById("bmb_chat_nudges_container").innerHTML = "";
        let eyecatchers = JSON.parse(event.data.substring("11"));

        for (let bmb_eyecatcher of eyecatchers) {
          if (typeof bmb_eyecatcher === "string") {
            bmb_createEyecatcher(bmb_eyecatcher);
          } else if (bmb_eyecatcher.type) {
            if (bmb_eyecatcher.type === "image") {
              bmb_createEyecatcherImage(bmb_eyecatcher.url);
            }
          }
        }
      }
    },
    false
  );
}
