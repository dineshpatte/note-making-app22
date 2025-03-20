import React from "react";
import {
  NotebookText,
  House,
  ChevronRight,
  Tag,
  Search,
  Settings,
  Trash,
} from "lucide-react";

const Rightbottom = ({
  handleCreateNote,
  filteredNotes,
  setSelectedNote,
  selectedNote,
  isCreating,
  newNote,
  setNewNote,
  handleSaveNote,
  handleCancel,
  handleDeleteNote,
}) => {
  return (
    <div className="w-full h-[89.5%] flex items-start bottom-0 right-0">
      <div className="w-[25%] h-full flex flex-col items-center py-4 px-4 border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent">
        <button
          className="text-black dark:text-white bg-blue-500 px-8 py-2 font-bold rounded-xl"
          onClick={handleCreateNote}
        >
          + Create New Notes
        </button>

        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className={`p-3 border border-gray-300 dark:border-white/20 rounded-md mb-2 cursor-pointer w-full mt-4 flex flex-col items-start justify-start ${
              selectedNote?.id === note.id ? "bg-gray-100 dark:bg-white/10" : ""
            }`}
            onClick={() => setSelectedNote(note)}
          >
            <p className="text-black dark:text-white font-bold">{note.title}</p>
            <div className="flex gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-blue-600 bg-blue-200 dark:text-blue-400 dark:bg-blue-900 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="text-gray-500 dark:text-white/40 text-xs mt-1">
                {note.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isCreating && (
        <div className="w-[50%] h-full flex flex-col items-center border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent">
          <div className="w-full h-[25%] border border-gray-300 dark:border-white/30 flex flex-col">
            <input
              type="text"
              placeholder="Title"
              value={newNote.title}
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
              className="w-full bg-transparent text-black dark:text-white text-3xl outline-none border-b border-gray-300 dark:border-white/20 p-2 placeholder:text-gray-400 dark:placeholder:text-white/30 h-[50%]"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={newNote.tags}
              onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
              className="w-full bg-transparent border border-gray-300 dark:border-white/30 text-black dark:text-white placeholder-gray-400 dark:placeholder-white/30 px-3 py-2 mt-2 rounded-md h-[50%]"
            />
          </div>
          <div className="w-full h-[65%] border border-gray-300 dark:border-white/30">
            <textarea
              value={newNote.content}
              onChange={(e) =>
                setNewNote({ ...newNote, content: e.target.value })
              }
              placeholder="Type your note here..."
              className="w-full h-full bg-transparent text-black dark:text-white outline-none placeholder:text-gray-400 dark:placeholder:text-white/30 resize-none"
            ></textarea>
          </div>
          <div className="w-full h-[10%] flex item-center px-3 gap-3">
            <button
              className="dark:text-white text-black font-bold bg-blue-500 rounded-xl px-6 h-[50%] mt-4"
              onClick={handleSaveNote}
            >
              Save Note
            </button>
            <button
              className="text-black dark:text-white font-bold bg-transparent border border-gray-300 dark:border-white/30 rounded-xl px-6 h-[50%] mt-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {selectedNote && !isCreating && (
        <div className="w-[50%] h-full flex flex-col items-center border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent">
          <div className="w-full h-[25%] border border-gray-300 dark:border-white/30 flex flex-col">
            <input
              type="text"
              placeholder="Title"
              value={selectedNote.title}
              readOnly
              className="w-full bg-transparent text-black dark:text-white text-3xl outline-none border-b border-gray-300 dark:border-white/20 p-2 placeholder:text-gray-400 dark:placeholder:text-white/30 h-[50%]"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={selectedNote.tags}
              readOnly
              className="w-full bg-transparent border border-gray-300 dark:border-white/30 text-black dark:text-white placeholder-gray-400 dark:placeholder-white/30 px-3 py-2 mt-2 rounded-md h-[50%]"
            />
          </div>
          <div className="w-full h-[65%] border border-gray-300 dark:border-white/30">
            <textarea
              value={selectedNote.content}
              readOnly
              className="w-full h-full bg-transparent text-black dark:text-white outline-none placeholder:text-gray-400 dark:placeholder:text-white/30 resize-none"
            ></textarea>
          </div>
          <div className="w-full h-[10%] flex item-center px-3 gap-3">
            <button className="dark:text-white text-black font-bold bg-blue-500 rounded-xl px-6 h-[50%] mt-4">
              Save Note
            </button>
            <button
              className="text-black dark:text-white font-bold bg-transparent border border-gray-300 dark:border-white/30 rounded-xl px-6 h-[50%] mt-4"
              onClick={() => setSelectedNote(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="w-[25%] h-full flex flex-col items-center">
        <div
          className="flex items-start border border-gray-300 dark:border-white/30 w-[90%] mt-4 px-4 py-2 gap-4 rounded-xl cursor-pointer"
          onClick={handleDeleteNote}
        >
          <Trash className="text-black dark:text-white" />
          <p className="text-black dark:text-white">Delete Notes</p>
        </div>
      </div>
    </div>
  );
};

export default Rightbottom;
