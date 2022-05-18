import ActivityBar from "../components/Layout/ActivityBar";
import SideBar from "../components/Layout/SideBar";
import TopBar from "../components/Layout/TopBar";
import Body from "../components/Layout/Body";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CircularProgress } from "@mui/material";

function dashboard() {
	const [component, setComponent] = useState(
		<CircularProgress color="secondary" />
	);

	const router = useRouter();
	const loginInfo = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (!loginInfo._id) router.push("/");
		else {
			timeout = setTimeout(
				() =>
					setComponent(
						<>
							<ActivityBar />
							<SideBar />
							<Body />
							<TopBar />
						</>
					),
				1000
			);
		}

		() => clearTimeout(timeout);
	}, [loginInfo]);

	return (
		<section className="relative flex h-screen w-full items-center justify-center bg-[#5866f2]">
			{component}
		</section>
	);
}

export default dashboard;
