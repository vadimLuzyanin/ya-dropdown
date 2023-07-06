import { RefCallback, useCallback, useState } from "react";
import { useObserver, useOutsideClick } from "../../hooks";
import { CssOffsets, calculateMenuOffsets } from "./utils";
import * as S from "./styled";
import { DropdownMenu } from "../DropdownMenu";
import type { FeatherIconNames } from "feather-icons";

export type RenderTriggerProps = {
  triggerRef: RefCallback<HTMLElement>;
  onClick: () => void;
  isOpen: boolean;
};

export type MenuItemType = {
  onClick: () => void;
  label: string;
  icon: FeatherIconNames;
};

type Props = {
  renderTrigger: (props: RenderTriggerProps) => JSX.Element;
  menuItems: MenuItemType[];
};

export function Dropdown({ renderTrigger, menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [isTriggerInView, setIsTriggerInView] = useState(false);
  const [menuOffsets, setMenuOffsets] = useState<CssOffsets>({});

  const triggerObserverCallback = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      if (entry) {
        const inView = entry.isIntersecting;
        setIsTriggerInView(inView);
        if (inView) {
          setMenuOffsets(calculateMenuOffsets(entry.boundingClientRect));
        }
      }
    },
    []
  );

  const { elementRef: triggerRef, element: triggerElement } = useObserver(
    triggerObserverCallback
  );

  const menuObserverCallback = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      if (entry) {
        const inView = entry.isIntersecting;
        if (inView && triggerElement && entry.intersectionRatio !== 1) {
          setMenuOffsets(
            calculateMenuOffsets(triggerElement.getBoundingClientRect())
          );
        }
      }
    },
    [triggerElement]
  );

  const handleOpen = useCallback(() => {
    if (triggerElement) {
      setMenuOffsets(
        calculateMenuOffsets(triggerElement.getBoundingClientRect())
      );
    }
    setIsOpen(true);
  }, [triggerElement]);

  const handleClose = useCallback(() => {
    setMenuOffsets({});
    setIsOpen(false);
  }, []);

  const { elementRef: menuRef, element: menuElement } =
    useObserver(menuObserverCallback);

  useOutsideClick([triggerElement, menuElement], () => {
    handleClose();
  });

  return (
    <>
      <S.DropdownContainer>
        {renderTrigger({
          triggerRef,
          onClick: isOpen ? handleClose : handleOpen,
          isOpen,
        })}
        {isOpen && isTriggerInView && (
          <S.MenuContainer ref={menuRef} style={{ ...menuOffsets }}>
            <DropdownMenu menuItems={menuItems} handleClose={handleClose} />
          </S.MenuContainer>
        )}
      </S.DropdownContainer>
    </>
  );
}
