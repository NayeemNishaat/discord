import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setMembers } from "../../redux/slices/chatSlice";
import { setActiveChat } from "../../redux/slices/chatSlice";
import socket from "../../lib/socketServer";

function GroupItem({ children, id }: { children: string; id: string }) {
	const groups = useSelector((state: RootState) => state.user.groups);
	const dispatch = useDispatch();

	const clickHandler = () => {
		const { members } = groups.filter((group) => group._id === id)[0];
		dispatch(setMembers(members));
		dispatch(setActiveChat({ id, name: children, chatType: "group" }));
		// socket.emit("groupHistory", id);
		// dispatch(
		// 	setActiveChat({
		// 		id,
		// 		name: children,
		// 		chatType: "private"
		// 	})
		// );
	};

	return (
		<Button
			onClick={clickHandler}
			className="flex w-full flex-col items-center !justify-between px-0 py-1.5 capitalize"
		>
			<span
				title={children}
				className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2196f3] !leading-loose text-white"
			>
				{children.slice(0, 2)}
			</span>
		</Button>
	);
}

export default GroupItem;
