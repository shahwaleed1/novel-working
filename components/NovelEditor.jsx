"use client";

import { Editor } from "@patikadev/novel";
import { useState } from "react";

export default function NovelEditor() {
    const [content, setContent] = useState("");

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Novel.sh Editor</h2>

            <Editor
                defaultValue={content}
                onUpdate={(editor) => {
                    setContent(editor.getHTML());
                }}
            />

            <div className="mt-6">
                <h3 className="font-bold">Live HTML Output:</h3>
                <div className="p-4 border rounded bg-gray-50">
                    {content}
                </div>
            </div>
        </div>
    );
}
