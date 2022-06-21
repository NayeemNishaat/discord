import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chatState {
	activeChat: {
		id: string;
		name: string;
		chatType: "private" | "group" | "";
	};
	messages: {
		_id: string;
		author: { username: string };
		message: string;
		type: string;
		// sameAuthor: boolean;
		// username: string;
		date: string;
		// time: string;
		// sameDay: boolean;
	}[];
	message: {
		_id: string;
		author: { username: string };
		message: string;
		type: string;
		// sameAuthor: boolean;
		// username: string;
		date: string;
		// time: string;
		// sameDay: boolean;
	};
}

const initialState: chatState = {
	activeChat: {
		id: "",
		name: "",
		chatType: ""
	},
	messages: [
		{
			_id: "",
			author: { username: "" },
			message: "",
			type: "",
			// sameAuthor: false,
			// username: "",
			date: new Date().toISOString()
			// time: "",
			// sameDay: false
		}
	],
	message: {
		_id: "",
		author: { username: "" },
		message: "",
		type: "",
		// sameAuthor: false,
		// username: "",
		date: new Date().toISOString()
		// time: "",
		// sameDay: false
	}
};

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setActiveChat: (
			state: chatState,
			action: PayloadAction<chatState["activeChat"]>
		) => {
			state.activeChat.id = action.payload.id;
			state.activeChat.name = action.payload.name;
			state.activeChat.chatType = action.payload.chatType;
		},
		setMessages: (
			state: chatState,
			action: PayloadAction<chatState["messages"]>
		) => {
			state.messages = action.payload;
		},
		pushMessage: (
			state: chatState,
			action: PayloadAction<chatState["message"]>
		) => {
			state.messages.push(action.payload);
		}
	}
});

export const { setActiveChat, setMessages, pushMessage } = chatSlice.actions;
export default chatSlice.reducer;
