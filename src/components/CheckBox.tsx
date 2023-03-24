import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type CheckProps = {
  name?: string
  className?: string
  forwardRef?: React.RefObject<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  checked?: boolean
}


const SLabel = styled.label` // this styles needs testing
  ${tw`flex border-2 rounded-full justify-center items-center p-1 w-fit`}
`;

const SCheckBox = styled.input`
  ${tw`
    h-3
    w-3
    outline-0
    appearance-none
    border-2
    rounded-full
    border-gray-500
    cursor-pointer
    transition
    duration-500
    ease-in-out
  `}

  &:hover {
    ${tw`bg-gray-300`}
  }

  &:checked {
    ${tw`bg-black border-0`}
    :hover {
      ${tw`bg-gray-900`}
    }
  }
`

function CheckBox({ name, className, forwardRef, onChange, checked }:CheckProps) {
  if (!name) return (
    <SCheckBox
      type='checkbox'
      ref={forwardRef}
      onChange={onChange}
      checked={checked}
      className={className}
    />
  )
  return (
    <SLabel>
      <SCheckBox
        className={className}
        type='checkbox'
        ref={forwardRef}
        onChange={onChange}
        checked={checked}
      />
      {name}
    </SLabel>
  );
}

export default CheckBox;
