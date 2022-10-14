describe('Servers test (with setup and tear-down)', function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with an empty input', function () {
    submitServerInfo();
    serverNameInput.value = '';

    expect(Object.keys(allServers).length).not.toEqual(0);
  });

  it('should create a row with value on server table ', function () {
    submitServerInfo();
    updateServerTable();

    let newServerTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(newServerTable.length).toEqual(2);
    expect(newServerTable[0].innerText).toEqual('Alice');
    expect(newServerTable[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
