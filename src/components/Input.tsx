import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type InputProps = {
  type?: 'text' | 'number' | 'email' | 'password'
  name: string
  className?: string
  forwardRef: React.RefObject<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}


const SLabel = styled.label`
  ${tw`flex flex-col border-2 rounded-2xl justify-center items-center p-1`}

  input {
    width: calc(100% - 1rem);
  }
`;

function Input({ name, type, className, forwardRef, onChange }:InputProps) {
  return (
    <SLabel className={className}>
      {name}
      <input
        type={type || 'text'}
        ref={forwardRef}
        onChange={onChange}
      />
    </SLabel>
  );
}

export default Input;
