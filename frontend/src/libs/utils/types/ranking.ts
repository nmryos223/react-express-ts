/**
 * ランキング詳細
 */
export interface Ranking {
  /**
   * ID
   */
  id: number;
  /**
   * 順位
   */
  rank: number;
  /**
   * 質問タイトル
   */
  title: string;
  /**
   * 質問者ユーザーID
   */
  uuid: string;
  /**
   * 回答数
   */
  answerCount: number;
}
