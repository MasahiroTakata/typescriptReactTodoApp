import {FC} from "react";
import styled from "styled-components";

type Props = {
  memos: string[];
  handleDeleteTodo: (index: number) => void;
};

export const MemoList: FC<Props> = props => {
  const {memos, handleDeleteTodo} = props;
  return (
    <SContainer>
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton onClick={() => handleDeleteTodo(index)}>削除</SButton>
            </SMemoWrapper>
          </li>
        ))}
        <li></li>
      </ul>
    </SContainer>
  );
}

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: paddin: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;