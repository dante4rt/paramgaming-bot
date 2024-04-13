const _0x19556b = _0x351a;
(function (_0x306c84, _0x8d0e7a) {
  const _0x384a2d = _0x351a,
    _0x23a82d = _0x306c84();
  while (!![]) {
    try {
      const _0x45baa1 =
        (-parseInt(_0x384a2d(0xa6)) / 0x1) * (parseInt(_0x384a2d(0xa9)) / 0x2) +
        (-parseInt(_0x384a2d(0x97)) / 0x3) * (parseInt(_0x384a2d(0x9e)) / 0x4) +
        (-parseInt(_0x384a2d(0x9f)) / 0x5) * (parseInt(_0x384a2d(0x8e)) / 0x6) +
        (parseInt(_0x384a2d(0x90)) / 0x7) * (-parseInt(_0x384a2d(0x98)) / 0x8) +
        (-parseInt(_0x384a2d(0x91)) / 0x9) *
          (-parseInt(_0x384a2d(0x95)) / 0xa) +
        (parseInt(_0x384a2d(0xa4)) / 0xb) * (parseInt(_0x384a2d(0xa1)) / 0xc) +
        parseInt(_0x384a2d(0x92)) / 0xd;
      if (_0x45baa1 === _0x8d0e7a) break;
      else _0x23a82d['push'](_0x23a82d['shift']());
    } catch (_0x999efa) {
      _0x23a82d['push'](_0x23a82d['shift']());
    }
  }
})(_0x3526, 0x59d4c),
  alert(
    'Param\x20Gaming\x20Auto\x20Claimer\x20–\x20HappyCuanAirdrop\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop'
  );
function _0x3526() {
  const _0x3173b3 = [
    '2785xxjdUv',
    'bang',
    '12VaDMTq',
    'Please\x20enter\x20your\x20authorization\x20token:',
    'log',
    '3623917angEgJ',
    'Error\x20in\x20Fetch\x20Quests:\x20',
    '1vXvWrU',
    'stringify',
    'taskId',
    '629850Kmdwvl',
    'json',
    'application/json',
    '4866dXmkyW',
    'Error\x20in\x20Clear\x20Quest:',
    '14TSlGeX',
    '982539Vqomkm',
    '11603813kBPqBU',
    'https://paramgaming.com/api/v1/user/executeTask',
    'Claim\x20task\x20success\x20for\x20task\x20ID:',
    '20vUetYv',
    'https://paramgaming.com/api/v1/user/claimTaskRewards',
    '91347VSYrjP',
    '735976ZXPPNo',
    'https://paramgaming.com/api/v1/user/getUserTasks',
    'taskCompleted',
    'Error\x20in\x20Claim\x20Quest:\x20',
    'POST',
    'data',
    '16XSKuuv',
  ];
  _0x3526 = function () {
    return _0x3173b3;
  };
  return _0x3526();
}
const accessToken = prompt(_0x19556b(0xa2));
async function fetchQuests() {
  const _0x245e4d = _0x19556b;
  try {
    if (!accessToken) {
      console[_0x245e4d(0xa3)]('Authorization\x20token\x20is\x20required.');
      return;
    }
    const _0x3f6af5 = await fetch(_0x245e4d(0x99), {
        method: _0x245e4d(0x9c),
        headers: {
          Cookie: '',
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
        body: JSON['stringify']({}),
      }),
      _0x27f894 = await _0x3f6af5[_0x245e4d(0xaa)]();
    console[_0x245e4d(0xa3)](_0x27f894, _0x245e4d(0xa0));
    const _0x4a82a1 = _0x27f894[_0x245e4d(0x9d)]['filter'](
      (_0x384033) => !_0x384033[_0x245e4d(0x9a)] && !_0x384033['taskClaimed']
    );
    for (const _0x5c6bdd of _0x4a82a1) {
      await clearQuest(_0x5c6bdd[_0x245e4d(0xa8)]),
        await claimQuest(_0x5c6bdd['taskId']);
    }
    alert('All\x20tasks\x20claimed\x20successfully!');
  } catch (_0x5c3a91) {
    console[_0x245e4d(0xa3)](_0x245e4d(0xa5) + _0x5c3a91);
  }
}
function _0x351a(_0x2e43eb, _0x1b229c) {
  const _0x352684 = _0x3526();
  return (
    (_0x351a = function (_0x351a30, _0x41b370) {
      _0x351a30 = _0x351a30 - 0x8d;
      let _0x1b8be = _0x352684[_0x351a30];
      return _0x1b8be;
    }),
    _0x351a(_0x2e43eb, _0x1b229c)
  );
}
async function clearQuest(_0x4b4bd5) {
  const _0x1e7a41 = _0x19556b;
  try {
    const _0x2acd74 = await fetch(_0x1e7a41(0x93), {
      method: _0x1e7a41(0x9c),
      body: JSON['stringify']({ taskId: _0x4b4bd5 }),
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },
    });
    console['log']('Clear\x20task\x20success\x20for\x20task\x20ID:', _0x4b4bd5);
  } catch (_0x454a5c) {
    console[_0x1e7a41(0xa3)](_0x1e7a41(0x8f), _0x454a5c);
  }
}
async function claimQuest(_0x4cbe6d) {
  const _0xf28003 = _0x19556b;
  try {
    const _0x5b8553 = await fetch(_0xf28003(0x96), {
      method: _0xf28003(0x9c),
      headers: { Authorization: accessToken, 'Content-Type': _0xf28003(0x8d) },
      body: JSON[_0xf28003(0xa7)]({ taskId: _0x4cbe6d }),
    });
    console[_0xf28003(0xa3)](_0xf28003(0x94), _0x4cbe6d);
  } catch (_0x49bf47) {
    console[_0xf28003(0xa3)](_0xf28003(0x9b), _0x49bf47);
  }
}
fetchQuests();
