import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

const Quill = props => (
  <React.Fragment>
    <ReactQuill
      modules={modules}
      formats={formats}
      value={props.texteditor}
      onChange={props.onHandleChange}
    />
    <style global jsx>{`
      .ql-editor {
        background-color: white;
      }
      .ql-toolbar {
        display: block;
        background-color: #eaecec;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
      }
      .ql-container {
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        background: #fefcfc;
      }

      .ql-editor {
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
      .ql-editor {
        min-height: 10em;
      }
    `}</style>
  </React.Fragment>
);

export default Quill;
