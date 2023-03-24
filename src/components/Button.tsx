import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  name: string
  click?: () => void
  type?: 'submit' | 'button'
  className?: string
  disabled?: boolean
}


const SButton = styled.button`
  ${tw`justify-center items-center border-2 rounded-2xl px-2 py-3`}
  transition: 0.3s;

  &:hover {
    ${tw`bg-black text-white`}
  }

  &:disabled {
    ${tw` bg-gray-400`}
  }
`;

function Button({ name, className, type, click, disabled }:Props) {
  return (
    <SButton
      className={className}
      type={type || 'submit'}
      onClick={ click }
      disabled={disabled}
    >
      {name}
    </SButton>
  );
}

export default Button;
