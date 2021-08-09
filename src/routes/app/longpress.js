export function longpress(node, duration) {
	let timer;
  let clicked = false;

	const handleMousedown = () => {
    if (clicked) {
      node.dispatchEvent(
				new CustomEvent('longpress')
			);

      return;
    }

    clicked = true;

    setTimeout(() => {
      clicked = false;
		}, 500);

		timer = setTimeout(() => {
      clicked = false;
			node.dispatchEvent(
				new CustomEvent('longpress')
			);
		}, 500);
	};

	const handleMouseup = () => {
		clearTimeout(timer)
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}
