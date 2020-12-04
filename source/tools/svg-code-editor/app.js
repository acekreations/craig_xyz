var editor_html = ace.edit("ace_html", {
  mode: "ace/mode/html",
  tabSize: 2,
  showPrintMargin: false
});

editor_html.on("change", function() {
  var code = editor_html.getValue();
  $("#svgArea").html(code);
});

editor_html.setValue("<!-- SVG code here -->");

function handleFormatting() {
  editor_html.getSession().setValue(
    html_beautify(editor_html.getValue(), {
      indent_size: 2
    })
  );
}
