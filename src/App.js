import './App.css';
import * as React from 'react';
import {Sidebar, MenuItem, Menu, SubMenu} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';
import {useState, useEffect, useRef, forwardRef, useCallback, useContext} from "react";

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [notebooks, setNotebooks] = useState(
        [
        { title: "Bloknot 1", info: "Additional information 1" }
    ]);

    const [selectedNotebookIndex,setSelectedNotebookIndex] =  useState(0); // New state to store the index of the selected notebook
    const editor = useRef();

    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

    const handleNotebookClick = useCallback(index => {
        setSelectedNotebookIndex(index);
               console.log("selectedNotebookIndex "+ selectedNotebookIndex);
    },[]);

    const addNotebook = () => {
        const n = { title: `Bloknot ${notebooks.length + 1}`, info: `info ${notebooks.length + 1}` }
        setNotebooks(notebooks=>[...notebooks, n]);

        console.log("created bloknot " +notebooks.length );
        console.log(notebooks);
        handleNotebookClick(notebooks.length);
    };

    const handleNotebookInfoChange = (index, info) => {
        const updatedNotebooks = [...notebooks];
       // updatedNotebooks[index].info = info;
       // setNotebooks(updatedNotebooks);
    };

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        console.log("a "+selectedNotebookIndex)
       // setSelectedNotebookIndex(a)
    })

    useEffect(() => {
         let selectedNotebook  = notebooks.at(selectedNotebookIndex).title  || '';
        console.log(selectedNotebook );
    },[selectedNotebookIndex])



    return (

        <>

            <div style={{
                display: 'flex',
            }}>
                <Sidebar
                    backgroundColor="rgb(130, 130, 130)"
                    style={{
                    height: "100vh",
                }} collapsed={collapsed}>
                    <Menu
                        menuItemStyles={{
                            button: () => {
                                // only apply styles on first level elements of the tree
                                    return {
                                        color: '#000000',
                                        backgroundColor: '#828282',
                                    };
                            },
                        }}
                    >
                        <MenuItem
                            icon={<MenuOutlinedIcon/>}
                            style={{
                                textAlign: "center",
                                color: "#000000",
                                }}
                            onClick={handleToggleSidebar}
                        ></MenuItem>
                        <MenuItem onClick={addNotebook}
                        >Create Notebook</MenuItem>

                        <SubMenu label="Notebooks">
                            {notebooks.map((notebook, index) => (
                                <MenuItem key={index} onClick={() => {
                                    console.log("clicked on " + index);
                                    console.log(notebooks);
                                    handleNotebookClick(index);
                                    }}
                                          // onMouseEnter={() =>setSelected(!selected)}
                                          // onMouseLeave={() =>setSelected(!selected)}
                                          // style={{
                                          //         backgroundColor: !selected ? "rgb(255,255,0)" : "rgb(255,0,0)"
                                          //     }}

                                >{notebook.title}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    </Menu>
                </Sidebar>

                <SunEditor
                    getSunEditorInstance={getSunEditorInstance}
                   // ref={editor}
                    autoFocus={true}
                    setDefaultStyle="font-size:24px;"
                    placeholder="Введите заметку"
                    height="750"
                    setOptions={{
                        buttonList: [
                            ["undo"],
                            ["redo"],
                        ["font"],
                        ["fontSize"],
                        ["formatBlock"],
                        ["paragraphStyle"],
                        ["blockquote"],
                        ["bold"],
                        ["underline"],
                        ["italic"],
                        ["strike"],
                        ["subscript"],
                        ["superscript"],
                        ["fontColor"],
                        ["hiliteColor"],
                        ["textStyle"],
                        ["removeFormat"],
                        ["outdent"],
                        ["indent"],
                        ["align"],
                        ["list"],
                        ["lineHeight"],
                        ["table"],
                        ["link"],
                        ["image"],
                        ["video"],
                        ["audio"],
                        ["fullScreen"],
                        ["showBlocks"],
                        ["codeView"],
                        ["preview"],
                        ["print"],
                        ]

                    }}

                    onChange={(content) => {
                       // handleNotebookClick(0);
                        console.log("sus " + selectedNotebookIndex);
                        if (selectedNotebookIndex !== null) {
                            console.log("onChange1");
                         //   notebooks[selectedNotebookIndex].info=content;
                            handleNotebookInfoChange(selectedNotebookIndex, content);
                        }
                    }}
                    setContents=     {
                       // console.log("setContent!! " + postContent);
                      notebooks[selectedNotebookIndex]?.info || ""

                }
                        />
            </div>
        </>
    );
}

export default App;
