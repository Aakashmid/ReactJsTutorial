import { treeData } from "./data"
import MenuList from "./MenuList"


export default function TreeView() {
  return (
    <div className="bg-blue-500 w-[20rem] p-4 h-screen">
        <MenuList list={treeData} />
    </div>
  )
}