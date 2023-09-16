import {Editor} from 'novel';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
const Body=()=>{
const defaultEditorContent = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Introducing Novel" }],
      },],};
      
  return(
    <div>
      <Editor className="border my-3 border-[#2a2a2a] min-h-full bg-white rounded-md"
       defaultValue={defaultEditorContent}
       extensions={[CodeBlockLowlight.configure({
        lowlight
      })]}/>
      
    </div>
  )
}


export default Body;