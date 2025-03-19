# .env 설정하기
```bash
XRPL_RPC_URL=wss://s.altnet.rippletest.net:51233/
XRPL_EVM_RPC_URL=https://rpc.testnet.xrplevm.org
XRPL_PK={XRPL Testnet 지갑 개인키}
EVM_PK={EVM 기반 지갑 개인키}
```

## XRPL_PK 얻는 방법
[Faucet 링크](https://xrpl.org/resources/dev-tools/xrp-faucets)
위 링크에서 테스트용 XRPL이 있는 지갑을 생성해서 개인키를 얻을 수 있다.


# 작동
```bash
// 종속 패키지 설치
yarn install

// Testnet 에서 EVM Testnet으로 XRPL 전송하기
yarn xrpl

// 토큰 컨트랙트 배포하기
yarn deploy
```