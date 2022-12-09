// tested in browser
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 3,
    rate: 6
  }
  expect(calculateMonthlyPayment(values)).toEqual('28.50')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 30,
    rate: 1.45
  }
  expect(calculateMonthlyPayment(values)).toEqual('121.52')
});


/// etc
