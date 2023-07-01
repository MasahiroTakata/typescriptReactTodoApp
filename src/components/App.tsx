import React from 'react';
import styled from "styled-components";
import { useState, ChangeEvent } from 'react';

export const App = () => {
  const [todoValue, setTodo] = useState<string>(''); // テキストボックスのstate関数
  const [memos, setMemos] = useState<string[]>([]);// リストのstate関数
  // ToDoリストのstate関数
  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }
  // リスト追加
  const handleAddTodo = () => {
      const newMemos=[...memos]; // 配列の宣言
      newMemos.push(todoValue);
      setMemos(newMemos);
      setTodo(''); // テキストを空にする
  };
  // リスト削除
  const handleDeleteTodo = (index : number) => {
    const newMemos=[...memos]; // 配列の宣言
    newMemos.splice(index, 1); // 配列の0から数えてindex番目のデータから1つ削除する（つまり、indexのデータのみ削除する）
    setMemos(newMemos);
    setTodo(''); // テキストを空にする
};

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" onChange={handleChangeTodo} value={todoValue}/>
      <SButton onClick={handleAddTodo}>追加</SButton>
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
    </div>
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