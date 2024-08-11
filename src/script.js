const { useState } = React;
const marked = window.marked;

const Application = () => (
  <div className="container py-4">
    <div className="row mb-4">
      <div className="col-12 text-center">
        <h1>Markdown Preview</h1>
        <hr />
      </div>
    </div>
    <UserInput />
  </div>
);

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

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <h3 className="text-center">Enter Markdown</h3>
        <textarea
          id="editor"
          className="form-control"
          value={markdown}
          onChange={handleChange}
          rows="10"
        />
      </div>
      <div className="col-md-6">
        <h3 className="text-center">Result</h3>
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

const MarkdownPreview = ({ markdown }) => {
  const createMarkup = () => ({ __html: marked(markdown) });

  return (
    <div
      id="preview"
      className="border p-3 bg-dark text-light rounded"
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
