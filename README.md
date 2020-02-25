## JNU Survey Network Using Hyperledger Fabric

### ��Ʈ��ũ �غ����

Hyperledger Fabric ���� SW�� ��ġ
* node.js 8.9 ~ 9.0  --> 10.*
* NPM 5.6.0 ~ --> 6.*
* golang 1.11 ~
* docker 17.06 CE ~
* docker-compose 1.14 ~

Hyperledger Fabric �̹��� ���� ��ġ
```bash
curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.0
```

### ��Ʈ��ũ ����
```bash
chmod 777 operate.sh
./operate.sh up
```

### ��Ʈ��ũ ����
```bash
./operate.sh down
```

### �鿣�� ���� ����
```bash
cd web-app/server/
npm install
node app.js
```

**fabric-ca-client:1.4.6 �̻���� ���� �߻�**    
**fabric-network ��� �ȿ� �ִ� fabric-ca-client ����� npm���� ���� 1.4.5 �������� ����**
```bash
cd node-modules/fabric-network/
rm -rf node-modules/fabric-ca-client/
cp -r ../fabric-ca-client/ node-modules/
```

### ����Ʈ���� ���� ����
```bash
cd web-app/client/
npm install
npm run serve
```

### ����
* [hyperledger-fabricdocs (release-1.4)](https://hyperledger-fabric.readthedocs.io/en/release-1.4/)
* [Hyperledger Fabric SDK for node.js](https://hyperledger.github.io/fabric-sdk-node/release-1.4/index.html)
* [Hyperledger Fabric contract SDK for node.js](https://hyperledger.github.io/fabric-chaincode-node/release-1.4/api/)
* [hyperledger/fabric-samples/first-network](https://github.com/hyperledger/fabric-samples/tree/release-1.4/first-network)
* [hyperledger/fabric-samples/balance-transfer](https://github.com/hyperledger/fabric-samples/tree/release-1.4/balance-transfer)
* [hyperledger/fabric-samples/commercial-paper](https://github.com/hyperledger/fabric-samples/tree/release-1.4/commercial-paper)
* [IBM/evote](https://github.com/IBM/evote)
* [IBM/auction-events](https://github.com/IBM/auction-events)
* [DappCampus/chaincode-tutorial](https://github.com/DappCampus/chaincode-tutorial)
