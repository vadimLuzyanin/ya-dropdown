import type { RenderTriggerProps } from "../Dropdown/Dropdown";
import { FeatherIcon } from "../FeatherIcon";
import * as S from "./styled";

export function DropdownTrigger({ triggerRef, onClick, isOpen }: RenderTriggerProps) {
  return (
    <S.Trigger ref={triggerRef} onClick={onClick} $isOpen={isOpen}>
      <FeatherIcon icon="more-vertical" />
    </S.Trigger>
  );
}
