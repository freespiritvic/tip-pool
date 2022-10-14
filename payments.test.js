describe('payments test (with setup and tear-down)', function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
    });
  
    it('should add a new payment to all payment list', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['pmt1'].billAmt).toEqual('50');
      expect(allPayments['pmt1'].tipAmt).toEqual('10');
      expect(allPayments['pmt1'].tipPercent).toEqual(20);
    });
  
    it('should not add a new payment with an empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).not.toEqual(0);
    });
  
    it('should update payment on payment table', function () {
      let curPayment = createCurPayment();
      allPayments['pmt1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      let updatedPaymentTable = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(updatedPaymentTable.length).toEqual(4);
      expect(updatedPaymentTable[0].innerText).toEqual('$50');
      expect(updatedPaymentTable[1].innerText).toEqual('$10');
      expect(updatedPaymentTable[2].innerText).toEqual('%20');
      expect(updatedPaymentTable[3].innerText).toEqual('X');
    });
  
    it('should create a new payment on payment table', function () {
      let expectedPayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create payment with empty input on the payment table', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });