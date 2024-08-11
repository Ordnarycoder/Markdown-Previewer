const { useState } = React;
const marked = window.marked;

const Application = () => /*#__PURE__*/
React.createElement("div", { className: "container py-4" }, /*#__PURE__*/
React.createElement("div", { className: "row mb-4" }, /*#__PURE__*/
React.createElement("div", { className: "col-12 text-center" }, /*#__PURE__*/
React.createElement("h1", null, "Markdown Preview"), /*#__PURE__*/
React.createElement("hr", null))), /*#__PURE__*/


React.createElement(UserInput, null));



const UserInput = () => {
  const [markdown, setMarkdown] = useState(`# Header (H1)

## Subheader (H2)

[Link to Example](https://example.com)

\`Inline code\`

\`\`\`javascript
// Code block
console.log("Hello, World!");
\`\`\`

- List item 1
- List item 2

> Blockquote

![Placeholder Image](https://via.placeholder.com/150)

**Bold text**
`);

  const handleChange = e => {
    setMarkdown(e.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-md-6 mb-3" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-center" }, "Enter Markdown"), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      className: "form-control",
      value: markdown,
      onChange: handleChange,
      rows: "10" })), /*#__PURE__*/


    React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-center" }, "Result"), /*#__PURE__*/
    React.createElement(MarkdownPreview, { markdown: markdown }))));



};

const MarkdownPreview = ({ markdown }) => {
  const createMarkup = () => ({ __html: marked(markdown) });

  return /*#__PURE__*/(
    React.createElement("div", {
      id: "preview",
      className: "border p-3 bg-dark text-light rounded",
      dangerouslySetInnerHTML: createMarkup() }));


};

ReactDOM.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById('root'));