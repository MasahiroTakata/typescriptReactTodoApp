import React, { useCallback } from 'react';
import styled from "styled-components";
import { MemoList } from './MemoList';
import { useState, ChangeEvent } from 'react';
import { useMemoList } from '../hooks/useMemoList';

export const App = () => {
  const {memos, addTodo, deleteTodo } = useMemoList(); // カスタムフックを取得し、returnに記載した値を受け取る
  const [todoValue, setTodo] = useState<string>(''); // テキストボックスのstate関数
  // ToDoリストのstate関数
  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }
  // リスト追加
  const handleAddTodo = () => {
    addTodo(todoValue); // カスタムフックのファイルへデータを渡す
    setTodo("");
  };
  // リスト削除
  const handleDeleteTodo = useCallback((index : number) => {
    deleteTodo(index);
  }, [memos]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" onChange={handleChangeTodo} value={todoValue}/>
      <SButton onClick={handleAddTodo}>追加</SButton>
      <MemoList memos={memos} handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}

const SButton = styled.button`
  margin-left: 16px;
`;