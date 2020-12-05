var first = true;
function preSendhandler(event) {
  // When fetching the Welcome Node on startup, the context won't be defined, yet. If you want to add to
  // context when fetching welcome node, you will need to define the context.
  event.data.context.skills["main skill"] = event.data.context.skills[
    "main skill"
  ] || { user_defined: {} };
  event.data.context.skills["main skill"].user_defined.party_time = true;

  // You can OPTIONALLY return a promise and we will wait to continue processing until the promise is resolved. If
  // you return nothing we will immediately continue processing the event. If you fail the Promise we will cancel
  // sending the message.

  return new Promise(function (resolve) {
    if (!first) {
      var v = event.data.input.text;
        console.log("aoba");
        $.post(
          "/translator",
           { v },
          function (returnedData, statusRequest) {
            event.data.input.text =returnedData.result.translations[0].translation;
              resolve();
          }
        );
    }
    else{
    first = false;
    resolve();
  }
  });
}

window.watsonAssistantChatOptions = {
  integrationID: "53b326e1-47b0-412e-ae08-a22bf8d9fc34", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "3a1e20ad-3aaa-457c-9ed5-ce8d8dfc2d73", // The ID of your service instance.
  onLoad: function (instance) {
    // Subscribe to the "pre:send" event.
    instance.on({ type: "pre:send", handler: preSendhandler });
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});