import { useEffect } from "react";

/*
 *	@desc  listen for keyboard event and execute function when assigned key is pressed
 *   @param key - <char> check if key is pressed
 *   @param action - call back function
 */
export default function useKeypress(key, action) {
	useEffect(() => {
		// check onKeydown event key
		function onKeydown(e) {
			if (e.key.toLowerCase() === key) action();
		}
		// register event listener
		window.addEventListener("keydown", onKeydown);
		// unregister event listener
		return () => window.removeEventListener("keydown", onKeydown);
	});
}
