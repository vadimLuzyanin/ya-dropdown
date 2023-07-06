export type CssOffsets = {
  top?: number | `${number}%`;
  right?: number | `${number}%`;
  bottom?: number | `${number}%`;
  left?: number | `${number}%`;
};

export const calculateMenuOffsets = (triggerRect: DOMRectReadOnly): CssOffsets => {
  const { x: spaceToLeft, y: spaceToTop, width, height } = triggerRect;
  const spaceToRight =
    document.documentElement.clientWidth - (spaceToLeft + width);
  const spaceToBottom =
    document.documentElement.clientHeight - (spaceToTop + height);

  const offsets: CssOffsets = {};

  if (spaceToRight >= spaceToLeft) {
    offsets.left = 0;
  } else {
    offsets.right = 0;
  }

  if (spaceToBottom >= spaceToTop) {
    offsets.top = "100%";
  } else {
    offsets.bottom = "100%";
  }

  return offsets;
};