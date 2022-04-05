import gamesReducer from './gamesSlice';

describe('games reducer', () => {
  it('should handle the initial state', () => {
    const nextState = gamesReducer(undefined, {});
    expect(nextState).toEqual({
    });
  });
});
