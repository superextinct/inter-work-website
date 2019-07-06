const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

document.querySelectorAll("#charset li").forEach( (glyph) => {
  glyph.addEventListener("click", (e) => {
    copyToClipboard(e.target.innerText);

    var message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = "Glyph copied to clipboard!";

    document.body.appendChild(message);
    window.setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);

  });
});

document.querySelectorAll("#sampler input").forEach( (slider) => {
  slider.addEventListener("input", (e) => {
    let value = parseFloat(e.target.value);
    let property = e.target.name;

    switch (property) {
      case "letterspacing":
      case "size":
       value = value + "px";
       break;
    }

    document.getElementById("variable-sample").style.setProperty(`--var-${property}`, value);
  })
});
