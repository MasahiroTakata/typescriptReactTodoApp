import { useCallback,useState } from "react";
export const useMemoList = () => {
  // メモ一覧のstate
  const [memos, setMemos] = useState<string[]>([]);
  // メモ追加
  const addTodo = useCallback((text: string) => {
    const newMemos=[...memos]; // 配列の宣言
    newMemos.push(text);
    setMemos(newMemos);
  }, [memos]);
  // メモ削除
  const deleteTodo = useCallback((index: number) => {
    const newMemos=[...memos]; // 配列の宣言
    newMemos.splice(index, 1); // 配列の0から数えてindex番目のデータから1つ削除する（つまり、indexのデータのみ削除する）
    setMemos(newMemos);
  }, [memos]);
  return {memos, addTodo, deleteTodo};
};