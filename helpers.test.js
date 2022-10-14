describe('helpers test (with setup and tear-down)', function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments on shift summary tip total', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(10);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });
  
    it('should sum total bill amount of all payments on shift summary bill total', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(150);
    });
  
    it('should sum total tip percent on shift summary tip percent avg', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(10);
  
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
  
    it('should sum tip percent of a single tip under tip percent column', function () {
      expect(calculateTipPercent(100, 50)).toEqual(50);
      expect(calculateTipPercent(200, 40)).toEqual(20);
    });
  
    it('should generate new data cell from value and add a row with input value', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });