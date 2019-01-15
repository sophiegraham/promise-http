describe('copy', () => {
  it('copies a file', () => {
    return copy('./http.md', {encoding: 'utf8'})
      .then(() => {
        console.log();
        console.error(err);
      });
  });
});
