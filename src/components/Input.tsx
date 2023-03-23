import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type InputProps<T> = {
  change: [T, Dispatch<SetStateAction<T>>]
  type?: 'text' | 'number' | 'email' | 'password'
  name: string
  className?: string
}


const SLabel = styled.label`
  ${tw`flex flex-col border-2 rounded-2xl justify-center items-center p-1`}

  input {
    width: calc(100% - 1rem);
  }
`;

function Input<T>({ name, type, change, className }:InputProps<T>) {
  return (
    <SLabel className={className}>
      {name}
      <input
        type={type || 'text'}
        onChange={({ target }) => {
          change[1](target.value as T)
        }}
        value={change[0] as string}
        
      />
    </SLabel>
  );
}

export default Input;
