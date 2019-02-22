import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ 'align': [] }], 
    [{ header: "1" }, { header: "2" }, { font: [] }],    
    [{ size: [] }],   
    [{ 'color': [] }, { 'background': [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["code-block"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true
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
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

const Quill = props => (
  <ReactQuill
    modules={modules}
    formats={formats}
    value={props.texteditor}
    onChange={props.onHandleChange}
  />
);

export default Quill;
