const { transformer, removeCapitals } = require('./classwork/transformer');

describe('transformer', () => {
  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then((transTxt) => {
        expect(transTxt).toEqual('i here'),
        expect(transTxt).toEqual('I HERE'),
        expect(transTxt).toEqual('EREH I');
      });
  });
});
