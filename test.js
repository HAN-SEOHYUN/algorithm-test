const solution = require('./solution');

describe('개미 수열 테스트', () => {

  test('n=1일 때, 결과의 중간 2자리는 1이다', () => {
    expect(solution(1, 1)).toBe(1);
  });

  test('n=2일 때, 결과의 중간 2자리는 11이다', () => {
    expect(solution(1, 2)).toBe(11);
  });

  test('n=3일 때, 결과의 중간 2자리는 21이다', () => {
    expect(solution(1, 3)).toBe(21);
  });
  
  test('n=4일 때, 결과의 중간 2자리는 21이다', () => {
    expect(solution(1, 4)).toBe(21);
  });

  test('n=5일 때, 결과의 중간 2자리는 12이다', () => {
    expect(solution(1, 5)).toBe(12);
  });

  test('n=6일 때, 결과의 중간 2자리는 22이다', () => {
    expect(solution(1, 6)).toBe(22);
  });

  test('n=7일 때, 결과의 중간 2자리는 12이다', () => {
    expect(solution(1, 7)).toBe(12);
  });

  test('n=8일 때, 결과의 중간 2자리는 21이다', () => {
    expect(solution(1, 8)).toBe(21);
  });
});